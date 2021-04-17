class SlingShot{
    constructor(BodyA,pointB){

    var option = {
        bodyA:BodyA,
        pointB:pointB,
        stiffness:0.4,
        length:10
    }
    this.sling = Matter.Constraint.create(option)
    World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
            
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.pointB
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        }
    fly(){
        this.sling.bodyA = null
    }
}