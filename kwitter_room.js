const firebaseConfig = {
    apiKey: "AIzaSyA-FIY8el2f8Y45ghV2gfaHTgbP15ckzmw",
    authDomain: "letschatwebapp-1-4.firebaseapp.com",
    databaseURL: "https://letschatwebapp-1-4-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-1-4",
    storageBucket: "letschatwebapp-1-4.appspot.com",
    messagingSenderId: "777835755205",
    appId: "1:777835755205:web:1fb4e9917e2af87f0222ac"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey;
   message_data = childData;
//Start code

//End code
} });  }); }
getData();

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.daatabase().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
