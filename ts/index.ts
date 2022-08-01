///<reference path="positions.ts"/>

let canvas = document.getElementById("game") as HTMLCanvasElement
let ctx = canvas.getContext("2d")!

let WIDTH = canvas.width = 800
let HEIGHT = canvas.height = 700

let speedRange = document.getElementById("speedRange") as HTMLInputElement
speedRange.addEventListener("change", e => {
  gameSpeed = parseFloat(speedRange.value)
  document.getElementById("gameSpeedText")!.textContent = `${gameSpeed}`
})

bgImages[0].speed = 2
bgImages[1].speed = .5
bgImages[2].speed = 3
bgImages[3].speed = 2
bgImages[4].speed = 5


let animate = () => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  //* Draws Images
  //? drawImage()
  bgImages.forEach(img => {
    img.draw()
    img.update()
  })
  requestAnimationFrame(animate)
}

animate()