import  Example1  from "./Example1.js";
import  Scenea  from "./Scenea.js";
import  Scenec  from "./Scenec.js";


var SceneB = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneB ()
    {
        Phaser.Scene.call(this, { key: 'sceneB' });
    },

    preload: function ()
    {
        this.load.image('play', 'assets/first/startbtn.png');
    },

    create: function ()
    {
        var playy=this.add.image(210, 400, 'play').setInteractive();
        playy.scaleX=0.2;
        playy.scaleY=0.2;
        playy.inputEnabled= true;

        playy.on('pointerdown',function () {
            console.log("pressed");
            playy.destroy();
            //this.scale.startFullScreen();
            this.scene.resume('Example1');

        }, this);

        
    }
    

});
const config = {
   
    width:400,
    height:700,
    backgroundColor: '#333333',
   
    type : Phaser.AUTO,
    parent: 'game',
    scene: [Scenea,Example1,SceneB,Scenec],
    scale:{
        scale: {
            
            mode: Phaser.Scale.RESIZE,
            width: '100%',
            height: '100%'
        },
        zoom:1,
    },
    physics: {
        default :'arcade',
        matter: {
            debug:false
        }
       },
     
    }
    var game = new Phaser.Game(config);
