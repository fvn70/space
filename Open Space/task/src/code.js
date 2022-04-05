let checks = document.querySelector(".check-buttons").children;
let levers = document.querySelector(".levers").children;
let password = document.querySelector('#password');
let launchBtn = document.querySelector('#launch');
let pwdBtn = document.querySelector('#pwd-button');
let rocket = document.querySelector(".rocket");

setEnable(false);

function setEnable(isEnable) {
    for (let el of checks) {
        el.disabled = !isEnable;
        el.setAttribute('onchange', 'enableLaunch()');
    }
    for (let el of levers) {
        el.disabled = !isEnable;
        el.setAttribute('onchange', 'enableLaunch()');
    }
    launchBtn.disabled = true;
    password.disabled = isEnable;
    pwdBtn.disabled = isEnable;
}

function checkPassword() {
    if (password.value == "TrustNo1") {
        setEnable(true);
    }
}

function isReadyControls() {
    let result = true;
    for (let el of checks) {
        result = result && isReadyChk(el);
    }
    for (let el of levers) {
        result = result && isReadyLever(el);
    }
    return result
}

function isReadyChk(el) {
    return el.checked;
}

function isReadyLever(el) {
    return el.value == 100;
}

function enableLaunch() {
    if (isReadyControls()) {
        launchBtn.disabled = false;
        launchBtn.setAttribute("style", "background-color: rgba(205, 0, 0, 1);");
    }
}

function onLaunch() {
    // alert("enableLunch");
    rocket.setAttribute("id", "start");
}
