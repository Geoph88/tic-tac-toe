var singleBoxes = document.querySelector('section')
var getDiv = document.querySelector('div') 
var playerO = '🥬'
var playerX = '🍖'
var getBox0 = document.querySelector('.box0')
var getBox1 = document.querySelector('.box1')
var getBox2 = document.querySelector('.box2')
var getBox3 = document.querySelector('.box3')
var getBox4 = document.querySelector('.box4')
var getBox5 = document.querySelector('.box5')
var getBox6 = document.querySelector('.box6')
var getBox7 = document.querySelector('.box7')
var getBox8 = document.querySelector('.box8')
var playerTurn = playerO
var endMessage = document.querySelector('.end-message')
var resetBtn = document.querySelector('.reset-button')
var winningMessage = document.querySelector('#winning-message')

// alternate between turns
function alternateTurns() {
            singleBoxes.addEventListener('click', function (event){
                if (playerTurn === playerO) {
                    if (event.target.tagName === 'DIV' && event.target.textContent === '') {
                        event.target.textContent = playerO
                        console.log(playerTurn)
                        playerTurn = playerX
                    }
                }   else {
                        if (event.target.tagName === 'DIV' && event.target.textContent === '') {
                            event.target.textContent = playerX
                            console.log(playerTurn)
                            playerTurn = playerO
                        }
                }
            })
    }
alternateTurns()

//reset button to reload the page
resetBtn.addEventListener('click', function(){
    location.reload()
    })

function popOutMessageLettuce(){
    winningMessage.className = 'end-message-lettuce'
    winningMessage.textContent = 'You win! You converted to Vegetarianism'
}

function popOutMessageMeat(){
    winningMessage.className = 'end-message-meat'
    winningMessage.textContent = 'You win! You converted to Carnism'
}


