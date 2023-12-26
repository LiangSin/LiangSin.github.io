window.onload = function() {
  document.getElementById('toggleButton').addEventListener('click', function() {
      console.log("Button clicked"); // 测试按钮点击
      var image = document.getElementById('myImage');
      var visibility = image.getAttribute('visible') === 'true';
      image.setAttribute('visible', !visibility);
  });
};
