class Mango
{
    constructor(x, y, width, height)
    {
        // this.x, this.y, this.width, this.height = 2, 3, 4, 5
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = loadImage("mango.png")
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(this.x, this.y, this.width, options)
        World.add(world, this.body)
    }

    display()
    {
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height)
    }
}