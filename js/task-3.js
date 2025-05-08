const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const inputName = nameInput.value.trim();

    if (inputName === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = inputName;
    }
});
