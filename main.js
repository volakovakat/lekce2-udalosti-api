// tady je místo pro náš program
let odstavec = document.querySelector("p");
let pismo = 16;
let zvuk = document.querySelector("#zvuk");

function priNajeti() {
    odstavec.classList.toggle("odstavec");

}

function cervenyPoKliknuti() {
    odstavec.classList.toggle("cerveneTlacitko");
}

function vetsiPoKliknuti() {
    pismo = pismo + 1;
    odstavec.style.fontSize = pismo + 'px';
}

function prehrat() {
    zvuk.play();
}

function hlasitost(uroven) {
    zvuk.volume = uroven;
}

function odZacatku() {
    zvuk.currentTime = 0;
}