//win conditions for the game
singleBoxes.addEventListener('click', function(event){
    if(event.target.tagName === 'DIV') {
        event.target.id = 'playing'
    }
    if(document.querySelectorAll('#playing').length === 5){
    var allDivElements = document.querySelectorAll('#playing') 
    for(var i = 0; i < allDivElements.length; i++) {
        if(((getBox0.textContent === playerO) && (getBox1.textContent === playerO) && (getBox2.textContent === playerO))) {
            getBox0.className = 'winner'
            getBox1.className = 'winner'
            getBox2.className = 'winner'
            popOutMessageLettuce()
        } else if((getBox3.textContent === playerO) && (getBox4.textContent === playerO) && (getBox5.textContent === playerO)) {
            getBox3.className = 'winner'
            getBox4.className = 'winner'
            getBox5.className = 'winner'
            popOutMessageLettuce()
        }   else if((getBox6.textContent === playerO) && (getBox7.textContent === playerO) && (getBox8.textContent === playerO)) {
            getBox6.className = 'winner'
            getBox7.className = 'winner'
            getBox8.className = 'winner'
            popOutMessageLettuce()
            } else if((getBox0.textContent === playerO) && (getBox3.textContent === playerO) && (getBox6.textContent === playerO)) {
                getBox0.className = 'winner'
                getBox3.className = 'winner'
                getBox6.className = 'winner'
                popOutMessageLettuce()
            } else if((getBox1.textContent === playerO) && (getBox4.textContent === playerO) && (getBox7.textContent === playerO)) {
                getBox1.className = 'winner'
                getBox4.className = 'winner'
                getBox7.className = 'winner'
                popOutMessageLettuce()
            } else if((getBox2.textContent === playerO) && (getBox5.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                getBox2.className = 'winner'
                getBox5.className = 'winner'
                getBox8.className = 'winner'
                popOutMessageLettuce()
            } else if((getBox0.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                    getBox0.className = 'winner'
                    getBox4.className = 'winner'
                    getBox8.className = 'winner'
                    popOutMessageLettuce()
            } else if((getBox2.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox6.textContent === playerO)) {
                    getBox2.className = 'winner'
                    getBox4.className = 'winner'
                    getBox6.className = 'winner'
                    popOutMessageLettuce()
            }
    } 
    }
})       


singleBoxes.addEventListener('click', function(event){
    if(event.target.tagName === 'DIV') {
        event.target.id = 'playing'
    }
{ if(document.querySelectorAll('#playing').length === 6){
    var allDivElements = document.querySelectorAll('#playing') 
    for(var i = 0; i < allDivElements.length; i++) {
        if((getBox0.textContent === playerX) && (getBox1.textContent === playerX) && (getBox2.textContent === playerX)) {
            getBox0.className = 'winner'
            getBox1.className = 'winner'
            getBox2.className = 'winner'
            popOutMessageMeat()
        } else if((getBox3.textContent === playerX) && (getBox4.textContent === playerX) && (getBox5.textContent === playerX)) {
            getBox3.className = 'winner'
            getBox4.className = 'winner'
            getBox5.className = 'winner'
            popOutMessageMeat()
        }   else if((getBox6.textContent === playerX) && (getBox7.textContent === playerX) && (getBox8.textContent === playerX)) {
            getBox6.className = 'winner'
            getBox7.className = 'winner'
            getBox8.className = 'winner'
            popOutMessageMeat()
            } else if((getBox0.textContent === playerX) && (getBox3.textContent === playerX) && (getBox6.textContent === playerX)) {
                getBox0.className = 'winner'
                getBox3.className = 'winner'
                getBox6.className = 'winner'
                popOutMessageMeat()
            } else if((getBox1.textContent === playerX) && (getBox4.textContent === playerX) && (getBox7.textContent === playerX)) {
                getBox1.className = 'winner'
                getBox4.className = 'winner'
                getBox7.className = 'winner'
                popOutMessageMeat()
            } else if((getBox2.textContent === playerX) && (getBox5.textContent ===  playerX) && (getBox8.textContent === playerX)) {
                getBox2.className = 'winner'
                getBox5.className = 'winner'
                getBox8.className = 'winner'
                popOutMessageMeat()
            } else if((getBox0.textContent === playerX) && (getBox4.textContent ===  playerX) && (getBox8.textContent === playerX)) {
                    getBox0.className = 'winner'
                    getBox4.className = 'winner'
                    getBox8.className = 'winner'
                    popOutMessageMeat()
            } else if((getBox2.textContent === playerX) && (getBox4.textContent ===  playerX) && (getBox6.textContent === playerX)) {
                    getBox2.className = 'winner'
                    getBox4.className = 'winner'
                    getBox6.className = 'winner'
                    popOutMessageMeat()
            }
        }
    }
}
})

singleBoxes.addEventListener('click', function(event){
    if(event.target.tagName === 'DIV') {
        event.target.id = 'playing'
    }
{ if(document.querySelectorAll('#playing').length === 7){
    var allDivElements = document.querySelectorAll('#playing') 
    for(var i = 0; i < allDivElements.length; i++) {
        if((getBox0.textContent === playerO) && (getBox1.textContent === playerO) && (getBox2.textContent === playerO)) {
            getBox0.className = 'winner'
            getBox1.className = 'winner'
            getBox2.className = 'winner'
            popOutMessageLettuce()
        } else if((getBox3.textContent === playerO) && (getBox4.textContent === playerO) && (getBox5.textContent === playerO)) {
            getBox3.className = 'winner'
            getBox4.className = 'winner'
            getBox5.className = 'winner'
            popOutMessageLettuce()
        }   else if((getBox6.textContent === playerO) && (getBox7.textContent === playerO) && (getBox8.textContent === playerO)) {
            getBox6.className = 'winner'
            getBox7.className = 'winner'
            getBox8.className = 'winner'
            popOutMessageLettuce()
            } else if((getBox0.textContent === playerO) && (getBox3.textContent === playerO) && (getBox6.textContent === playerO)) {
                getBox0.className = 'winner'
                getBox3.className = 'winner'
                getBox6.className = 'winner'
                popOutMessageLettuce()
            } else if((getBox1.textContent === playerO) && (getBox4.textContent === playerO) && (getBox7.textContent === playerO)) {
                getBox1.className = 'winner'
                getBox4.className = 'winner'
                getBox7.className = 'winner'
                popOutMessageLettuce()
            } else if((getBox2.textContent === playerO) && (getBox5.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                getBox2.className = 'winner'
                getBox5.className = 'winner'
                getBox8.className = 'winner'
                popOutMessageLettuce()
            } else if((getBox0.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                    getBox0.className = 'winner'
                    getBox4.className = 'winner'
                    getBox8.className = 'winner'
                    popOutMessageLettuce()
            } else if((getBox2.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox6.textContent === playerO)) {
                    getBox2.className = 'winner'
                    getBox4.className = 'winner'
                    getBox6.className = 'winner'
                    popOutMessageLettuce()
            }
        }
    }
}
})

singleBoxes.addEventListener('click', function(event){
    if(event.target.tagName === 'DIV') {
        event.target.id = 'playing'
    }
{ if(document.querySelectorAll('#playing').length === 8){
    var allDivElements = document.querySelectorAll('#playing') 
    for(var i = 0; i < allDivElements.length; i++) {
        if((getBox0.textContent === playerX) && (getBox1.textContent === playerX) && (getBox2.textContent === playerX)) {
            getBox0.className = 'winner'
            getBox1.className = 'winner'
            getBox2.className = 'winner'
            popOutMessageMeat()
        } else if((getBox3.textContent === playerX) && (getBox4.textContent === playerX) && (getBox5.textContent === playerX)) {
            getBox3.className = 'winner'
            getBox4.className = 'winner'
            getBox5.className = 'winner'
            popOutMessageMeat()
        }   else if((getBox6.textContent === playerX) && (getBox7.textContent === playerX) && (getBox8.textContent === playerX)) {
            getBox6.className = 'winner'
            getBox7.className = 'winner'
            getBox8.className = 'winner'
            popOutMessageMeat()
            } else if((getBox0.textContent === playerX) && (getBox3.textContent === playerX) && (getBox6.textContent === playerX)) {
                getBox0.className = 'winner'
                getBox3.className = 'winner'
                getBox6.className = 'winner'
                popOutMessageMeat()
            } else if((getBox1.textContent === playerX) && (getBox4.textContent === playerX) && (getBox7.textContent === playerX)) {
                getBox1.className = 'winner'
                getBox4.className = 'winner'
                getBox7.className = 'winner'
                popOutMessageMeat()
            } else if((getBox2.textContent === playerX) && (getBox5.textContent ===  playerX) && (getBox8.textContent === playerX)) {
                getBox2.className = 'winner'
                getBox5.className = 'winner'
                getBox8.className = 'winner'
                popOutMessageMeat()
            } else if((getBox0.textContent === playerX) && (getBox4.textContent ===  playerX) && (getBox8.textContent === playerX)) {
                    getBox0.className = 'winner'
                    getBox4.className = 'winner'
                    getBox8.className = 'winner'
                    popOutMessageMeat()
            } else if((getBox2.textContent === playerX) && (getBox4.textContent ===  playerX) && (getBox6.textContent === playerX)) {
                    getBox2.className = 'winner'
                    getBox4.className = 'winner'
                    getBox6.className = 'winner'
                    popOutMessageMeat()
            } 
        }
    }
}
})

singleBoxes.addEventListener('click', function(event){
    if(event.target.tagName === 'DIV') {
        event.target.id = 'playing'
    }
{ if(document.querySelectorAll('#playing').length === 9){
    var allDivElements = document.querySelectorAll('#playing') 
    for(var i = 0; i < allDivElements.length; i++) {
        if((getBox0.textContent === playerO) && (getBox1.textContent === playerO) && (getBox2.textContent === playerO)) {
            getBox0.className = 'winner'
            getBox1.className = 'winner'
            getBox2.className = 'winner'
            popOutMessageLettuce()
        } else if((getBox3.textContent === playerO) && (getBox4.textContent === playerO) && (getBox5.textContent === playerO)) {
            getBox3.className = 'winner'
            getBox4.className = 'winner'
            getBox5.className = 'winner'
            popOutMessageLettuce()
        }   else if((getBox6.textContent === playerO) && (getBox7.textContent === playerO) && (getBox8.textContent === playerO)) {
            getBox6.className = 'winner'
            getBox7.className = 'winner'
            getBox8.className = 'winner'
            popOutMessageLettuce()
            } else if((getBox0.textContent === playerO) && (getBox3.textContent === playerO) && (getBox6.textContent === playerO)) {
                getBox0.className = 'winner'
                getBox3.className = 'winner'
                getBox6.className = 'winner'
                popOutMessageLettuce()
            } else if((getBox1.textContent === playerO) && (getBox4.textContent === playerO) && (getBox7.textContent === playerO)) {
                getBox1.className = 'winner'
                getBox4.className = 'winner'
                getBox7.className = 'winner'
                popOutMessageLettuce()
            } else if((getBox2.textContent === playerO) && (getBox5.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                getBox2.className = 'winner'
                getBox5.className = 'winner'
                getBox8.className = 'winner'
                popOutMessageLettuce()
            } else if((getBox0.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                    getBox0.className = 'winner'
                    getBox4.className = 'winner'
                    getBox8.className = 'winner'
                    popOutMessageLettuce()
            } else if((getBox2.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox6.textContent === playerO)) {
                    getBox2.className = 'winner'
                    getBox4.className = 'winner'
                    getBox6.className = 'winner'
                    popOutMessageLettuce()
            } else {
                endMessage.textContent ="It's a Tie!"
            }
        }
    }
}
})
