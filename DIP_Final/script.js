document.getElementById('toggleButton').addEventListener('click', function() {
    var image = document.getElementById('myImage');
    var visibility = image.getAttribute('visible') === 'true';
    image.setAttribute('visible', !visibility);
});
