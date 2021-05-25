var canvas = new fabric.Canvas('canvas');

player_x = 30;
player_y = 30;

block_width = 30;
block_height = 30;

var player_object = "";
var block_object = "";

function update_img(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top: player_y, left: player_x});
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({top: player_y, left: player_x});
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", keyisdown);
function keyisdown(e){
    var keypressed = e.keyCode;
    console.log("keydown");
    if(e.shiftKey == true && keypressed == '71'){
        console.log("shift+g = greater value")
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if(e.shiftKey == true && keypressed == '83'){
        console.log("shift+s = smaller value")
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if(keypressed == '38'){
        console.log("up key is pressed - 38")
        up();
    }

    if(keypressed == '40'){
        console.log("down key is pressed - 40")
        down();
    }

    if(keypressed == '39'){
        console.log("right key is pressed - 39")
        right();

    }

    if(keypressed == '37'){
        console.log("left key is pressed - 37")
        left();
    }

    if(keypressed == '67'){
        console.log("cloud - c")
        new_image("cloud.jpg");
    }

    if(keypressed == '68'){
        console.log("dark_green - d")
        new_image("dark_green.png");
    }

    if(keypressed == '71'){
        console.log("ground - g")
        new_image("ground.png");
    }

    if(keypressed == '76'){
        console.log("light_green - l")
        new_image("light_green.png");
    }

    if(keypressed == '82'){
        console.log("roof - r")
        new_image("roof.jpg");
    }

    if(keypressed == '84'){
        console.log("trunk - 84")
        new_image("trunk.jpg");
    }

    if(keypressed == '85'){
        console.log("unique - u")
        new_image("unique.png");
    }

    if(keypressed == '87'){
        console.log("wall - w")
        new_image("wall.jpg");
    }

    if(keypressed == '89'){
        console.log("yellow_wall - y")
        new_image("yellow_wall.png");
    }
}

function up(){
    if(player_y > 0){
        player_y = player_y - block_height;
        console.log("player x ="+player_x+", player y ="+player_y);
        console.log("height of block image = "+block_height+", block width = "+block_width);
        canvas.remove(player_object);
        update_img();
    }
}

function down(){
    if(player_y <= 500){
        player_y = player_y + block_height;
        console.log("player x ="+player_x+", player y ="+player_y);
        console.log("height of block image = "+block_height+", block width = "+block_width);
        canvas.remove(player_object);
        update_img();
    }
}

function left(){
    if(player_x > 0){
        player_x = player_x - block_width;
        console.log("player x ="+player_x+", player y ="+player_y);
        console.log("height of block image = "+block_height+", block width = "+block_width);
        canvas.remove(player_object);
        update_img();
    }
}

function right(){
    if(player_x <= 800){
        player_x = player_x + block_width;
        console.log("player x ="+player_x+", player y ="+player_y);
        console.log("height of block image = "+block_height+", block width = "+block_width);
        canvas.remove(player_object);
        update_img();
    }
}