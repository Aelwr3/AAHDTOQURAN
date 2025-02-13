// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
    // تحديث شريط تقدم المهمة اليومية
    const progressBar = document.querySelector('.progress-bar');
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        if (progress >= 100) clearInterval(progressInterval);
    }, 50);

    // إدارة النقر على دائرة التقدم
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

    // تحديث الرسالة كل 30 ثانية
    setInterval(updateMotivationalMessage, 30000);
});

// بدء القراءة
function startReading() {
    window.location.href = 'reading.html';
}
