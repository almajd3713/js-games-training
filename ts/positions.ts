
let spriteImage = new Image()
spriteImage.src = "./assets/shadow_dog.png"

const sprite = {
  image: spriteImage,
  loc: [
    { key: "idle", frameY: 0, animFrameCount: 6 },
    { key: "jumping", frameY: 1, animFrameCount: 6 },
    { key: "landing", frameY: 2, animFrameCount: 6 },
    { key: "running", frameY: 3, animFrameCount: 8 },
    { key: "dizzy", frameY: 4, animFrameCount: 10 },
  ]
}

// switch (animSelector.value) {
//   case "idle":
//     frameY = 0
//     animFrameCount = 6
//     break
//   case "jumping":
//     frameY = 1
//     animFrameCount = 6
//     break
//   case "landing":
//     frameY = 2
//     animFrameCount = 6
//     break
//   case "running":
//     frameY = 3
//     animFrameCount = 8
//     break
//   case "dizzy":
//     frameY = 4
//     animFrameCount = 10
//     break
// }