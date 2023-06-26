var firebaseConfig = {
      apiKey: "AIzaSyAmA5FFbuXtVz3Lwv4w_4mEoMivx5NOVqY",
      authDomain: "let-s-chat-81f2d.firebaseapp.com",
      databaseURL: "https://let-s-chat-81f2d-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-81f2d",
      storageBucket: "let-s-chat-81f2d.appspot.com",
      messagingSenderId: "262535368727",
      appId: "1:262535368727:web:15eff4623395ac197d4c52",
      measurementId: "G-GYM75TFDQ3"
    };
 firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){ 
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name:user_name,message:msg,like:0});
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

