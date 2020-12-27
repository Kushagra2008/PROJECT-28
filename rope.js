class rope
{
    constructor(pointA, bodyB)
    {
        this.pointA = pointA
        this.bodyB = bodyB
        var options = {
            bodyB: bodyB,
            pointA: pointA,
            length: 50
            // stifness: 0
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }

    fly()
    {
        this.rope.bodyB = null
    }
    attach(a)
    {
        this.rope.bodyB = a
    }
    display()
    {
        if (this.rope.bodyB)
        {
            line(this.bodyB.position.x, this.bodyB.position.y,this.pointA.x, this.pointA.y);
        }
    }
}
