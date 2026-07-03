function nextPage() {
    document.getElementById('transitionOverlay').classList.add('active');
    setTimeout(function () {
        window.location.href = "yes.html";
    }, 600);
}

function moveButton() {
    var btn = document.getElementById('noButton');
    var maxX = window.innerWidth - btn.offsetWidth - 20;
    var maxY = window.innerHeight - btn.offsetHeight - 20;
    var x = Math.random() * maxX;
    var y = Math.random() * maxY;
    btn.style.left = Math.max(10, x) + 'px';
    btn.style.top = Math.max(10, y) + 'px';
}

function typeWriter() {
    var text = "DO YOU WANNA GO ON A DATE WITH ME ?";
    var el = document.querySelector('.ask');
    el.textContent = '';
    var i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 70);
        } else {
            el.classList.add('done');
        }
    }
    type();
}

function createHeart() {
    var heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '❤';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 24 + 12) + 'px';
    heart.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 7000);
}

function askName() {
    var userName;
    while (true) {
        userName = prompt("What is your name? (no spaces)");
        if (userName === null) break;
        if (userName.trim() && !/\s/.test(userName)) {
            localStorage.setItem('userName', userName.trim());
            break;
        }
    }
}

function init() {
    askName();
    typeWriter();
    setInterval(createHeart, 600);
}

console.log("Made with love by - Urvish Patel ❣️");
