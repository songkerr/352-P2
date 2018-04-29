var rootRef = firebase.database().ref();
var tracksRef = rootRef.child('Tracks');

tracksRef.orderByChild("Size").equalTo("large").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    console.log(newTrack.Track);
    console.log(newTrack.Distance);
    console.log(newTrack.Time);
    console.log(newTrack.Size);
    console.log(newTrack.Fitness);
    $("#lrgResults").append("<div>" + newTrack.Track + "<br><br> Distance: " + newTrack.Distance + "<br> Time: Approximately " + newTrack.Time + "<br> Suitable for " + newTrack.Size + " dogs of " + newTrack.Fitness + " fitness </div>");
});

tracksRef.orderByChild("Size").equalTo("medium").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    console.log(newTrack.Track);
    console.log(newTrack.Distance);
    console.log(newTrack.Time);
    $("#medResults").append("<div>" + newTrack.Track + "<br><br> Distance: " + newTrack.Distance + "<br> Time: Approximately " + newTrack.Time + "<br> Suitable for " + newTrack.Size + " dogs of " + newTrack.Fitness + " fitness </div>");
});

tracksRef.orderByChild("Size").equalTo("small").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    console.log(newTrack.Track);
    console.log(newTrack.Distance);
    console.log(newTrack.Time);
    $("#smlResults").append("<div>" + newTrack.Track + "<br><br> Distance: " + newTrack.Distance + "<br> Time: Approximately " + newTrack.Time + "<br> Suitable for " + newTrack.Size + " dogs of " + newTrack.Fitness + " fitness </div>");
});

function showPage() {
    var sel = document.getElementById('size');
    var option = sel.options[sel.selectedIndex].value;
    window.location.replace(option + ".html");
}

//var size = {
//    Large: {
//        conferencePA: "5=Conference=Eastern",
//    }       
//    // more teams go here
//}
//
//function chooseSize() {
//    var ss = $('sizeSelect');
//    var val = ss[ss.selectedIndex].value;
//    console.log( sizes[val].conferencePA );
//}
//    
//$('sizeSelect').addEvent( 'change', chooseSize );


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