import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref , push as firebasePush, onValue as dbData, remove as item_del} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSetting = {
    databaseURL : "https://playground-95b55-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSetting)
const database =  getDatabase(app)

export const userHobbies = ref(database, 'hobbies')
export const push = firebasePush;

export const onValue = dbData;
export const remove = item_del;
export const  reference = ref;
export const db = database;
