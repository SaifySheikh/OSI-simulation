var data;

var data;

function startSimulation() {
  data = prompt('Enter the data to be transferred(Max 8 charecter):');
  console.log('Entered data:', data);

  if (data == null) {
    return;
  }

  // Append '#' to make the length 8 if it is less than 8
  while (data.length < 8) {
    data += '#';
  }

  const character = [];

  for (let i = 0; i < data.length; i++) {
    character[i] = document.getElementById("layer1_" + (i + 1));
    character[i].innerHTML = data[i];
  }


//application to session
var full=document.getElementById("data");
var speed = 2;
var positionY = full.style.top;
var intervalId1 = setInterval(function() {
positionY += speed;
console.log(positionY);
full.style.top = positionY + "px";
if (positionY >= window.innerHeight - full.clientHeight) {
  positionY = 0;
}
if(positionY>=230){
clearInterval(intervalId1);
session1();
}
}, 50);

function session1(){
    var layer4_1=document.getElementById("layer4_1");
var speed = 2;
var positionY = layer4_1.style.top;
var intervalId2 = setInterval(function() {
positionY += speed;
console.log(positionY);
layer4_1.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer4_1.clientHeight) {
  positionY = 0;
}
}, 50);
setTimeout(function() {
clearInterval(intervalId2);
transport1();
}, 1500);
}
}

function transport1(){
    var layer2_1=document.getElementById("layer2_1");
var speed = 2;
var positionY = layer2_1.style.top;
var intervalId3 = setInterval(function() {
positionY += speed;
console.log(positionY);
layer2_1.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer2_1.clientHeight) {
  positionY = 0;
}
}, 50);
setTimeout(function() {
clearInterval(intervalId3);
network1();
}, 1450);
}

function network1() {
  var layer1_1 = document.getElementById("layer1_1");
  var speed = 2;
  var positionY = layer1_1.style.top;
  var intervalId4 = setInterval(function () {
    positionY += speed;
    layer1_1.style.top = positionY + "px";
    if (positionY >= window.innerHeight - layer1_1.clientHeight) {
      positionY = 0;
    }
  }, 50);

  setTimeout(function () {
    clearInterval(intervalId4);
    layer1_1.innerHTML = 'H' + layer1_1.innerHTML + 'T';
    Horizontal1(); 
  }, 4500); 
}




function Horizontal1() {
var layer1_1 = document.getElementById("layer1_1");
var speed = 2;
var positionX = layer1_1.style.left;

var intervalId5 = setInterval(function () {
  positionX += speed;
  layer1_1.style.left = positionX + "px";

  if (positionX >= window.innerWidth - layer1_1.clientWidth) {
  positionX = 0;
}
if(positionX>=870){
  clearInterval(intervalId5);
receiver_network1();
}
}, 10); 
}

function receiver_network1() {
  var layer1_1 = document.getElementById("layer1_1");
  var speed = 2;
  var positionY = parseInt(layer1_1.style.top);
  console.log(positionY);
  var intervalId6 = setInterval(function () {
    positionY -= speed;
    layer1_1.style.top = positionY + "px";
    if (positionY >= window.innerHeight - layer1_1.clientHeight) {
      positionY = 0;
    }
    if (positionY <= 0) {
      clearInterval(intervalId6);
      layer1_1.innerHTML = layer1_1.innerHTML.slice(1, -1);
      network2();
    }
  }, 50);
}

//
function network2() {
var layer1_2 = document.getElementById("layer1_2");
var speed = 2;
var positionY = layer1_2.style.top;
var intervalId7 = setInterval(function () {
positionY += speed;
layer1_2.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_2.clientHeight) {
  positionY = 0;
}
}, 50);

setTimeout(function () {
clearInterval(intervalId7);
layer1_2.innerHTML = 'H' + layer1_2.innerHTML + 'T';
Horizontal2(); 
}, 4500); 
}
function Horizontal2() {
var layer1_2 = document.getElementById("layer1_2");
var speed = 2;
var positionX = layer1_2.style.left;

var intervalId8 = setInterval(function () {
  positionX += speed;
  layer1_2.style.left = positionX + "px";

  if (positionX >= window.innerWidth - layer1_2.clientWidth) {
  positionX = 0;
}
if(positionX>=890){
  clearInterval(intervalId8);
  receiver_network2();
}
}, 10); 
}

