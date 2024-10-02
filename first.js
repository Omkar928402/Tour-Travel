let username;
let no;
let Destination;
let menbers;
let vehicle;
let date;

document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();
};
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myName").value;
  no = document.getElementById("myNo").value;
  Destination = document.getElementById("myplace").value;
  menbers = document.getElementById("myNomemb").value;
  date = document.getElementById("mydate").value;
  vehicle = document.getElementById("myvehicle").value;
  console.log("Traveler name-" + username);
  console.log("Phone number-" + no);
  console.log("Destination-" + Destination);
  console.log("NO of members-" + menbers);
  console.log("Date-" + date);
  console.log("vehicle-" + vehicle);
};
