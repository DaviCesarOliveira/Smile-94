var firebaseConfig = {
    apiKey: "AIzaSyBKyUehTv252VzUzBmOLZu79ARKMKZ_r_o",
    authDomain: "aula94-565b0.firebaseapp.com",
    databaseURL: "https://aula94-565b0-default-rtdb.firebaseio.com",
    projectId: "aula94-565b0",
    storageBucket: "aula94-565b0.appspot.com",
    messagingSenderId: "254741702272",
    appId: "1:254741702272:web:354e2ff0c91429accc2865",
    measurementId: "G-NEETVPYS85"
  };


firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send()
{
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}