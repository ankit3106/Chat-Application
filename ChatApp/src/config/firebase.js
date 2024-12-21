// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0XVzJJkK6mRaSHWLY_RK-14Lu6W0S1ZE",
    authDomain: "chattly-13838.firebaseapp.com",
    projectId: "chattly-13838",
    storageBucket: "chattly-13838.firebasestorage.app",
    messagingSenderId: "78280183871",
    appId: "1:78280183871:web:04ba601daa4d3ad1ea688a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// create sign up function for user
const signup = async (username, email, password) => { // create signup function
    // create user with email and password using try catch block
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user; // get user from response

        // store date in firestore
        // doc to provide reference of the database
        await setDoc(doc(db, "users", user.uid), { // setDoc to store data in firestore
            id: user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, I am using Chatly",
            lastSeen:Date.now()
        })

        // store the chat data in firestore
        await setDoc(doc(db, "chats", user.uid), {
            chatData:[]
        })

    } catch (error) {  // If error occurs, catch the error
        console.error(error); 
        toast.error(error.code.split('/')[1].split('-').join(' ')); // Display error message using toast
    }   
}
const login = async (email, password) => { // create login function
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}
const logout = async () => { // create logout function
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

export {signup , login, logout, auth, db}; // export the signup function

