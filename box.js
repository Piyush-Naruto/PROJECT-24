class Box{
    constructor(x,y,width,height){
    this.body=Bodies.rectangle(x,y,width,height);
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
}
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255,0,0);
        rect(pos.x,pos.y,this.width,this.height)
    }
}
