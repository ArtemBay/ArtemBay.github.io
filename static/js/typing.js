var type_counter = 0;
var txt = ["PYTHON", "C++", "немного JS"];
var speed = 250;
var indexslovo = 0;

function typeDeleter() {
  if (type_counter >= 0) {
    document.getElementById("typer").innerHTML = txt[indexslovo].substring(0,type_counter);
    type_counter--;
    setTimeout(typeDeleter, 150);
  }
  else {
    type_counter = 0  
    indexslovo++
    if (indexslovo == txt.length)
      indexslovo = 0
    setTimeout(typeWriter, speed)
  }
}

function typeWriter() {
  if (type_counter < txt[indexslovo].length) {
    document.getElementById("typer").innerHTML += txt[indexslovo][type_counter];
    type_counter++;
    setTimeout(typeWriter, speed);
  }
  else {
    setTimeout(typeDeleter, 3000)
  }
}
typeWriter()