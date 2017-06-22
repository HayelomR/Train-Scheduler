
// ======= Initalize Firebase First =========
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD5Nfg6jDDTLmJbOWK7N_ZL_ui6OhVWoqk",
  authDomain: "train-schedule-37309.firebaseapp.com",
  databaseURL: "https://train-schedule-37309.firebaseio.com",
  projectId: "train-schedule-37309",
  storageBucket: "train-schedule-37309.appspot.com",
  messagingSenderId: "659163119567"
};
firebase.initializeApp(config);
//define database
var database = firebase.database();
  //Declare a variable 
  var trainName = "";
  var destination = "";
  var time = 0;
  //var initalTime = 03:00;
  var frequency = 4;
// using click to collect data and send the information jto firebase
$("#train-button").on("click",function(){
  //pre
 event.preventDefault();
    // get the user input
    trainName = $("#train-name").val().trim();
    destination = $("#train-destination").val().trim();
    time = $("#train-time").val().trim();
    frequency = $("#train-frequency").val().trim();
  // send this information to firebase
  database.ref().set({
    trainName:trainName,
    destination:destination,
    time:time,
    frequency:frequency
  })
  //Determine what time is now
var currentTime = moment(currentTime).format("hh:mm");
console.log(currentTime );

currentTime = 
  // lets clear the table so that you can write on it
  $("#train-name").val("");
  $("#train-destination").val("");
  $("#train-time").val("");
  $("#train-frequency").val("");
  // data used to added to the main table
  database.ref().on("child_added",function(snapshot){
    trainName = snapshot.val().trim();
    destianation = snapshot.val().trim();
    time = snapshot.val().trim();
    frequency = snapshot.val().trim();
  });
  // lets calculate frequency

  $("#train-table").append("<tr>" +
    "<td>" + trainName + "</td>" +
    "<td>" + destination + "</td>" +
    "<td>" + time+ "</td>" +
    "<td>" + frequency + "</td>" +

    "</tr>");
});
// console.log("train.train_name");
// $("#train_name").val("");
// $("#train-destination").val("");
// $("#train-time").val("");
// $("#train-frequency").val("");

