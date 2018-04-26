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