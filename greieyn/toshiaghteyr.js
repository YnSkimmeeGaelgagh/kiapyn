function soieToshiaght () {
    const crammanToshiaght = document.getElementById("cramman-toshiaght");
    crammanToshiaght.onclick = () => {
        kiaullGoll = document.getElementById("skirreyder-kiaull").checked;
        if (kiaullGoll) lhoobGamman.play();
        sfxGoll = document.getElementById("skirreyder-sfx").checked;
        const saaghToshiaght = document.getElementById("saagh-toshiaght");
        saaghToshiaght.remove();
    };
}