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
  var minutesAway = 0;
  var firstTrainTime = "";
  var destination = "";
  var nextArrival = 0;
  var frequency = 0;
  var train1time = 0;
// up load our variables to the html
  database.ref().on("child_added",function(snapshot){
    trainName = snapshot.val().trainName;
    destination = snapshot.val().destination;
    frequency = snapshot.val().frequency;

    // console.log(snapshot.val());
    $("#train-table").append("<tr>" +
    "<td>" + trainName + "</td>" +
    "<td>" + destination + "</td>" +
    "<td>" + frequency + "</td>" +
    "<td>" + moment(nextArrival).format("HH:MM") + "</td>" +
    "<td>" + minutesAway + "</td>" +
    "</tr>");
  });

// using click to collect data and send the information to firebase
$("#train-button").on("click",function(){
  //prevent from submitting
 event.preventDefault();
    // get the user input
    trainName = $("#train-name").val().trim();
    destination = $("#train-destination").val().trim();
    time = $("#train1-time").val().trim();
    frequency = $("#train-frequency").val().trim();

  // send this information to firebase
  database.ref().push({
    trainName:trainName,
    destination:destination,
    time:time,
    frequency:frequency
  })
  // lets clear the table so that you can write on it
  $("#train-name").val("");
  $("#train-destination").val("");
  $("#train1-time").val("");
  $("#train-frequency").val("");
// First Time (pushed back 1 year to make sure it comes before current time)
var train1timeConverted = moment(train1timeConverted, 'hh:mm').subtract(1, 'years');
//Determine what time is now
var currentTime = moment().format("hh:mm");
console.log(currentTime);
console.log(train1timeConverted);
//differences between times
var diffTime = moment().diff(moment(train1time));
console.log('DIFFENCE IN TIME: ' + diffTime);

//time apart (remainder)
var timeRemainder = diffTime % frequency;
 console.log(timeRemainder);

//minute until train
minutesAway = frequency - timeRemainder;
console.log('Minutes Until Train: ' + minutesAway);

//Next train
nextArrival = moment().add(minutesAway, "minutes");

//minutes away
minutesAway = nextArrival - currentTime

console.log("ARRIVAL TIME: " + moment(nextArrival).format("hh:mm"));

});
