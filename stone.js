class Stone{
	constructor(s,t,u)
	{
        var options = {
            'density':12,
            'friction': 3,
            'restitution':0.8}

		this.s=s;
		this.t=t;
		this.u=u
		this.body=Bodies.rectangle(this.s, this.t, (this.u-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
		
			pop()
	}

}