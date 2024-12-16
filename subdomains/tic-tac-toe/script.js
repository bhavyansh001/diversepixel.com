console.log('This is for Tic Tac Toe');


// Winning Logic
function checkwin() {
    if ((document.getElementById('b1').innerText === document.getElementById('b2').innerText) && (document.getElementById('b2').innerText === document.getElementById('b3').innerText) && (document.getElementById('b1').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    } else if ((document.getElementById('b4').innerText === document.getElementById('b5').innerText) && (document.getElementById('b5').innerText === document.getElementById('b6').innerText) && (document.getElementById('b4').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    } else if ((document.getElementById('b7').innerText === document.getElementById('b8').innerText) && (document.getElementById('b8').innerText === document.getElementById('b9').innerText) && (document.getElementById('b7').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    }

    else if ((document.getElementById('b1').innerText === document.getElementById('b5').innerText) && (document.getElementById('b5').innerText === document.getElementById('b9').innerText) && (document.getElementById('b1').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    }
    else if ((document.getElementById('b3').innerText === document.getElementById('b5').innerText) && (document.getElementById('b5').innerText === document.getElementById('b7').innerText) && (document.getElementById('b3').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    }

    else if ((document.getElementById('b1').innerText === document.getElementById('b4').innerText) && (document.getElementById('b4').innerText === document.getElementById('b7').innerText) && (document.getElementById('b4').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    } else if ((document.getElementById('b2').innerText === document.getElementById('b5').innerText) && (document.getElementById('b5').innerText === document.getElementById('b8').innerText) && (document.getElementById('b2').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    } else if ((document.getElementById('b3').innerText === document.getElementById('b6').innerText) && (document.getElementById('b6').innerText === document.getElementById('b9').innerText) && (document.getElementById('b3').innerText !== '')) {
        document.getElementById('winner').innerHTML = 'We have a winner!'
    }
}

// Alternating X and O.

let XorO = null;

for (let i = 1; i < 10; i++) {
    let cell = document.querySelector('#b' + i);
    cell.addEventListener('click', function () {
            if (XorO == 'X') {
                XorO = 'O';
            } else {
                XorO = 'X';
            }
            
            if ((document.querySelector('#b' + i).innerText != 'X') && (document.querySelector('#b' + i).innerText != 'O')) {
                document.querySelector('#b' + i).innerText = XorO;
            }
            checkwin();
    })
    
}

// Reset

document.getElementById('resetbtn').addEventListener('click', function () {
for (let i = 1; i < 10; i++) {
        document.getElementById('b' + i).innerText = null;
        XorO = null;
        document.getElementById('winner').innerText = "";
    }
})