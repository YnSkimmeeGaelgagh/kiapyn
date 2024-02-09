function scugh () {
    let kiedHuittym = true;
    const saaghFreggyrt = document.getElementById("saagh-freggyrt");
    const saaghFocklyn = document.getElementById("saagh-focklyn");
    const focklyn = [...document.getElementsByClassName("fockle")];
    const sheeanClick = new Audio("../../sheeanyn/click.mp3");
    const sheeanArraghey = new Audio("../../sheeanyn/arraghey.mp3");
    const kiart = new Audio("../../sheeanyn/clinck.mp3");
    const neuChiart = new Audio("../../sheeanyn/neu-chiart.mp3");
    const raa = new Audio(raaghyn[earrooFeysht].sheean);
    let pointRyGheddyn = true;
    focklyn.forEach(w => w.onclick = reihit);
    function reihit (taghyrt) {
        if (kiedHuittym) {
            saaghFreggyrt.textContent = "";
            saaghFreggyrt.style.display = "block";
            saaghFreggyrt.style.color = "black";
            saaghFreggyrt.style.textAlign = "left";
            kiedHuittym = false;
        };
        if (sfxGoll) sheeanClick.play();
        taghyrt.target.remove();
        taghyrt.target.onclick = () => {
            if (sfxGoll) sheeanArraghey.play();
            taghyrt.target.remove();
            taghyrt.target.onclick = reihit;
            taghyrt.target.classList.remove("reihit");
            if ([...saaghFreggyrt.childNodes].length == 0) {
                soieSaaghFreggyrt();
                kiedHuittym = true;
            }
            saaghFocklyn.append(taghyrt.target);
        };
        taghyrt.target.classList.add("reihit");
        saaghFreggyrt.append(taghyrt.target);
    }
    const crammanFreggyrt = document.getElementById("cramman-freggyrt");
    function caghlaaSaagh (daah, farkiaght = 500) {
        const cleeah = document.getElementById("cleeah");
        cleeah.style.borderColor = daah;
        crammanFreggyrt.style.backgroundColor = daah;
        if (daah == "crimson") crammanFreggyrt.style.color = "white";
        else {
            const focklynFreggyrt = [...document.getElementsByClassName("reihit")];
            focklynFreggyrt.forEach(f => f.style.backgroundColor = daah);
        }
        setTimeout(() => {
            if (earrooFeysht - 1 == Object.keys(raaghyn).length) {
                jerreyGamman();
                return;
            };
            crammanFreggyrt.classList.remove("cramman-reihit");
            crammanFreggyrt.style.backgroundColor = "lightblue";
            crammanFreggyrt.style.color = "black";
            cleeah.style.borderColor = "transparent";
            if (daah == "chartreuse") troggalDuillag();
        }, farkiaght);
    }
    crammanFreggyrt.onclick = t => {
        const curStiagh = [...saaghFreggyrt.children].map(c => c.textContent).join(" ");
        const freggyrt = raaghyn[earrooFeysht].gaelg;
        const freggyrtElley = raaghyn[earrooFeysht].gaelgB;
        crammanFreggyrt.classList.add("cramman-reihit");
        if (curStiagh == freggyrt || curStiagh == freggyrtElley || curStiagh.length == 0) {
            let farkiaght = sfxGoll ? raa.duration * 1000 : 500;
            if (sfxGoll) {
                kiart.play();
                raa.play();
            }
            if (pointRyGheddyn) agg++;
            earrooFeysht++;
            kiedHuittym = true;
            caghlaaSaagh("chartreuse", farkiaght);
        }
        else {
            pointRyGheddyn = false;
            if (sfxGoll) neuChiart.play();
            caghlaaSaagh("crimson");
        }
    }
};