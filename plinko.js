class plinko { 
    constructor(x,y) {
      
       var options={ 
         isStatic:true,
         restitution:1, 
         friction:0.1,
         density:1.2
         } 
         this.body=Bodies.circle(x, y,5, options) 
         this.radius=10
        World.add(world, this.body); 
        }
         display() { 
           var pos=this.body.position;
           rectMode(CENTER)
           fill("black")
           circle(pos.x, pos.y, 10);
          }
         }