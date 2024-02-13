let ticketArray = [];

/*function pickMovie() {
    if ("movieSelector".value === "") {
        alert("Please choose a movie");
        "movieSelector".focus();
        return false;
    }
    return true;
}

function pickAmount() {
    alert("Please choose ticket amount")
}*/

function saveTicket() {

    let inputMovie = document.getElementById("movieSelector").value;
    let inputAmount = document.getElementById("amount").value;
    let inputFirstName = document.getElementById("firstName").value;
    let inputLastName = document.getElementById("lastName").value;
    let inputPhoneNr = document.getElementById("phoneNr").value;
    let inputEmail = document.getElementById("email").value;
    //Validating the 'Choose movie' input
/*    if (inputMovie === 'Click to see movie options') {
        "movieSelector".focus();
        alert("hhhhh");
            //Validating the 'Ticket amount' input
        } else if (inputAmount === '') {
            alert('Pick an amount');
            "amount".focus();
            return false;
        }
        return true;
    }*/


    let inputResults = {
        //Use : instead of = to make code more compact and easy to read.
        "movieSelector": inputMovie,
        "amount": inputAmount,
        "firstName": inputFirstName,
        "lastName": inputLastName,
        "phoneNr": inputPhoneNr,
        "email": inputEmail

    };
    //The input data is collectively pushed to the array and "printed"
    ticketArray.push(inputResults);
    console.log(inputResults)
    //This resets all the input fields
    document.getElementById("movieSelector").value = 'Click to see movie options';
    document.getElementById("amount").value = '';
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("phoneNr").value = '';
    document.getElementById("email").value = '';
    printTickets(inputResults);
}

function printTickets() {
    let out = "<table cellspacing='8' <tr> <th>Movie</th> <th>Amount</th> <th>First name</th>" +
        "<th>Last name</th> <th>Phone Number</th> <th>Email</th> </tr>";

    for (let i = 0; i < ticketArray.length; i++) {
        out += "</tr><tr><td rowspan='2' align='center'>" + ticketArray[i].movieSelector + "</td><td rowspan='2' align='center'>" + ticketArray[i].amount +
            "</td><td rowspan='2' align='center'>" + ticketArray[i].firstName + "</td><td rowspan='2' align='center'>" + ticketArray[i].lastName +
            "</td><td rowspan='2' align='center'>" + ticketArray[i].phoneNr + "</td><td rowspan='2' align='center'>" + ticketArray[i].email + "</td></tr><tr>";

        out += "<tr></tr>";
    }
    document.getElementById("inputResult").innerHTML = out;
}

function deleteTickets() {
    ticketArray = [];
    printTickets();
}

/*
const email = document.getElementById("email");
email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid email"); }
    else {
        email.setCustomValidity("");
    }
})

function validate() {
    if (document.ticketForm.fName.value == "") {
        text("Please enter your first name");
        document.ticketForm.fName.focus();
        return false;
    }
    if (document.ticketForm.lName.value == "") {
        text("Please enter your last name");
        document.ticketForm.lName.focus();
        return false;
    }
    if (document.ticketForm.phoneNr.value == "") {
        text("Please enter a valid phone number");
        document.ticketForm.phoneNr.focus();
        return false;
    }
    if (document.ticketForm.email.value == "") {
        text("Må skrive noe inn i epost");
        document.ticketForm.email.focus();
        return false;
    }
    return(true);
}

*/

/*
    out = out + "<tr></tr>" + saveTicket[i].firstName + "</td></tr>" + saveTicket[b].lastName + "</td></tr>" +
        saveTicket[c].phoneNr + "</td></tr>" + saveTicket[d].phoneNr + "</td></tr>" + saveTicket[e].email + "</td></tr>"
    console.log(out);
    document.write(out);*/

/*

for (let i = 0; i < saveTicket.length; i++) {
    if (saveTicket[i].id == out)
    out = out + "<tr><td>" + saveTicket[a].firstName + "</td></tr>" + saveTicket[b].lastName + "</td></tr>" +
        saveTicket[c].phoneNr + "</td></tr>" + saveTicket[d].phoneNr + "</td></tr>" + saveTicket[e].email + "</td></tr>"
    /!*console.log(out);*!/
    document.write(out);
}*/
