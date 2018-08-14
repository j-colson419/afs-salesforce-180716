document.addEventListener('DOMContentLoaded', function () {
    function add() {
        var fn = document.getElementById('fname').value;
        var ln = document.getElementById('lname').value;
        var fc = document.getElementById('color').value;

        var row = document.createElement('tr');
        var col1 = document.createElement('td');
        var col2 = document.createElement('td');
        var col3 = document.createElement('td');
        // var col4 = document.createElement('td');

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        // row.appendChild(col4);

        col1.innerHTML = fn;
        col2.innerHTML = ln;
        // col3.innerHTML = fc;
        col3.style = `background-color: ${fc}`;

        // col4.innerHTML = `<button class="delete-button">X</button>`;

        document.getElementById('people-table').appendChild(row);

        //Reset form fields
        document.getElementById('fname').value = "";
        document.getElementById('lname').value = "";
        document.getElementById('color').value = "#000000";
    }//ends function

    document.getElementById('add').addEventListener('click', add, false);

    // document.getElementById('people-table').addEventListener('click', function(e){
    //     if(e.srcElement.classList.contains("delete-button")){
    //         var tableRow = e.srcElement.parentElement.parentElement;
    //         document.getElementById('people-table').removeChild(tableRow);
    //     }
    // }, false);


    document.getElementById('people-table').addEventListener("click", function (e) {
        console.log(e);
        // console.log('Chicago Pizza');
        console.log(e.type);
        if (e.ctrlKey) {
            document.getElementById('c-target').innerText = e.target.textContent;
        }
    }, false);

    document.getElementById('parent').addEventListener("click", function (e) {
        // console.log('is better than');
        // e.stopPropagation();
    }, false);

    document.getElementById('body').addEventListener("click", function (e) {
        // console.log('New York Pizza');
    }, false);


    ///////////////////////////////////////////////////


    document.getElementById('animal').addEventListener('keyup', updateX);
    document.getElementById('temperment').addEventListener('keyup', updateX);

    function updateX() {
        var animal = document.getElementById('animal').value;
        var temperment = document.getElementById('temperment').value;

        var x = `<p> I have a big brown ${animal}
        he is very ${temperment}</p>
        <p>alligators eat the tag name</p>`;

        document.getElementById('c-target').innerHTML = x;
    }









})