function receiver_network2() {
var layer1_2 = document.getElementById("layer1_2");
var speed = 2;
var positionY = parseInt(layer1_2.style.top);
console.log(positionY);
var intervalId9 = setInterval(function () {
positionY -= speed;
layer1_2.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_2.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId9);
  layer1_2.innerHTML = layer1_2.innerHTML.slice(1, -1);
  receiver_transport1();
}
}, 50);
}
function receiver_transport1() {
var layer2_1 = document.getElementById("layer2_1");
var speed = 2;
var positionY = parseInt(layer2_1.style.top);
console.log(positionY);
var intervalId9 = setInterval(function () {
positionY -= speed;
layer2_1.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer2_1.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId9);
  transport2();
}
}, 50);
}





function transport2(){
    var layer2_2=document.getElementById("layer2_2");
var speed = 2;
var positionY = layer2_2.style.top;
var intervalId3 = setInterval(function() {
positionY += speed;
console.log(positionY);
layer2_2.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer2_2.clientHeight) {
  positionY = 0;
}
}, 50);
setTimeout(function() {
clearInterval(intervalId3);
network3();
}, 1450);
}

function network3() {
var layer1_3 = document.getElementById("layer1_3");
var speed = 2;
var positionY = layer1_3.style.top;
var intervalId4 = setInterval(function () {
positionY += speed;
layer1_3.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_3.clientHeight) {
  positionY = 0;
}
}, 50);

setTimeout(function () {
clearInterval(intervalId4);
layer1_3.innerHTML = 'H' + layer1_3.innerHTML + 'T';
Horizontal3(); 
}, 4500); 
}



function Horizontal3() {
var layer1_3 = document.getElementById("layer1_3");
var speed = 2;
var positionX = layer1_3.style.left;

var intervalId5 = setInterval(function () {
  positionX += speed;
  layer1_3.style.left = positionX + "px";

  if (positionX >= window.innerWidth - layer1_3.clientWidth) {
  positionX = 0;
}
if(positionX>=910){
  clearInterval(intervalId5);
receiver_network3();
}
}, 10); 
}

function receiver_network3() {
var layer1_3 = document.getElementById("layer1_3");
var speed = 2;
var positionY = parseInt(layer1_3.style.top);
console.log(positionY);
var intervalId6 = setInterval(function () {
positionY -= speed;
layer1_3.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_3.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId6);
  layer1_3.innerHTML = layer1_3.innerHTML.slice(1, -1);
  network4();
}
}, 50);
}

function network4() {
var layer1_4 = document.getElementById("layer1_4");
var speed = 2;
var positionY = layer1_4.style.top;
var intervalId7 = setInterval(function () {
positionY += speed;
layer1_4.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_4.clientHeight) {
  positionY = 0;
}
}, 50);

setTimeout(function () {
clearInterval(intervalId7);
layer1_4.innerHTML = 'H' + layer1_4.innerHTML + 'T';
Horizontal4(); 
}, 4500); 
}
function Horizontal4() {
var layer1_4 = document.getElementById("layer1_4");
var speed = 2;
var positionX = layer1_4.style.left;

var intervalId8 = setInterval(function () {
  positionX += speed;
  layer1_4.style.left = positionX + "px";

  if (positionX >= window.innerWidth - layer1_4.clientWidth) {
  positionX = 0;
}
if(positionX>=930){
  clearInterval(intervalId8);
  receiver_network4();
}
}, 10); 
}

function receiver_network4() {
var layer1_4 = document.getElementById("layer1_4");
var speed = 2;
var positionY = parseInt(layer1_4.style.top);
console.log(positionY);
var intervalId9 = setInterval(function () {
positionY -= speed;
layer1_4.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_4.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId9);
  layer1_4.innerHTML = layer1_4.innerHTML.slice(1, -1);
  receiver_transport2();
}
}, 50);
}
function receiver_transport2() {
var layer2_2 = document.getElementById("layer2_2");
var speed = 2;
var positionY = parseInt(layer2_2.style.top);
console.log(positionY);
var intervalId9 = setInterval(function () {
positionY -= speed;
layer2_2.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer2_2.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId9);
  receiver_session1();
}
}, 50);
}
function receiver_session1() {
var layer4_1 = document.getElementById("layer4_1");
var speed = 2;
var positionY = parseInt(layer4_1.style.top);
console.log(positionY);
var intervalId9 = setInterval(function () {
positionY -= speed;
layer4_1.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer4_1.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId9);
  session2();
}
}, 50);
}



