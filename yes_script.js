function displayUserName() {
    var userName = localStorage.getItem('userName');

    var el = document.getElementById('userNameDisplay');

    if (userName) {
        var text = "YAYYYEEEEE!!!!!!!!!!! Let's go, " + userName + "!";
        el.textContent = '';
        var i = 0;
        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        type();
    } else {
        el.textContent = "YAYYYEEEEE!!!!!!!!!!!";
    }
}

function launchConfetti() {
    var count = 200;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    confetti(Object.assign({}, defaults, {
        particleCount: Math.floor(count * 0.25),
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    }));
    confetti(Object.assign({}, defaults, {
        particleCount: Math.floor(count * 0.25),
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    }));
    confetti(Object.assign({}, defaults, {
        particleCount: Math.floor(count * 0.25),
        origin: { x: randomInRange(0.3, 0.7), y: Math.random() - 0.2 }
    }));
    confetti(Object.assign({}, defaults, {
        particleCount: Math.floor(count * 0.25),
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 }
    }));
}

function initYes() {
    displayUserName();
    setTimeout(launchConfetti, 300);
    setTimeout(launchConfetti, 900);
    setTimeout(launchConfetti, 1800);
    setTimeout(launchConfetti, 3000);
    setInterval(launchConfetti, 5000);
}

console.log("Made with love by - Urvish Patel ❣️");
