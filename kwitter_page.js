// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAwZ3OepOHvFijoJpfjQBO7uNa0nhFI34",
    authDomain: "kwitter-2-e352e.firebaseapp.com",
    projectId: "kwitter-2-e352e",
    storageBucket: "kwitter-2-e352e.appspot.com",
    messagingSenderId: "240203171523",
    appId: "1:240203171523:web:dec305939d6dba3fb1c476",
    measurementId: "G-XKM9ZJMFVZ"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}