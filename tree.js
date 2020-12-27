class tree
{
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        // var options = {
        //     'isStatic': true
        // }
        // this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height, options)

    }
    display()
    {
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width + 400, this.height + 400);
    }
}

