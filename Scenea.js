import  Example1  from "./Example1.js";

export default class Scenea extends Phaser.Scene{

    constructor()
    {
        super("Scenea");
    }
    preload()
    {
        this.load.image('stadium','assets/game bg.png');
        this.load.image('cricket','assets/first/cribat.png');
        this.load.image('hockey','assets/first/ihockey.png');
        this.load.image('baseball','assets/first/bball.png');
        this.load.image('tennis','assets/first/ten.png');
        this.load.image('badminton','assets/first/shuttle.png');
        this.load.image('start','assets/first/startbtn.png');
        this.load.audio('click', 'assets/audios/click.mp3');
        this.load.image('ads', 'assets/adss.png');
    }

    create()
    {
        console.log(this.randbat);
        this.scale.setGameSize(400, 700);
        var cricket, hockey, baseball, tennis, badminton, start;
        this.a=0;
        this.b=0;
        this.c=0;
        this.d=0;
        this.e=0;
        this.randbat=-1;
        //stadium
        
        this.std = this.physics.add.sprite(200, 365, "stadium");
        this.std.scaleX=0.7;
        this.std.scaleY=0.7;

        //ads
        //banner
       this.ads = this.physics.add.sprite(90, 40, "ads");
       this.ads.scaleX=0.7;
       this.ads.scaleY=0.7;

         //auidos

       this.click=this.sound.add('click');
       
        cricket = this.physics.add.sprite(45, 365, "cricket").setInteractive();
        cricket.scaleX=0.13;
        cricket.scaleY=0.13;
       
        
        

        hockey = this.physics.add.sprite(125, 363, "hockey").setInteractive();
        hockey.scaleX=0.13;
        hockey.scaleY=0.13;
        
        baseball = this.physics.add.sprite(200, 363, "baseball").setInteractive();
        baseball.scaleX=0.13;
        baseball.scaleY=0.13;
        
        this.ban = this.add.text(150, 430," ", {color: '#ffffff', font: '22px Bold Josefin sans'});
       

        tennis = this.physics.add.sprite(278, 363, "tennis").setInteractive();
        tennis.scaleX=0.13;
        tennis.scaleY=0.13;
        
        badminton = this.physics.add.sprite(358, 363, "badminton").setInteractive();
        badminton.scaleX=0.13;
        badminton.scaleY=0.13;
        
        badminton.on('pointerdown', function() {
            this.ban.destroy();
            
       
            this.click.volume=0.2;
            this.click.play();
       //this.hitaud.volume=0.2;
            this.randbat=4;
            cricket.scaleX=0.13;
            cricket.scaleY=0.13;

            hockey.scaleX=0.13;
            hockey.scaleY=0.13;

            baseball.scaleX=0.13;
            baseball.scaleY=0.13;

            tennis.scaleX=0.13;
            tennis.scaleY=0.13;

            badminton.scaleX=0.18;
            badminton.scaleY=0.18;
        },this);


        cricket.on('pointerdown', function() {
            this.ban.destroy();
            // this.scale.startFullscreen();
        
            this.click.volume=0.2;
            this.click.play();
       //this.hitaud.volume=0.2;
            this.randbat=0;
            cricket.scaleX=0.18;
            cricket.scaleY=0.18;

            hockey.scaleX=0.13;
            hockey.scaleY=0.13;

            baseball.scaleX=0.13;
            baseball.scaleY=0.13;

            tennis.scaleX=0.13;
            tennis.scaleY=0.13;

            badminton.scaleX=0.13;
            badminton.scaleY=0.13;

        },this);

        hockey.on('pointerdown', function() {
            this.ban.destroy();
            // this.scale.startFullscreen();
            
            this.click.volume=0.2;
            this.click.play();
       //this.hitaud.volume=0.2;
            this.randbat=1;
            cricket.scaleX=0.13;
            cricket.scaleY=0.13;

            hockey.scaleX=0.18;
            hockey.scaleY=0.18;

            baseball.scaleX=0.13;
            baseball.scaleY=0.13;

            tennis.scaleX=0.13;
            tennis.scaleY=0.13;

            badminton.scaleX=0.13;
            badminton.scaleY=0.13;
        },this);

        baseball.on('pointerdown', function() {
            this.ban.destroy();
            // this.scale.startFullscreen();
           
            this.click.volume=0.2;
            this.click.play();
       //this.hitaud.volume=0.2;
            this.randbat=2;
            cricket.scaleX=0.13;
            cricket.scaleY=0.13;

            hockey.scaleX=0.13;
            hockey.scaleY=0.13;

            baseball.scaleX=0.18;
            baseball.scaleY=0.18;

            tennis.scaleX=0.13;
            tennis.scaleY=0.13;

            badminton.scaleX=0.13;
            badminton.scaleY=0.13;
        },this);

        tennis.on('pointerdown', function() {
            this.ban.destroy();
            // this.scale.startFullscreen();
        
            this.click.volume=0.2;
            this.click.play();
       //this.hitaud.volume=0.2;
            this.randbat=3;
            cricket.scaleX=0.13;
            cricket.scaleY=0.13;

            hockey.scaleX=0.13;
            hockey.scaleY=0.13;

            baseball.scaleX=0.13;
            baseball.scaleY=0.13;

            tennis.scaleX=0.18;
            tennis.scaleY=0.18;

            badminton.scaleX=0.13;
            badminton.scaleY=0.13;
        },this);


        start = this.physics.add.sprite(200, 508, "start").setInteractive();
        start.scaleX=0.2;
        start.scaleY=0.2;
        start.on('pointerdown', function() {
                this.click.volume=0.2;
                this.click.play();
       
            if(this.randbat>-1)
            {
                this.scale.setGameSize(400, 700);
                // this.scale.startFullscreen();
        
                this.scene.start("Example1",{tme:59,rnd:this.randbat});
            }
            else if(this.randbat==-1)
            {
                this.ban = this.add.text(150, 430,"Select a bat ", {color: '#ffffff', font: '22px Bold Josefin sans'});
            }
        },this);


    }

    update()
    {
        this.scale.setGameSize(400, 700);
        console.log(this.randbat);
    }
}