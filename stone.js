class stone
{
    constructor(x, y,width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
        var options = {
            isStatic: false,
            restitution: 0,
            friction:1,
            density: 1.2
        }
        this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height, options)
        World.add(world, this.body)
    }
    display()
    {
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}




