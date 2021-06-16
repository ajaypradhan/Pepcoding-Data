let canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 100;
});

// canvas drawing gets erased on window resize ???

// a context object which provides fun for 2d drawing
let ctx = canvas.getContext("2d");

let isPenDown = false;

canvas.addEventListener("mousedown", function (e) {
  isPenDown = true;
  let x = e.clientX;
  let y = e.clientY - 100;
  ctx.beginPath();
  moveTo(x, y);
});

canvas.addEventListener("mousemove", function (e) {
  if (isPenDown) {
    let x = e.clientX;
    let y = e.clientY - 100;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", function (e) {
  isPenDown = false;
});
