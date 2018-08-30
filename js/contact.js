// Initialize Firebase
var config = {
    apiKey: "AIzaSyB6jU19gZD8jTOSPfATmkpw7YPbJAFyyGM",
    authDomain: "mywebsite-47249.firebaseapp.com",
    databaseURL: "https://mywebsite-47249.firebaseio.com",
    projectId: "mywebsite-47249",
    storageBucket: "",
    messagingSenderId: "756088636112"
};

firebase.initializeApp(config);

var database = firebase.database(); 


$("#submit").on("click", function (event) {

    event.preventDefault();
    var contactName = $("#name").val().trim();
    var contactEmail = $("#exampleInputEmail").val().trim();
    var contactPhone = $("#telephone").val().trim();
    var contactMessage = $("#description").val().trim();


    swal("Thank you!", "I'll get back with you shortly!", "success");


    var newContact = {
        name: contactName,
        email: contactEmail,
        telephone: contactPhone,
        message: contactMessage
    };

    database.ref().push(newContact);
    $("#name").val("");
    $("#exampleInputEmail").val("");
    $("#telephone").val("");
    $("#description").val("");

});

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Samuil Ilkov.", "Jr Web Developer.", "Marketer.", "Creator."],
      typeSpeed: 200,
      loop: true,
    });
  });

  




