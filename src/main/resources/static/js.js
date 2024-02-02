let ticketLog = [];

function choose() {

}
function ticket() {
    let inputMovie = document.getElementById("movieSelector").value;
    let inputAmount = document.getElementById("amount").value;
    let inputFirstName = document.getElementById("firstName").value;
    let inputLastName = document.getElementById("lastName").value;
    let inputPhoneNr = document.getElementById("phoneNr").value;
    let inputEmail = document.getElementById("email").value;
    let inputResults = {
        //Use : instead of = to make code more compact and easy to read.
        "movieSelector" : inputMovie,
        "amount" : inputAmount,
        "firstName" : inputFirstName,
        "lastName" : inputLastName,
        "phoneNr" : inputPhoneNr,
        "email" : inputEmail
    }
    ticketLog.push(inputResults);
    console.log(inputResults)
    print();
}
function print() {
    let out =
        <table>
        <tr>
            <th>Film</th>
            <th>Antall biletter</th>
            <th>Foravn</th>
            <th>Etternavn</th>
            <th>Telefonnr</th>
            <th>Epost</th>
        </tr>
    </table>
    document.getElementById("inputResult").innerHTML = out;
}