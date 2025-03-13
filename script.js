let password = '';

function appendNumber(num) {
    if (password.length < 6) { // Password length is now 6
        password += num;
        updatePasswordDisplay();
    }
}

function clearPassword() {
    password = '';
    updatePasswordDisplay();
}

function updatePasswordDisplay() {
    const display = document.getElementById('passwordDisplay');
    if (password.length === 0) {
        display.textContent = 'Enter Password';
    } else {
        display.textContent = '*'.repeat(password.length);
    }
}

function submitPassword() {
    if (password === '158200') { // Updated password
        // Hide the lock screen
        document.getElementById('lockScreen').style.display = 'none';
        // Show the envelope page
        document.getElementById('envelopePage').style.display = 'flex';
    } else {
        alert('Incorrect Password. Try Again.');
        clearPassword();
    }
}