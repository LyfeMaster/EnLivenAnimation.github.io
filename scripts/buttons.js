let interactiveButtons = false;
let lastModifiedSprite = null;

let buttonVisualSize = 7;
let bvs = buttonVisualSize;

{ // RE EVALUATE VALUES
function resizeButtons(sprite) {
    resetVisualValues(sprite);
    for (i in sprite.buttonArray) {
        sprite.buttonArray[i].width = bvs*sprite.originalWidth/sprite.visualWidth;
        sprite.buttonArray[i].height = bvs*sprite.originalHeight/sprite.visualHeight;
    }
    sprite.buttonArray[8].position.set(0, -sprite.n*(1+40/sprite.visualHeight));
    for (i in sprite.spriteChildren) {
        resizeButtons(sprite.spriteChildren[i]);
    }
}

function resetVisualValues(sprite) {
    if (sprite.directParent == null) {
        sprite.visualX = sprite.x;
        sprite.visualY = -1*sprite.y+app.screen.height;
        sprite.visualWidth = sprite.width;
        sprite.visualHeight = sprite.height;
    }
    else{
        let parent = sprite.directParent;
        sprite.visualX = parent.visualX + sprite.x*parent.visualWidth/parent.originalWidth;
        sprite.visualY = parent.visualY + sprite.y*parent.visualHeight/parent.originalHeight;
        sprite.visualWidth = sprite.width*parent.visualWidth/parent.originalWidth;
        sprite.visualHeight = sprite.height*parent.visualHeight/parent.originalHeight;
    }
}
}

{// BUTTON FUNCTIONS
function B1() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        let halfwidth = sprite.originalWidth / 2;
        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x + halfwidth) * sprite.width / -halfwidth;
        this.x = -halfwidth;

        let halfheight = sprite.originalHeight / 2;
        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y + halfheight) * sprite.height / -halfheight;
        this.y = -halfheight;

        closing(sprite);
    }
}
function B2() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.y = newPosition2.y;
        a = false;

        let halfheight = sprite.originalHeight/2;
        sprite.height+= (this.y + halfheight) * sprite.height / -halfheight;
        this.x = 0;
        this.y = -halfheight;
        closing(sprite);
    }
}
function B3() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        let halfwidth = sprite.originalWidth/2;
        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x - halfwidth) * sprite.width / halfwidth;
        this.x = halfwidth;

        let halfheight = sprite.originalHeight/2;
        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y + halfheight) * sprite.height / -halfheight;
        this.y = -halfheight;

        closing(sprite);
    }
}
function B4() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        a = false;

        let halfwidth = sprite.originalWidth/2;
        sprite.width+= (this.x - halfwidth) * sprite.width / halfwidth;
        this.y = 0;
        this.x = halfwidth;
        closing(sprite);
    }
}
function B5() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        let halfwidth = sprite.originalWidth/2;
        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x - halfwidth) * sprite.width / halfwidth;
        this.x = halfwidth;

        let halfheight = sprite.originalHeight/2;
        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y - halfheight) * sprite.height / halfheight;
        this.y = halfheight;

        closing(sprite);
    }
}
function B6() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.y = newPosition2.y;
        a = false;

        let halfheight = sprite.originalHeight/2;
        sprite.height+= (this.y - halfheight) * sprite.height / halfheight;
        this.x = 0;
        this.y = halfheight;
        closing(sprite);
    }
}
function B7() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);

        let halfwidth = sprite.originalWidth/2;
        this.x = newPosition2.x;
        a = false;
        sprite.width+= (this.x + halfwidth) * sprite.width / -halfwidth;
        this.x = -halfwidth;

        let halfheight = sprite.originalHeight/2;
        this.y = newPosition2.y;
        a = false;
        sprite.height+= (this.y - halfheight) * sprite.height / halfheight;
        this.y = halfheight;

        closing(sprite);
    }
}
function B8() {
    if (this.dragging && interactiveButtons) {
        this.parent.interactive = false;
        let sprite = this.parent;
        let newPosition2 = this.data.getLocalPosition(this.parent);
        this.x = newPosition2.x;
        a = false;

        let halfwidth = sprite.originalWidth/2;
        sprite.width+= (this.x + halfwidth) * sprite.width / -halfwidth;
        this.y = 0;
        this.x = -halfwidth;
        closing(sprite);
    }
}
function BRotate() {
    if (this.dragging && interactiveButtons) {
        let sprite = this.parent;
        sprite.interactive = false;
        const newPosition3 = this.data.getLocalPosition(this.parent);
        this.x = newPosition3.x;
        this.y = newPosition3.y;
        // theta = -Math.atan2(this.x,this.y);
        theta = Math.atan2(this.x*sprite.visualWidth/sprite.originalWidth, -this.y*sprite.visualHeight/sprite.originalHeight);
        // theta = Math.atan2(sprite.visualY - this.y, -sprite.visualX+this.x);
        // sprite.rotation+= Math.PI/2-theta;
        sprite.rotation+= theta;
        this.position.set(0, -sprite.n*(1+40/sprite.visualHeight));
        a = false;
        console.log(Math.PI/2-theta);
        closing(sprite);
    }
}
function closing(sprite){
    lastModifiedSprite = sprite;
    resizeButtons(sprite);
    setPropertyPanelValues(sprite.visualX, sprite.visualY, sprite.visualWidth, sprite.visualHeight, sprite.rotation);
}

