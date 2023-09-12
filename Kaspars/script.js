document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('counter');
    var cube = document.querySelector('.cube');
    var square = document.querySelector('.square');
    var counter = 0;

    button.addEventListener('click', function() {
        counter++;
        button.innerHTML = counter; // update coutners
    
        // jauna pozicija ieksa square
        var squareWidth = square.clientWidth;
        var squareHeight = square.clientHeight;
        var cubeWidth = cube.clientWidth;
        var cubeHeight = cube.clientHeight;
  
        var maxX = squareWidth - cubeWidth;
        var maxY = squareHeight - cubeHeight;
  
        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);
    
        // rotacija starp -45 45 gradiem
        var randomAngle = Math.floor(Math.random() * 91) - 45;
  
        // kubs neiziet square
        randomX = Math.max(0, Math.min(randomX, maxX));
        randomY = Math.max(0, Math.min(randomY, maxY));
  
        // pievieno poziciju
        cube.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomAngle}deg)`;
    
        // nomainit kraasa random
        var randomColor = getRandomColor();
        cube.style.backgroundColor = randomColor;
    });

    // generators kraasai
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
