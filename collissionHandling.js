/*
//To calculate the distance between each circle we can first calculate the difference
between both their X coordinate (green line), and then the difference between the Y 
coordinates (blue line).
We can use Pythagoras theorem to then calculate the distance (green line).
If the distance is les or equal to the sum of the radii, collission has occured.
*/

export function checkCollission(a, b, ctx)
{
    let redCircle = a;
    let blueCircle = b;
    let xDist = blueCircle.centerX - redCircle.centerX;
    let yDist = blueCircle.centerY - redCircle.centerY;
    let totalDist = Math.sqrt(xDist * xDist + yDist * yDist);
    let radii = redCircle.radius + blueCircle.radius;
    if (totalDist < radii) {
        let tempX = redCircle.xVel;
        let tempY = redCircle.yVel;
        redCircle.xVel = blueCircle.xVel;
        redCircle.yVel = blueCircle.yVel;
        blueCircle.xVel = tempX;
        blueCircle.yVel = tempY;
    }


    drawTriangle(redCircle, blueCircle, ctx, xDist, yDist)

}

function drawTriangle(redCircle, blueCircle, ctx, xDist, yDist)
{
    //Draw the lines to visualise the imaginary triangle
    ctx.font = `12px monospace`
    let sideA = redCircle.centerX + xDist;
    let sideB = blueCircle.centerY - yDist;
    ctx.lineWidth = 3;
    //A side
    ctx.beginPath();
    ctx.strokeStyle = `green`;
    ctx.fillStyle = `green`;
    ctx.fillText(`X distance`, redCircle.centerX + xDist*.5, redCircle.centerY - 5)
    ctx.moveTo(redCircle.centerX, redCircle.centerY);
    ctx.lineTo(sideA, redCircle.centerY);
    ctx.stroke();
    //Y side
    ctx.beginPath();
    ctx.strokeStyle = `blue`;
    ctx.fillStyle = `blue`;
    ctx.fillText(`Y distance`, blueCircle.centerX + 5, blueCircle.centerY - yDist*.5);
    ctx.moveTo(blueCircle.centerX, blueCircle.centerY)
    ctx.lineTo(blueCircle.centerX, sideB);
    ctx.stroke();
    //Hypotenuse
    ctx.beginPath();
    ctx.strokeStyle = `gray`;
    ctx.moveTo(redCircle.centerX, redCircle.centerY)
    ctx.lineTo(blueCircle.centerX, blueCircle.centerY);
    ctx.fillStyle= `black`;
    ctx.fillText(`Hypotenuse`, (blueCircle.centerX + redCircle.centerX) *.5,
        (blueCircle.centerY + redCircle.centerY) *.5);
    ctx.stroke();
}