function session2(){
    var layer4_2=document.getElementById("layer4_2");
var speed = 2;
var positionY = layer4_2.style.top;
var intervalId2 = setInterval(function() {
positionY += speed;
console.log(positionY);
layer4_2.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer4_2.clientHeight) {
  positionY = 0;
}
}, 50);
setTimeout(function() {
clearInterval(intervalId2);
transport3();
}, 1500);
}

function transport3(){
    var layer2_3=document.getElementById("layer2_3");
var speed = 2;
var positionY = layer2_3.style.top;
var intervalId3 = setInterval(function() {
positionY += speed;
console.log(positionY);
layer2_3.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer2_3.clientHeight) {
  positionY = 0;
}
}, 50);
setTimeout(function() {
clearInterval(intervalId3);
network5();
}, 1450);
}

function network5() {
var layer1_5 = document.getElementById("layer1_5");
var speed = 2;
var positionY = layer1_5.style.top;
var intervalId4 = setInterval(function () {
positionY += speed;
layer1_5.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_5.clientHeight) {
  positionY = 0;
}
}, 50);

setTimeout(function () {
clearInterval(intervalId4);
layer1_5.innerHTML = 'H' + layer1_5.innerHTML + 'T';
Horizontal5(); 
}, 4500); 
}



function Horizontal5() {
var layer1_5 = document.getElementById("layer1_5");
var speed = 2;
var positionX = layer1_5.style.left;

var intervalId5 = setInterval(function () {
  positionX += speed;
  layer1_5.style.left = positionX + "px";

  if (positionX >= window.innerWidth - layer1_5.clientWidth) {
  positionX = 0;
}
if(positionX>=950){
  clearInterval(intervalId5);
receiver_network5();
}
}, 10); 
}

function receiver_network5() {
var layer1_5 = document.getElementById("layer1_5");
var speed = 2;
var positionY = parseInt(layer1_5.style.top);
console.log(positionY);
var intervalId6 = setInterval(function () {
positionY -= speed;
layer1_5.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_5.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId6);
  layer1_5.innerHTML = layer1_5.innerHTML.slice(1, -1);
  network6();
}
}, 50);
}
//
function network6() {
var layer1_6 = document.getElementById("layer1_6");
var speed = 2;
var positionY = layer1_6.style.top;
var intervalId7 = setInterval(function () {
positionY += speed;
layer1_6.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_6.clientHeight) {
  positionY = 0;
}
}, 50);

setTimeout(function () {
clearInterval(intervalId7);
layer1_6.innerHTML = 'H' + layer1_6.innerHTML + 'T';
Horizontal6(); 
}, 4500); 
}
function Horizontal6() {
var layer1_6 = document.getElementById("layer1_6");
var speed = 2;
var positionX = layer1_6.style.left;

var intervalId8 = setInterval(function () {
  positionX += speed;
  layer1_6.style.left = positionX + "px";

  if (positionX >= window.innerWidth - layer1_6.clientWidth) {
  positionX = 0;
}
if(positionX>=970){
  clearInterval(intervalId8);
  receiver_network6();
}
}, 10); 
}

function receiver_network6() {
var layer1_6 = document.getElementById("layer1_6");
var speed = 2;
var positionY = parseInt(layer1_6.style.top);
console.log(positionY);
var intervalId9 = setInterval(function () {
positionY -= speed;
layer1_6.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_6.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId9);
  layer1_6.innerHTML = layer1_6.innerHTML.slice(1, -1);
  receiver_transport3();
}
}, 50);
}
function receiver_transport3() {
var layer2_3 = document.getElementById("layer2_3");
var speed = 2;
var positionY = parseInt(layer2_3.style.top);
var intervalId9 = setInterval(function () {
positionY -= speed;
layer2_3.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer2_3.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId9);
  transport4();
}
}, 50);
}





