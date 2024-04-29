document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const generateBtn = document.getElementById("generateBtn");
    const colorCode = document.getElementById("colorCode");

    generateBtn.addEventListener("click", generateColor);

    function generateColor() {
        const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        canvas.style.backgroundColor = color;
        colorCode.textContent = color;
    }

    // Initial color generation
    generateColor();
});
