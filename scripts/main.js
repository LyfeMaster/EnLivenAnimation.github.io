let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

let app = new Application({ 
    width: document.getElementById("canvas").offsetWidth,
    height: document.getElementById("canvas").offsetHeight,
    antialias: true, 
    transparent: false, 
    resolution: 1,
    backgroundColor: 0xFFFFFF
  }
);

document.getElementById("canvas").appendChild(app.view);

let state, KFButton, allSprites = [], texture2;
let texture,sprite, button, button2, button3, button4, button5, button6, button7, button8, button9, x, y, w, h;

loader
  .add("res/img/circle.png")
  .add("res/img/background.jpg")
  .add("res/img/square.jpg")
  .load(setup)

function setup() {
  const bg = PIXI.Texture.from("res/img/background.jpg");
  var background = new PIXI.Sprite(bg);
  background.width = app.screen.width;
  background.height = app.screen.height;
  background.alpha = 0;
  background.interactive = true;
  background.on('click', disableButtons); 
  app.stage.addChild(background);
}

const atlas = loadFile("./res/atlas/atlas.txt");
const elements = readElements(atlas);
const coordinates = readCoordinates(atlas);
const parents = readParents(atlas);
