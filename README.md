
HW - Hangman-Game


Live Link 


Summary

This homework assignment require us to build a hangman game.
The game will run in the browser, and feature dynamically updated HTML powered by your JavaScript code.

Code Explaination

In this assignment, I learned to use function and for loop to loop through the letter the user have put in. I also use math.random to randomly output the word for user to guess. 

For example:

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
}