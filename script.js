document.addEventListener('DOMContentLoaded', () => {
    // تهيئة شريط تقدم المهمة
    const progressBar = document.querySelector('.progress-bar');
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        if (progress >= 100) clearInterval(progressInterval);
    }, 50);

    // إدارة دائرة التقدم
    const progressCircle = document.querySelector('.progress-circle');
    const progressText = document.querySelector('.progress-text');
    let currentProgress = 30;

    progressCircle.addEventListener('click', () => {
        currentProgress = (currentProgress + 5) % 100;
        progressCircle.style.background = `conic-gradient(
            var(--secondary-color) ${currentProgress}%,
            #eee ${currentProgress}%
        )`;
        progressText.textContent = `${currentProgress}%`;
        updateMotivationalMessage();
    });

    // تحديث الرسائل التحفيزية
    const messages = [
        "﴿وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ﴾",
        "أحسنت! واصل التقدم 🌟",
        "كل حرف تقرأه نور في ميزانك!",
        "اللهم اجعل القرآن ربيع قلوبنا"
    ];

    function updateMotivationalMessage() {
        const messageElement = document.getElementById('message-text');
        messageElement.style.animation = 'fadeIn 0.5s ease';
        messageElement.textContent = messages[Math.floor(Math.random() * messages.length)];
        setTimeout(() => {
            messageElement.style.animation = '';
        }, 500);
    }

    setInterval(updateMotivationalMessage, 30000);
});

function toggleSettings() {
    const menu = document.getElementById('settings-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', (event) => {
    const menu = document.getElementById('settings-menu');
    const settingsButton = document.querySelector('.nav-icon');
    
    if (!menu.contains(event.target) && !settingsButton.contains(event.target)) {
        menu.style.display = 'none';
    }
});

window.addEventListener('scroll', () => {
    document.getElementById('settings-menu').style.display = 'none';
});

function startReading() {
    window.location.href = 'reading.html';
}
