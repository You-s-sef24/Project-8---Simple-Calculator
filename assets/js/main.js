const s = document.querySelector('.screen');
let input = '';
let lastChar;
function solve() {
    try {
        input = eval(input).toString();
        s.innerHTML = `${input}`;
    } catch (error) {
        input = "Error";
        s.innerHTML = `${input}`;
    }
    // let ans = eval(input);
    // s.innerHTML = `${ans}`;
    // input = '';
    // console.log(ans);
}
function BackSpace() {
    input = input.slice(0, -1);
    s.innerHTML = `${input}`;
    console.log(input);
}
function Clear() {
    input = '';
    s.innerHTML = `${input}`;
    console.log(input);
}
function operation(event) {
    let buttonText = event.target.textContent;
    lastChar = input.slice(-1);
    if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*') {
        input = input.slice(0, -1);
    }
    input += buttonText;
    s.innerHTML = `${input}`;
    console.log(input);
}
document.querySelectorAll(".b7, .b8, .b9, .b4, .b5, .b6, .b1, .b2, .b3, .b0, .bP").forEach(button => {
    button.addEventListener("click", function () {
        if (s.innerHTML === 'Error')
            input = '';
        input += this.textContent;
        s.innerHTML = `${input}`
    });
});
document.querySelector('.bA').addEventListener('click', (event) => {
    operation(event);
});
document.querySelector('.bS').addEventListener('click', (event) => {
    operation(event);
});
document.querySelector('.bD').addEventListener('click', (event) => {
    operation(event);
});
document.querySelector('.bM').addEventListener('click', (event) => {
    operation(event);
});
document.querySelector('.bC').addEventListener('click', (event) => {
    Clear();
});
document.querySelector('.bSolve').addEventListener('click', (event) => {
    solve();
});
document.querySelector('.bBS').addEventListener('click', (event) => {
    BackSpace();
});



document.addEventListener("keydown", function (event) {
    if (s.innerHTML === 'Error')
        input = '';
    if (event.key >= 0 && event.key <= 9) {
        input += event.key;
        s.innerHTML = `${input}`;
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        input += event.key;
        s.innerHTML = `${input}`;
    } else if (event.key === 'Backspace') {
        BackSpace();
    } else if (event.key === 'Enter' || event.key === '=') {
        solve();
    } else if (event.key === 'C' || event.key === 'c') {
        Clear();
    }
});


window.onerror = function (message, source, lineno, colno, error) {
    alert('Invalid Input');
    console.error("Error details:", { message, source, lineno, colno, error });
};
