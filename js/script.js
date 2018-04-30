// Initialize Firebase
var config = {
    apiKey: "AIzaSyAnxmmpmh0GLSR8TGbuY4ztaO3zkAFrnA8",
    authDomain: "app-fd40f.firebaseapp.com",
    databaseURL: "https://app-fd40f.firebaseio.com",
    projectId: "app-fd40f",
    storageBucket: "app-fd40f.appspot.com",
    messagingSenderId: "870490121451"
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref();
var tracksRef = rootRef.child('Tracks');

tracksRef.orderByChild("Size").equalTo("large").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    $("#lrgResults").append("<div>" + newTrack.Track + "<br><br> Distance: " + newTrack.Distance + "<br> Time: Approximately " + newTrack.Time + "<br> Suitable for " + newTrack.Size + " dogs of " + newTrack.Fitness + " fitness </div>");
});

tracksRef.orderByChild("Size").equalTo("medium").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    
    $("#medResults").append("<div>" + newTrack.Track + "<br><br> Distance: " + newTrack.Distance + "<br> Time: Approximately " + newTrack.Time + "<br> Suitable for " + newTrack.Size + " dogs of " + newTrack.Fitness + " fitness </div>");
});

tracksRef.orderByChild("Size").equalTo("small").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    $("#smlResults").append("<div>" + newTrack.Track + "<br><br> Distance: " + newTrack.Distance + "<br> Time: Approximately " + newTrack.Time + "<br> Suitable for " + newTrack.Size + " dogs of " + newTrack.Fitness + " fitness </div>");
});

function showPage() {
    var sel = document.getElementById('size');
    var option = sel.options[sel.selectedIndex].value;
    window.location.replace(option + ".html");
}

//var dogName = $("#dogName").val();
//$("#submitBtn").click(function() {
//    $("#yourName").append("<h1> Top Picks for " + dogName + " </h1>");
//});

//$(document).ready(function () {
//    
//    var rootRef = firebase.database().ref().child("Tracks");
//    
//    rootRef.on("child_added", snap => {
//        
//        var size = snap.child("Size").val();
//        
//        $("#sizeValue").append("<input list><datalist><option value=" + size + "></option></datalist></input>");
//        
//    });
//    
//});
//"<div>" + size + "</div>"


//var mainText = document.getElementById("mainText");
//var submitBtn = document.getElementById("submitBtn");
//var size = document.getElementById("size");
//
//var breedRef = firebase.database().ref().child("Large");
//
//breedRef.on('value', function(snapshot){
//    breed.innerText = snapshot.val();
//});
//
//function submitClick() {
//    var firebaseRef = firebase.database().ref();
//    
//    var messageText = mainText.value;
//    
//    firebaseRef.push().set(messageText);
//}
//
//  $(function() {
//    var availableTags = [
//      "Husky",
//      "Labrador",
//      "Chihuahua"
//    ];
//    $( "#breeds" ).autocomplete({
//      source: availableTags
//    });
//  } );