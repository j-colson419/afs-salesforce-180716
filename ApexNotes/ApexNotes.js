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
        readTextFile(`apex-examples/example-${index++}.cls`, (text) => {
            example.innerText = text;
            hljs.highlightBlock(example);
        });
    }

    highlightActiveNav();
});

function highlightActiveNav() {
    var items = [], tags = [];
    var content = document.getElementById('content');
    items = document.getElementsByClassName('navitem');
    tags = document.getElementsByTagName('legend');

    var highlight = function(element) {
        Array.prototype.forEach.call(items, (item) => {
            item.className = item.className.replace('active', '');
        });

        var i = tags.length;
        while (--i >= 0) {
            if (element.target.scrollTop > tags[i].offsetTop - element.target.offsetHeight/2) {
                items[i].className += ' active';
                break;
            }
        }
    };

    content.onscroll = highlight;

    highlight({ target: content });
}