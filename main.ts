info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let おしり: Sprite = null
game.splash("ゴリラ")
tiles.setTilemap(tiles.createTilemap(hex`1000100004040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040405050505050508050505050805050505050505050508050505050805050505050505050505050805050505080505050505050505050805050505080505050505050505050505080505050508050505050707070705080505050508050505050507060707070508050505050805070707060607060708050505050805070707070706060705050805050505080706070707060705050805050505080506060706050605050505080505050508070606070506050505080805050508080506070505060505050808050505080805060505`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.tile0,sprites.castle.tilePath7,sprites.castle.tileGrass2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen))
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . e e e e . . . . . f 
    f f . . . e e e e e e . . . f f 
    . f f . e e f e e f e e . f f . 
    . . f e e e e e f e e e e f . . 
    f . e e e f e e e e f e e e . f 
    f e e e e e f f f f e e e e e f 
    e e e e e e e e e e e e e e e e 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.startCountdown(25)
game.onUpdateInterval(500, function () {
    おしり = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f . . . . . . . f . . . . 
        . . . . f . . . . . f . . . . . 
        . . . . . f . . . f . . . . . . 
        d d d d d d d f d d d d d d d d 
        . d d d d f d f d f d d d d d . 
        . d d d d d d f d d d d d d . . 
        . f d d d d d f d d d d d f . . 
        f . d d d f d f d f d . . . f . 
        f . . . . d f f f d d . . . . f 
        . . . . . f d f d f . . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . f . . . . . . . f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    おしり.setPosition(randint(0, 160), randint(0, 120))
})
