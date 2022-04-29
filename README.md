# Tic Tac Toe 
## Project Summary
<p>
To make a tictactoe game in which two players can play in browser. Basic functionality should manipulate the DOM so that two different players can click on different boxes. Winning logic must be applied so that the console can read what player has won.
</p>

## Plan approach to solving the problem

1. day 1 Deliverables for Fri 29 April 
- Set up the HTML and link to respected .css and .js sheets
- Set up tags in the HTML to store the headings, game board, text for which player has won and lost. This can be done with h1 tag to store the                heading of the game, a section tag within a main tag with a class of "container" to store the rows. The section tag will then contain span tags            to store player inputs. 
- add basic css to the HTML elements to make for an easier development experience. For example, putting background colors and inputting the                  .container to display:grid of 3 coloumns by 3 rows.
- Do a flowchart for how the game should work.
- Figure out how to manipulate the DOM to recongise when three boxes are clicked in a row. This can be done by completing the "Make_It_Green"                homework. A .targetevent method will be used in attempt to target the event of 3 boxes being 'clicked'. If this approach does not work, I will seek assistance in class.
- Figure out how to make the game recognise two players and how to take turns. The method used for this will most likely be to store player1 and player2 in a variable and making a function to switch between players.

2. Day 2 Deliverables for Sat 30 April
- Create the algorithm in js for the different player inputs of the game based on the value of the grids mentioned in the above day. Will most likely be stored an array within an array.
- Design logic in js to recognise when a player has met these winning conditions. This will be approached by trying to create a function that runs through the above array and recongises when these values have been met.
- Manipulate the DOM using js to display the winner of the game. 
- Edit the README.md to explain how the game works.

3. Day 3 delieverables
- design css for the game to make the design responsive and accessable.
- add a reset button via html and use javascript to manipulate the DOM to allow the button to reset the board.
- Go back over the code to ensure that everything is readable, has correct syntax and clean it up. 

4. Day 4 delieverables
 - Try to implement a computer player option. This would need to be brocken down into creating a computer player variable in Javascript and store certain the choices it can make. Then a function would be needed to allow player1 to choose between playing against a computer or player2.
 - Try to implement game customisation options that allow players to choose more than a standard 'X' or 'O'. The methodology of this could possibly be to store different options in a ul or dropdown and then use javascript to use if statements when a user has selected a certain player. 
 
 ## Potential Problems
 1. Limited time
 2. Some of the methodology above could be listed due to a misunderstanding of how javascript/html/css works. 
 3. Writing code with the readability for the programmer can make it inaccessible to other users interpreting this code. 

### The code you're proud of
### Lessons learnt
<a href= "https://geoph88.github.io/tic-tac-toe/">Click here to play the game</a>
