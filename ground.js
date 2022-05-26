class Ground {
    constructor(x, y, w, h) {
        let options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(127);
        fill(127);
        rect(pos.x, pos.y, this.w + 40, this.h + 40); //for some reason there was a differnce in the hitbox and the sprite
        pop();
    }
}
