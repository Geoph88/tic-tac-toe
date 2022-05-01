var singleBoxes = document.querySelector('section')
var getSpan = document.querySelector('span') 
var playerO = 'O'
var playerX = 'X'
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

// alternate between turns
singleBoxes.addEventListener('click', function (event){
    if (playerTurn === playerO) {
        if (event.target.tagName === 'SPAN') {
            event.target.textContent = playerO
            console.log(playerTurn)
            playerTurn = playerX
        }
    } else {
        if (event.target.tagName === 'SPAN') {
            event.target.textContent = playerX
            console.log(playerTurn)
            playerTurn = playerO
        }
    }
})

resetBtn.addEventListener('click', function(event){
    location.reload()
    })






//to change the boxes to the .winner class after the third click. Get the game to recognise that a horizontal grid in a row is a win
// for horizontal wins - x needs to be added in
singleBoxes.addEventListener('click', function(event){
    if(event.target.tagName === 'SPAN') {
        event.target.id = 'playing'
    }
    if(document.querySelectorAll('#playing').length === 5){
    var allSpanElements = document.querySelectorAll('#playing') 
    for(var i = 0; i < allSpanElements.length; i++) {
        if(((getBox0.textContent === playerO) && (getBox1.textContent === playerO) && (getBox2.textContent === playerO))) {
            getBox0.className = 'winner'
            getBox1.className = 'winner'
            getBox2.className = 'winner'
        } else if((getBox3.textContent === playerO) && (getBox4.textContent === playerO) && (getBox5.textContent === playerO)) {
            getBox3.className = 'winner'
            getBox4.className = 'winner'
            getBox5.className = 'winner'
        }   else if((getBox6.textContent === playerO) && (getBox7.textContent === playerO) && (getBox8.textContent === playerO)) {
            getBox6.className = 'winner'
            getBox7.className = 'winner'
            getBox8.className = 'winner'
            } else if((getBox0.textContent === playerO) && (getBox3.textContent === playerO) && (getBox6.textContent === playerO)) {
                getBox0.className = 'winner'
                getBox3.className = 'winner'
                getBox6.className = 'winner'
            } else if((getBox1.textContent === playerO) && (getBox4.textContent === playerO) && (getBox7.textContent === playerO)) {
                getBox1.className = 'winner'
                getBox4.className = 'winner'
                getBox7.className = 'winner'
            } else if((getBox2.textContent === playerO) && (getBox5.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                getBox2.className = 'winner'
                getBox5.className = 'winner'
                getBox8.className = 'winner'
            } else if((getBox0.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                    getBox0.className = 'winner'
                    getBox4.className = 'winner'
                    getBox8.className = 'winner'
            } else if((getBox2.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox6.textContent === playerO)) {
                    getBox2.className = 'winner'
                    getBox4.className = 'winner'
                    getBox6.className = 'winner'
            }
    } 
    }
})       


singleBoxes.addEventListener('click', function(event){
    if(event.target.tagName === 'SPAN') {
        event.target.id = 'playing'
    }
{ if(document.querySelectorAll('#playing').length === 6){
    var allSpanElements = document.querySelectorAll('#playing') 
    for(var i = 0; i < allSpanElements.length; i++) {
        if((getBox0.textContent === playerX) && (getBox1.textContent === playerX) && (getBox2.textContent === playerX)) {
            getBox0.className = 'winner'
            getBox1.className = 'winner'
            getBox2.className = 'winner'
        } else if((getBox3.textContent === playerX) && (getBox4.textContent === playerX) && (getBox5.textContent === playerX)) {
            getBox3.className = 'winner'
            getBox4.className = 'winner'
            getBox5.className = 'winner'
        }   else if((getBox6.textContent === playerX) && (getBox7.textContent === playerX) && (getBox8.textContent === playerX)) {
            getBox6.className = 'winner'
            getBox7.className = 'winner'
            getBox8.className = 'winner'
            } else if((getBox0.textContent === playerX) && (getBox3.textContent === playerX) && (getBox6.textContent === playerX)) {
                getBox0.className = 'winner'
                getBox3.className = 'winner'
                getBox6.className = 'winner'
            } else if((getBox1.textContent === playerX) && (getBox4.textContent === playerX) && (getBox7.textContent === playerX)) {
                getBox1.className = 'winner'
                getBox4.className = 'winner'
                getBox7.className = 'winner'
            } else if((getBox2.textContent === playerX) && (getBox5.textContent ===  playerX) && (getBox8.textContent === playerX)) {
                getBox2.className = 'winner'
                getBox5.className = 'winner'
                getBox8.className = 'winner'
            } else if((getBox0.textContent === playerX) && (getBox4.textContent ===  playerX) && (getBox8.textContent === playerX)) {
                    getBox0.className = 'winner'
                    getBox4.className = 'winner'
                    getBox8.className = 'winner'
            } else if((getBox2.textContent === playerX) && (getBox4.textContent ===  playerX) && (getBox6.textContent === playerX)) {
                    getBox2.className = 'winner'
                    getBox4.className = 'winner'
                    getBox6.className = 'winner'
            }
        }
    }
}
})

singleBoxes.addEventListener('click', function(event){
    if(event.target.tagName === 'SPAN') {
        event.target.id = 'playing'
    }
{ if(document.querySelectorAll('#playing').length === 7){
    var allSpanElements = document.querySelectorAll('#playing') 
    for(var i = 0; i < allSpanElements.length; i++) {
        if((getBox0.textContent === playerO) && (getBox1.textContent === playerO) && (getBox2.textContent === playerO)) {
            getBox0.className = 'winner'
            getBox1.className = 'winner'
            getBox2.className = 'winner'
        } else if((getBox3.textContent === playerO) && (getBox4.textContent === playerO) && (getBox5.textContent === playerO)) {
            getBox3.className = 'winner'
            getBox4.className = 'winner'
            getBox5.className = 'winner'
        }   else if((getBox6.textContent === playerO) && (getBox7.textContent === playerO) && (getBox8.textContent === playerO)) {
            getBox6.className = 'winner'
            getBox7.className = 'winner'
            getBox8.className = 'winner'
            } else if((getBox0.textContent === playerO) && (getBox3.textContent === playerO) && (getBox6.textContent === playerO)) {
                getBox0.className = 'winner'
                getBox3.className = 'winner'
                getBox6.className = 'winner'
            } else if((getBox1.textContent === playerO) && (getBox4.textContent === playerO) && (getBox7.textContent === playerO)) {
                getBox1.className = 'winner'
                getBox4.className = 'winner'
                getBox7.className = 'winner'
            } else if((getBox2.textContent === playerO) && (getBox5.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                getBox2.className = 'winner'
                getBox5.className = 'winner'
                getBox8.className = 'winner'
            } else if((getBox0.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                    getBox0.className = 'winner'
                    getBox4.className = 'winner'
                    getBox8.className = 'winner'
            } else if((getBox2.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox6.textContent === playerO)) {
                    getBox2.className = 'winner'
                    getBox4.className = 'winner'
                    getBox6.className = 'winner'
            }
        }
    }
}
})

singleBoxes.addEventListener('click', function(event){
    if(event.target.tagName === 'SPAN') {
        event.target.id = 'playing'
    }
{ if(document.querySelectorAll('#playing').length === 8){
    var allSpanElements = document.querySelectorAll('#playing') 
    for(var i = 0; i < allSpanElements.length; i++) {
        if((getBox0.textContent === playerX) && (getBox1.textContent === playerX) && (getBox2.textContent === playerX)) {
            getBox0.className = 'winner'
            getBox1.className = 'winner'
            getBox2.className = 'winner'
        } else if((getBox3.textContent === playerX) && (getBox4.textContent === playerX) && (getBox5.textContent === playerX)) {
            getBox3.className = 'winner'
            getBox4.className = 'winner'
            getBox5.className = 'winner'
        }   else if((getBox6.textContent === playerX) && (getBox7.textContent === playerX) && (getBox8.textContent === playerX)) {
            getBox6.className = 'winner'
            getBox7.className = 'winner'
            getBox8.className = 'winner'
            } else if((getBox0.textContent === playerX) && (getBox3.textContent === playerX) && (getBox6.textContent === playerX)) {
                getBox0.className = 'winner'
                getBox3.className = 'winner'
                getBox6.className = 'winner'
            } else if((getBox1.textContent === playerX) && (getBox4.textContent === playerX) && (getBox7.textContent === playerX)) {
                getBox1.className = 'winner'
                getBox4.className = 'winner'
                getBox7.className = 'winner'
            } else if((getBox2.textContent === playerX) && (getBox5.textContent ===  playerX) && (getBox8.textContent === playerX)) {
                getBox2.className = 'winner'
                getBox5.className = 'winner'
                getBox8.className = 'winner'
            } else if((getBox0.textContent === playerX) && (getBox4.textContent ===  playerX) && (getBox8.textContent === playerX)) {
                    getBox0.className = 'winner'
                    getBox4.className = 'winner'
                    getBox8.className = 'winner'
            } else if((getBox2.textContent === playerX) && (getBox4.textContent ===  playerX) && (getBox6.textContent === playerX)) {
                    getBox2.className = 'winner'
                    getBox4.className = 'winner'
                    getBox6.className = 'winner'
            } 
        }
    }
}
})

singleBoxes.addEventListener('click', function(event){
    if(event.target.tagName === 'SPAN') {
        event.target.id = 'playing'
    }
{ if(document.querySelectorAll('#playing').length === 9){
    var allSpanElements = document.querySelectorAll('#playing') 
    for(var i = 0; i < allSpanElements.length; i++) {
        if((getBox0.textContent === playerO) && (getBox1.textContent === playerO) && (getBox2.textContent === playerO)) {
            getBox0.className = 'winner'
            getBox1.className = 'winner'
            getBox2.className = 'winner'
        } else if((getBox3.textContent === playerO) && (getBox4.textContent === playerO) && (getBox5.textContent === playerO)) {
            getBox3.className = 'winner'
            getBox4.className = 'winner'
            getBox5.className = 'winner'
        }   else if((getBox6.textContent === playerO) && (getBox7.textContent === playerO) && (getBox8.textContent === playerO)) {
            getBox6.className = 'winner'
            getBox7.className = 'winner'
            getBox8.className = 'winner'
            } else if((getBox0.textContent === playerO) && (getBox3.textContent === playerO) && (getBox6.textContent === playerO)) {
                getBox0.className = 'winner'
                getBox3.className = 'winner'
                getBox6.className = 'winner'
            } else if((getBox1.textContent === playerO) && (getBox4.textContent === playerO) && (getBox7.textContent === playerO)) {
                getBox1.className = 'winner'
                getBox4.className = 'winner'
                getBox7.className = 'winner'
            } else if((getBox2.textContent === playerO) && (getBox5.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                getBox2.className = 'winner'
                getBox5.className = 'winner'
                getBox8.className = 'winner'
            } else if((getBox0.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox8.textContent === playerO)) {
                    getBox0.className = 'winner'
                    getBox4.className = 'winner'
                    getBox8.className = 'winner'
            } else if((getBox2.textContent === playerO) && (getBox4.textContent ===  playerO) && (getBox6.textContent === playerO)) {
                    getBox2.className = 'winner'
                    getBox4.className = 'winner'
                    getBox6.className = 'winner'
            } else {
                endMessage.textContent ="It's a Tie!"
            }
        }
    }
}
})
        
//         {
//         var allSpanElements = document.querySelectorAll('#playing')
//         for(let i = 0; i < allSpanElements.length; i++){
//             allSpanElements[i].className = 'winner'
//         }    
//         }
//     }
// }) 

//need to first figure out how to assign each span tag with a className and then figure out how to make the code check if it has winConditions. maybe assigning each Span tag a class name and then an id name?

// winning conditions
// winConditions = [[0, 1, 2],
// [3, 4, 5],
// [6, 7, 8],
// [0, 3, 6],
// [1, 4, 7],
// [2, 5, 8],
// [0, 4, 8],
// [2, 4, 6]
// ]
// var horizontalTop = winConditions[0]
// var horizontalMiddle = winConditions[1]
// var horizontalBottom = winConditions[2]
// var verticalLeft = winConditions[3]
// var verticalMiddle = winConditions[4]
// var verticalBottom = winConditions[5]
// var diagonalOne = winConditions[6]
// var diagonalTwo = winConditions[7]

// for (var x = 0; x <= winConditions.length; x++) {
//     if(winConditions[x] === winConditions[0][2]){
//        for (y = 0; y <= winConditions[1].length; y++) {
//            console.log('hey')
//        }
//     }
// }

// checkWinner()
// // horizontal top
// if((x === 0) && (x === 1) && (x === 2) != (''))
//     {
//     console.log('hey')
// }

// //horizontal middle
// if((x === 3) && (x === 4) && (x === 5) != (''))

// // horizontal below
// if((x === 6) && (x === 7) && (x === 8) != (''))


// function checkWinner() {
//     for (let w = 0; r < 3; r++) {

//     }
// }


//original tag for turning boxes red after first click
// singleBoxes.addEventListener('click', function(event){
//     if(event.target.tagName === 'SPAN') {
//         event.target.className = 'playing' 
//     }
//     if(document.querySelectorAll('.playing').length === 3) {
//         var allSpanElements = document.querySelectorAll('.playing')
//         for(let i = 0; i < allSpanElements.length; i++){
//             allSpanElements[i].className = 'winner'
            
//         }
//     }
// }) 






// to alternate between turns 

// singleBoxes.addEventListener('click', function(event){
//        if(event.target.className !== 'player') {
//         event.target.textContent = playerO
//     }
// })

// singleBoxes.addEventListener('click', function(event){
//     if(event.target.className === 'player') {
//      event.target.textContent = playerX
//  }
// })





//     singleBoxes.addEventListener('click', function(event) {
//         if(event.target.textContent != playerO) 
//     {
//     console.log(playerX)
//         }
//     })
//     }
