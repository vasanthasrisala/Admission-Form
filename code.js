const form = document.getElementById("myyform");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const Gender = document.getElementById("genderoption").value;
    const Age = parseInt(document.getElementById("age").value);
    const Seattype = document.getElementById("seattype").value;

    if (isNaN(Age) || Age < 18) {
        alert("You are not eligible for admission because age is less than 18");
        return;
    }

    else if (Seattype == "reservation" && Gender != "female") {
        alert("You are not eligible for admission because you are not female");
        return;
    }

    else if (Seattype != "reservation" && Gender == "female") {
        alert("You are not eligible for admission because your seat type is not reservation");
        return;
    }

    else {
        alert("You are eligible for admission!");
    }

});