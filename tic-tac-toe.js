var namespace = "http://www.w3.org/2000/svg"
var turn = 1
var s1 = 0
var s2 = 0
var s3 = 0
var s4 = 0
var s5 = 0
var s6 = 0
var s7 = 0
var s8 = 0
var s9 = 0
var canvas = document.getElementById("game-board")
function square1(){
  if (s1 == 0){
    if (turn == 1){
  var square = document.createElementNS(namespace, "circle")
  square.setAttribute("cx","45")
  square.setAttribute("cy","45")
  square.setAttribute("r", "40")
  square.setAttribute("fill","green")
  canvas.appendChild(square)
  turn=2
}else if (turn == 2){
var rect = document.createElementNS(namespace, "rect")
rect.setAttribute("x", "12")
rect.setAttribute("y", "12")
rect.setAttribute("fill", "purple")
rect.setAttribute("height", "65")
rect.setAttribute("width", "65")
canvas.appendChild(rect)
turn = 1
  s1 = 1
}
}
}
function square2(){
  if (s2 == 0){
    if (turn == 1){
var square2 = document.createElementNS(namespace, "circle")
  square2.setAttribute("cx","145")
  square2.setAttribute("cy","45")
  square2.setAttribute("r", "40")
  square2.setAttribute("fill","green")
  canvas.appendChild(square2)
  turn = 2
}else if (turn == 2){
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", "112")
  rect.setAttribute("y", "12")
  rect.setAttribute("fill", "purple")
  rect.setAttribute("height", "65")
  rect.setAttribute("width", "65")
  canvas.appendChild(rect)
  turn = 1
    s2 = 1
}
}
}
function square3(){
  if (s3 == 0){
  if (turn == 1){
var square3 = document.createElementNS(namespace, "circle")
  square3.setAttribute("cx","245")
  square3.setAttribute("cy","45")
  square3.setAttribute("r", "40")
  square3.setAttribute("fill","green")
  canvas.appendChild(square3)
  turn = 2
}else if (turn == 2){
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", "212")
  rect.setAttribute("y", "12")
  rect.setAttribute("fill", "purple")
  rect.setAttribute("height", "65")
  rect.setAttribute("width", "65")
  canvas.appendChild(rect)
  turn = 1
    s3 = 1
}
}
}
function square4(){
  if (s4 == 0){
    if (turn == 1){
var square4 = document.createElementNS(namespace, "circle")
  square4.setAttribute("cx","45")
  square4.setAttribute("cy","145")
  square4.setAttribute("r", "40")
  square4.setAttribute("fill","green")
  canvas.appendChild(square4)
  turn = 2
}else if (turn == 2){
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", "12")
  rect.setAttribute("y", "112")
  rect.setAttribute("fill", "purple")
  rect.setAttribute("height", "65")
  rect.setAttribute("width", "65")
  canvas.appendChild(rect)
  turn = 1
    s4 = 1
}
}
}
function square5(){
  if (s5 == 0){
    if (turn == 1){
var square5 = document.createElementNS(namespace, "circle")
  square5.setAttribute("cx","145")
  square5.setAttribute("cy","145")
  square5.setAttribute("r", "40")
  square5.setAttribute("fill","green")
  canvas.appendChild(square5)
  turn = 2
}else if (turn == 2){
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", "112")
  rect.setAttribute("y", "112")
  rect.setAttribute("fill", "purple")
  rect.setAttribute("height", "65")
  rect.setAttribute("width", "65")
  canvas.appendChild(rect)
  turn = 1
    s5 = 1
}
}
}
function square6(){
  if (s6 == 0){
    if (turn == 1){
var square6 = document.createElementNS(namespace, "circle")
  square6.setAttribute("cx","245")
  square6.setAttribute("cy","145")
  square6.setAttribute("r", "40")
  square6.setAttribute("fill","green")
  canvas.appendChild(square6)
  turn = 2
  s6 = 1
}else if (turn == 2){
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", "212")
  rect.setAttribute("y", "112")
  rect.setAttribute("fill", "purple")
  rect.setAttribute("height", "65")
  rect.setAttribute("width", "65")
  canvas.appendChild(rect)
  turn = 1
    s6 = 1
}
}
}
function square7(){
  if (s7 == 0){
    if (turn == 1){
  var square7 = document.createElementNS(namespace, "circle")
  square7.setAttribute("cx","45")
  square7.setAttribute("cy","245")
  square7.setAttribute("r", "40")
  square7.setAttribute("fill","green")
  canvas.appendChild(square7)
  turn = 2
  s7 = 1
}
else if (turn == 2){
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", "12")
  rect.setAttribute("y", "212")
  rect.setAttribute("fill", "purple")
  rect.setAttribute("height", "65")
  rect.setAttribute("width", "65")
  canvas.appendChild(rect)
  turn = 1
    s7 = 1
}
}
}
function square8(){
  if (s8 == 0){
    if (turn == 1){
var square8 = document.createElementNS(namespace, "circle")
  square8.setAttribute("cx","145")
  square8.setAttribute("cy","245")
  square8.setAttribute("r", "40")
  square8.setAttribute("fill","green")
  canvas.appendChild(square8)
  turn = 2
}else if (turn == 2){
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", "112")
  rect.setAttribute("y", "212")
  rect.setAttribute("fill", "purple")
  rect.setAttribute("height", "65")
  rect.setAttribute("width", "65")
  canvas.appendChild(rect)
  turn = 1
    s8 = 1
}
}
}
function square9(){
  if (s9 == 0){
    if (turn == 1){
var square9 = document.createElementNS(namespace, "circle")
  square9.setAttribute("cx","245")
  square9.setAttribute("cy","245")
  square9.setAttribute("r", "40")
  square9.setAttribute("fill","green")
  canvas.appendChild(square9)
turn = 2
}else if (turn == 2){
var rect = document.createElementNS(namespace, "rect")
rect.setAttribute("x", "212")
rect.setAttribute("y", "212")
rect.setAttribute("fill", "purple")
rect.setAttribute("height", "65")
rect.setAttribute("width", "65")
turn = 1
canvas.appendChild(rect)
s9 = 1
}
}
}
function done(){
location.reload();
}
