var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var breed = document.getElementById("breed");

var breedRef = firebase.database().ref().child("Breed");

breedRef.on('value', function(snapshot){
    breed.innerText = snapshot.val();
});

function submitClick() {
    var firebaseRef = firebase.database().ref();
    
    var messageText = mainText.value;
    
    firebaseRef.push().set(messageText);
}

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