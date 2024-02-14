let ticketArray = [];

function saveTicket() {
    let inputMovie = document.getElementById("movieSelector").value;
    let inputAmount = document.getElementById("amount").value;
    let inputFirstName = document.getElementById("firstName").value;
    let inputLastName = document.getElementById("lastName").value;
    let inputPhoneNr = document.getElementById("phoneNr").value;
    let inputEmail = document.getElementById("email").value;

    //could be in html, might remove
    <!--  The first and last name inputs are limited to alpha characters including spaces,
         æ, ø, å, commas, periods and hyphens. The i modifier at the end ignores case sensitivity.-->
/*    function onlyLetters(inputFirstName, inputLastName) {
        //This limits the name inputs to alpha characters including spaces, æ, ø, å,
        //commas, periods and hyphens. The i modifier at the end ignores case sensitivity.
        let letters = /^[a-z a-æøå,.-]+$/i;
        if(inputFirstName.value.match(letters)) {
        }
        if(inputLastName.value.match(letters)) {
           return true;
        }
    }*/
    //Collecting all the inputs
    let inputResults = {
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
    // This resets all the input fields
    document.getElementById("movieSelector").value = '';
    document.getElementById("amount").value = '';
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("phoneNr").value = '';
    document.getElementById("email").value = '';
}
function printTickets() {
    //Using the same table attributes from html for a cohesive look.
    let out = "<table cellspacing='2' cellpadding='2' border='1'<tr> <th>Movie</th> <th>Amount</th> <th>First name</th>" +
        "<th>Last name</th> <th>Phone Number</th> <th>Email</th> </tr>";

    //Adding the length of the array to the table and centering the data.
    for (let i = 0; i < ticketArray.length; i++) {
        out += "</tr><tr><td align='center'>" + ticketArray[i].movieSelector + "</td><td align='center'>" + ticketArray[i].amount +
            "</td><td align='center'>" + ticketArray[i].firstName + "</td><td align='center'>" + ticketArray[i].lastName +
            "</td><td align='center'>" + ticketArray[i].phoneNr + "</td><td align='center'>" + ticketArray[i].email + "</td></tr><tr>";
    }
    document.getElementById("inputResult").innerHTML = out;
}
function deleteTickets() {
    //The current tickets are removed and the array is emptied
    ticketArray = [];
    printTickets();
}