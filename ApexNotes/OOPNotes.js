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

window.addEventListener('DOMContentLoaded', function(){
    console.log('DOMContentLoaded');
    var example;
    var index = 1;
    while (example = document.getElementById('example-'+index)) {
        readTextFile(`oop-examples/example-${index++}.cls`, (text) => {
            example.innerText = text;
            hljs.highlightBlock(example);
        });
    }
});