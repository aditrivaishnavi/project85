canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1 = {}

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2 = {}

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg"

function add() {
    console.log("add is being called")
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1();
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2();
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1.width, car1.height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2.width, car2.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38') {
        console.log("up arrow key");
        car1_up();
    }

    if (keyPressed == '40') {
        console.log("down arrow key");
        car1_down();
    }

    if (keyPressed == '37') {
        console.log("left arrow key");
        car1_left();
    }

    if (keyPressed == '39') {
        console.log("right arrow key");
        car1_right();
    }

    if (keyPressed == '87') {
        console.log("key w")
        car2_up();
    }

    if (keyPressed == '83') {
        console.log("key s")
        car2_down();
    }

    if (keyPressed == '65') {
        console.log("key a")
        car2_left();
    }

    if (keyPressed == '68') {
        console.log("key d")
        car2_right();
    }
    
}

function car1_up() {
    if(car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if(car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if(car1_x >= 0) {
        car1_x = car1_x - 10
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2(); 
    }
}

function car1_right() {
    if(car1_x <= 500) {
        car1_x = car1_x + 10
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2(); 
    }
}

function car2_up() {
    if(car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {
    if(car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {
    if(car2_x >= 0) {
        car2_x = car2_x - 10
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2(); 
    }
}

function car2_right() {
    if(car2_x <= 500) {
        car2_x = car2_x + 10
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2(); 
    }
}

if(car1_x > 700) {
    console.log("car1 Won");
    document.getElementById('game_status').innerHTML = "Car 1 Won!!"
}

if(car2_x > 700) {
    console.log("car2 Won");
    document.getElementById('game_status').innerHTML = "Car 2 Won!!"
}
    