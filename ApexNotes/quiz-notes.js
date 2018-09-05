/**
 * Reads the json file specified by the file string and the 
 * @param {string} file URL path to the file
 * @param {function} onSuccess function called when the file is successfully read
 */
function readJSONFile(file, onSuccess)
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
                onSuccess(JSON.parse(allText));
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
        var quiz_content = document.getElementById('content');
        var nav = document.getElementById('nav');

        readJSONFile('quizes/quiz-1.json', json => {
            var questions = shuffle(json['Quiz']);
            var question = {}, q;
            for (q = 1; q <= questions.length; q++) {
                var q_div = document.createElement("div");
                q_div.className = "question";
                question = questions[q-1];

                addQuestion(q_div, question, q);
                addNavItem(nav, q);

                quiz_content.appendChild(q_div);
            }
        });
        addShowAnswers();
        highlightActiveNav();
    });
}

/**
 * 
 */
function addShowAnswers() {
    var showAnswers = document.createElement('button');
    showAnswers.innerText = 'Show Answers';
    showAnswers.onclick = () => {
        var content = document.getElementById('content');
        content.classList.add('show-answers');
    };
    document.getElementById('nav-content').appendChild(showAnswers);
}

/**
 * Adds the number associated to the navitem
 * @param {Element} nav_div 
 * @param {Number} number 
 */
function addNavItem(nav_div, number) {
    var item_div = document.createElement("li");
    var a = document.createElement("a");
    a.innerText = number;
    a.className = "navitem";
    a.href = "#" + number;
    item_div.appendChild(a);
    nav_div.appendChild(item_div);
}

/**
 * Adds a question to the given div
 * @param {Element} div 
 * @param {*} question 
 * @param {Number} q_number 
 */
function addQuestion(div, question, q_number) {
    var question_div = document.createElement("div");
    var q_a = document.createElement("a");
    q_a.name = q_number;
    q_a.innerText = q_number + ". " + question["Question"];
    question_div.appendChild(q_a);
    question_div.className = "question-title";
    div.id = "question-" + q_number;
    div.appendChild(question_div);

    var option_list = document.createElement("div");
    var options = question['Options'];
    option_list.className = "options";

    var option_keys = ['A', 'B', 'C', 'D', 'E'], o = 0;
    var option;
    while (option = options[option_keys[o]]) {
        var opt_div = document.createElement("div");
        opt_div.className = "option";
        opt_div.innerText = option_keys[o] + '. ' + option;
        opt_div.onclick = (response) => {
            if (response.target.classList.contains("selected")) {
                response.target.classList.remove("selected");
            } else {
                response.target.classList.add("selected");
            }
        };
        if (question['Answers'].indexOf(option_keys[o]) != -1) {
            opt_div.classList.add("correct");
        } else {
            opt_div.classList.add("wrong");
        }
        option_list.appendChild(opt_div);
        o++;
    }
    div.appendChild(option_list);
}

/**
 * Shuffles the input array
 * @param {List} array 
 * @returns {List}
 */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  /**
 * Highlights the active navigation
 */
function highlightActiveNav() {
    var items = [], tags = [];
    var content = document.getElementById('content');
    items = document.getElementsByClassName('navitem');
    tags = document.getElementsByClassName('question');

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