// END BUTTON FUNCTIONS
}

{ // ENABLE AND DISABLE BUTTONS
function enableButtons(eventData) {
    disableButtons();
    for (i in this.buttonArray) {
        currButton = this.buttonArray[i];
        currButton.alpha = 1;
        currButton.interactive = true;
    }
    selectedSprite = this;
}

function disableButtons(eventData) {
    for (i in allSprites) {
        sprit = allSprites[i];
        for (j in sprit.buttonArray) {
            currButton = sprit.buttonArray[j];
            currButton.alpha = 0;
            currButton.interactive = false;
        }
    }
    selectedSprite = null;
}

}

let canParentMove = false;
{ // ON DRAG START STUFF
    function onDragStartButton(event) {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
        interactiveButtons = true;
    }
    function onDragStartSprite(event) {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
        canParentMove = false;
        
        currSprite = this;
        while (currSprite.directParent != null) {
            currSprite.directParent.interactive = false;
            currSprite = currSprite.directParent;

        }
        console.log(currSprite.visualX + "X");
        console.log(currSprite.visualY + "Y");
        console.log(mouseX + "MOUSE POSX");
        console.log(mouseY + " MOUSE POS Y");
        console.log(currSprite.visualHeight + " HEIGHT");
        console.log(currSprite.visualWidth + "WIDTH");
        console.log((mouseX  - currSprite.visualX + (currSprite.visualWidth / 2 )) / currSprite.visualWidth + " RATIO X");
        console.log(1- ((mouseY - currSprite.visualY  + (currSprite.visualHeight / 2 )) / currSprite.visualHeight) + "RATIO Y")
       
        // currSprite.anchor.set(         
        //      (mouseX  - currSprite.visualX + (currSprite.visualWidth / 2 )) / currSprite.visualWidth,
        //      1/2 -((mouseY - currSprite.visualY  + (currSprite.visualHeight / 2 )) / currSprite.visualHeight));
        itr.mouse.global.x =  (mouseX  - currSprite.visualX + (currSprite.visualWidth / 2 ));
        itr.mouse.global.y = 1/2 -((mouseY - currSprite.visualY  + (currSprite.visualHeight / 2 )));
       // currSprite.anchor.set(1,1/2);
    }
    function onDragEndButton() {
        this.alpha = 1;
        this.dragging = false;
        this.data = null;
        interactiveButtons = false;
        lastModifiedSprite.interactive = true;
        lastModifiedSprite.alpha = 1;
        lastModifiedSprite.dragging = false;
        resizeButtons(this.parent);
    }
    function onDragEndSprite() {
        this.alpha = 1;
        this.dragging = false;
        this.data = null;
        resizeButtons(this);
        canParentMove = true;
        
        currSprite = this;
        while (currSprite.directParent != null) {
            currSprite.directParent.interactive = true;
            currSprite = currSprite.directParent;
        }

        setPropertyPanelValues(this.visualX, this.visualY, this.visualWidth, this.visualHeight, this.rotation);
    }
    function onDragMoveSprite() {
        if (this.dragging) {
            const newPosition2 = this.data.getLocalPosition(this.parent);
            this.x = newPosition2.x;
            this.y = newPosition2.y;
            canParentMove = false;
            closing(this);
            if (mouseX - this.visualWidth/2 + this.x < 0){
                //const distanceToZero = 0 -mouseX - this.visualWidth/2 + this.x
                this.x = 0;  
            }
            if (mouseX> app.screen.width){
                //const distanceToZero = 0 -mouseX - this.visualWidth/2 + this.x
                this.x = app.screen.width; 
            }
            if (actualMouseY > app.screen.height){
                this.y = app.screen.height;
            }
            if (actualMouseY - this.visualHeight/2 + this.y < 0){
                this.y = 0;
            }
          
            
        }
    }
}
