
// CRUD .. Create,Read,Update and Delete

// Golbal Variables
function Submit() {
    var dataEntered = retrieveData(); // retrieve data data after on click submit 
    var readData = readingDataFromLocalStorage(dataEntered);
    console.log(readData);
}

// CREATE
// retriving data from form
    function retrieveData() {
        var name1 = document.getElementById("name").value;
        var email1 = document.getElementById("email").value;
        var number1 =  document.getElementById("number").value;
    
        var arr = [name1,email1,number1];
        return arr;
    }


    // READ
    // data in local storage
    function readingDataFromLocalStorage (dataEntered){
        // Storing data in local storage
        var na = localStorage.setItem("name", dataEntered[0]);
        var em = localStorage.setItem("email", dataEntered[1]);
        var nu = localStorage.setItem("number", dataEntered[2]);
    
        // getting values from local to table
        var na1 = localStorage.getItem("name", na);
        var em1 = localStorage.getItem("email", em);
        var nu1 = localStorage.getItem("number", nu);

        var arr = [na1, em1, nu1];
        return arr;

    } 