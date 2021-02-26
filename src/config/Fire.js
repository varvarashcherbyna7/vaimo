import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBVMVR1xE0LG6hC2rlM5Pu3I_VYAuFL4YE",
    authDomain: "vaimo-f133e.firebaseapp.com",
    databaseURL: "https://vaimo-f133e.firebaseio.com",
    projectId: "vaimo-f133e",
    storageBucket: "vaimo-f133e.appspot.com",
    messagingSenderId: "93267068249",
    appId: "1:93267068249:web:b722207ede1c6fa0ac7848",
    measurementId: "G-8JGLK5WBVM"
};


const fire = firebase.initializeApp(config);

export default fire;
