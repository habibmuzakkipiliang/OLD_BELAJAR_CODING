const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');

showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        passwordInput.type = 'email';
    } else {
        passwordInput.type = 'password';
    }
});