
set_time();

function set_time() {
    const time_setOff = document.getElementById('set_time');
    const time_setOn = new Date();
    const time = time_setOn.getHours();

    if (time >= 0 && time < 6) {
        time_setOff.innerHTML = "Boa Madrugada!"
    };
    
    if (time >= 6 && time < 12) {
        time_setOff.innerHTML = "Bom Dia!"
    };

    
    if (time > 12 && time <= 18) {
        time_setOff.innerHTML = "Boa Tarde!"
    };

    if (time > 18 && time <= 23) {
        time_setOff.innerHTML = "Boa Noite!"
    };

    switch (time) {
        default:
            console.log('null');
    }
}

function manutention() {
    window.location.replace("./private/manutencao.htm")
}
