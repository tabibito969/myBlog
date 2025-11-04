 for(let i = 6; i >= 0; i--) {
    const btn = document.getElementById("a" + i);
    if (!btn) continue;
    btn.onclick = function () {
        const audio = document.getElementById("audio" + i);
        const img = document.getElementById("img" + i);
        if (!audio) return;
        if (audio.paused) {
            audio.play();
            img.classList.add('spin');
        } else {
            audio.pause();
            img.classList.remove('spin');
        }
    };
}