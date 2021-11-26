import { initializeApp } from "firebase/app";
import firebaseConfig from "./fairbase.config";


const initFairBase = ()=>{
    initializeApp(firebaseConfig);
}

export default initFairBase;