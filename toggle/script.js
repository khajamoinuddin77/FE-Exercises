const switchInput = document.getElementById('switchInput');
const toggleSwitch = document.getElementById('toggleSwitch');

switchInput.addEventListener('change', function() {
    if (this.checked) {
        toggleSwitch.classList.add('on');
    } else {
        toggleSwitch.classList.remove('on');
    }
});
