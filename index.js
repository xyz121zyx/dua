// Load saved counts on page load
window.onload = function() {
    for (let i = 1; i <= 7; i++) {
        let count = localStorage.getItem(`dua${i}`) || 0;
        document.getElementById(`count${i}`).textContent = count;
    }
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').textContent = 'Light Mode';
    }
}

function increment(num, event) {
    event.stopPropagation();
    let counter = document.getElementById(`count${num}`);
    let count = parseInt(counter.textContent) + 1;
    counter.textContent = count;
    localStorage.setItem(`dua${num}`, count);
}

function incrementAll() {
    for (let i = 1; i <= 6; i++) {
        let counter = document.getElementById(`count${i}`);
        let count = parseInt(counter.textContent) + 1;
        counter.textContent = count;
        localStorage.setItem(`dua${i}`, count);
    }
}

function toggleEdit(num, event) {
    event.stopPropagation();
    let counter = document.getElementById(`count${num}`);
    let editInput = document.getElementById(`edit${num}`);
    let saveBtn = editInput.nextElementSibling;
    editInput.style.display = 'inline-block';
    saveBtn.style.display = 'inline-block';
    counter.style.display = 'none';
    editInput.value = counter.textContent;
}

function saveEdit(num, event) {
    event.stopPropagation();
    let editInput = document.getElementById(`edit${num}`);
    let counter = document.getElementById(`count${num}`);
    let saveBtn = editInput.nextElementSibling;
    let newValue = parseInt(editInput.value) || 0;
    counter.textContent = newValue;
    localStorage.setItem(`dua${num}`, newValue);
    editInput.style.display = 'none';
    saveBtn.style.display = 'none';
    counter.style.display = 'inline-block';
}

function toggleContent(num, button) {
    let content = document.getElementById(`content${num}`);
    if (content) {
        const isExpanded = content.style.display === 'block';
        content.style.display = isExpanded ? 'none' : 'block';
        button.classList.toggle('expanded', !isExpanded);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        document.getElementById('themeToggle').textContent = 'Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById('themeToggle').textContent = 'Light Mode';
    }
}