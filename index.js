//Go through each step by hand.
/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)
*/

//Create a function to repeat instructions.  
function newImage(assetSource, horizontalPos, verticalPos){
    let image = document.createElement('img')
    image.src = assetSource
    image.style.position = 'fixed'
    image.style.left = horizontalPos + 'px'
    image.style.bottom = verticalPos + 'px'
    document.body.append(image)
    return image
}

//Bonus attempt.  
newImage('assets/grass.png', 0, 0)
//Grass creation.
for (let i = 0; i < window.innerWidth; i+=100){
    for (let k = 0; k < (window.innerHeight - 700); k+=100){
        newImage('assets/grass.png', i, k)
    }
}
//Sky creation.  
for (let i = 0; i < window.innerWidth; i+=100){
    for (let k = (window.innerHeight - 700); k < window.innerHeight; k+=100){
        newImage('assets/sky.png', i, k)
    }
}

//Add existing images using new function. 
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)

//Call new functions
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//Create a new function to create items, rather than just an image.  
function newItem(assetSource, horizontalPos, verticalPos){
    let item = newImage(assetSource, horizontalPos, verticalPos)
    item.addEventListener('click', function(){
        item.remove()
    })
}

//Create new item that can be picked up.  
newItem('assets/sword.png', 500, 405)
//Additional items.  
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

