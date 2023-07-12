function Under(){
    document.getElementById("tc").style.color = "white";
    document.getElementById("tc").style.textDecoration = "underline";
}
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
function Leave(){
    document.getElementById("tc").style.color = "grey";
    document.getElementById("tc").style.textDecoration = "none";
}