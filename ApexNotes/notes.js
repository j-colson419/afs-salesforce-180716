/**
 * 
 * @param {URL} file 
 * @param {function} onSuccess 
 */
function readTextFile(file, onSuccess)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                onSuccess(allText);
            }
        }
    }
    rawFile.send(null);
}

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOMContentLoaded');
    var example_1 = document.getElementById('example-1');
    if (example_1) {
        readTextFile('apex-examples/example-1.cls', (text) => {
            example_1.innerText = text;
            console.log(text);
        });
    }

    var example_2 = document.getElementById('example-2');
    if (example_2) {
        readTextFile('apex-examples/example-2.cls', (text) => {
            example_2.innerText = text;
            console.log(text);
        });
    }

    var example_3 = document.getElementById('example-3');
    if (example_3) {
        readTextFile('apex-examples/example-3.cls', (text) => {
            example_3.innerText = text;
            console.log(text);
        });
    }

    var example_4 = document.getElementById('example-4');
    if (example_4) {
        readTextFile('apex-examples/example-4.cls', (text) => {
            example_4.innerText = text;
            console.log(text);
        });
    }

    var example_5 = document.getElementById('example-5');
    if (example_5) {
        readTextFile('apex-examples/example-5.cls', (text) => {
            example_5.innerText = text;
            console.log(text);
        });
    }
});