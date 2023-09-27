import { Circle } from "./circle.js";
import { checkCollission } from "./collissionHandling.js";

window.addEventListener("load", ()=>{
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth * .8;
    canvas.height = window.innerHeight * .6;
    console.log(canvas.height*.125);
    speedSlider.min = 0;
    speedSlider.max = 4;
    let speed = 1;

    //We are hardcoding the circles for clarity, since we only need and want two.
    let circles = [
        new Circle(canvas.width * .25, canvas.height * .5, 'tomato', canvas.height),
        new Circle(canvas.width * .75, canvas.height * .5, 'skyblue', canvas.height)];
    

    speedSlider.addEventListener("change", e=>{
        speed = e.target.value;
        speedDisplay.innerHTML = `Speed is ${speed}`;
        console.log(speed);
    });
    
    function animationLoop()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        circles.forEach(obj =>{
            obj.draw(context);
            obj.update(speed);
        });
        checkCollission(circles[0], circles[1], context);
    
        requestAnimationFrame(animationLoop);
    }
    animationLoop()
});