window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var hints ;
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'
  var winCounter = 0;

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCategory = document.getElementById("scategory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");

  categories = [
        ["rick", "squanchy", "morty", "summer", "birdperson", "king jellybean", "pencilveste"],
        ["butter robot", "chris", "time crystal", "laser gun", "freeze ray", "combat suit", "grappling shoes"]
  ];

 hints = [
        ["A Scientist", "Has the power to turn into a giant", "Has a pronounced stutter", "Attach to their phone", "Girlfriend is a double agent", "It is a King", "Was an alien parasite"],
        ["Keep asking about their purpose", "Its a live slug-like alien", "It illegal to obtain", "Fires a potent red energy bolt", "Its a weapon", "It have a Music System with speakers", "Had to be turned on to work properly"]
  ];

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Select Category
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        categoryName.innerHTML = "Rick and Morty Character";
      } else if (chosenCategory === categories[1]) {
        categoryName.innerHTML = "Rick's gadgets";
      }
    }

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) { 
        winCounter++;
        showLives.innerHTML = "You Win: " + winCounter + " point!";
        // document.getElementById('win-counter').innerHTML = winCounter;
        // startGame();
      }
    }
  }

  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    // canvas();
  }

  play();
  
  // Hint

  hint.onclick = function() {

    var categoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [categoryIndex][hintIndex];
  };


   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    // play();
    window.location.reload();
  }
}


