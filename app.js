// Elements
const elements = document.querySelectorAll('.btn');

// Event
elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];

        document.execCommand(command, false, null);
    })
})