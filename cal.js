// Select the screen and buttons
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.calc-button');

// Variable to store the current input and calculation state
let currentInput = '';

// Function to handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();

        if (value === 'C') {
            // Clear the screen
            currentInput = '';
            screen.textContent = '0';
        } else if (value === '\u2190') {
            // Backspace
            currentInput = currentInput.slice(0, -1);
            screen.textContent = currentInput || '0';
        } else if (value === '=') {
            // Evaluate the expression
            try {
                currentInput = eval(currentInput.replace(/\u00d7/g, '*').replace(/\u00f7/g, '/')) + '';
                screen.textContent = currentInput;
            } catch (error) {
                screen.textContent = 'Error';
                currentInput = '';
            }
        } else {
            // Append the value to the current input
            currentInput += value.replace('×', '*').replace('÷', '/');
            screen.textContent = currentInput;
        }
    });
});
