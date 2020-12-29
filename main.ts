namespace SpriteKind {
    export const Build = SpriteKind.create()
    export const Destroyer = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Started) {
        if (!(Buildmode)) {
            if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                mySprite.vy = -175
            }
        }
    }
})
sprites.onDestroyed(SpriteKind.Destroyer, function (sprite) {
    if (Game_Started) {
        tiles.setTileAt(tiles.locationOfSprite(sprite), myTiles.transparency16)
        tiles.setWallAt(tiles.locationOfSprite(sprite), false)
        statusbar.value += 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Started) {
        if (Buildmode == true) {
            Buildmode = false
            Builder.setFlag(SpriteFlag.Invisible, true)
            controller.moveSprite(mySprite, 100, 0)
            controller.moveSprite(Builder, 0, 0)
            mySprite.ay = 350
        } else if (Buildmode == false) {
            Builder.setFlag(SpriteFlag.Invisible, false)
            Buildmode = true
            controller.moveSprite(Builder, 65, 65)
            controller.moveSprite(mySprite, 0, 0)
            mySprite.vy = 0
            mySprite.ay = 0
        }
    }
})
function Load_Map () {
    tiles.setTilemap(tilemap`level`)
    for (let index = 0; index < randint(5, 20); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 46), 2), myTiles.tile1)
    }
    for (let index = 0; index < randint(5, 20); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 46), 3), myTiles.tile1)
    }
    for (let index = 0; index < randint(5, 20); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 46), 3), myTiles.tile1)
    }
    for (let index = 0; index < randint(5, 20); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 46), 4), myTiles.tile1)
    }
    for (let index = 0; index < randint(5, 20); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 46), 5), myTiles.tile1)
    }
    for (let index = 0; index < randint(5, 20); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 46), 6), myTiles.tile1)
    }
    for (let index = 0; index < randint(5, 20); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 46), 7), myTiles.tile1)
    }
    for (let index = 0; index < randint(5, 20); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 46), 8), myTiles.tile1)
    }
    for (let index = 0; index < randint(5, 20); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 46), 9), myTiles.tile1)
    }
    for (let index = 0; index < randint(5, 20); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 46), 10), myTiles.tile1)
    }
    for (let index = 0; index < randint(5, 20); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(1, 46), 11), myTiles.tile1)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Started) {
        if (!(Buildmode)) {
            if (statusbar.value > 0) {
                if (direction == "r") {
                    projectile = sprites.createProjectileFromSprite(img`
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
                        . . . . . . . . . . . . . f f . 
                        . . . . . . . . . . . . . f f . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, 150, 0)
                    statusbar.value += -1
                } else if (direction == "l") {
                    projectile = sprites.createProjectileFromSprite(img`
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
                        . f f . . . . . . . . . . . . . 
                        . f f . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, -150, 0)
                    statusbar.value += -1
                }
                scene.cameraShake(4, 200)
            }
        } else if (Buildmode) {
            if (statusbar.value > 0) {
                tiles.setTileAt(tiles.locationOfSprite(Builder), myTiles.tile1)
                tiles.setWallAt(tiles.locationOfSprite(Builder), true)
                Tile_destroyer = sprites.create(img`
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
                    `, SpriteKind.Destroyer)
                tiles.placeOnTile(Tile_destroyer, tiles.locationOfSprite(Builder))
                Tile_destroyer.lifespan = 5000
            }
        }
    }
})
function Make_Enemy () {
    if (Game_Started) {
        if (!(Buildmode)) {
            mySprite2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f f f . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . f 2 2 2 2 2 2 2 2 2 2 f . . 
                . . f f f f f f f f f f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(mySprite2, tiles.getTileLocation(randint(0, 39), 0))
            mySprite2.ay = 165
            timer.after(3500, function () {
                mySprite2.follow(mySprite, 25)
            })
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Started) {
        if (!(Buildmode)) {
            if (Skin == 1) {
                mySprite.setImage(img`
                    . . . . . f f . f f . . . . . . 
                    . . . . . f f f f f f f . . . . 
                    . . . . . . f f f e e f . . . . 
                    . . . . . . f f e e e e . . . . 
                    . . . . . . f f f e f e . . . . 
                    . . . . . f f f f e f e . . . . 
                    . . . . f f f e e e e e . . . . 
                    . . . . f f f f f c f . . . . . 
                    . . . . f f f a a a a c . . . . 
                    . . . . . . . c a a a c . . . . 
                    . . . . . . e e e a a e e . . . 
                    . . . . . . e e e f f e e . . . 
                    . . . . . . . . f f f . . . . . 
                    . . . . . . . . c . c . . . . . 
                    . . . . . . . . e . e . . . . . 
                    . . . . . . . . f f f f . . . . 
                    `)
            } else if (Skin == 2) {
                mySprite.setImage(img`
                    . . . . . 8 . . . . . . . . . . 
                    . . . . 8 8 . 8 8 8 8 8 . . . . 
                    . . . . . . 8 8 8 8 8 8 8 . . . 
                    . . . . . . 8 8 d d 8 8 8 . . . 
                    . . . . . . 8 8 f d f d 8 . . . 
                    . . . . . . 8 8 f d f d 8 . . . 
                    . . . . . . 8 d d d d d 8 . . . 
                    . . . . . . . . . b . . . . . . 
                    . . . . . . . 9 9 9 9 9 . . . . 
                    . . . . . . . b 9 9 9 b . . . . 
                    . . . . . . d d d 9 9 d d . . . 
                    . . . . . . d d d f f d d . . . 
                    . . . . . . . . f f f . . . . . 
                    . . . . . . . . b . b . . . . . 
                    . . . . . . . . d . d . . . . . 
                    . . . . . . . . f f f f . . . . 
                    `)
            }
            direction = "l"
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Started) {
        if (!(Buildmode)) {
            if (Skin == 1) {
                mySprite.setImage(img`
                    . . . . . f f . f f . . . . . . 
                    . . . . . f f f f f f f . . . . 
                    . . . . . . f f f e e f . . . . 
                    . . . . . . f f e e e e . . . . 
                    . . . . . . f f e f e f . . . . 
                    . . . . . f f f e f e f . . . . 
                    . . . . f f f e e e e e . . . . 
                    . . . . f f f f f c f . . . . . 
                    . . . . f f f a a a a c . . . . 
                    . . . . . . . c a a a c . . . . 
                    . . . . . . e e e a a e e . . . 
                    . . . . . . e e e f f e e . . . 
                    . . . . . . . . f f f . . . . . 
                    . . . . . . . . c . c . . . . . 
                    . . . . . . . . e . e . . . . . 
                    . . . . . . . . f f f f . . . . 
                    `)
            } else if (Skin == 2) {
                mySprite.setImage(img`
                    . . . . . 8 . . . . . . . . . . 
                    . . . . 8 8 . 8 8 8 8 8 . . . . 
                    . . . . . . 8 8 8 8 8 8 8 . . . 
                    . . . . . . 8 8 d d 8 8 8 . . . 
                    . . . . . . 8 8 d f d f 8 . . . 
                    . . . . . . 8 8 d f d f 8 . . . 
                    . . . . . . 8 d d d d d 8 . . . 
                    . . . . . . . . . b . . . . . . 
                    . . . . . . . 9 9 9 9 9 . . . . 
                    . . . . . . . b 9 9 9 b . . . . 
                    . . . . . . d d d 9 9 d d . . . 
                    . . . . . . d d d f f d d . . . 
                    . . . . . . . . f f f . . . . . 
                    . . . . . . . . b . b . . . . . 
                    . . . . . . . . d . d . . . . . 
                    . . . . . . . . f f f f . . . . 
                    `)
            }
            direction = "r"
        }
    }
})
info.onLifeZero(function () {
    if (Game_Started) {
        console.log("point:" + point)
        console.log("info:" + info.score())
        point = info.score()
        lastPoints3 = blockSettings.readNumber("points")
        console.log("lastPoints:" + lastPoints3)
        if (isNaN(lastPoints3)) {
            lastPoints3 = 0
        }
        console.log("lastPoints2:" + lastPoints3)
        blockSettings.writeNumber("points", lastPoints3 + point)
        game.over(false, effects.dissolve)
        blockSettings.writeNumber("High score", info.highScore())
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    tiles.setWallAt(location, true)
})
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile1, function (sprite, location) {
    tiles.setWallAt(location, true)
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "Controls") {
        game.showLongText("LEFT and RIGHT or A and D keys to move left and right. UP or W to jump. SPACE or Z to shoot or build. Press ENTER or X to turn on and off build mode.", DialogLayout.Full)
    } else if (option == "Play") {
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        // blockSettings.writeNumber("points", point)
        if (!(blockSettings.exists("points"))) {
            point = 0
            blockSettings.writeNumber("points", 0)
        } else if (blockSettings.exists("points")) {
            point = blockSettings.readNumber("points")
        }
        timer.after(550, function () {
            statusbar = statusbars.create(20, 4, StatusBarKind.Magic)
            statusbar.positionDirection(CollisionDirection.Bottom)
            statusbar.value = 20
            statusbar.max = 20
            info.setLife(5)
            Buildmode = false
            scene.setBackgroundColor(1)
            scene.setBackgroundImage(img`
                6666666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999991111111111111111111199999999999111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999911111111111111111111111999991111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999911111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                119911111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999d5d9999999999999999999999999999999999999999
                11111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999d5579999999999999999999999999111119999999999
                1111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999d5579999999999999111111111111111111111111d999
                111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999bbbbbbbb44d9999555599999999911111111111111111111111111111d999
                11111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999444444222244b995797d99999991111111111111111111111111111111d999
                111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999b44442222444444d559d5d999999111111111111111111111111dddd1111d999
                1111111111111111111111111ddd111111111111111111111111111199999999999999999999999999999999999999d444442222444444444ddd999999911111111111111111111111ddddddd111d999
                111111111111111111111ddddddddddddddddd11111111111111111111199999999999999999999999999999999999444442444444444444444d9999991111111111111111111111ddd99ddddd11d999
                1111111111111111111dddddddddddddddddddddddddd1111111111111119999999999999999999999999999999999444424444444444444245d999999111111111111111111dddd999999999111d999
                11111111111111111ddddddddddddddddddddddddddddddd111111111111199999999999999999999999999999999b444224444444444422454d999999111111111111111dddd999999991111111d999
                111111111111111ddddddddddddddddddddddddddddddddddddd1111111111999999999999999999999999999999444442444444444442445444d9999111111111111111d9999111111111111111d999
                111111111111dddddddddddddddddddddddddddddddddddddddddd11111111999999999999999999999999999999444442444224444424454444b999111111111111111111111111111111111111d999
                1111111111ddddddddddddddddddd99999999999beebddddddddddd1111111199999999999999999999999999999444444442244444224544244b991111111111111111111111111111111111111d999
                1111111dddddddddddddddddd99999999999bb9bceeeeebddddddddd111111119999999999999999999999999999444444424444442444444244d911111111111111111111111111111111111111d999
                d1ddddddddddddddddddd999999999999999999cceeeeeeeeebdddddd11111119999999999999999999999999999444444424444424454442444d111111111111111111111111111111111111111d999
                ddddddddddddddddddd999999999999999999bcccceeeeeeeeeeebddddddd1111999999999999999999999999999442244424444244554424431111111111111111111111111111111111111111dd999
                dddddddddddddddddd9999999999999999999bcccceeeeeeeeeeeebdddddd9999999999999999999999999999999422444244444244444eeeb1111111111111111111111111111111111111111ddd999
                dddddddddddddddd99999999999999999999bccccceeeeeeeeeeeeeeeeed999999999999999999999999999999992244442444424454eeeeb111111111111111111111111111111111111111ddddd999
                ddddddddddddd999999999999999999999999dddbcceeeeeeeeeeeeeeeeb9999e9999999999999999999999999992ee44224442444eeebddd11111111111111111111111ddd11111111111ddddddd999
                dddddddddd99999999999999999999999991111dbcceeeeeeeeeeeeeeeeb999999999999999999999999999999992eee424442454eeeb1111111111111111111111ddddddddddd111dddddddddddd999
                ddddd999999999999999999999999999991111ddbcccceeeeeeeeeeeeeeb99999999999999911119999999999999eeeee244445ee22b1111111111111111ddddddddddddddddddddddddddddddddd999
                ddd999999999999999999999999999999d11111dbbccecceeeeed1beeeed999999911111111111111999999999999eeee2ee24ee241111111111111111dddddddddddddddddddddddddddddddddd9999
                dd9999999999999999999999999999999d11111dbbccccceeeeb111dddd11111111111111111111119999999999999ee2eee4e22411111111111111ddddddddddddddddddddddddd9999999999999999
                999999999999999999999999999999999d11111ddddbcccceeeed1dd111111111111111dd1ddd99911999999999999ee2ee4eee241111111111ddddddddddd9999999999999999999999999999999999
                999999999999999999999999999999999d111111111dbbbceeeeebbdddddd1111111dddddddd999999999999999944be2e44eeebd1111111111dddddddddd99999999999999999999999999999999999
                99999999999999999999999999999999d1111111111111bceceeeebdddddddddddddddddd99999999999999999994999e4eeeeeb1111111111ddddddd999999999999999999999999999999999999999
                99999999999999999999999999999999d1111111111111bcceceeeebddddddddddddddd99999999999999999999bb9dbbbeeeebd111111dddddddddd9999999999999999999999999999999999999999
                99999999999999999999999999999999d111111911111bccececceeeebdddddddddd9999999999999999999999d499b9999eb11111111dddddddddd99999999911199999999999999999999999999999
                99999999999999999999999999999999d111119999111bcccceccceeed9999d99999999999999999999999999944449999999111111ddddddddddd9999999911111111d9999999999999999999999999
                9999999999999999999999999999999d99dd111999911bccccccccced99999999999999999999999999999999944499999991111dddddddddddd99999999111111ddddd9999999999999999999999999
                999999999999999999999999999999999999999911191bcccccccccb999b9999999999999999999999999999999999999991111dddddddddd999999999991111ddddd999999999999999999999999999
                999999999999999999999999999999911119999d1111bccccccccc699bee999999999999999999999999999999999999911111dddddddddd999999999999111ddddd9999999999999999999999999999
                99999999999999999999999999999911111119911111bcccccccb9999bee99999999999999999999999999999999999111111ddddddddd999999999999991dddd9999999999999999999999999999999
                999999999999999999999999999999111111199111119999999999999bd99999999999999999999999999999999991111111ddddddddd99999999999999ddd9999999999999999999999999999999999
                99999999999999999999999999999911111199911111999999999999999999999999999999999999999999991111111111ddddddddd99999999999999999999999999999999999999999999999999999
                99999999999999999999999999999911199999111111999999999999999999999999999999999999999999999111111dddddddddd9999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999911191111991111999999999999999999999999999999999999999999999999111ddddddd99999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999991111991111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999961191111991111999999999999999999999999999999999999999999999999999999999999999999999991111119999999999999999999999999999999999999999
                99999999999999999999999999999d1191111991111999999999999999999999999999999999999999999999999999999999999999999991111111119999999999999999999999999999999999999999
                9999999999999999999999999999d1119111dd99119999999999999999999999999999999999999999999999999999999999999999999911111111119999999999999999999999999999999999999999
                9999999999999999999999999999d11119999dd991999999999999111111d999999999999999999999999999999999999999999999999911111119119999999999999999999999999999999999999999
                9999999999999999999999999999d11119911111999999999999d111111119999999999999999999999999999999999999999999999999d1111199911999999999999999999999999999999999999999
                999999999999999999999999999911111991111119999999999911111111ddd19999999999999999999999999999999999991199999999d1111999d11999999999999999999999999999999999999999
                999999999999999999999999999111111911111111999999999911111111111119999999999999999933333333999933d9919199999999d11199999d1999999991111119999999999999999999999999
                999999999999999999999999999d111199111d111199999999999111111111111999999999999999d333333333d99933d9111199999999d1199119991999999111111111999999999999999999999999
                999999999999999999999999999d11119111ddd111999999999969999911111119999999999999933333333333d9999991111999199999d119911199d999991111111111999999999999999999999999
                999999999999999999999999999d1119919911d1119999999996666d11999d111999999999999933333333333333999911113999199999d199111119d199111111111111999999999999999999999999
                999999999999999999999999991111969919111d119999999996911111911991199999999d999333333333333333999991933d91999999d199111119d199119111111111999999999999999999999999
                99999999999999999999999999d111969111991dd9999999999691191191119919999999dd9933333333333333339999999d331999d99969991111191199111911111111199999999999999999999999
                99999999999999999999999999d111999111991dd99999999991911111911119699999999999333333333333333391199999933d999d99691911111911dd111111199999699999999999999999999999
                99999999999999999999999999d199119199111119999999999191111191111119999999999b3333333333333333919999993333d99dd9911111119911dd111111991111199999999999999999999999
                9999999999999999999999999d9911119991111119999999999119999911111119999999999bb333333333333333199999993333399999991199199111dd111119911111199999999999999999999999
                99999999999999999999999966bd11111111ddd1999999999991111119dd111119999999999bbb33333333333333999999ccb3333d999999d1199991111dd99999111111d99999999999999999999999
                99999999999999999999999961d7b119111d77779999999999911111199dd11119999999999bbbbbbbbb3333333399999bccbb333d999999d1111911111dd1999111111dd99999999999999999999999
                999999999999999999999999bd11679911dd11d779999999999111111199d11119999999999bbbbbbbbbbbbb33d99999bcccbb333d9999999d119111111dd1199111911d999999999999999999999999
                999999999999999999999999ddd1d66677d1111d69999999999111119919111199999999999bbbbbbbbbbbbbbb99999cccccbb333d9999999d119d111111dd191111111d999999999999999999999999
                9999999999999999999999996dd1111911111119999999999991119991199111999999999999bbbbbbbbbbbbb99999bcccccbb333d9999999d1996911119bd1191111991999999999999999999999999
                99999999999999999999999966999199111111d6999999999969199111119111999999999999999bbbbbbbbb9999ccccccccbb333d999999999196911199bd1191111911999999999999999999999999
                999999999999999999999999ddd19999911111d6999999999969991111111991999999999999999999911999999ccccccbdcbb333d999999991119999911dd1191199911199999999999999999999999
                99999999999999999999999ddd11111991111199999999999911119111111d96999999999999999999119999bcccccccbdccbb333d99999999111199d191ddd1999999111dd999999999999999999999
                99999999999999999999999ddd111119999911199999999999d1119119111166999999999999339991199bbbbbcccccb1dbbbb333d999999991111111191ddd9911199111ddd99999999999999999999
                99999999999999999999999ddd111111d69991999999999999d111911111111199999999999999999199bbbbbbbbbbd1dbbbb333d9999999999111111191ddd9111119111dddd9999999999999999999
                99999999999999999999999ddd111111d69d99699999999999d111911111111199999999999999991999bbbbbbbbb11dbdbb3333d999999999dd11111199ddb6d111191111dddd999999999999999999
                9999999999999999999999dddd1111191191d999999999999dd1199911111111999999999999991119999bbbbbbb1ddbd133333d9999999999dd11111199ddb6dd1111111ddd11999999999999999999
                999999999999999999999966dd11111111911999999999999ddd1999999991119999999999999911199999bbbb11dbbb313333d99999999999dd11111191dbbddd111191111111199999999999999999
                9999999999999999999999d66b11111111911999999999999d6699961911999999999999999991111999999311113311d3333d999999999999911111199196bbddd11199911119999999999999999999
                999999999999999999999ddddd9991111191199999999999966dd9911911111199999999999991191999999111111133333dd9999999999999991111191119bbdddd1119999999199999999999999999
                999999999999999999999ddddd91199111119999999999999dddd99999111111999999999999999991999111111dddddddd999999999999999991119991119bdddddd111911111dd9999999999999999
                999999999999999999999ddddd911dd999119999999999999dddd111911111dd99999999999999999111111111999999999999999999999999991199911119bdbddddd19911111dd9999999999999999
                999999999999999999999ddddd111111d911999999999999dddddd1911111dd999999999991999199999111119999999999999999999999999999999111119bdbddddd19111111ddd999999999999999
                99999999999977779999ddddb61111111199999999999999dddddd991111dd199999999999111199999911119999999999999999999999999999999911111dbdbddddd99111111ddd999999999999999
                99999999999977777999ddddd66d11111116699999999999ddddd6999999111999999999999999999999911999999999999999999999999999999119111dddddbdddd6d1111111ddd999999999999999
                dddddddd999967777799dddddd6d11111119999999999999dddbb6d11199911999999999999999999199999999999999d9999999999999999999dd1191d999dbdbdd66bbdd9911db6d99999999999999
                55555545999966677779dddddd6dd111111d999999999999dd66dd11111999d99999999999999999919999199999999dd9999999999999999999dd1199991166bbdd6bb666d19db66d99999999999999
                5554445555db6777777ddddddb7dd11111dd9999999999999bbddd1ddddd76d99999999999999999911111999999999d999999999999999999999dd1111111d66bdb6dd6dddd1dddddd9999999999999
                5545555455556677777dddb77777dd1111d999999999999966bdddd77777771999999999999999999111999999999999999999999999999999999dd1111119ddddbdddd6ddddddddddd9999999999999
                4455555555557667777bb7777777bdddddd999999999999dd6bdddd6d1d1117999999999999999999999999999999999999999999999999999999dd1111199ddddbdddd6ddddddddddd9999999999999
                44545555555556667776777667776dddddd999999999999dd6bddddbd1bd111799999999999999999999999999999999999999999999999999999dd1111191ddddbdddd6bdddddddddd9999999999999
                444445555455477667776666677db66bbbd999999999999dd66bbbbd999d111999999999999999999999999999999999999999999999999999999911111911dddddbdddd66bbbbdddbbb999999999999
                444444554545555b6666666677dddd666b9999999999111ddb666666996911d999999999999999999999999999999999999999999999999999999991119911dddddbdddd6dddb6ddd666999999999999
                44444445554554444b6666677bdddddddd9999111991111ddb66ddd9999991699999999999999999999999999999999999999999999999999999999199911dddddddddd66ddddbbbbbdd999999999999
                4444444455444444446666777ddddddddd9111111911111d666ddd6991119969999999999999999999999999999999999999999999999999999999999999ddbdddddbdd6ddbddd66ddddd99999777999
                444444444444444444bbbb744433ddddddbdd1111111111b6dddd66dd1111167999999999999999999999999999999999999999999999999999999999119ddddddddbddbbdddd66bbdddd99977777999
                44444444444444444444444444444dddddbdddd99d1111dbddddd6bdd91111679999999999999999999999999999999999999999999999999999999d1119ddddddddbddd6bddd6dd6ddddd9976699999
                444444444444444444444444444444444dddddbbd6bddbbdddddd66dddd1116799999999999999999999999999999999999999999999999999999999d11dddddb666dbb666bbbdddbbdddd9766999999
                444444444444444444444444444444444555ddbbddb6dbbddddddb66ddd1996799999999999999999999999999999999999999999999999999999999d1dd66b66bdddbbddbbbddddd6dddd7669999999
                444444444444444444444444444444445555557bdddbbbbdddddddb6bbbd91779999997777777999999999999999999999999999999999777799999911dd66bbddddd777ddddddddd6ddd76669999999
                444444444444444444444444444444455555555577dddbbdddddd6bbbb669d799997777777777779999999999999999999999999999999977777779911db6bdddddddd7777ddddddd66b766699999999
                44444444444444444444444444444455555555555555dddddddd66ddddb6b76999777777766999799999999999999999999999999999999977777776999666bddddddd76677dddddd66676699dddb999
                444444444444444444444444444444445555555555555543333d6bddddb67b997777777699999999999999999999999999999999999999999977777699ddbbbbdddddd76667ddddb66dd666645555555
                4444444444444444444444444444444444445545555554444443bbdddd66dd967777766699999779999999999999999999999999999999999977777691ddddd777bddd76666dddd66dd7666644445554
                4444444444444444444444444444444444444555555444444444444444bddd66667769997667999999999999999999999999999999999999999777769ddddd6bd7667d76686ddddb4444bbbb44444444
                4444444444444444444444444444444444444455445444444444444444443b66666777997767799999999999999999999999999999999999999977766ddddd6bdd666776886dd3344444444444444444
                44444444bbb444444444444444444444444444444444444444444444444444766699999979999779911991119d9611119999999999999999999997666bdddd6bdd666666866b44444444444444444444
                44444444bbb44444444444444444444444444444444444444444444444444557669999997999999991ddb111dddbdddd1d19999999999999999999666bdddd6bddb66666866444444444444444444444
                444444beccc444444444444444444444444444444444444444444444444445576777766999999999ddd6ddddddddbbbb9999d119911111ddd99999966bdddb6dddddb6686b4444444444444444444444
                444444bceee44444444444444444444444444444444444444444444444444555755557bbd9999999ddd6dddddddddddd666b111191111ddddd99999966ddddbddddd4b66c44444444444444444444444
                444444ee444444444444444444444444444444444444444444444444444455555555555557ddddd7bbbbbbbbdddddddddddddddd99dddddddd99999967d333444444bb4bb44444444444444444444444
                444444444444444444444444444444444444444444444444444444444444555555555555555555554777777775bbddddddddddddddbddddddb9999977554444bb4bbb444644444444444444444444444
                44444444444444444444444444444444444444444444444444444444444455555555555555555555555555555544455ddddddddddb6ddbbbb477775555554444666b44444b444444444444444bbbbbbb
                444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555dbbbbbbbbb7774555555555555444bbb4444446b4444444444444bbbbbbbc
                444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555544444477755555555555555555444444444446b4444444444bbbbbbccccc
                4444444444bbb444444444444444444444444444444444444444444444455555555555555555555555555555555455555555555555555555555555555555554444444444b6b4444444444bbbbbcccccc
                444444eebbbbbbbb444444444444444444444444444444444444444444445555455555555555555555555555555555555555555555555555555555555555544444444444bb4444444444bbbbbbcccccc
                4444eecccbbbbbbbb4444444444444444444444444444444444444444444554545554555555445555555555555555555555555555555555554445555555444444444444444444444444bbbbbcccccccc
                444ecccccbbbbbbbb4444444444444444444444444444444444444444455555555555545555555455555555555555555555555555555555545554555554444454444444444444444444bbbcccccccccc
                4eecccccccbbbbbbbb44444444444444444444444444444444444444445555555555555555555444455555555555555555555555555555545555445554554444444444444444444444bbbbcccccccccc
                4ccccccccccbbbbbbb444444444444444444444444444444444444444445554445555555555445554555555555555555555555555555555455444455445555544555444444444444444bbccccccccccc
                22cccccccccccbbbbbb444444444444444444444444444444444b4444444444444444444444444544555555555555555555555555545555444554444455544455555444444444444222bbccccccccccc
                22eccccccccccccbbbb44444444444444ebb44444444444bbbbbb44444444444444444444444444445555445555555555555555555455544455544444444444444444444444444422eebbbcccccccccc
                442ecccccccccccccbbbb444444444442ecbb44444444bbbbbbcc4444444444444444444444444444555555555545555555555554444444444444444444444444444444444444222ebbbbccccccccccc
                4442eeecccccccccccbbbbbbbeeb444422ee44444444bbbcccccc4444444444444444444444444444445555554445445555545554444444444444444444444444444444444422bbbbbbccccccccccccc
                44444422222cccccccccccccccbb444444444444444bbccccccce44444444444444444444444444444444455455555555555544444444444444444444444444444444444442bbbbbcccccccccccccccc
                44444444222eeeeccccccccccc444444444444444444eeecceee24444444444444444444444444444444444455555555555544444444444444444444444444444444444444bbbbbccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                `)
            Skin = randint(1, 2)
            if (Skin == 1) {
                mySprite = sprites.create(img`
                    . . . . . f f . f f . . . . . . 
                    . . . . . f f f f f f f . . . . 
                    . . . . . . f f f e e f . . . . 
                    . . . . . . f f e e e e . . . . 
                    . . . . . . f f e f e f . . . . 
                    . . . . . f f f e f e f . . . . 
                    . . . . f f f e e e e e . . . . 
                    . . . . f f f f f c f . . . . . 
                    . . . . f f f a a a a c . . . . 
                    . . . . . . . c a a a c . . . . 
                    . . . . . . e e e a a e e . . . 
                    . . . . . . e e e f f e e . . . 
                    . . . . . . . . f f f . . . . . 
                    . . . . . . . . c . c . . . . . 
                    . . . . . . . . e . e . . . . . 
                    . . . . . . . . f f f f . . . . 
                    `, SpriteKind.Player)
            } else if (Skin == 2) {
                mySprite = sprites.create(img`
                    . . . . . 8 . . . . . . . . . . 
                    . . . . 8 8 . 8 8 8 8 8 . . . . 
                    . . . . . . 8 8 8 8 8 8 8 . . . 
                    . . . . . . 8 8 d d 8 8 8 . . . 
                    . . . . . . 8 8 d f d f 8 . . . 
                    . . . . . . 8 8 d f d f 8 . . . 
                    . . . . . . 8 d d d d d 8 . . . 
                    . . . . . . . . . b . . . . . . 
                    . . . . . . . 9 9 9 9 9 . . . . 
                    . . . . . . . b 9 9 9 b . . . . 
                    . . . . . . d d d 9 9 d d . . . 
                    . . . . . . d d d f f d d . . . 
                    . . . . . . . . f f f . . . . . 
                    . . . . . . . . b . b . . . . . 
                    . . . . . . . . d . d . . . . . 
                    . . . . . . . . f f f f . . . . 
                    `, SpriteKind.Player)
            }
            Builder = sprites.create(img`
                . . . . . . . . . 
                . f f f . f f f . 
                . f . . . . . f . 
                . f . . f . . f . 
                . . . f f f . . . 
                . f . . f . . f . 
                . f . . . . . f . 
                . f f f . f f f . 
                . . . . . . . . . 
                `, SpriteKind.Build)
            Builder.setFlag(SpriteFlag.Ghost, true)
            Builder.setFlag(SpriteFlag.Invisible, true)
            mySprite.ay = 350
            Load_Map()
            controller.moveSprite(mySprite, 100, 0)
            scene.cameraFollowSprite(mySprite)
            Game_Started = true
        })
    } else if (option == "Statistics") {
        lastPoints = blockSettings.readNumber("points")
        game.showLongText("Version: 3.0.0" + "  " + "  " + "  " + "  " + "High Score" + info.highScore() + "  " + "  " + "  " + "  " + "In Game Currency: " + lastPoints, DialogLayout.Full)
    } else if (option == "Credits") {
        game.showLongText("Sprite Art: @Kat" + "  " + "  " + "Background Art: @UnderwaterAstronaut" + "  " + "  " + "Coding: @omnisImperium / @GameGod", DialogLayout.Full)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Game_Started) {
        otherSprite.destroy()
        sprite.destroy()
        scene.cameraShake(4, 200)
        statusbar.value += 2
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Game_Started) {
        otherSprite.destroy()
        scene.cameraShake(2, 200)
        info.changeLifeBy(-1)
    }
})
let difficulty = 0
let lastPoints = 0
let Skin = 0
let mySprite2: Sprite = null
let Tile_destroyer: Sprite = null
let projectile: Sprite = null
let direction = ""
let Builder: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let Buildmode = false
let Game_Started = false
let point = 0
let lastPoints3 = 0
let lastPoints2 = 0
Game_Started = false
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff11111111111111111111fffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff11111111111111111111111fffff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    11ff1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd5dffffffffffffffffffffffffffffffffffffffff
    111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd557fffffffffffffffffffffffff11111ffffffffff
    1111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd557fffffffffffff111111111111111111111111dfff
    1111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbaadffff5555fffffffff11111111111111111111111111111dfff
    1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffaaaaaa2222aabff57f7dfffffff1111111111111111111111111111111dfff
    11111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffbaaaa2222aaaaaad55fd5dffffff111111111111111111111111dddd1111dfff
    1111111111111111111111111ddd1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffdaaaaa2222aaaaaaaaadddfffffff11111111111111111111111ddddddd111dfff
    111111111111111111111ddddddddddddddddd111111111111111111111fffffffffffffffffffffffffffffffffffaaaaa2aaaaaaaaaaaaaaadffffff1111111111111111111111dddffddddd11dfff
    1111111111111111111dddddddddddddddddddddddddd111111111111111ffffffffffffffffffffffffffffffffffaaaa2aaaaaaaaaaaaa2a5dffffff111111111111111111ddddfffffffff111dfff
    11111111111111111ddddddddddddddddddddddddddddddd1111111111111ffffffffffffffffffffffffffffffffbaaa22aaaaaaaaaaa2245cdffffff111111111111111ddddffffffff1111111dfff
    111111111111111ddddddddddddddddddddddddddddddddddddd1111111111ffffffffffffffffffffffffffffffaaaaa2aaaaaaaaaaa2cc5cccdffff111111111111111dffff111111111111111dfff
    111111111111dddddddddddddddddddddddddddddddddddddddddd11111111ffffffffffffffffffffffffffffffaaaaa2aaa22aaaaa2cc5ccccbfff111111111111111111111111111111111111dfff
    1111111111dddddddddddddddddddfffffffffffb66bddddddddddd11111111fffffffffffffffffffffffffffffaaaaaaaa22aaaaa22c5cc2ccbff1111111111111111111111111111111111111dfff
    1111111ddddddddddddddddddfffffffffffbbfb866666bddddddddd11111111ffffffffffffffffffffffffffffaaaaaaa2aaaaaa2cccccc2ccdf11111111111111111111111111111111111111dfff
    d1dddddddddddddddddddffffffffffffffffff88666666666bdddddd1111111ffffffffffffffffffffffffffffaaaaaaa2aaaaa2cc5ccc2cccd111111111111111111111111111111111111111dfff
    dddddddddddddddddddffffffffffffffffffb888866666666666bddddddd1111fffffffffffffffffffffffffffaa22aaa2aaaa2cc55cc2cc31111111111111111111111111111111111111111ddfff
    ddddddddddddddddddfffffffffffffffffffb8888666666666666bddddddfffffffffffffffffffffffffffffffa22aaa2aaaaa2ccccccccb1111111111111111111111111111111111111111dddfff
    ddddddddddddddddffffffffffffffffffffb8888866666666666666666dffffffffffffffffffffffffffffffff22aaaa2aaaa2cc5cccccb111111111111111111111111111111111111111dddddfff
    dddddddddddddffffffffffffffffffffffffdddb8866666666666666668ffff6fffffffffffffffffffffffffff2ccaa22aaa2ccccccbddd11111111111111111111111ddd11111111111dddddddfff
    ddddddddddfffffffffffffffffffffffff1111db8866666666666666668ffffffffffffffffffffffffffffffff2ccca2aaa245ccccb1111111111111111111111ddddddddddd111ddddddddddddfff
    dddddfffffffffffffffffffffffffffff1111ddb8888666666666666668fffffffffffffff1111fffffffffffffccccc2aaaa5cc22b1111111111111111dddddddddddddddddddddddddddddddddfff
    dddffffffffffffffffffffffffffffffd11111dbb8868866666d1b6666dfffffff11111111111111ffffffffffffcccc2cc2acc241111111111111111ddddddddddddddddddddddddddddddddddffff
    ddfffffffffffffffffffffffffffffffd11111dbb888886666b111dddd1111111111111111111111fffffffffffffcc2ccc4c22411111111111111dddddddddddddddddddddddddffffffffffffffff
    fffffffffffffffffffffffffffffffffd11111ddddb88886666d1dd111111111111111dd1dddfff11ffffffffffffcc2cc4ccc241111111111dddddddddddffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffd111111111dbbb866666bbdddddd1111111ddddddddffffffffffffffff44bc2c44cccbd1111111111ddddddddddfffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffd1111111111111b8686666bddddddddddddddddddfffffffffffffffffff4fffc4cccccb1111111111dddddddfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffd1111111111111b88686666bdddddddddddddddffffffffffffffffffffbbfdbbbccccbd111111ddddddddddffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffd111111f11111b88686886666bddddddddddffffffffffffffffffffffd4ffbffffcb11111111ddddddddddfffffffff111fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffd11111ffff111b88886888666dffffdfffffffffffffffffffffffffff4444fffffff111111dddddddddddffffffff11111111dfffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffdffdd111ffff11b8888888886dfffffffffffffffffffffffffffffffff444fffffff1111ddddddddddddffffffff111111dddddfffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff11191b8888888888fff8fffffffffffffffffffffffffffffffffffffff1111ddddddddddfffffffffff1111dddddfffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1111ffffd1111b8888888886ff866fffffffffffffffffffffffffffffffffffff11111ddddddddddffffffffffff111dddddffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1111111ff11111b88888888ffff866fffffffffffffffffffffffffffffffffff111111dddddddddffffffffffffff1ddddfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1111111ff11111fffffffffffff86ffffffffffffffffffffffffffffffffff1111111dddddddddffffffffffffffdddffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff111111fff11111ffffffffffffffffffffffffffffffffffffffffffff1111111111dddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff111fffff111111fffffffffffffffffffffffffffffffffffffffffffff111111ddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff111f1111ff1111ffffffffffffffffffffffffffffffffffffffffffffffff111dddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1111ff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff11f1111ff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffd11f1111ff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffd111f111ddff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffd1111ffffddff1ffffffffffff111111dfffffffffffffffffffffffffffffffffffffffffffffffff1111111f11ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffd1111ff11111ffffffffffffd11111111fffffffffffffffffffffffffffffffffffffffffffffffffd11111fff11fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff11111ff111111fffffffffff11111111ddd1ffffffffffffffffffffffffffffffffffff11ffffffffd1111fffd11fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff111111f11111111ffffffffff1111111111111fffffffffffffffff44444444ffff44dff141ffffffffd111fffffd1ffffffff111111fffffffffffffffffffffffff
    fffffffffffffffffffffffffffd1111ff111d1111fffffffffff111111111111fffffffffffffffd444444444dfff44df1111ffffffffd11ff11fff1ffffff111111111ffffffffffffffffffffffff
    fffffffffffffffffffffffffffd1111f111ddd111ffffffffffffffff1111111ffffffffffffff44444444444dffffff1111fff1fffffd11ff111ffdfffff1111111111ffffffffffffffffffffffff
    fffffffffffffffffffffffffffd111ff1ff11d111fffffffffffffd11fffd111fffffffffffff44444444444444ffff11114fff1fffffd1ff11111fd1ff111111111111ffffffffffffffffffffffff
    ffffffffffffffffffffffffff1111ffff1f111d11fffffffffff11111f11ff11ffffffffdfff444444444444444fffff1f44df1ffffffd1ff11111fd1ff11f111111111ffffffffffffffffffffffff
    ffffffffffffffffffffffffffd111fff111ff1ddffffffffffff11f11f111ff1fffffffddff4444444444444444fffffffd441fffdfffffff11111f11ff111f111111111fffffffffffffffffffffff
    ffffffffffffffffffffffffffd111fff111ff1ddffffffffff1f11111f1111fffffffffffff4444444444444444f11ffffff44dfffdffff1f11111f11dd1111111fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffd1ff11f1ff11111ffffffffff1f11111f111111ffffffffffe4444444444444444f1ffffff4444dffddff1111111ff11dd111111ff11111fffffffffffffffffffffff
    fffffffffffffffffffffffffdff1111fff111111ffffffffff11fffff1111111ffffffffffee4444444444444441fffffff44444fffffff11ff1ff111dd11111ff111111fffffffffffffffffffffff
    ffffffffffffffffffffffffffbd11111111ddd1fffffffffff111111fdd11111ffffffffffeee44444444444444ffffffee44444dffffffd11ffff1111ddfffff111111dfffffffffffffffffffffff
    fffffffffffffffffffffffff1d7b11f111d7777fffffffffff111111ffdd1111ffffffffffeeeeeeeee44444444fffffeee44444dffffffd1111f11111dd1fff111111ddfffffffffffffffffffffff
    ffffffffffffffffffffffffbd11f7ff11dd11d77ffffffffff1111111ffd1111ffffffffffeeeeeeeeeeeee44dfffffeeee44444dfffffffd11f111111dd11ff111f11dffffffffffffffffffffffff
    ffffffffffffffffffffffffddd1dfff77d1111dfffffffffff11111ff1f1111fffffffffffeeeeeeeeeeeeeeefffffeeeee44444dfffffffd11fd111111dd1f1111111dffffffffffffffffffffffff
    fffffffffffffffffffffffffdd1111f1111111ffffffffffff111fff11ff111ffffffffffffeeeeeeeeeeeeefffffeeeeee44444dfffffffd1ffff1111fbd11f1111ff1ffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1ff111111dfffffffffffff1ff11111f111fffffffffffffffeeeeeeeeeffffeeeeeeee44444dfffffffff1fff111ffbd11f1111f11ffffffffffffffffffffffff
    ffffffffffffffffffffffffddd1fffff11111dfffffffffffffff1111111ff1fffffffffffffffffff11ffffffeeeeeebde44444dffffffff111fffff11dd11f11fff111fffffffffffffffffffffff
    fffffffffffffffffffffffddd11111ff11111ffffffffffff1111f111111dffffffffffffffffffff11ffffeeeeeeeebdee44444dffffffff1111ffd1f1ddd1ffffff111ddfffffffffffffffffffff
    fffffffffffffffffffffffddd11111fffff111fffffffffffd111f11f1111ffffffffffffff44fff11ffeeeeeeeeeeb1d4444444dffffffff11111111f1dddff111ff111dddffffffffffffffffffff
    fffffffffffffffffffffffddd111111dffff1ffffffffffffd111f111111111fffffffffffffffff1ffeeeeeeeeeed1d4444444dffffffffff1111111f1dddf11111f111ddddfffffffffffffffffff
    fffffffffffffffffffffffddd111111dffdffffffffffffffd111f111111111ffffffffffffffff1fffeeeeeeeee11dbd444444dfffffffffdd111111ffddbfd1111f1111ddddffffffffffffffffff
    ffffffffffffffffffffffdddd11111f11f1dffffffffffffdd11fff11111111ffffffffffffff111ffffeeeeeee1ddbd144444dffffffffffdd111111ffddbfdd1111111ddd11ffffffffffffffffff
    ffffffffffffffffffffffffdd11111111f11ffffffffffffddd1ffffffff111ffffffffffffff111fffffeeee11dbbb414444dfffffffffffdd111111f1dbbddd1111f11111111fffffffffffffffff
    ffffffffffffffffffffffdffb11111111f11ffffffffffffdffffff1f11fffffffffffffffff1111ffffff411114411d4444dfffffffffffff111111ff1ffbbddd111fff1111fffffffffffffffffff
    fffffffffffffffffffffdddddfff11111f11ffffffffffffffddff11f111111fffffffffffff11f1ffffff111111144444ddfffffffffffffff11111f111fbbdddd111fffffff1fffffffffffffffff
    fffffffffffffffffffffdddddf11ff11111fffffffffffffddddfffff111111fffffffffffffffff1fff111111ddddddddfffffffffffffffff111fff111fbdddddd111f11111ddffffffffffffffff
    fffffffffffffffffffffdddddf11ddfff11fffffffffffffdddd111f11111ddfffffffffffffffff111111111ffffffffffffffffffffffffff11fff1111fbdbddddd1ff11111ddffffffffffffffff
    fffffffffffffffffffffddddd111111df11ffffffffffffdddddd1f11111ddfffffffffff1fff1fffff11111fffffffffffffffffffffffffffffff11111fbdbddddd1f111111dddfffffffffffffff
    ffffffffffff7777ffffddddbf11111111ffffffffffffffddddddff1111dd1fffffffffff1111ffffff1111ffffffffffffffffffffffffffffffff11111dbdbdddddff111111dddfffffffffffffff
    ffffffffffff77777fffdddddffd1111111fffffffffffffdddddfffffff111ffffffffffffffffffffff11ffffffffffffffffffffffffffffff11f111dddddbddddfd1111111dddfffffffffffffff
    ddddddddffff677777ffddddddfd1111111fffffffffffffdddbbfd111fff11ffffffffffffffffff1ffffffffffffffdfffffffffffffffffffdd11f1dfffdbdbddffbbddff11dbfdffffffffffffff
    55555545ffff6667777fddddddfdd111111dffffffffffffddffdd11111fffdffffffffffffffffff1ffff1ffffffffddfffffffffffffffffffdd11ffff11ffbbddfbbfffd1fdbffdffffffffffffff
    5554445555db6777777ddddddb7dd11111ddfffffffffffffbbddd1ddddd7fdffffffffffffffffff11111fffffffffdfffffffffffffffffffffdd1111111dffbdbfddfdddd1ddddddfffffffffffff
    5545555455556677777dddb77777dd1111dfffffffffffffffbdddd77777771ffffffffffffffffff111fffffffffffffffffffffffffffffffffdd111111fddddbddddfdddddddddddfffffffffffff
    4455555555557667777bb7777777bddddddffffffffffffddfbddddfd1d1117ffffffffffffffffffffffffffffffffffffffffffffffffffffffdd11111ffddddbddddfdddddddddddfffffffffffff
    4454555555555666777677766777fddddddffffffffffffddfbddddbd1bd1117fffffffffffffffffffffffffffffffffffffffffffffffffffffdd11111f1ddddbddddfbddddddddddfffffffffffff
    444445555455477667776666677dbffbbbdffffffffffffddffbbbbdfffd111fffffffffffffffffffffffffffffffffffffffffffffffffffffff11111f11dddddbddddffbbbbdddbbbffffffffffff
    444444554545555b6666666677ddddfffbffffffffff111ddbffffffffff11dffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ff11dddddbddddfdddbfdddfffffffffffffff
    44444445554554444b6666677bddddddddffff111ff1111ddbffdddffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff11ddddddddddffddddbbbbbddffffffffffff
    4444444455444444446666777dddddddddf111111f11111dfffdddfff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddbdddddbddfddbdddffdddddfffff777fff
    444444444444444444bbbb744433ddddddbdd1111111111bfddddffdd11111f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fddddddddbddbbddddffbbddddfff77777fff
    44444444444444444444444444444dddddbddddffd1111dbdddddfbddf1111f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffd111fddddddddbdddfbdddfddfdddddff7fffffff
    444444444444444444444444444444444dddddbbdfbddbbddddddffdddd111f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffd11dddddbfffdbbfffbbbdddbbddddf7ffffffff
    444444444444444444444444444444444555ddbbddbfdbbddddddbffddd1fff7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffd1ddffbffbdddbbddbbbdddddfdddd7fffffffff
    444444444444444444444444444444445555557bdddbbbbdddddddbfbbbdf177ffffff7777777fffffffffffffffffffffffffffffffff7777ffffff11ddffbbddddd777dddddddddfddd7ffffffffff
    444444444444444444444444444444455555555577dddbbddddddfbbbbfffd7ffff777777777777ffffffffffffffffffffffffffffffff7777777ff11dbfbdddddddd7777dddddddffb7fffffffffff
    44444444444444444444444444444455555555555555ddddddddffddddbfb7ffff777777766fff7fffffffffffffffffffffffffffffffff7777777fffffffbddddddd7ff77ddddddfff7ffffdddbfff
    444444444444444444444444444444445555555555555543333dfbddddbf7bff77777776ffffffffffffffffffffffffffffffffffffffffff77777fffddbbbbdddddd7fff7ddddbffddffff45555555
    4444444444444444444444444444444444445545555554444443bbddddffddf677777666fffff77fffffffffffffffffffffffffffffffffff77777ff1ddddd777bddd7ffffddddffdd7ffff44445554
    4444444444444444444444444444444444444555555444444444444444bddd6666776fff7667fffffffffffffffffffffffffffffffffffffff7777ffdddddfbd7ff7d7ffffddddb4444bbbb44444444
    4444444444444444444444444444444444444455445444444444444444443b66666777ff77677fffffffffffffffffffffffffffffffffffffff777ffdddddfbddfff77ffffdd3344444444444444444
    44444444bbb4444444444444444444444444444444444444444444444444447666ffffff7ffff77ff11ff111fdf61111fffffffffffffffffffff7fffbddddfbddfffffffffb44444444444444444444
    44444444bbb4444444444444444444444444444444444444444444444444455766ffffff7ffffffff1ddb111dddbdddd1d1ffffffffffffffffffffffbddddfbddbffffffff444444444444444444444
    444444beccc444444444444444444444444444444444444444444444444445576777766fffffffffddd6ddddddddbbbbffffd11ff11111dddffffffffbdddbfdddddbffffb4444444444444444444444
    444444bceee44444444444444444444444444444444444444444444444444555755557bbdfffffffddd6dddddddddddd666b1111f1111dddddffffffffddddbddddd4bffc44444444444444444444444
    444444ee444444444444444444444444444444444444444444444444444455555555555557ddddd7bbbbbbbbddddddddddddddddffddddddddfffffff7d333444444bb4bb44444444444444444444444
    444444444444444444444444444444444444444444444444444444444444555555555555555555554777777775bbddddddddddddddbddddddbfffff77554444bb4bbb444644444444444444444444444
    44444444444444444444444444444444444444444444444444444444444455555555555555555555555555555544455ddddddddddb6ddbbbb477775555554444666b44444b444444444444444bbbbbbb
    444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555dbbbbbbbbb7774555555555555444bbb4444446b4444444444444bbbbbbbc
    444444444444444444444444444444444444444444444444444444444445555555555555555555555555555555555555555544444477755555555555555555444444444446b4444444444bbbbbbccccc
    4444444444bbb444444444444444444444444444444444444444444444455555555555555555555555555555555455555555555555555555555555555555554444444444b6b4444444444bbbbbcccccc
    444444eebbbbbbbb444444444444444444444444444444444444444444445555455555555555555555555555555555555555555555555555555555555555544444444444bb4444444444bbbbbbcccccc
    4444eecccbbbbbbbb4444444444444444444444444444444444444444444554545554555555445555555555555555555555555555555555554445555555444444444444444444444444bbbbbcccccccc
    444ecccccbbbbbbbb4444444444444444444444444444444444444444455555555555545555555455555555555555555555555555555555545554555554444454444444444444444444bbbcccccccccc
    4eecccccccbbbbbbbb44444444444444444444444444444444444444445555555555555555555444455555555555555555555555555555545555445554554444444444444444444444bbbbcccccccccc
    4ccccccccccbbbbbbb444444444444444444444444444444444444444445554445555555555445554555555555555555555555555555555455444455445555544555444444444444444bbccccccccccc
    22cccccccccccbbbbbb444444444444444444444444444444444b4444444444444444444444444544555555555555555555555555545555444554444455544455555444444444444222bbccccccccccc
    22eccccccccccccbbbb44444444444444ebb44444444444bbbbbb44444444444444444444444444445555445555555555555555555455544455544444444444444444444444444422eebbbcccccccccc
    442ecccccccccccccbbbb444444444442ecbb44444444bbbbbbcc4444444444444444444444444444555555555545555555555554444444444444444444444444444444444444222ebbbbccccccccccc
    4442eeecccccccccccbbbbbbbeeb444422ee44444444bbbcccccc4444444444444444444444444444445555554445445555545554444444444444444444444444444444444422bbbbbbccccccccccccc
    44444422222cccccccccccccccbb444444444444444bbccccccce44444444444444444444444444444444455455555555555544444444444444444444444444444444444442bbbbbcccccccccccccccc
    44444444222eeeeccccccccccc444444444444444444eeecceee24444444444444444444444444444444444455555555555544444444444444444444444444444444444444bbbbbccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
