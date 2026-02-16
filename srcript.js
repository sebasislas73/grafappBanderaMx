document.addEventListener("DOMContentLoaded", function() {

    const greenRange = document.getElementById("greenRange");
    const redRange = document.getElementById("redRange");

    const greenSection = document.getElementById("green");
    const redSection = document.getElementById("red");

    const greenHex = document.getElementById("greenHex");
    const redHex = document.getElementById("redHex");

    function toHex(value) {
        let hex = parseInt(value).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    greenRange.addEventListener("input", function() {
        let value = greenRange.value;
        greenSection.style.backgroundColor = `rgb(0,${value},0)`;
        greenHex.textContent = "#00" + toHex(value) + "00";
    });

    redRange.addEventListener("input", function() {
        let value = redRange.value;
        redSection.style.backgroundColor = `rgb(${value},0,0)`;
        redHex.textContent = "#" + toHex(value) + "0000";
    });

});
