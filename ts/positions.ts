let gameSpeed = 1

class Layer {
  x: number = 0
  _image: HTMLImageElement = new Image()
  speed: number
  constructor(imageUrl: string, speedModifier: number) {
    this._image.src = imageUrl
    this.speed = speedModifier
  }
  draw() {
    ctx.drawImage(this._image, this.x, 0)
    ctx.drawImage(this._image, this.x + 2400, 0)
  }
  update() {
    this.x -= this.speed * gameSpeed
    if (this.x <= -2400) this.x = 0
  }
}

let bgImages = new Array(5).fill(1).map((_, i) => {
  return new Layer(`./assets/parallax/layer-${i + 1}.png`, 1)
})