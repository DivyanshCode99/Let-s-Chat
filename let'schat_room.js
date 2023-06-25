
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

 function getName(){
      heading=localStorage.getItem("user_name");
      document.getElementById("update").innerHTML="<h1>Hi  " + heading +" !!</h1>";
  }

  user_name=localStorage.getItem("user_name");

 
  function addRoom(){
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({purpose : "adding room Name"});
      localStorage.setItem("room_name",room_name);
      window.location="Let'sChat_page.html";
  }
 
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
 
       console.log("Room_name"+Room_names);
       row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML +=row;
       });});}
 
 
 getData();
 
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="Let'sChat_page.html";
 }
 