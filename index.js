
// CRUD .. Create,Read,Update and Delete

// Golbal Variables
function Submit() {
    var dataEntered = retrieveData(); // retrieve data data after on click submit 
    var readData = readingDataFromLocalStorage(dataEntered);
}

// CREATE
// retriving data from form
    function retrieveData() {
        var name1 = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var number =  document.getElementById("number").value;
    
        var arr = [name1,email,number];
        return arr;
    }

    // data in local storage
    function readingDataFromLocalStorage (dataEntered){

    }