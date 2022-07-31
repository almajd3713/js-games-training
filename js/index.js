"use strict";
let spriteImage = new Image();
spriteImage.src = "./assets/shadow_dog.png";
const sprite = {
    image: spriteImage,
    loc: [
        { key: "idle", frameY: 0, animFrameCount: 6 },
        { key: "jumping", frameY: 1, animFrameCount: 6 },
        { key: "landing", frameY: 2, animFrameCount: 6 },
        { key: "running", frameY: 3, animFrameCount: 8 },
        { key: "dizzy", frameY: 4, animFrameCount: 10 },
    ]
};
let animSelector = document.getElementById("animSelect");
let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let currentAnimation = sprite.loc[0];
animSelector.addEventListener("change", e => {
    currentAnimation = sprite.loc.find(anim => anim.key === animSelector.value);
});
let WIDTH = canvas.width = 600;
let HEIGHT = canvas.height = 600;
let spriteWidth = 575;
let spriteHeight = 523;
let frameX = 0, frameY = 0, frameNo = 0, frameDelay = 5;
const animate = () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.drawImage(sprite.image, frameX * spriteWidth, currentAnimation.frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    if (frameNo % frameDelay === 0) {
        frameX >= currentAnimation.animFrameCount ? frameX = 0 : frameX++;
    }
    frameNo++;
    requestAnimationFrame(animate);
};
animate();
