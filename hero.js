class Hero{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            density: 1,
            frictionAir: 1
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Superhero-02.png");

        World.add(world, this.body);
    }

display(){

    var position = this.body.position;
    var angle = this.body.angle;
    push();

    translate(position.x, position.y);
    rotate(angle);

    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
} 
}