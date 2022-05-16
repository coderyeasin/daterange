import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const dateInitialization = () => {
initializeApp(firebaseConfig);
}
export default dateInitialization;