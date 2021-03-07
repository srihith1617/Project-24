class paper  {
    constructor (x,y,width,height) {
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:false,restitution: 0.3,friction:0.5, density:1.2});
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display() {
        var pos=this.body.position;
        fill("blue");
        rect(pos.x,pos.y,this.width,this.height);
    }
}