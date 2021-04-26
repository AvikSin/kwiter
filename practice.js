// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDLBWGFaqg7Pep0ziHEVLOg0dBceLQ_vAQ",
    authDomain: "kwitterapp-2871f.firebaseapp.com",
    databaseURL: "https://kwitterapp-2871f-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-2871f",
    storageBucket: "kwitterapp-2871f.appspot.com",
    messagingSenderId: "266046184116",
    appId: "1:266046184116:web:591b64f8f271a33ea115e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS
function addUser()
{
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});

}