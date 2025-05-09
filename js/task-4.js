const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = loginForm.elements.email.value.trim();
    const password = loginForm.elements.password.value.trim();

    if (email === '' || password === '') {
        return alert('All form fields must be filled in');
    }

    const loginFormData = {
        email: email,
        password: password,
    };

    console.log(loginFormData);

    loginForm.reset();
});
