class box  {
    constructor (x,y,width,height) {
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display() {
        this.pos=this.body.position;
        rect(this.pos.x, this.pos.y,this.width,this.height)
    }
}