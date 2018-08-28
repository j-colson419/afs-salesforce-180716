/**
 * Reads the text file specified by the file string and the 
 * @param {string} file URL path to the file
 * @param {function} onSuccess function called when the file is successfully read
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

/**
 * Loads the notes on DOMContentLoaded
 * @param {string} locationNotes Name for the notes repository
 */
function loadNotes(locationNotes, fileType='cls') {
    window.addEventListener('DOMContentLoaded', function(){
        console.log('DOMContentLoaded');
        var example;
        var index = 1;
        while (example = document.getElementById('example-'+index)) {
            readTextFile(`${locationNotes}/example-${index++}.${fileType}`, (text) => {
                i = 0;
                while(example.innerHTML.indexOf('hljs-keyword') == -1 && i++ < 10) {
                    // console.log("Retrying... " + i);
                    example.innerText = text;
                    hljs.highlightBlock(example);
                }
            });
        }
    
        highlightActiveNav();
    });
}

/**
 * Highlights the active navigation
 */
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