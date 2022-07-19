function colorChange() {
    hex_components = ["0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9", "A", "B", "C", "D", "E", "f"];

    hex_code = '';

    for (let i = 0; i < 6 ; i++) {
        random_comp = Math.floor(Math.random() * hex_components.length);

        hex_code += hex_components[random_comp]
    }
    document.getElementById("colorName").innerHTML = "#" + hex_code;
    document.getElementsByClassName("mainBlock")[0].style.background = "#" + hex_code;
}