blockMenu.showMenu(["Play", "Controls", "Statistics", "Credits"], MenuStyle.List, MenuLocation.BottomLeft)
blockMenu.setColors(5, 0)
game.onUpdate(function () {
    if (Game_Started) {
        if (character.matchesRule(mySprite, character.rule(Predicate.NotMoving))) {
            if (direction == "r") {
                if (Skin == 1) {
                    character.loopFrames(
                    mySprite,
                    [img`
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f e f e f . . . . 
                        . . . . . f f f e f e f . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . e . e . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f e f e f . . . . 
                        . . . . . f f f e f e f . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . f f f e f e f . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . f f f e e e e . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . f f f e f e f . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f e f e f . . . . 
                        . . . . . f f f e f e f . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f e f e f . . . . 
                        . . . . . f f f e f e f . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . e . e . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `],
                    200,
                    character.rule(Predicate.NotMoving)
                    )
                } else if (Skin == 2) {
                    character.loopFrames(
                    mySprite,
                    [img`
                        . . . . . 8 . . . . . . . . . . 
                        . . . . 8 8 . 8 8 8 8 8 . . . . 
                        . . . . . . 8 8 8 8 8 8 8 . . . 
                        . . . . . . 8 8 d d 8 8 8 . . . 
                        . . . . . . 8 8 d f d f 8 . . . 
                        . . . . . . 8 8 d f d f 8 . . . 
                        . . . . . . 8 d d d d d 8 . . . 
                        . . . . . . . . . b . . . . . . 
                        . . . . . . . 9 9 9 9 9 . . . . 
                        . . . . . . . b 9 9 9 b . . . . 
                        . . . . . . d d d 9 9 d d . . . 
                        . . . . . . d d d f f d d . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . b . b . . . . . 
                        . . . . . . . . d . d . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . 8 . . . . . . . . . . 
                        . . . . 8 8 . 8 8 8 8 8 . . . . 
                        . . . . . . 8 8 8 8 8 8 8 . . . 
                        . . . . . . 8 8 d d 8 8 8 . . . 
                        . . . . . . 8 8 d f d f 8 . . . 
                        . . . . . . 8 8 d f d f 8 . . . 
                        . . . . . . 8 d d d d d 8 . . . 
                        . . . . . . . . . b . . . . . . 
                        . . . . . . . 9 9 9 9 9 . . . . 
                        . . . . . . . b 9 9 9 b . . . . 
                        . . . . . . d d d 9 9 d d . . . 
                        . . . . . . d d d f f d d . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . b . b . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . 8 . . . . . . . . . . 
                        . . . . 8 8 . 8 8 8 8 8 . . . . 
                        . . . . . . 8 8 8 8 8 8 8 . . . 
                        . . . . . . 8 8 d d 8 8 8 . . . 
                        . . . . . . 8 8 d d d d 8 . . . 
                        . . . . . . 8 8 d f d f 8 . . . 
                        . . . . . . 8 d d d d d 8 . . . 
                        . . . . . . . . . b . . . . . . 
                        . . . . . . . 9 9 9 9 9 . . . . 
                        . . . . . . . b 9 9 9 b . . . . 
                        . . . . . . d d d 9 9 d d . . . 
                        . . . . . . d d d f f d d . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . b . b . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . 8 . . . . . . . . . . 
                        . . . . 8 8 . 8 8 8 8 8 . . . . 
                        . . . . . . 8 8 8 8 8 8 8 . . . 
                        . . . . . . 8 8 d d 8 8 8 . . . 
                        . . . . . . 8 8 d d d d 8 . . . 
                        . . . . . . 8 8 d d d d 8 . . . 
                        . . . . . . 8 d d d d d 8 . . . 
                        . . . . . . . . . b . . . . . . 
                        . . . . . . . 9 9 9 9 9 . . . . 
                        . . . . . . . b 9 9 9 b . . . . 
                        . . . . . . d d d 9 9 d d . . . 
                        . . . . . . d d d f f d d . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . b . b . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . 8 . . . . . . . . . . 
                        . . . . 8 8 . 8 8 8 8 8 . . . . 
                        . . . . . . 8 8 8 8 8 8 8 . . . 
                        . . . . . . 8 8 d d 8 8 8 . . . 
                        . . . . . . 8 8 d d d d 8 . . . 
                        . . . . . . 8 8 d f d f 8 . . . 
                        . . . . . . 8 d d d d d 8 . . . 
                        . . . . . . . . . b . . . . . . 
                        . . . . . . . 9 9 9 9 9 . . . . 
                        . . . . . . . b 9 9 9 b . . . . 
                        . . . . . . d d d 9 9 d d . . . 
                        . . . . . . d d d f f d d . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . b . b . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . 8 . . . . . . . . . . 
                        . . . . 8 8 . 8 8 8 8 8 . . . . 
                        . . . . . . 8 8 8 8 8 8 8 . . . 
                        . . . . . . 8 8 d d 8 8 8 . . . 
                        . . . . . . 8 8 d f d f 8 . . . 
                        . . . . . . 8 8 d f d f 8 . . . 
                        . . . . . . 8 d d d d d 8 . . . 
                        . . . . . . . . . b . . . . . . 
                        . . . . . . . 9 9 9 9 9 . . . . 
                        . . . . . . . b 9 9 9 b . . . . 
                        . . . . . . d d d 9 9 d d . . . 
                        . . . . . . d d d f f d d . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . b . b . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . 8 . . . . . . . . . . 
                        . . . . 8 8 . 8 8 8 8 8 . . . . 
                        . . . . . . 8 8 8 8 8 8 8 . . . 
                        . . . . . . 8 8 d d 8 8 8 . . . 
                        . . . . . . 8 8 d f d f 8 . . . 
                        . . . . . . 8 8 d f d f 8 . . . 
                        . . . . . . 8 d d d d d 8 . . . 
                        . . . . . . . . . b . . . . . . 
                        . . . . . . . 9 9 9 9 9 . . . . 
                        . . . . . . . b 9 9 9 b . . . . 
                        . . . . . . d d d 9 9 d d . . . 
                        . . . . . . d d d f f d d . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . b . b . . . . . 
                        . . . . . . . . d . d . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `],
                    200,
                    character.rule(Predicate.NotMoving)
                    )
                }
            } else if (direction == "l") {
                if (Skin == 1) {
                    character.loopFrames(
                    mySprite,
                    [img`
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f f e f e . . . . 
                        . . . . . f f f f e f e . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . e . e . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f f e f e . . . . 
                        . . . . . f f f f e f e . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . f f f f e f e . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . f f f e e e e . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . f f f f e f e . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f f e f e . . . . 
                        . . . . . f f f f e f e . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `,img`
                        . . . . . f f . f f . . . . . . 
                        . . . . . f f f f f f f . . . . 
                        . . . . . . f f f e e f . . . . 
                        . . . . . . f f e e e e . . . . 
                        . . . . . . f f f e f e . . . . 
                        . . . . . f f f f e f e . . . . 
                        . . . . f f f e e e e e . . . . 
                        . . . . f f f f f c f . . . . . 
                        . . . . f f f a a a a c . . . . 
                        . . . . . . . c a a a c . . . . 
                        . . . . . . e e e a a e e . . . 
                        . . . . . . e e e f f e e . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . c . c . . . . . 
                        . . . . . . . . e . e . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `],
                    200,
                    character.rule(Predicate.NotMoving)
                    )
                } else if (Skin == 2) {
                    character.loopFrames(
                    mySprite,
                    [img`
                        . . . . . 8 . . . . . . . . . . 
                        . . . . 8 8 . 8 8 8 8 8 . . . . 
                        . . . . . . 8 8 8 8 8 8 8 . . . 
                        . . . . . . 8 8 d d 8 8 8 . . . 
                        . . . . . . 8 8 f d f d 8 . . . 
                        . . . . . . 8 8 f d f d 8 . . . 
                        . . . . . . 8 d d d d d 8 . . . 
                        . . . . . . . . . b . . . . . . 
                        . . . . . . . 9 9 9 9 9 . . . . 
                        . . . . . . . b 9 9 9 b . . . . 
                        . . . . . . d d d 9 9 d d . . . 
                        . . . . . . d d d f f d d . . . 
                        . . . . . . . . f f f . . . . . 
                        . . . . . . . . b . b . . . . . 
                        . . . . . . . . d . d . . . . . 
                        . . . . . . . . f f f f . . . . 
                        `],
                    200,
                    character.rule(Predicate.NotMoving)
                    )
                }
            }
        }
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        if (!(Buildmode)) {
            Builder.setPosition(mySprite.x, mySprite.y)
        }
    }
})
game.onUpdate(function () {
    if (info.score() > 0 && info.score() < 25) {
        difficulty = 1
    } else if (info.score() > 25 && info.score() < 50) {
        difficulty = 2
    } else if (info.score() > 50 && info.score() < 75) {
        difficulty = 3
    } else if (info.score() > 75 && info.score() < 100) {
        difficulty = 4
    } else if (info.score() > 100 && info.score() < 125) {
        difficulty = 5
    } else if (info.score() > 125 && info.score() < 150) {
        difficulty = 6
    } else if (info.score() > 150 && info.score() < 175) {
        difficulty = 7
    } else if (info.score() > 175 && info.score() < 200) {
        difficulty = 8
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        if (!(Buildmode)) {
            if (mySprite.isHittingTile(CollisionDirection.Left)) {
                if (controller.left.isPressed() && controller.up.isPressed()) {
                    mySprite.ay = 0
                    mySprite.vy = 0
                    controller.moveSprite(mySprite, 10, 100)
                }
            } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
                if (controller.right.isPressed() && controller.up.isPressed()) {
                    mySprite.ay = 0
                    mySprite.vy = 0
                    controller.moveSprite(mySprite, 10, 100)
                }
            } else {
                mySprite.ay = 350
                controller.moveSprite(mySprite, 100, 0)
            }
        }
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        if (isNaN(point)) {
            point = 0
        }
        console.log("point:" + point)
        lastPoints2 = blockSettings.readNumber("points")
        if (isNaN(lastPoints2)) {
            lastPoints2 = 0
            blockSettings.writeNumber("points", lastPoints2)
        }
        console.log(blockSettings.readNumber("points"))
    }
})
game.onUpdateInterval(1400, function () {
    if (Game_Started) {
        if (difficulty == 4) {
            Make_Enemy()
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (Game_Started) {
        if (difficulty == 1) {
            Make_Enemy()
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (Game_Started) {
        info.changeScoreBy(1)
    }
})
game.onUpdateInterval(1000, function () {
    if (Game_Started) {
        if (difficulty == 5) {
            Make_Enemy()
        }
    }
})
game.onUpdateInterval(1600, function () {
    if (Game_Started) {
        if (difficulty == 3) {
            Make_Enemy()
        }
    }
})
game.onUpdateInterval(850, function () {
    if (Game_Started) {
        if (difficulty == 6) {
            Make_Enemy()
        }
    }
})
game.onUpdateInterval(600, function () {
    if (Game_Started) {
        if (difficulty == 7) {
            Make_Enemy()
        }
    }
})
game.onUpdateInterval(1800, function () {
    if (Game_Started) {
        if (difficulty == 2) {
            Make_Enemy()
        }
    }
})
game.onUpdateInterval(500, function () {
    if (Game_Started) {
        if (difficulty == 8) {
            Make_Enemy()
        }
    }
})
