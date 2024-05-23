var css = document.querySelector(".color-codes"); 
var colorPickers = document.querySelectorAll(".color-picker"); 
var bodyGradient = document.getElementById("gradient"); 
var gradientDirection = document.getElementsByName("gradientDirection")[0]; 

function currentSettings() {
    var CSSprop = window.getComputedStyle(bodyGradient, null).getPropertyValue("background-image");
    css.textContent = CSSprop;
}

currentSettings();

function returnColor() {
    var gradientColors = [];
    colorPickers.forEach(function(picker) {
        gradientColors.push(picker.value);
    });
    bodyGradient.style.background = "linear-gradient(" + gradientDirection.value + ", " + gradientColors.join(", ") + ")";
    currentSettings();
}

document.querySelector('select[name="gradientDirection"]').onchange = returnColor;
colorPickers.forEach(function(picker) {
    picker.addEventListener("input", returnColor);
});

document.getElementById("addColor").addEventListener("click", function() {
    var newColorPicker = document.createElement("input");
    newColorPicker.setAttribute("type", "color");
    newColorPicker.setAttribute("class", "color-picker");
    newColorPicker.setAttribute("name", "color" + (colorPickers.length + 1));
    newColorPicker.value = "#000000";
    document.querySelector(".gradient-container").insertBefore(newColorPicker, document.getElementById("addColor"));
    colorPickers = document.querySelectorAll(".color-picker");
    newColorPicker.addEventListener("input", returnColor);
});
