"use strict";
let gameSpeed = 1;
class Layer {
    constructor(imageUrl, speedModifier) {
        this.x = 0;
        this._image = new Image();
        this._image.src = imageUrl;
        this.speed = speedModifier;
    }
    draw() {
        ctx.drawImage(this._image, this.x, 0);
        ctx.drawImage(this._image, this.x + 2400, 0);
    }
    update() {
        this.x -= this.speed * gameSpeed;
        if (this.x <= -2400)
            this.x = 0;
    }
}
let bgImages = new Array(5).fill(1).map((_, i) => {
    return new Layer(`./assets/parallax/layer-${i + 1}.png`, 1);
});
let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let WIDTH = canvas.width = 800;
let HEIGHT = canvas.height = 700;
let speedRange = document.getElementById("speedRange");
speedRange.addEventListener("change", e => {
    gameSpeed = parseFloat(speedRange.value);
    document.getElementById("gameSpeedText").textContent = `${gameSpeed}`;
});
bgImages[0].speed = 2;
bgImages[1].speed = .5;
bgImages[2].speed = 3;
bgImages[3].speed = 2;
bgImages[4].speed = 5;
let animate = () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    bgImages.forEach(img => {
        img.draw();
        img.update();
    });
    requestAnimationFrame(animate);
};
animate();
