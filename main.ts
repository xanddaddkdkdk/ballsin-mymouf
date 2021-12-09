scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -120
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        .............ccfff..............
        ...........ccddecf..............
        ..........ccddeef...............
        ..........fcceecf...............
        .....fffffccccccff.........ccc..
        ...ff3333333c3333cfff....cceec..
        ..f33333333cbc3333333ff.cdeec...
        ff333333ff33c3c33333333fcdeef...
        f3c33333ff33c3333333333ffeef....
        f33333333333333333333333ee3f....
        .f333333cc33333333333333333f....
        ..fccc33c33333333333bdbffeecf...
        ...fc33c333c333f3ddddcc..feef...
        ....fccc333f3d3333dcc.....feef..
        ........ccccfcd3333........fff..
        .............fffff..............
        `,img`
        .............ccfff..............
        ............cddeef..............
        ...........cddeef...............
        ..........fcceecf............ccc
        ....ffffffccccccff.........cceec
        ..ff3333333333333cfff.....cdeec.
        ff333333333c3c3333333ff..cddeef.
        f3c33333ff33c3c33333333fffdeef..
        f3333333ff33c3c3333333333eeecf..
        .f333333333333333333333333eccf..
        ..fccc333333333333333333fffeecf.
        ...fc333333333333333bdb3...feef.
        ....f33c333c333fdddddcc.....feef
        .....ff3333f3d33fddcc........fff
        .......cccccfbd33fc.............
        .............fffff..............
        `,img`
        ..............cfff..............
        ............ccddef..............
        ...........cbddeff.........ccc..
        ..........fcceecf.........ceec..
        ...fffffffccccccff.......cdec...
        .ffc3333333333333cfff....cdef...
        fc333333333c333333333ff.cdef....
        fbc3333ff333c3c33333333ffdcf....
        fbb3333ff333c3c333333333eecf....
        .fb3333333333c33333333333eecf...
        ..fccc33333333333333333fffeef...
        ...fc333333333333333bdbc..feef..
        ....f33c333c3333dddddbc....fff..
        .....ff3333fd3333ddbcc..........
        .......cccccfd333fcc............
        .............fffff..............
        `,img`
        .............ccfff..............
        ............cddeef..............
        ...........cddeef...............
        ..........fcceecf............ccc
        ....ffffffccccccff.........cceec
        ..ff3333333333333cfff.....cdeec.
        ff333333333c3c3333333ff..cddeef.
        f3c33333ff33c3c33333333fffdeef..
        f3333333ff33c3c3333333333eeecf..
        .f333333333333333333333333eccf..
        ..fccc333333333333333333fffeecf.
        ...fc333333333333333bdb3...feef.
        ....f33c333c333fdddddcc.....feef
        .....ff3333f3d33fddcc........fff
        .......cccccfbd33fc.............
        .............fffff..............
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
    music.powerDown.play()
    info.startCountdown(50)
})
scene.onOverlapTile(SpriteKind.Player, img`myTile`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
    music.powerDown.play()
    info.startCountdown(50)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        ..............fffcc.............
        ..............fceddcc...........
        ...............feeddcc..........
        ...............fceeccf..........
        ..ccc.........ffccccccfffff.....
        ..ceecc....fffc3333c3333333ff...
        ...ceedc.ff3333333cbc33333333f..
        ...feedcf33333333c3c33ff333333ff
        ....feeff3333333333c33ff33333c3f
        ....f3ee33333333333333333333333f
        ....f33333333333333333cc333333f.
        ...fceeffbdb33333333333c33cccf..
        ...feef..ccdddd3f333c333c33cf...
        ..feef.....ccd3333d3f333cccf....
        ..fff........3333dcfcccc........
        ..............fffff.............
        `,img`
        ..............fffcc.............
        ..............feeddc............
        ...............feeddc...........
        ccc............fceeccf..........
        ceecc.........ffccccccffffff....
        .ceedc.....fffc3333333333333ff..
        .feeddc..ff3333333c3c333333333ff
        ..feedfff33333333c3c33ff33333c3f
        ..fceee3333333333c3c33ff3333333f
        ..fcce333333333333333333333333f.
        .fceefff333333333333333333cccf..
        .feef...3bdb333333333333333cf...
        feef.....ccdddddf333c333c33f....
        fff........ccddf33d3f3333ff.....
        .............cf33dbfccccc.......
        ..............fffff.............
        `,img`
        ..............fffc..............
        ..............feddcc............
        ..ccc.........ffeddbc...........
        ..ceec.........fceeccf..........
        ...cedc.......ffccccccfffffff...
        ...fedc....fffc3333333333333cff.
        ....fedc.ff333333333c333333333cf
        ....fcdff33333333c3c333ff3333cbf
        ....fcee333333333c3c333ff3333bbf
        ...fcee33333333333c3333333333bf.
        ...feefff33333333333333333cccf..
        ..feef..cbdb333333333333333cf...
        ..fff....cbddddd3333c333c33f....
        ..........ccbdd3333df3333ff.....
        ............ccf333dfccccc.......
        ..............fffff.............
        `,img`
        ..............fffcc.............
        ..............feeddc............
        ...............feeddc...........
        ccc............fceeccf..........
        ceecc.........ffccccccffffff....
        .ceedc.....fffc3333333333333ff..
        .feeddc..ff3333333c3c333333333ff
        ..feedfff33333333c3c33ff33333c3f
        ..fceee3333333333c3c33ff3333333f
        ..fcce333333333333333333333333f.
        .fceefff333333333333333333cccf..
        .feef...3bdb333333333333333cf...
        feef.....ccdddddf333c333c33f....
        fff........ccddf33d3f3333ff.....
        .............cf33dbfccccc.......
        ..............fffff.............
        `],
    200,
    true
    )
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
    8888888888888888888888888888888668888888888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888886888888888888888888888886888888888888888688888888888888888888888688888888888888868888888888888888888888868888888888888886888888888888888888888886
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888886888888688888888888888888888888888888888688888868888888888888888888888888888888868888886888888888888888888888888888888886888888688888888
    8888888888888888888888888888886968888888888888888888888888888888888888696888888888888888888888888888888888888869688888888888888888888888888888888888886968888888
    8888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888888888888888888888888888888888888688888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888838888888888888888888888888888888888888883888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
    8888888838888888888888888888888888888888888888883888888888888888888888888888888888888888388888888888888888888888888888888888888838888888888888888888888888888888
    8888883333388888888888888888888888888888888888333338888888888888888888888888888888888833333888888888888888888888888888888888883333388888888888888888888888888888
    8888888333888888888888888888888888888888888888833388888888888888888888888888888888888883338888888888888888888888888888888888888333888888888888888888888888888888
    8888888383888888888888888888888888888888888888838388888888888888888888888888888888888883838888888888888888888888888888888888888383888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888886888888888888888888888888888888888888888688888888888888888888888888888888888888868888888888888888888888888888888888888886888888
    8888888888888888888888888888888886888688888888888888888888888888888888888688868888888888888888888888888888888888868886888888888888888888888888888888888886888688
    8888888888888888888d888888888888868888888888888888888888888d888888888888868888888888888888888888888d888888888888868888888888888888888888888d88888888888886888888
    888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888888888888888888888ddd8888888888886888888
    8888888888888888888d888888888888666888888888888888888888888d888888888888666888888888888888888888888d888888888888666888888888888888888888888d88888888888866688888
    8888888888888888888888888888888866888888888888888888888888888888888888886688888888888888888888888888888888888888668888888888888888888888888888888888888866888888
    8888888888888888888888688888888886888888888888888888888888888868888888888688888888888888888888888888886888888888868888888888888888888888888888688888888886888888
    8888886888888888888888688888888666688888888888688888888888888868888888866668888888888868888888888888886888888886666888888888886888888888888888688888888666688888
    8888886688888888888886668888888866688888888888668888888888888666888888886668888888888866888888888888866688888888666888888888886688888888888886668888888866688888
    8888886888888888888888688888866666888888888888688888888888888868888886666688888888888868888888888888886888888666668888888888886888888888888888688888866666888888
    8888866688888888888888666888886666668888888886668888888888888866688888666666888888888666888888888888886668888866666688888888866688888888888888666888886666668888
    8888886668888888888886668888888666668888888888666888888888888666888888866666888888888866688888888888866688888886666688888888886668888888888886668888888666668888
    8888866688888888888866668888866666688888888886668888888888886666888886666668888888888666888888888888666688888666666888888888866688888888888866668888866666688888
    6688886668888888888888666888888666666666668888666888888888888866688888866666666666888866688888888888886668888886666666666688886668888888888888666888888666666666
    6666666888888888888866668888666666666666666666688888888888886666888866666666666666666668888888888888666688886666666666666666666888888888888866668888666666666666
    6666666666688888888886666666666666666666666666666668888888888666666666666666666666666666666888888888866666666666666666666666666666688888888886666666666666666666
    6666666666666688888866666666666666666666666666666666668888886666666666666666666666666666666666888888666666666666666666666666666666666688888866666666666666666666
    6666666666667799999999999999776666666666666666666666779999999999999977666666666666666666666677999999999999997766666666666666666666667799999999999999776666666666
    6666666667799999999999999999999977666666666666666779999999999999999999997766666666666666677999999999999999999999776666666666666667799999999999999999999977666666
    6666666799999999999999999999999999997666666666679999999999999999999999999999766666666667999999999999999999999999999976666666666799999999999999999999999999997666
    6666679999999999999999999999996111199977666667999999999999999999999999611119997766666799999999999999999999999961111999776666679999999999999999999999996111199977
    7779999999996999999999999999996999111997777999999999699999999999999999699911199777799999999969999999999999999969991119977779999999996999999999999999996999111997
    9999999999996999999999999999996699911119999999999999699999999999999999669991111999999999999969999999999999999966999111199999999999996999999999999999996699911119
    1999999999996699999999999999966999999111199999999999669999999999999996699999911119999999999966999999999999999669999991111999999999996699999999999999966999999111
    1119999999966699999999999999996999999991111999999996669999999999999999699999999111199999999666999999999999999969999999911119999999966699999999999999996999999991
    9911119999996999999999999999966669999999991111999999699999999999999996666999999999111199999969999999999999999666699999999911119999996999999999999999966669999999
    9999999999966699999999999999996699999999999999999996669999999999999999669999999999999999999666999999999999999966999999999999999999966699999999999999996699999999
    9999999999996669999999999911166619999999999999999999666999999999991116661999999999999999999966699999999999111666199999999999999999996669999999999911166619999999
    9999999999966999999999911119966669999999999999999996699999999991111996666999999999999999999669999999999111199666699999999999999999966999999999911119966669999999
    9999999999966699999991111999996666999999999999999996669999999111199999666699999999999999999666999999911119999966669999999999999999966699999991111999996666999999
    9999999999666669999111199999666669999999999999999966666999911119999966666999999999999999996666699991111999996666699999999999999999666669999111199999666669999999
    9999999999966699111111999999966666699999999999999996669911111199999996666669999999999999999666991111119999999666666999999999999999966699111111999999966666699999
    1111999996666661111199999999666666999911111199999666666111119999999966666699991111119999966666611111999999996666669999111111999996666661111199999999666666999911
    1111111996666699999999999999996666911111111111199666669999999999999999666691111111111119966666999999999999999966669111111111111996666699999999999999996666911111
    1111111166666666999999999996666691111111111111116666666699999999999666669111111111111111666666669999999999966666911111111111111166666666999999999996666691111111
    1111111111666669999999999999666911111111111111111166666999999999999966691111111111111111116666699999999999996669111111111111111111666669999999999999666911111111
    1111111116666666999999999999691111111111111111111666666699999999999969111111111111111111166666669999999999996911111111111111111116666666999999999999691111111111
    1111111166666666661111199999111111111111111111116666666666111119999911111111111111111111666666666611111999991111111111111111111166666666661111199999111111111111
    1111111666666666661119999111111111111111111111166666666666111999911111111111111111111116666666666611199991111111111111111111111666666666661119999111111111111111
    1111111116666666199999111111111111111111111111111666666619999911111111111111111111111111166666661999991111111111111111111111111116666666199999111111111111111111
    1111111166666666699111111111111111111111111111116666666669911111111111111111111111111111666666666991111111111111111111111111111166666666699111111111111111111111
    1111111666666666661111111111111111111111111111166666666666111111111111111111111111111116666666666611111111111111111111111111111666666666661111111111111111111111
    1111111116666666666111111111111111111111111111111666666666611111111111111111111111111111166666666661111111111111111111111111111116666666666111111111111111111111
    1111111666666666661111111111111111111111111111166666666666111111111111111111111111111116666666666611111111111111111111111111111666666666661111111111111111111111
    1111111166666666611111111111111119999911111111116666666661111111111111111999991111111111666666666111111111111111199999111111111166666666611111111111111119999911
    9111111111666666661111111111111991111199911111111166666666111111111111199111119991111111116666666611111111111119911111999111111111666666661111111111111991111199
    9999111666666666661111111111999111111111999911166666666666111111111199911111111199991116666666666611111111119991111111119999111666666666661111111111999111111111
    1199991166666666666111111199111111111111119999116666666666611111119911111111111111999911666666666661111111991111111111111199991166666666666111111199111111111111
    1111999996666661111111199911111111111111111199999666666111111119991111111111111111119999966666611111111999111111111111111111999996666661111111199911111111111111
    1111119999999111111111911111111111111111111111999999911111111191111111111111111111111199999991111111119111111111111111111111119999999111111111911111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111116111111111111111111111111111111111111111611111111111111111111111111111111111111161111111111111111111111111111111111111116111111111
    1111111111116111111111111111116111111111111111111111611111111111111111611111111111111111111111111111111111111161111111111111111111116111111111111111116999111111
    1111111111116111111111111111116611111111111111111111611111111111111111661111111111111111111161111111111111111166111111111111111111116111111111111111116699911119
    1111111111116611111111111111166111111111111111111111661111111111111116611111111111111111111166111111111111111661111111111111111111116611111111111111166999999111
    1111111111166611111111111111116111111111111111111116661111111111111111611111111111111111111666111111111111111161111111111111111111166611111111111111116999999991
    1111111111116111111111111111166661111111111111111111611111111111111116666111111111111111111161111111111111111666611111111111111111116111111111111111166669999999
    1111111111166611111111111111116611111111111111111116661111111111111111661111111111111111111666111111111111111166111111111111111111166611111111111111116699999999
    1111111111116661111111111111166611111111111111111111666111111111111116661111111111111111111166611111111111111666111111111111111111116661111111111111166619999999
    1111111111166111111111111111166661111111111111111116611111111111111996666111111111111111111661111111111111111666611111111111111111166111111111111111166669999999
    1111111111166611111111111111116666111111111111111116661111111111199999666611111111111111111666111111111111111166661111111111111111166611111111111111116666999999
    1111111111666661111111111111666661111111111111111166666111111119999966666111111111111111116666611111111111116666611111111111111111666661111111111111666669999999
    1111111111166611111111111111166666611111111111111116661111111199999996666661111111111111111666111111111111111666666111111111111111166611111111111111166666699999
    1111111116666661111111111111666666111111111111111666666111119999999966666611111111111111166666611111111111116666661111111111111116666661111111111111666666999911
    1111111116666611111111111111116666111111111111111666669999999999999999666611111111111111166666111111111111111166661111111111111116666611111111111111116666911111
    1111111166666666111111111116666691111111111111116666666699999999999666669111111111111111666666661111111111166666911111111111111166666666111111111116666691111111
    1111111111666661111111111111666911111111111111111166666999999999999966691111111111111111116666611111111111116669111111111111111111666661111111111111666911111111
    1111111116666666111111111111691111111111111111111666666699999999999969111111111111111111166666661111111111116911111111111111111116666666111111111111691111111111
    1111111166666666661111111111111111111111111111116666666666111119999911111111111111111111666666666611111111111111111111111111111166666666661111111111111111111111
    1111111666666666661111111111111111111111111111166666666666111999911111111111111111111116666666666611111111111111111111111111111666666666661111111111111111111111
    1111111116666666111111111111111111111111111111111666666619999911111111111111111111111111166666661111111111111111111111111111111116666666111111111111111111111111
    1111111166666666611111111111111111111111111111116666666669911111111111111111111111111111666666666111111111111111111111111111111166666666611111111111111111111111
    1111111666666666661111111111111111111111111111166666666666111111111111111111111111111116666666666611111111111111111111111111111666666666661111111111111111111111
    1111111116666666666111111111111111111111111111111666666666611111111111111111111111111111166666666661111111111111111111111111111116666666666111111111111111111111
    1111111666666666661111111111111111111111111111166666666666111111111111111111111111111116666666666611111111111111111111111111111666666666661111111111111111111111
    1111111166666666611111111111111119999911111111116666666661111111111111111999991111111111666666666111111111111111199999111111111166666666611111111111111119999911
    9111111111666666661111111111111991111199911111111166666666111111111111199111119991111111116666666611111111111119911111999111111111666666661111111111111991111199
    9999111666666666661111111111999111111111999911166666666666111111111199911111111199991116666666666611111111119991111111119999111666666666661111111111999111111111
    1199991166666666666111111199111111111111119999116666666666611111119911111111111111999911666666666661111111991111111111111199991166666666666111111199111111111111
    1111999996666661111111199911111111111111111199999666666111111119991111111111111111119999966666611111111999111111111111111111999996666661111111199911111111111111
    1111119999999111111111911111111111111111111111999999911111111191111111111111111111111199999991111111119111111111111111111111119999999111111111911111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
effects.blizzard.startScreenEffect()
effects.blizzard.startScreenEffect()
mySprite = sprites.create(img`
    .............ccfff..............
    ...........ccddecf..............
    ..........ccddeef...............
    ..........fcceecf...............
    .....fffffccccccff.........ccc..
    ...ff3333333c3333cfff....cceec..
    ..f33333333cbc3333333ff.cdeec...
    ff333333ff33c3c33333333fcdeef...
    f3c33333ff33c3333333333ffeef....
    f33333333333333333333333ee3f....
    .f3333333333333333333333333f....
    ..fccc33333333333333bdbffeecf...
    ...fc33c333c333f3ddddcc..feef...
    ....fccc333f3d3333dcc.....feef..
    ........ccccfcd3333........fff..
    .............fffff..............
    `, SpriteKind.Player)
mySprite.ay = 200
mySprite.ax = 0
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 14))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
