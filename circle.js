export class Circle
{
    constructor(x, y, color, canvasHeight)
    {
        this.minSize = canvasHeight *.125;
        this.maxSize = canvasHeight *.25;
        this.radius = Math.random() * (this.maxSize - this.minSize) + this.minSize;
        this.centerX = x;
        this.centerY = y;
        this.fillColor = color;
        
        this.startingSpeed = Math.random() * 1 - 1;
        this.xVel = this.startingSpeed;
        this.yVel = this.startingSpeed;
    }
    draw(ctx)
    {
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, 
            0, Math.PI * 2);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
    update(speed)
    {
        this.centerX += this.xVel * speed;
        this.centerY += this.yVel * speed;
        if (this.centerX + this.radius >= canvas.width)
        {
            this.centerX = canvas.width - this.radius;
            this.xVel *= -1;
        }
        if (this.centerX - this.radius <= 0)
        {
            this.centerX = 0 + this.radius
            this.xVel *= -1;
        }
        if (this.centerY + this.radius > canvas.height)
        {
            this.centerY = canvas.height - this.radius;
            this.yVel *= -1;
        }
        if (this.centerY - this.radius < 0) 
        {
            this.centerY = 0 + this.radius;
            this.yVel *= -1;
        }
    }
}