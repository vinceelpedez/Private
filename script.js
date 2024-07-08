function showLetter() {
    var letter = document.getElementById('letter');
    if (letter.classList.contains('show')) {
        letter.classList.remove('show');
    } else {
        letter.classList.add('show');
    }
}
