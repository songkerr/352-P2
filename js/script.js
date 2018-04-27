var rootRef = firebase.database().ref();
var tracksRef = rootRef.child('Tracks');

tracksRef.orderByChild("Size").equalTo("Large").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    console.log(newTrack.Size);
//    console.log(newTrack.Track);
    document.getElementById("track").innerHTML = "" + newTrack.Track + "";
//    "<br> Recommended dog size: " + newTrack.Size;
});

tracksRef.orderByChild("Size").equalTo("Medium").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    console.log(newTrack.Size);
    $("#medResults").append("<ul><li>" + newTrack.Track + "</li></ul>");
});

tracksRef.orderByChild("Size").equalTo("Small").on("child_added", function (snapshot) {
    var newTrack = snapshot.val();
    console.log(newTrack.Size);
    $("#smlResults").append("<ul><li>" + newTrack.Track + "</li></ul>");
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