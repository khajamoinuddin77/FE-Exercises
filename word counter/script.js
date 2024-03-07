document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.getElementById('input-text');
    const wordCountDisplay = document.getElementById('word-count');

    textArea.addEventListener('input', function() {
        const text = textArea.value.trim();
        const words = text.split(/\s+/).filter(word => word !== '');
        const wordCount = words.length;
        wordCountDisplay.textContent = `Word Count: ${wordCount}`;
    });
});
