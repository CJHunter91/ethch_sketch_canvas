window.addEventListener('load', function(){
  // var canvas = document.getElementById('main-canvas');
  // var context = canvas.getContext('2d')
  // console.log(context);
  // context.fillRect(200,200, 100,100)
  // context.fillStyle = "green";

  // context.fillRect(150,150, 100,100)

  // context.beginPath();
  // context.moveTo(100,100);
  // context.lineTo(100,200);
  // context.stroke();

  // context.beginPath();
  // context.moveTo(200,200);
  // context.lineTo(200,300);
  // context.lineTo(100,300);
  // context.closePath();
  // context.stroke();

  // context.beginPath();
  // context.arc(400, 300, 100, 0, Math.PI *2, true);

  // context.stroke();

  // canvas.addEventListener('click', function(event){
  //   drawCircle(event.layerX, event.layerY);
  //   drawCat(event.layerX, event.layerY);
  // })

  // var drawCircle = function(x,y){
  //   console.log(x,y)
  //   context.beginPath();
  //   context.arc(x, y, 100, 0, Math.PI *2, true);
  //   context.fill();
  //   context.stroke();
  // }

  // var img = document.createElement('img');
  // img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png"

  // var drawCat = function(x,y){
  //   context.drawImage(img, x,y,90,90);
  // }

  // img.addEventListener('load', drawCat);

  // var changeColor = function(){
  //   console.log(this);
  //   context.strokeStyle = this.value;
  //   context.fillStyle = this.value;
  // }

  // var colorPicker = document.querySelector('#input-color')

  // colorPicker.addEventListener('change', changeColor);
  var currentPositionX = 200
  var currentPositionY = 200;
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d')
  context.fillStyle = 'red';
  context.fillRect(0,0,40, 500)
  context.fillRect(0, 0, 600, 40 )
  context.fillRect(560, 0, 40, 500 )
  context.fillRect(0, 400, 600, 100 )
  context.fillStyle = 'white';
  context.beginPath();
  context.arc(60, 450, 40, 0, Math.PI *2, true);
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(540, 450, 40, 0, Math.PI *2, true);
  context.fill();
  context.stroke();
  // var context = context.fillRect(0,0,40, 500)
  // var context = context.fillRect(0,0,40, 500)


  var validMove = function(directionX, directionY){
    console.log("running");
    var valid = true
    if(directionX + currentPositionX < 40 || directionX + currentPositionX > canvas.width-40){
      valid = false;
    }
    if(directionY + currentPositionY < 40 || directionY + currentPositionY > canvas.height-100){
      valid = false;
    }
    return valid;
  }

  var drawLine = function(directionX, directionY){
    context.beginPath();
    directionY *= 5;
    directionX *= 5;
    if(validMove(directionX, directionY)){
    context.moveTo(currentPositionX,currentPositionY);
    context.lineTo(currentPositionX + directionX, currentPositionY + directionY);
    context.stroke();
    currentPositionX = currentPositionX + directionX;
    currentPositionY = currentPositionY+ directionY;
  }
  }

  window.addEventListener('keydown', function(event){
    var code = event.keyCode;
    switch (code){
      case 37: drawLine(-1, 0);break;
      case 38: drawLine(0, -1);break;
      case 39: drawLine(1, 0);break;
      case 40: drawLine(0, 1);break;
    }
  })


  var clearScreen = document.getElementById('clear-screen');
  clearScreen.addEventListener('click', function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    currentPositionX = 200
    currentPositionY = 200;
    context.fillStyle = 'red';
    context.fillRect(0,0,40, 500)
    context.fillRect(0, 0, 600, 40 )
    context.fillRect(560, 0, 40, 500 )
    context.fillRect(0, 400, 600, 100 )
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(60, 450, 40, 0, Math.PI *2, true);
    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(540, 450, 40, 0, Math.PI *2, true);
    context.fill();
    context.stroke();
  });

  var colorPicker = document.getElementById('input-color');
  colorPicker.addEventListener('change', function() {
    context.strokeStyle = this.value;
  })







})