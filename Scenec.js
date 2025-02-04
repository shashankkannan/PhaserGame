

export default class Scenec extends Phaser.Scene{

    constructor()
    {
        super("Scenec");
    }
    init(data)
    {
        this.score= data.scrs;
        this.randbat= data.rnd;
    }
    preload()
    {
        this.load.image('stadium2','assets/respage.jpg');
        this.load.image('tryagain','assets/tryagain.png');
    }

    create()
    {
       var tryagain;
       //stadium
        
       this.std2 = this.physics.add.sprite(200, 380, "stadium2");
       this.std2.scaleX=0.65;
       this.std2.scaleY=0.6;

       this.scores = this.add.text(180,  330, this.score, {color: '#ffffff', font: 'bold 28px josefin sans'});

       tryagain = this.physics.add.sprite(200, 560, "tryagain").setInteractive();
       tryagain.scaleX=0.3;
       tryagain.scaleY=0.3;
       tryagain.on('pointerdown',this.res,this) ;
       tryagain.on('pointerdown',function(){
           tryagain.scaleX=0.2;
           tryagain.scaleY=0.2;
       },this) ;
       tryagain.on('pointerup',function(){ 
           tryagain.scaleX=0.3;
           tryagain.scaleY=0.3;
       },this) ;
          


    }

    res()
    {
        this.scene.start("Example1",{tme:59,rnd:this.randbat});
    }
    update()
    {
        this.scale.setGameSize(400, 700);
    }
}