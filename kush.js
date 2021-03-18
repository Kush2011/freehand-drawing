canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "";
radius = "";
width = "";
window.addEventListener("mymousedowndown", my_mousedown);

function my_mousedown(e){
    
    color = document.getElementById("input_color").value;
    radius = document.getElementById("input_radius").value;
    width = document.getElementById("input_width").value;
    mouseEvent = mouseDown;
}

window.addeventlistener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX = canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY = canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        console.log("current position of x & y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}