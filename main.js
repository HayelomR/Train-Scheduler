
// ======= Initalize Firebase First =========
  var config = {
    apiKey: "AIzaSyD5Nfg6jDDTLmJbOWK7N_ZL_ui6OhVWoqk",
    authDomain: "train-schedule-37309.firebaseapp.com",
    databaseURL: "https://train-schedule-37309.firebaseio.com",
    projectId: "train-schedule-37309",
    storageBucket: "",
    messagingSenderId: "659163119567"
  };
  firebase.initializeApp(config);
  //get data from a database
  var database = firebase.database();
  //Declare a variable 
  var train_name = "";
  var destination = "";
  var time = 0;
  var frequency = 0;

// using click to find the next train 
  $("#train-button").on("click",function(event){
  	event.preventDefault();
    // get the user input
  train_name = $("#train-name").val();
  destination = $("#train-destination").val();
  time = moment($("#train-time").val()."DD/MM/YY").format("X");
  frequency = $("#train-frequency").val();

  // objects for holding the data 
  var train = {
    train_name:train-name,
    destination:destination,
    time:time,
    frequency:frequency
  };
  // send this information to firebase
database.ref().push(train);
// console.log("train.train_name");
$("#train_name").val("");
$("#train-destination").val("");
$("#train-time").val("");
$("#train-frequency").val("");

});








































































































































































  