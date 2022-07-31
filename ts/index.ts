///<reference path="positions.ts"/>

let animSelector = document.getElementById("animSelect") as HTMLSelectElement
let canvas = document.getElementById("game") as HTMLCanvasElement
//* get 2D API
let ctx = canvas.getContext("2d")!

let currentAnimation = sprite.loc[0]
animSelector.addEventListener("change", e => {
  currentAnimation = sprite.loc.find(anim => anim.key === animSelector.value)!
})

let WIDTH = canvas.width = 600
let HEIGHT = canvas.height = 600
let spriteWidth = 575
let spriteHeight = 523

// let spriteImage = new Image()
// spriteImage.src = "./assets/shadow_dog.png"

let frameX = 0, frameY = 0, frameNo = 0, frameDelay = 5
const animate = () => {
  //* Draws a rectangle. You can't tell, but it draws it every frame
  // ctx.fillRect(0, 0, x, x)
  //* Draws using an image
  //? ctx.drawImage(sprite, sourceX, sourceY, sourceWidth, sourceHeight, distX, distY, distWidth, distHeight)
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  ctx.drawImage(sprite.image, frameX * spriteWidth, currentAnimation.frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
  //* Runs the animation. As you can see, it's recursive, so runs every frame
  if(frameNo % frameDelay === 0) {
    frameX >= currentAnimation.animFrameCount ? frameX = 0 : frameX++
  }
  frameNo++
  requestAnimationFrame(animate)
}

animate()