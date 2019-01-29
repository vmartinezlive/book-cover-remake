$(document).ready(function() {
  $("#reservations").submit(function () {
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var typeEvent = $("input.form-check-input").val();
    var date = $("input#date").val();
    var time = $("input#time").val();
    var guestCount = $("input#guestCount").val();

    // var blanks =["firstName", "lastName", "date", "time", "form-check-input", "guestCount"];

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".date").text(date);
    $(".time").text(time);
    $(".form-check-input").text(typeEvent);
    $(".guestCount").text(guestCount);

    $("#confirmation").show();
    event.preventDefault();

    });
  });
