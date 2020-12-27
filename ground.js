class ground
{
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        var option = {
            'isStatic': true
        }
        this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height, option)
        World.add(world, this.body)
    }
    display()
    {
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}