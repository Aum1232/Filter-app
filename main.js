function setup(){
    canvas = createCanvas(650,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    color = "";
}
function draw() {
    image(0,0,650,480);
    tint(color);
}
function take_snapshot() {
    save("mypicture.png");
}
function Filter() {
    color = document.getElementById("input").value;
}