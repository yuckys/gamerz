function jumper() {
    //define jumper start position and dimensions
    this.x = w/2
    this.y = 0
    this.width = 50
    this.height = 50
    //force gravity
    this.gravity = 0.5
    //opposing force
    this.lift = -10
    //velocity
    this.velocity = 0

    //show what the object looks like
    this.show = function() {
        fill(255,0,0)
        ellipse(this.x,this.y,this.width,this.height)
    }
//what happens when I the object jumps
    this.jump = function() {
        this.velocity += this.lift
    }
    //handle updating the object
    this.update = function() {
        this.velocity += this.gravity
        this.y += this.velocity
        //air resistamce
        this.velocity *= 0.9
        //stop the object from falling through the top and bottom edge
        if (this.y > h) {
            this.y = h
            this.velocity = 0
        }
        //stop the object from going through the ceiling
        if (this.y < 0) {
            this.y = 0
            this.velocity = 0
        }
    }

}