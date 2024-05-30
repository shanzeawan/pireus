function includeHTML() {
    let elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
        let file = el.getAttribute('data-include');
        fetch(file)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                el.innerHTML = data;
                el.removeAttribute('data-include');
                includeHTML();  // Recursive call to handle nested includes
            })
            .catch(err => console.error('Error loading file:', err));
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);
