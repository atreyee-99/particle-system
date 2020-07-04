
let particles=[];

function setup()
{
createCanvas(600, 400);
//let p=new Particle();
//particles.push(p);
}

function draw()
{
	background(0);
	for(let i=0; i<5; i++) //adds 5 particles per frame
	{
		let p=new Particle(); // creating multiple particles
		particles.push(p); // adds an object to the array
	}
	for(let i=particles.length-1;i>=0;i--) //reverse loop would cause flickery effect
	{
		particles[i].update();
		particles[i].show(); //showing multiple particles
		if(particles[i].finished())
		{
			//remove the particle
			particles.splice(i,1); //removes 1 element from position i
			//removes particles when value of alpha is less than 0
		}
	}
}

class Particle
{
	constructor()
	{
		  this.x=300; //initial position along x axis
		  this.y=380; //initial position along y axis
		  this.vx=random(-1, 1); //velocity in x axis using p5 vector
		  this.vy=random(-5, -1); //velocity in y axis //negative because upward motion
		  this.alpha=255; //for transaparency
	}

	finished()
	{
		return this.alpha<0; //condition for removal of particle
		//returns true when it is faded out
	}

	update()
	{
		this.x += this.vx; //changing the location by some random amount
		this.y += this.vy;
		this.alpha-=5; //(loses some alpha with each frame)
	}

	show()
	{
		noStroke(); //removes outline from the particle
		fill(255, this.alpha); //alpha provides fading effect 
		ellipse(this.x, this.y,16);
	}
}  

//runs on
//https://editor.p5js.org/