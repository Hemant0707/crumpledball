class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,	
			'restitution':0,
			'friction':0,
			'density':1
			}
		
		this.body=Bodies.rectangle(x, y, width, height , options);
        this.width=width;
        this.height=height;

 		World.add(world, this.body);

	}
	display(){
	
	
	 rectMode(CENTER)
	
     fill(255);


	 rect(this.body.position.x, this.position.y, this.width,this.height);
	}