function transport4(){
    var layer2_4=document.getElementById("layer2_4");
var speed = 2;
var positionY = layer2_4.style.top;
var intervalId3 = setInterval(function() {
positionY += speed;
layer2_4.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer2_4.clientHeight) {
  positionY = 0;
}
}, 50);
setTimeout(function() {
clearInterval(intervalId3);
network7();
}, 1450);
}

function network7() {
var layer1_7 = document.getElementById("layer1_7");
var speed = 2;
var positionY = layer1_7.style.top;
var intervalId4 = setInterval(function () {
positionY += speed;
layer1_7.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_7.clientHeight) {
  positionY = 0;
}
}, 50);

setTimeout(function () {
clearInterval(intervalId4);
layer1_7.innerHTML = 'H' + layer1_7.innerHTML + 'T';
Horizontal7(); 
}, 4500); 
}



function Horizontal7() {
var layer1_7 = document.getElementById("layer1_7");
var speed = 2;
var positionX = layer1_7.style.left;

var intervalId5 = setInterval(function () {
  positionX += speed;
  layer1_7.style.left = positionX + "px";

  if (positionX >= window.innerWidth - layer1_7.clientWidth) {
  positionX = 0;
}
if(positionX>=990){
  clearInterval(intervalId5);
receiver_network7();
}
}, 10); 
}

function receiver_network7() {
var layer1_7 = document.getElementById("layer1_7");
var speed = 2;
var positionY = parseInt(layer1_7.style.top);
var intervalId6 = setInterval(function () {
positionY -= speed;
layer1_7.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_7.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId6);
  layer1_7.innerHTML = layer1_7.innerHTML.slice(1, -1);
  network8();
}
}, 50);
}

function network8() {
var layer1_8 = document.getElementById("layer1_8");
var speed = 2;
var positionY = layer1_8.style.top;
var intervalId7 = setInterval(function () {
positionY += speed;
layer1_8.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_8.clientHeight) {
  positionY = 0;
}
}, 50);

setTimeout(function () {
clearInterval(intervalId7);
layer1_8.innerHTML = 'H' + layer1_8.innerHTML + 'T';
Horizontal8(); 
}, 4500); 
}
function Horizontal8() {
var layer1_8 = document.getElementById("layer1_8");
var speed = 2;
var positionX = layer1_8.style.left;

var intervalId8 = setInterval(function () {
  positionX += speed;
  layer1_8.style.left = positionX + "px";

  if (positionX >= window.innerWidth - layer1_8.clientWidth) {
  positionX = 0;
}
if(positionX>=1010){
  clearInterval(intervalId8);
  receiver_network8();
}
}, 10); 
}

function receiver_network8() {
var layer1_8 = document.getElementById("layer1_8");
var speed = 2;
var positionY = parseInt(layer1_8.style.top);
var intervalId9 = setInterval(function () {
positionY -= speed;
layer1_8.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer1_8.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId9);
  layer1_8.innerHTML = layer1_8.innerHTML.slice(1, -1);
  receiver_transport4();
}
}, 50);
}
function receiver_transport4() {
var layer2_4 = document.getElementById("layer2_4");
var speed = 2;
var positionY = parseInt(layer2_4.style.top);
console.log(positionY);
var intervalId9 = setInterval(function () {
positionY -= speed;
layer2_4.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer2_4.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId9);
  receiver_session2();
}
}, 50);
}
function receiver_session2() {
var layer4_2 = document.getElementById("layer4_2");
var speed = 2;
var positionY = parseInt(layer4_2.style.top);
var intervalId9 = setInterval(function () {
positionY -= speed;
layer4_2.style.top = positionY + "px";
if (positionY >= window.innerHeight - layer4_2.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId9);
  receiver_end();
}
}, 50);
}
function receiver_end() {
var data = document.getElementById("data");
var speed = 2;
var positionY = parseInt(data.style.top);
var intervalId9 = setInterval(function () {
positionY -= speed;
data.style.top = positionY + "px";
if (positionY >= window.innerHeight - data.clientHeight) {
  positionY = 0;
}
if(positionY<=0){
  clearInterval(intervalId9);
  PrintReceivedData();
}
}, 50);
}

function PrintReceivedData() {
  alert('Receiver Received the data: ' + data);
}
