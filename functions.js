import {
  push,
  userHobbies,
  onValue,
  remove,
  reference as ref,
  db,
} from "./firebase.js";

const addButtonEl = document.getElementById("add-button");
const inputFieldEl = document.getElementById("input-field");
const hobbiesListEl = document.querySelector(".hobbies_list");

function clearHobbiesList() {
  hobbiesListEl.innerHTML = "";
}

const displayHobbies = () => {
  onValue(userHobbies, function (snapshot) {
    let hobbies_data = [];
    if (snapshot.exists()) {
     hobbies_data = Object.entries(snapshot.val());
     clearHobbiesList();
     for (let i = 0; i < hobbies_data.length; i++) {
       let hobbie_obj = hobbies_data[i];
       let newEl = document.createElement("li");
       newEl.textContent = hobbie_obj[1];
       hobbiesListEl.append(newEl);
       newEl.addEventListener("click", function () {
         console.log(userHobbies);
         const getObject = ref(db, `hobbies/${hobbie_obj[0]}`);
         remove(getObject);
       });
     }
    }else{
        hobbiesListEl.innerHTML = "nothing yet here Dont you have hobbies?"
    }
    
    
  });
};

export function addToList() {
  let inputValue = inputFieldEl.value;
  push(userHobbies, inputValue);
  inputFieldEl.value = "";
}

addButtonEl.addEventListener("click", addToList);

displayHobbies();
