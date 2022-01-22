class Welcome {
    constructor(){
        this.logoImage = "car1.png";
        this.logo = createImg(this.logoImage);
    }
    display() {
        this.logo.position(width/2,10);
    }
}