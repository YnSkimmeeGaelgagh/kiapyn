function jerreyGamman () {
    if (kiaullGoll) {
        lhoobGamman.pause();
        let kiaullJerrinagh = new Audio(agg >= 3 ? '../../sheeanyn/jerrey-mie.mp3' : '../../sheeanyn/jerrey-cadjin.mp3');
        kiaullJerrinagh.play();
    };
    const saaghJeant = document.getElementById("saagh-jeant");
    saaghJeant.style.visibility = "visible";
    const aggJerrinagh = document.getElementById("agg-jerrinagh");
    aggJerrinagh.textContent = agg;
    const reesht = document.getElementById("cramman-reesht");
    reesht.onclick = () => location.reload();
    const earrooFeyshtyn = Object.keys(raaghyn);
    const nynAgg = towse => {
        if (agg % 2) agg--;
        if (towse == agg) {
            caghlaaRoot(mooadys, towse);
            return "nyn-agg";
        } else return "agg-elley";
    };
    const aggyn = [...document.getElementsByClassName("aggyn")];
    const mooadys = earrooFeyshtyn.length;
    let ayrn = 1;
    for (let i = 0; i < 5; i++) {
        const earroo = Math.round(mooadys * ayrn);
        aggyn[i].children[1].textContent = earroo;
        aggyn[i].classList.add(nynAgg(earroo));
        ayrn -= .2;
    }
    const moylley = document.getElementById("moylley");
    if (agg < 2) moylley.textContent = "Prow reesht!"
}