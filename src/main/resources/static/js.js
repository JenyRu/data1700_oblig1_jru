let ticketArray = [];

function saveTicket() {
    let inputMovie = document.getElementById("movieSelector").value;
    let inputAmount = document.getElementById("amount").value;
    let inputFirstName = document.getElementById("firstName").value;
    let inputLastName = document.getElementById("lastName").value;
    let inputPhoneNr = document.getElementById("phoneNr").value;
    let inputEmail = document.getElementById("email").value;
    //Validating the movieSelector input
       if (inputMovie === "") {

            return;
        }
    //Collecting all the inputs
    let inputResults = {

        //Use : instead of = to make code more compact and easy to read.

        "movieSelector": inputMovie,
        "amount": inputAmount,
        "firstName": inputFirstName,
        "lastName": inputLastName,
        "phoneNr": inputPhoneNr,
        "email": inputEmail
    }
    //The input data is collectively pushed to the array and "printed"
    ticketArray.push(inputResults);
    console.log(inputResults)
    printTickets(inputResults);
    //This resets all the input fields
    document.getElementById("movieSelector").value = 'Click to see movie options';
    document.getElementById("amount").value = '';
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("phoneNr").value = '';
    document.getElementById("email").value = '';
}
function printTickets() {
    let out = "<table cellspacing='8' <tr> <th>Movie</th> <th>Amount</th> <th>First name</th>" +
        "<th>Last name</th> <th>Phone Number</th> <th>Email</th> </tr>";

    for (let i = 0; i < ticketArray.length; i++) {
        out += "</tr><tr><td rowspan='2' align='center'>" + ticketArray[i].movieSelector + "</td><td rowspan='2' align='center'>" + ticketArray[i].amount +
            "</td><td rowspan='2' align='center'>" + ticketArray[i].firstName + "</td><td rowspan='2' align='center'>" + ticketArray[i].lastName +
            "</td><td rowspan='2' align='center'>" + ticketArray[i].phoneNr + "</td><td rowspan='2' align='center'>" + ticketArray[i].email + "</td></tr><tr>";

    }
    document.getElementById("inputResult").innerHTML = out;
}
function deleteTickets() {
    //The current tickets are removed and the array is emptied
    ticketArray = [];
    printTickets();
}
