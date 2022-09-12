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
  document.getElementById("user_name").innerHTML = user_name + "welcome";

function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        })
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  console.log("Room_name - " + Room_names);
  row = "<div class='room name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
  getData();

  function redirectToRoomName(name)
   {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
   }

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}