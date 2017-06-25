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
  var destination = "";
  var nextArrival = 0;
  var frequency = 0;
  var train1time = 0;

// using click to collect data and send the information to firebase
$("#train-button").on("click",function(){
  //prevent from submitting
  event.preventDefault();
    // get the user input
    trainName = $("#train-name").val().trim();
    destination = $("#train-destination").val().trim();
    train1time = moment($("#train1-time").val().trim(),"mm").format('X');
    frequency = $("#train-frequency").val().trim();
  // send this information to firebase
  database.ref().push({
    trainName:trainName,
    destination:destination,
    train1time:train1time,
    frequency:frequency
  })
  // lets retrive the data
  $("#train-frequency").val("");
  database.ref().on("child_added",function(snapshot){
    trainName = snapshot.val().trainName;
    destination = snapshot.val().destination;
    frequency = snapshot.val().frequency;
  });

// First Time (pushed back 1 year to make sure it comes before current time)
var train1timeConverted = moment(train1timeConverted, 'hh:mm').subtract(1, 'years');
//Determine what time is now
var currentTime = moment().format("hh:mm");
console.log(currentTime);
console.log(train1timeConverted);
//differences between times
var diffTime = moment().diff(moment.unix(train1time),"minutes");

console.log("DIFFENCE IN TIME: " + diffTime);

//time apart (remainder)
var timeRemainder = diffTime % frequency;
console.log(timeRemainder);

//minute until train
minutesAway = frequency - timeRemainder;
console.log("Minutes Until Train: " + minutesAway);

//calculate what time Next train
nextArrival = moment().add(minutesAway, "minutes");
console.log("ARRIVAL TIME: " + moment(nextArrival).format("hh:mm"));
//clear the input when the user is hits the submit button
$("#train-name").val("");
$("#train-destination").val("");
$("#train-frequency").val("");
$("#train1-time").val("");

 //Lets append this to our table
 $("#train-table").append("<tr>" +
  "<td>" + trainName + "</td>" +
  "<td>" + destination + "</td>" +
  "<td>" + frequency + "</td>" +
  "<td>" + moment(nextArrival).format("hh:mm") + "</td>" +
  "<td>" + minutesAway + "</td>" +
  "</tr>");

});

