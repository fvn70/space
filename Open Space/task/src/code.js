setEnable(false);

function setEnable(isEnable) {
    let checks = document.querySelector(".check-buttons").children;
    for (let el of checks) {
        el.disabled = !isEnable;
    }
    let levers = document.querySelector(".levers").children;
    for (let el of levers) {
        el.disabled = !isEnable;
    }
    document.querySelector('#launch').disabled = !isEnable;
    document.querySelector('#password').disabled = isEnable;
    document.querySelector('#pwd-button').disabled = isEnable;
}

function checkPassword() {
    let pwd = document.querySelector('#password').value;
    if (pwd == "TrustNo1") {
        setEnable(true);
    }
}