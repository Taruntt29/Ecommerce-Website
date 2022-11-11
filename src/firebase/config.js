
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBz6JqIjJGEQqp0WMZSfL5ZWMs9mfN-FFI",
    authDomain: "ecommerce-70037.firebaseapp.com",
    databaseURL: "https://ecommerce-70037-default-rtdb.firebaseio.com",
    projectId: "ecommerce-70037",
    storageBucket: "ecommerce-70037.appspot.com",
    messagingSenderId: "77190432180",
    appId: "1:77190432180:web:5c27a2596471214b91dee1"
  };
const app = initializeApp(firebaseConfig);

export const  auth = getAuth(app)

export default app;