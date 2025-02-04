export default class Example1 extends Phaser.Scene{

    
    
    constructor()
    {
        super("Example1");
    }

    init(data)
    {
        this.intime=data.tme; //time
        this.randbat=data.rnd; //bat
        this.score=data.scr; //score
        this.ismore= data.ismore; 
        this.ismorehun= data.ismorehun;
        this.noballs= data.nb;
        this.wickets= data.wic;
       
    }

    preload()
    {
        /*var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x3587e2, 0.8);
        progressBox.fillRect(240, 270, 320, 50); */
       
        var width = this.cameras.main.width;
            var height = this.cameras.main.height;
            var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                    fill: '#ffffff'
                }
            });
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            
    this.load.on('progress', function (value) {
         console.log(value);
        
         percentText.setText(parseInt(value * 100) + '%');
         //progressBar.clear();
    //progressBar.fillStyle(0xffffff, 1);
    //progressBar.fillRect(250, 280, 300 * value, 30);
    });
            
    this.load.on('fileprogress', function (file) {
         console.log(file.src);
    });
 
    this.load.on('complete', function () {
         console.log('complete');
       //  progressBar.destroy();
        //progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        
        
    });
        
        this.load.image('black','assets/blacksbox.png');
        this.load.image('stadium','assets/game bg.png');
        this.load.image('stump','assets/Cp/sstump.png');
        this.load.atlas('stumps','assets/stump/stumpss.png','assets/stump/stumpss.json');
        this.load.image('btn','assets/Cp/batts.png');
        this.load.image('exbtn','assets/exclusion.png');
        this.load.image('fs','assets/fscrn.png');
        this.load.image('ball','assets/Cp/cball.png');
        this.load.atlas('bats','assets/trialbat/trialbatt.png','assets/trialbat/trialbatt.json')
        this.load.atlas('bats1','assets/trialbat11/trialbat11.png','assets/trialbat11/trialbat11.json')
        this.load.atlas('bats2','assets/trialbat2/trialbat2.png','assets/trialbat2/trialbat2.json')
        this.load.atlas('tenn','assets/tennis/tenn.png','assets/tennis/tenn.json')
        this.load.atlas('bats4','assets/trialbat4/trialbat4.png','assets/trialbat4/trialbat4.json')
        this.load.atlas('bowler','assets/bowler/bowler2.png','assets/bowler/bowler2.json');
        this.load.atlas('sixer','assets/celebs/sixed.png','assets/celebs/sixed.json');
        this.load.atlas('four','assets/four/4.png','assets/four/4.json');
        this.load.atlas('fifty','assets/50/50.png','assets/50/50.json');
        this.load.atlas('hundread','assets/100/100.png','assets/100/100.json');
        this.load.atlas('fielder','assets/fielder/fieldeer.png','assets/fielder/fieldeer .json');
        this.load.audio('hitaud', 'assets/audios/bbb.mp3');
        this.load.audio('swingaud', 'assets/audios/Baseball Bat Swing-SoundBible.com-1511319491.mp3');
        this.load.audio('cheer', 'assets/audios/cheer.mp3');
        this.load.audio('boo', 'assets/audios/boo1.mp3');
        this.load.audio('wicsound', 'assets/audios/wicsound.mp3');
        this.load.image('pause', 'assets/pausing.png');
        this.load.image('banner', 'assets/banner.jpg');
        this.load.image('miad', 'assets/miad.png');
        this.load.image('wlad', 'assets/wlad.png');
        this.load.image('ads', 'assets/adss.png');
        this.load.image('balllife', 'assets/balllife.png');
        
        
    }
    create()
    {
        
        //this.scale.startFullscreen();
        this.scale.setGameSize(400, 700);
        this.lol=0;  //four to left
        this.lol1=0; //four to right
        this.lol2=0; //two to left
        this.lol3=0; //two to right
        console.log(this.randbat);
        this.throwright=0;
        this.throwleft=0;
        this.end=0;

        this.ballcheck=0;

        //hitcheck
        this.hitcheck=0;

       this.only=0;
       this.times=0;
       this.k=1;
       this.d=0;
       this.f=0;
       this.mov=0;
       this.mov1=0;
       //ball
       this.rand=Phaser.Math.Between(0, 2);
       //this.rand=2;


       this.showsix=0;
       this.showfour=0;
       this.show50=0;
       this.show100=0;
       
       //auidos

       this.hitaud=this.sound.add('hitaud');
       this.cheer=this.sound.add('cheer');
       this.swing = this.sound.add('swingaud');
       this.swing.volume = 0.2;
       this.boo=this.sound.add('boo');
       this.boo.volume=0.2;
       this.wicsound=this.sound.add('wicsound');
       this.wicsound.volume=0.4;
       

       //movements

       this.moveright=0;
       this.moveleft=0;
       this.moveup1=0;
       this.moveup=0;

       this.runup=0;

       
       
        var btn,pause,fs;

        if(this.intime == undefined)
        {
            this.intime = 59;
        }
        if(this.score == undefined)
        {
            this.score=0;
        }
        if(this.ismore == undefined)
        {
            this.ismore=0;
        }
        if(this.ismorehun == undefined)
        {
            this.ismorehun=0;
        }
        if(this.noballs == undefined)
        {
            this.noballs=0;
        }
        if(this.wickets == undefined)
        {
            //wickets
            this.wickets=3;
        }


        //stadium
        
        this.std = this.physics.add.sprite(200, 355, "stadium");
        this.std.scaleX=0.7;
        this.std.scaleY=0.7;
       // this.std.body.enable=true;

       //banner
       this.banner = this.physics.add.sprite(200, 172, "banner");
        this.banner.scaleX=0.45;
        this.banner.scaleY=0.45;
        
        //ads
        //banner
       this.ads = this.physics.add.sprite(90, 40, "ads");
       this.ads.scaleX=0.7;
       this.ads.scaleY=0.7;
        /* //miad
       this.miad = this.physics.add.sprite(100, 40, "miad");
       this.miad.scaleX=0.5;
       this.miad.scaleY=0.5;

       this.ban = this.add.text(80, 10,"OFFICIAL PARTNER OF ", {color: '#000000', font: ' 3px Montserrat'});
        //wlad
        this.wlad = this.physics.add.sprite(35, 40, "wlad");
        this.wlad.scaleX=0.5;
        this.wlad.scaleY=0.5;*/
       
       //stump

       this.stump = this.physics.add.sprite(212, 395, "stump");
       this.stump.scaleX=0.08;
       this.stump.scaleY=0.08;

       

        //bowler

       this.bowler = this.physics.add.sprite(240,365,'bowler',"assets/bowler/tile000.png")
       this.bowler.scaleX=0.7;
       this.bowler.scaleY=0.6;
       this.anims.create({
           key:'bowl',
           repeat: 0,
           frameRate: 25,
           frames: this.anims.generateFrameNames('bowler',{
               prefix: 'tile00',
               suffix:'.png',
               start: 1,
               end: 8,
               zeropad: 1
           })
       });
       this.bowler.play('bowl');
        
      
       
       //Fielder 
       this.field1 = this.physics.add.sprite(160,350,'fielder',"assets/fielder/tile000.png")
       this.field1.scaleX=0.05;
       this.field1.scaleY=0.05;
       this.anims.create({
        key:'keep',
        repeat: 0,
        frameRate: 1,
        frames: this.anims.generateFrameNames('fielder',{
            prefix: 'tile00',
            suffix:'.png',
            start: 1,
            end:1,
            zeropad: 1
        })
    });
    this.field1.play('keep');
        this.anims.create({
            key:'idle',
            repeat: 0,
            frameRate: 1,
            frames: this.anims.generateFrameNames('fielder',{
                prefix: 'tile00',
                suffix:'.png',
                start: 2,
                end:2,
                zeropad: 1
            })
        });
        
        
        

        this.field2 = this.physics.add.sprite(265,350,'fielder',"assets/fielder/tile000.png")
       this.field2.scaleX=0.05;
       this.field2.scaleY=0.05;
       

       this.field3 = this.physics.add.sprite(40,450,'fielder',"assets/fielder/tile000.png")
       this.field3.scaleX=0.13;
       this.field3.scaleY=0.13;

       this.field4 = this.physics.add.sprite(370,450,'fielder',"assets/fielder/tile000.png")
       this.field4.scaleX=0.13;
       this.field4.scaleY=0.13;
       this.field4.play('keep');

       //ball

        
       if(this.rand==0)
       {
           this.ball = this.physics.add.image(225,320,"ball");
           //this.ball.setVelocityY(150);
           this.ball.scaleX=0.02;
           this.ball.scaleY=0.02;
           this.ball.body.enable=false;
           this.ball.body.width = this.ball.width;
           this.ball.body.height = this.ball.height;
           
       }
       else if(this.rand==1)
       {
           this.ball = this.physics.add.image(240,370,"ball");
           //this.ball.setVelocityY(150);
           this.ball.scaleX=0.02;
           this.ball.scaleY=0.02;
           this.ball.body.enable=false;
           this.ball.body.width = this.ball.width;
           this.ball.body.height = this.ball.height;
           this.ball.body.enable=true;
       }

       else if(this.rand==2)
       {
           this.ball = this.physics.add.image(230,360,"ball");
           //this.ball.setVelocityY(150);
           this.ball.scaleX=0.02;
           this.ball.scaleY=0.02;
           this.ball.body.enable=false;
           this.ball.body.width = this.ball.width;
           this.ball.body.height = this.ball.height;
           this.ball.body.enable=true;
       }

       //batsmen

        //cricket bat

       if(this.randbat == 0)
       {
            
        this.bats = this.physics.add.sprite(180,565,'bats',"assets/trialbat/tile000.png")
        this.bats.scaleX=1;
        this.bats.scaleY=1.15;
        this.anims.create({
            key:'walk',
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('bats',{
                prefix: 'tile00',
                suffix:'.png',
                start: 1,
                end: 8,
                zeropad: 1
            })
        });
        this.bats.setImmovable();
        this.bats.body.enable=true;
        this.bats.body.width=40;
                this.bats.body.height=45;
                this.bats.body.offset.x=85;
                this.bats.body.offset.y=105;
        this.bats.body.enable=false;
       }

       //hockey stick

       if(this.randbat == 1)
       {
            
        this.bats = this.physics.add.sprite(180,585,'bats1',"assets/trialbat11/tile000.png")
        this.bats.scaleX=1;
        this.bats.scaleY=1.15;
        this.anims.create({
            key:'walk',
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('bats1',{
                prefix: 'tile00',
                suffix:'.png',
                start: 1,
                end: 9,
                zeropad: 1
            })
        });
        this.bats.setImmovable();
        this.bats.body.enable=true;
        this.bats.body.width=40;
                this.bats.body.height=45;
                this.bats.body.offset.x=85;
                this.bats.body.offset.y=105;
        this.bats.body.enable=false;
       }

       //baseball bat

       if(this.randbat == 2)
       {
            
        this.bats = this.physics.add.sprite(180,585,'bats2',"assets/trialbat2/tile000.png")
        this.bats.scaleX=1;
        this.bats.scaleY=1.15;
        this.anims.create({
            key:'walk',
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('bats2',{
                prefix: 'tile00',
                suffix:'.png',
                start: 1,
                end: 9,
                zeropad: 1
            })
        });
        this.bats.setImmovable();
        this.bats.body.enable=true;
        this.bats.body.width=40;
                this.bats.body.height=45;
                this.bats.body.offset.x=85;
                this.bats.body.offset.y=105;
        this.bats.body.enable=false;
       }
       
       //tennis bat

       if(this.randbat == 3)
       {
            
        this.bats = this.physics.add.sprite(180,585,'tenn',"assets/tennis/tile000.png")
        this.bats.scaleX=1;
        this.bats.scaleY=1.15;
        this.anims.create({
            key:'walk',
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('tenn',{
                prefix: 'tile00',
                suffix:'.png',
                start: 1,
                end: 9,
                zeropad: 1
            })
        });
        this.bats.setImmovable();
        this.bats.body.enable=true;
        this.bats.body.width=40;
                this.bats.body.height=45;
                this.bats.body.offset.x=85;
                this.bats.body.offset.y=105;
        this.bats.body.enable=false;
       }

       //badminton bat

       if(this.randbat == 4)
       {
            
        this.bats = this.physics.add.sprite(180,585,'bats4',"assets/trialbat4/tile000.png")
        this.bats.scaleX=1;
        this.bats.scaleY=1.15;
        this.anims.create({
            key:'walk',
            repeat: 0,
            frameRate: 30,
            frames: this.anims.generateFrameNames('bats4',{
                prefix: 'tile00',
                suffix:'.png',
                start: 1,
                end: 9,
                zeropad: 1
            })
        });
        this.bats.setImmovable();
        this.bats.body.enable=true;
        this.bats.body.width=40;
                this.bats.body.height=45;
                this.bats.body.offset.x=85;
                this.bats.body.offset.y=105;
        this.bats.body.enable=false;
       }
        //stumps 
       this.stump1 = this.physics.add.sprite(209, 635, "stumps","assets/stump/tile000.png");
       this.stump1.scaleX=0.25;
       this.stump1.scaleY=0.25;
       this.anims.create({
        key:'stumps',
        repeat: 0,
        frameRate: 30,
        frames: this.anims.generateFrameNames('stumps',{
            prefix: 'tile00',
            suffix:'.png',
            start: 1,
            end: 3,
            zeropad: 1
        })
    });
    //this.stump1.body.enable=false;
    

       
        // bat button 

        this.exbtn= this.physics.add.sprite(340, 650, "exbtn");
        this.exbtn.scaleX=0.25;
        this.exbtn.scaleY=0.25;

        btn = this.physics.add.sprite(340, 650, "btn").setInteractive();
        btn.scaleX=0.13;
        btn.scaleY=0.13;
        btn.on('pointerdown',this.hits,this) ;
        btn.on('pointerdown',function(){
            this.exbtn.scaleX=0.21;
        this.exbtn.scaleY=0.21;
            btn.scaleX=0.1;
            btn.scaleY=0.1;
        },this) ;
        btn.on('pointerup',function(){ 
            btn.scaleX=0.13;
            btn.scaleY=0.13;
            this.exbtn.scaleX=0.25;
        this.exbtn.scaleY=0.25;
        },this) ;


       
        
        
   
            //bat ball collision
        
            this.physics.add.overlap(this.bats,this.ball,this.over,null,this);

            //ball stump1 collision
            this.physics.add.overlap(this.stump1,this.ball,this.outu,null,this);
        
            this.black = this.physics.add.sprite(360, 75, "black");
            this.black.scaleX=0.13;
            this.black.scaleY=0.10;

            this.black1 = this.physics.add.sprite(360, 50, "black");
            this.black1.scaleX=0.13;
            this.black1.scaleY=0.10;

            this.black2 = this.physics.add.sprite(255, 75, "black");
            this.black2.scaleX=0.13;
            this.black2.scaleY=0.10;
            
         //timer

       this.atext = this.add.text( 225,  68,"TIME : "+ this.formatTime(this.intime), {color: '#000000', font: 'bold 12px josefin sans'});
       this.timedEvent = this.time.addEvent({delay: 1000,callback: this.onEvent, callbackScope: this, loop: true });

       //balls
       this.scrtext = this.add.text(333,  43,"Balls : "+ this.noballs, {color: '#000000', font: 'bold 12px josefin sans'});

       //score
       
       //this.scrtt = this.add.text( 305,  18, "Total :",this.score, {color: '#000000', font: 'bold 12px josefin sans'});
       this.scrtt = this.add.text(333,  68,"Total : "+ this.score, {color: '#000000', font: 'bold 12px josefin sans'});

       //balllife
       this.balllife=this.physics.add.sprite(245, 52, "balllife");
       this.balllife.scaleX=0.12;
            this.balllife.scaleY=0.12;

       //wickets
       this.wick = this.add.text(260,  42,"X "+ this.wickets, {color: '#000000', font: 'bold 14px josefin sans'});
       
        //pause
        pause = this.physics.add.sprite(370,20,"pause").setInteractive();
        pause.scaleX=0.045;
        pause.scaleY=0.045;
        pause.on('pointerdown',this.pause,this) ;

        //fullscreen
        fs = this.physics.add.sprite(335,20,"fs").setInteractive();
        fs.scaleX=0.09;
        fs.scaleY=0.09;
        fs.on('pointerdown',this.fullscreen,this) ;
    }


    //fullscreen 

    fullscreen()
    {
        if(this.scale.isFullscreen)
        {
            this.scale.stopFullscreen();
        }
        else
        {
            this.scale.startFullscreen();
        }
    }
    //pause
    pause(){
        this.scene.pause();
        this.scene.launch('sceneB');
    }

    //ball-stump1
    outu()
    {
        if(this.rand==0 )
        {
            if(this.times==168 && this.hitcheck==0)
            {
                this.boo.play();
                this.wicsound.play();
                this.stump1.play('stumps');
                this.wickets-=1;
            }
        }
        else if(this.rand==1)
        {
            if(this.times==104 && this.hitcheck==0)
            {
                this.boo.play();
                this.wicsound.play();
                this.stump1.play('stumps');
                this.wickets-=1;
            }
        }
        else if(this.rand==2)
        {
            if(this.times==109 && this.hitcheck==0)
            {
                this.boo.play();
                this.wicsound.play();
                this.stump1.play('stumps');
                this.wickets-=1;
            }
        }
    }
    //bat button action

    hits () 
    {   
        this.swing.play();
        //ball-1

        if(this.rand==0)
        {
            //cricket bat
            if(this.randbat==0)
            {
                if(this.k==1)this.k=0;
                this.bats.body.width=40;
                this.bats.body.height=45;
                this.bats.body.offset.x=85;
                this.bats.body.offset.y=105;
                this.bats.body.enable=true;
                this.bats.play('walk');
            }
            //hockey bat
            if(this.randbat==1)
            {
                if(this.k==1)this.k=0;
                this.bats.body.width=40;
                this.bats.body.height=45;
                this.bats.body.offset.x=135;
                this.bats.body.offset.y=105;
                this.bats.body.enable=true;
                this.bats.play('walk');
            }
            //baseball bat
            if(this.randbat==2)
            {
                if(this.k==1)this.k=0;
                this.bats.body.width=40;
                this.bats.body.height=45;
                this.bats.body.offset.x=135;
                this.bats.body.offset.y=105;
                this.bats.body.enable=true;
                this.bats.play('walk');
            }
             //Tennis bat
             if(this.randbat==3)
             {
                 if(this.k==1)this.k=0;
                 this.bats.body.width=40;
                 this.bats.body.height=45;
                 this.bats.body.offset.x=135;
                 this.bats.body.offset.y=105;
                 this.bats.body.enable=true;
                 this.bats.play('walk');
             }
             //Badminton bat
             if(this.randbat==4)
             {
                 if(this.k==1)this.k=0;
                 this.bats.body.width=40;
                 this.bats.body.height=45;
                 this.bats.body.offset.x=135;
                 this.bats.body.offset.y=105;
                 this.bats.body.enable=true;
                 this.bats.play('walk');
             }
            
        }

        //ball-2

        if(this.rand==1)
        {
            //cricket bat
            if(this.randbat==0)
            {
                if(this.k==1)this.k=0;
                this.bats.body.width=50;
                this.bats.body.height=45;
                this.bats.body.offset.x=80;
                this.bats.body.offset.y=105;
                this.bats.body.enable=true;
                this.bats.play('walk');
            }
            //hockey bat
            if(this.randbat==1)
            {
                if(this.k==1)this.k=0;
                this.bats.body.width=30;
                this.bats.body.height=45;
                this.bats.body.offset.x=160;
                this.bats.body.offset.y=105;
                this.bats.body.enable=true;
                this.bats.play('walk');
            }

            //baseball bat
            if(this.randbat==2)
            {
                if(this.k==1)this.k=0;
                this.bats.body.width=30;
                this.bats.body.height=45;
                this.bats.body.offset.x=160;
                this.bats.body.offset.y=105;
                this.bats.body.enable=true;
                this.bats.play('walk');
            }
             //Tennis bat
             if(this.randbat==3)
             {
                 if(this.k==1)this.k=0;
                 this.bats.body.width=30;
                 this.bats.body.height=45;
                 this.bats.body.offset.x=160;
                 this.bats.body.offset.y=105;
                 this.bats.body.enable=true;
                 this.bats.play('walk');
             }
 
             //Badminton bat
             if(this.randbat==4)
             {
                 if(this.k==1)this.k=0;
                 this.bats.body.width=50;
                 this.bats.body.height=45;
                 this.bats.body.offset.x=140;
                 this.bats.body.offset.y=105;
                 this.bats.body.enable=true;
                 this.bats.play('walk');
             }
        }

        //ball-2

        if(this.rand==2)
        {
            //cricket bat
            if(this.randbat==0)
            {
                if(this.k==1)this.k=0;
                this.bats.body.width=50;
                this.bats.body.height=45;
                this.bats.body.offset.x=60;
                this.bats.body.offset.y=105;
                this.bats.body.enable=true;
                this.bats.play('walk');
            }
            //hockey bat
            if(this.randbat==1)
            {
                if(this.k==1)this.k=0;
                this.bats.body.width=30;
                this.bats.body.height=45;
                this.bats.body.offset.x=140;
                this.bats.body.offset.y=105;
                this.bats.body.enable=true;
                this.bats.play('walk');
            }

            //baseball bat
            if(this.randbat==2)
            {
                if(this.k==1)this.k=0;
                this.bats.body.width=30;
                this.bats.body.height=45;
                this.bats.body.offset.x=140;
                this.bats.body.offset.y=105;
                this.bats.body.enable=true;
                this.bats.play('walk');
            }
             //Tennis bat
             if(this.randbat==3)
             {
                 if(this.k==1)this.k=0;
                 this.bats.body.width=30;
                 this.bats.body.height=45;
                 this.bats.body.offset.x=140;
                 this.bats.body.offset.y=105;
                 this.bats.body.enable=true;
                 this.bats.play('walk');
             }
 
             //Badminton bat
             if(this.randbat==4)
             {
                 if(this.k==1)this.k=0;
                 this.bats.body.width=30;
                 this.bats.body.height=45;
                 this.bats.body.offset.x=140;
                 this.bats.body.offset.y=105;
                 this.bats.body.enable=true;
                 this.bats.play('walk');
             }
        }
        
        
    }
    
    //after bat hit ball action

    over()
    {

        this.swing.play();
        //ball-1
        if(this.rand==0)
        {
            console.log(this.times);

            //six 
            
            if(this.times>=130 && this.times<=142)
            {
                this.hitcheck=1;
                this.ball.setVelocityY(-740);
                this.ball.setVelocityX(-460);
                this.ball.scaleY-=0.015;
                this.ball.scaleX-=0.015;
                this.hitaud.play();
       //this.hitaud.volume=0.2;
                this.des=1;
                this.mov=1;
                this.showsix=1;
                this.score+=6;
                this.intime+=5;
                this.cheer.volume=0.3;
                this.cheer.play();
                
            }

            //four

            if(this.times>142 && this.times<=147)
            {
                this.hitcheck=1;
                
                this.hitaud.play();
       //this.hitaud.volume=0.2;
                    if(this.ball.y>=280 && this.ball.x>=120)
                    {
                        this.lol=1;
                       
                    }
                    
                    this.field1.play('idle');
                    this.moveleft=1;

                    this.field3.play('keep');
                    this.moveup=1;
                this.showfour=1;
                this.score+=4;
                this.des=1;
                this.mov=1;
                
            }

            // four

            if(this.times>147 && this.times<=161)
            {
                this.hitcheck=1;
                this.hitaud.play();
       //this.hitaud.volume=0.2;
                    if(this.ball.y>=280 && this.ball.x>=120)
                    {
                        this.lol1=1;
                       
                    }
                    
                    
                    this.showfour=1;
                this.score+=4;
                this.des=1;
                this.mov1=1;
                this.field4.play('idle');
                this.moveup1=1;
                this.field2.play('keep');
                this.moveright=1;
                
                
            }
        }
        
        //ball-2
        if(this.rand==1)
        {
            console.log(this.times);

            //six

            if(this.times>=89 && this.times<=91)
            {
                this.hitcheck=1;
                this.hitaud.play();
       //this.hitaud.volume=0.2;
                this.ball.setVelocityY(-540);
                this.ball.setVelocityX(460);
                this.ball.scaleY-=0.015;
                this.ball.scaleX-=0.015;
                this.showsix=1;
                this.des=1;
                this.mov1=1;
                this.score+=6;
                this.intime+=5;
                this.cheer.volume=0.3;
                this.cheer.play();
                
            }

            //four

            if(this.times>= 83 && this.times<= 88)
            {
                this.hitcheck=1;
                this.hitaud.play();
       //this.hitaud.volume=0.2;
                    if(this.ball.y>=280 && this.ball.x>=120)
                    {
                        this.lol=1;
                       
                    }
                    
                    this.field1.play('idle');
                    this.moveleft=1;

                    this.field3.play('keep');
                    this.moveup=1;
                this.showfour=1;
                this.score+=4;
                this.des=1;
                this.mov=1;
                
            }

            //two

            if(this.times> 91 && this.times<= 96)
            {
                this.hitcheck=1;
                this.hitaud.play();
       //this.hitaud.volume=0.2;
                    if(this.ball.y>=280 && this.ball.x>=120)
                    {
                        this.lol3=1;
                       
                    }
                    
                
                    this.field4.play('idle');
                    this.runup=1;
                    this.field2.play('keep');
                this.moveright=1;
                this.score+=2;
                this.des=1;
                this.mov1=1;
                
            }
            
        }

        //ball-3
        if(this.rand==2)
        {
            this.hitcheck=1;
            console.log(this.times);

            //six

            if(this.times>=81 && this.times<=85)
            {
                this.hitaud.play();
       //this.hitaud.volume=0.2;
                this.ball.setVelocityY(-540);
                this.ball.setVelocityX(-460);
                this.ball.scaleY-=0.015;
                this.ball.scaleX-=0.015;
                this.showsix=1;
                this.des=1;
                this.mov=1;
                this.score+=6;
                this.intime+=5;
                this.cheer.volume=0.3;
                this.cheer.play();
                
            }

            //four


            if(this.times>= 86 && this.times<= 94)
            {
                this.hitcheck=1;
                this.hitaud.play();
       //this.hitaud.volume=0.2;
                    if(this.ball.y>=280 && this.ball.x>=120)
                    {
                        this.lol=1;
                       
                    }
                    
                    this.field1.play('idle');
                    this.moveleft=1;

                    this.field3.play('keep');
                    this.moveup=1;
                this.showfour=1;
                this.score+=4;
                this.des=1;
                this.mov=1;
                
            }

            //two

            if(this.times> 95 && this.times<= 101)
            {
                this.hitcheck=1;
                this.hitaud.play();
       //this.hitaud.volume=0.8;
                    if(this.ball.y>=280 && this.ball.x>=120)
                    {
                        this.lol3=1;
                       
                    }
                    
                
                    this.field4.play('idle');
                    this.runup=1;
                    this.field2.play('keep');
                this.moveright=1;
                this.score+=2;
                this.des=1;
                this.mov1=1;
                
            }
            
        }
    }
     
    //timer functions
    //{
        onEvent ()
        {
            this.intime -= 1; 
            this.atext.setText("TIME : " + this.formatTime(this.intime));
        }
        formatTime(seconds){
            // Minutes
            var minutes = Math.floor(seconds/60);
            // Seconds
            var partInSeconds = seconds%60;
            // Adds left zeros 
            //partInSeconds = partInSeconds.toString().padStart(2,'0');
        
            return `${minutes}:${partInSeconds}`;
        }
     //}

     delaywin()
     {
         if(this.score<50)
         {
            this.scene.start("Example1",{tme:this.intime,rnd:this.randbat,scr: this.score,nb: this.noballs, wic: this.wickets});
         }
         else if(this.score>=50 && this.score<100 )
         {
            this.scene.start("Example1",{tme:this.intime,rnd:this.randbat,scr: this.score,ismore: 1, nb: this.noballs, wic: this.wickets});
         }
         else if(this.score>=100 )
         {
            this.scene.start("Example1",{tme:this.intime,rnd:this.randbat,scr: this.score,ismore: 1,ismorehun: 1, nb: this.noballs, wic: this.wickets});
         }
        
     }

     updatetext()
    {
       this.scrtext.setText("Balls : "+this.noballs);
    }

    updatetext1()
    {
       this.scrtt.setText("Total : "+this.score);
    }

    delay6(){
        this.sixer = this.physics.add.sprite(200,300,'sixer',"assets/celebs/tile000.png")
        this.sixer.scaleX=1;
        this.sixer.scaleY=1;
        this.anims.create({
            key:'six',
            repeat: 0,
            frameRate: 6,
            frames: this.anims.generateFrameNames('sixer',{
                prefix: 'tile00',
                suffix:'.png',
                start: 1,
                end: 9,
                zeropad: 1
            })
        });
        this.sixer.play('six');
        this.showsix=0;
    }

    delay4()
    {
        this.four = this.physics.add.sprite(200,270,'four',"assets/four/tile000.png")
        this.four.scaleX=1;
        this.four.scaleY=1;
        this.anims.create({
            key:'four',
            repeat: 0,
            frameRate: 6,
            frames: this.anims.generateFrameNames('four',{
                prefix: 'tile00',
                suffix:'.png',
                start: 1,
                end: 9,
                zeropad: 1
            })
        });
        this.four.play('four');
        
    }

    delay100(){
        this.showsix=0;
        this.showfour=0;
        this.hundread = this.physics.add.sprite(200,300,'hundread',"assets/100/tile000.png");
        this.hundread.scaleX=1;
        this.hundread.scaleY=1;
        this.anims.create({
            key:'hundread',
            repeat: 0,
            frameRate: 6,
            frames: this.anims.generateFrameNames('hundread',{
                prefix: 'tile0',
                suffix:'.png',
               start: 1,
                end: 16,
                zeropad: 2
                })
        });
        this.hundread.play('hundread');
    }

    delay50(){
        this.showsix=0;
        this.showfour=0;
        this.fifty = this.physics.add.sprite(200,300,'fifty',"assets/50/tile000.png")
        this.fifty.scaleX=1;
        this.fifty.scaleY=1;
        this.anims.create({
            key:'fifty',
            repeat: 0,
            frameRate: 6,
            frames: this.anims.generateFrameNames('fifty',{
                prefix: 'tile00',
                suffix:'.png',
                start: 1,
                end: 9,
                zeropad: 1
            })
        });
        this.fifty.play('fifty');
    }


    update()
    {

        
        this.scale.setGameSize(400, 700);
        this.updatetext1();

        console.log(this.randbat);
        
        if(this.ballcheck==0)
        {
            this.noballs++;
            this.ballcheck=1;
        }
        if(this.intime<=10)
        {
            this.atext.setColor('#ff0000');
        }

        if(this.moveright==1)
        {
            if(this.field2.x<=295)
            {
                this.field2.x+=0.7
            }
        }
        if(this.moveleft==1)
        {
            if(this.field1.x>=147)
            {
                this.field1.x-=0.7
            }
        }

        if(this.moveup==1)
        {
            if(this.field3.y>=430 && this.field3.scaleY>=0.10)
            {
                this.field3.y-=0.5;
                this.field3.scaleY-=0.0005;
                this.field3.scaleX-=0.0005;
            }
        }
        if(this.moveup1==1)
        {
            if(this.field4.y>=430 && this.field4.scaleY>=0.10)
            {
                this.field4.y-=0.5;
                this.field4.scaleY-=0.0005;
                this.field4.scaleX-=0.0005;
            }
        }
        
        if(this.runup==1 && this.rand==1)
        {
            if(this.field4.y>=390 && this.field4.x>=200)
            {
                this.field4.y-=1.3;
                this.field4.x-=0.1;
                this.field4.scaleY-=0.0006;
                this.field4.scaleX-=0.0006;
            }
        }
        if(this.runup==1 && this.rand==2)
        {
            if(this.field4.y>=390 && this.field4.x>=140)
            {
                this.field4.y-=1.3;
                this.field4.x-=0.6;
                this.field4.scaleY-=0.0006;
                this.field4.scaleX-=0.0006;
            }
        }

        if(this.score>=50 && this.ismore==0 && this.show50==0)
        {
            this.showsix=0;
        this.showfour=0;
            this.time.addEvent
            (
                {
                delay: 900,
                callback: this.delay50,
                callbackScope: this,
                loop: false
                }
            );
           
            this.show50=1;
        }
        if(this.score>=100 && this.ismorehun==0 && this.show100==0)
        {
            this.showsix=0;
        this.showfour=0;
            this.time.addEvent
        (
            {
            delay: 900,
            callback: this.delay100,
            callbackScope: this,
            loop: false
            }
        );
           
            this.show100=1;
        }
        this.updatetext();
       if(this.showsix==1){
        this.time.addEvent
        (
            {
            delay: 400,
            callback: this.delay6,
            callbackScope: this,
            loop: false
            }
        );
        this.showsix=0;
       }
       if(this.showfour==1){
        this.time.addEvent
        (
            {
            delay: 900,
            callback: this.delay4,
            callbackScope: this,
            loop: false
            }
        );
        this.showfour=0;
        
       }
            

        this.times++;
        

       console.log(this.noballs);

       //RESTART GAME

        if(this.intime<=0 || this.wickets==0)
        {
            this.scene.stop('Example1');
            this.scene.start("Scenec",{scrs: this.score,rnd:this.randbat});
        }

        if(  this.ball.x>400 || this.ball.y>700 || this.ball.x<0 || this.ball.y<0 || this.ball.scaleY<=0 || this.end==1)
        {
            this.time.addEvent
        (
            {
            delay: 1200,
            callback: this.delaywin,
            callbackScope: this,
            loop: false
            }
        );
        }
        

        
        
        if(this.k==0){
            this.bats.body.enable=false;
            this.k=1;
        }
        if(this.rand==0)
        {

            if(this.lol==1)
            {
                if(this.ball.scaleY>=0)
                {
                    this.ball.x-=1.5;
                    this.ball.y-=3;
                    this.ball.scaleY-=0.0006;
                    this.ball.scaleX-=0.0006;
                }
                
            }
            if(this.lol1==1)
            {
                if(this.ball.scaleY>=0)
                {
                    this.only=1;
                    this.ball.x+=1.5;
                    this.ball.y-=3;
                    this.ball.scaleY-=0.0006;
                    this.ball.scaleX-=0.0006;
                }
                
            }

            if(this.mov==0)
            {
                if(this.ball.y<=520 && this.d==0)
                {
                    this.ball.y+=2.8;
                    this.ball.scaleX+=0.0002;
                    this.ball.scaleY+=0.0002;
                }
                if(this.ball.y==521.6000000000006 )
                {
                    
                    this.d=1;
                }
                if(this.ball.y>490 && this.d==1 && this.f==0)
                {
                    
                    this.ball.y-=2;
                    this.ball.scaleX+=0.0002;
                    this.ball.scaleY+=0.0002;
                }
                if(this.ball.y==489.6000000000006 && this.d==1)
                {
                    this.f=1;
                    this.ball.body.enable=true;
                    
                }
                if(this.ball.y<810 && this.f==1 && this.only==0 )
                {
                    if(this.ball.scaleY<=0.0385)
                    {
                        //this.ball.y+=1.5;
                        this.ball.scaleX+=0.0003;
                        this.ball.scaleY+=0.0003;
                        
                       
                    }
                    else
                    {
                        this.ball.y+=2;
                        this.ball.scaleX+=0.00035;
                        this.ball.scaleY+=0.00035;
                        
                    }
                
                
                }

            }
           
        
            if(this.std.x<=210 && this.mov==1 )
            {    
                this.std.x+=0.3;
                this.bats.x+=0.3;
                this.stump.x+=0.3;
                this.bowler.x+=0.3;
                this.field1.x+=0.3;
                this.field2.x+=0.3;
                this.field3.x+=0.3;
                this.field4.x+=0.3;
                this.stump1.x+=0.3;
                this.banner.x+=0.3;
            }


           if(this.std.x>=190 && this.mov1==1 )
            {    
                this.std.x-=0.3;
                this.bats.x-=0.3;
                this.stump.x-=0.3;
                this.bowler.x-=0.3;
                this.field1.x-=0.3;
                this.field2.x-=0.3;
                this.field3.x-=0.3;
                this.field4.x-=0.3;
                this.stump1.x-=0.3;
                this.banner.x-=0.3;
            }
        
        }



        if(this.rand==1)
        {

            if(this.lol==1)
            {
                if(this.ball.scaleY>=0)
                {
                    this.ball.x-=1.5;
                    this.ball.y-=3;
                    this.ball.scaleY-=0.0005;
                    this.ball.scaleX-=0.0005;
                }
                
            }
            if(this.lol1==1)
            {
                if(this.ball.scaleY>=0)
                {
                    this.only=1;
                    this.ball.x+=1.5;
                    this.ball.y-=3;
                    this.ball.scaleY-=0.0006;
                    this.ball.scaleX-=0.0006;
                }
                
            }
            if(this.lol3==1)
            {
                if(this.ball.scaleY>=0.01)
                {
                    this.only=1;
                    
                    this.ball.x+=1.8;
                    this.ball.y-=3;
                    this.ball.scaleY-=0.0006;
                    this.ball.scaleX-=0.0006;
                }
                if(this.ball.scaleY<=0.01)
                {
                    console.log(this.ball.x);
                    console.log(this.ball.y);
                    this.throwright=1;
                }
            }

            if(this.lol2==1)
            {
                if(this.ball.scaleY>=0.01)
                {
                    this.only=1;
                    
                    this.ball.x-=1.8;
                    this.ball.y-=3;
                    this.ball.scaleY-=0.0006;
                    this.ball.scaleX-=0.0006;
                }
                if(this.ball.scaleY<=0.01)
                {
                    this.throwleft=1;
                }
            }

            if(this.only==0)
            {
                if(this.ball.y<=570 && this.d==0)
            {
                this.ball.y+=2.8;
                this.ball.scaleX+=0.0003;
                this.ball.scaleY+=0.0003;
            }
            if(this.ball.y==571.5999999999996 )
            {
                this.d=1;
            }
            if(this.ball.y<=650 && this.ball.x>=220 && this.d==1 && this.f==0)
            {
                this.ball.y+=1.9;
                this.ball.x-=1;
                this.ball.scaleX+=0.0003;
                this.ball.scaleY+=0.0003;
            }
            if(this.ball.y==611.4999999999991 && this.d==1)
            {
                this.f=1;
                this.ball.body.enable=true;
               
            }
            if(this.ball.y<810 && this.f==1 )
            {
                this.ball.y+=1.9;
                this.ball.x-=1.8;
                this.ball.scaleX+=0.0003;
                this.ball.scaleY+=0.0003;
            
            }
            }
            
        
            if(this.std.x<=210 && this.mov==1 )
            {    
                this.std.x+=0.3;
                this.bats.x+=0.3;
                this.stump.x+=0.3;
                this.bowler.x+=0.3;
                this.field1.x+=0.3;
                this.field2.x+=0.3;
                this.field3.x+=0.3;
                this.field4.x+=0.3;
                this.stump1.x+=0.3;
                this.banner.x+=0.3;
            }

           if(this.std.x>=190 && this.mov1==1 )
            {    
                this.std.x-=0.3;
                this.bats.x-=0.3;
                this.stump.x-=0.3;
                this.bowler.x-=0.3;
                this.field1.x-=0.3;
                this.field2.x-=0.3;
                this.field3.x-=0.3;
                this.field4.x-=0.3;
                this.stump1.x-=0.3;
                this.banner.x-=0.3;
            }
        
        }

        //throw from right
        if(this.throwright==1)
        {
            if(this.ball.x>=200 && this.ball.y>=340)
            {
                this.ball.x-=2.8;
                this.ball.y-=1.9;
            }
            if(this.ball.x<=255 && this.ball.y<=385)
            {
                this.end=1;
            }
        }

        //throw from left
        if(this.throwleft==1)
        {
            if(this.ball.x<=240 && this.ball.y>=370)
            {
                this.ball.x+=2.8;
                this.ball.y-=1.4;
            }
            if(this.ball.x<=235 && this.ball.y<=385)
            {
                this.end=1;
            }
        }
        
        if(this.rand==2)
        {

            if(this.lol==1)
            {
                if(this.ball.scaleY>=0)
                {
                    this.ball.x-=2.5;
                    this.ball.y-=5;
                    this.ball.scaleY-=0.00085;
                    this.ball.scaleX-=0.00085;
                }
                
            }
            if(this.lol1==1)
            {
                if(this.ball.scaleY>=0)
                {
                    this.only=1;
                    this.ball.x+=1.5;
                    this.ball.y-=3;
                    this.ball.scaleY-=0.0006;
                    this.ball.scaleX-=0.0006;
                }
                
            }
            if(this.lol3==1)
            {
                if(this.ball.scaleY>=0.01)
                {
                    this.only=1;
                    
                    this.ball.x+=1.3;
                    this.ball.y-=3;
                    this.ball.scaleY-=0.0006;
                    this.ball.scaleX-=0.0006;
                }
                if(this.ball.scaleY<=0.01)
                {
                    this.throwright=1;
                }
            }

            if(this.lol2==1)
            {
                if(this.ball.scaleY>=0.01)
                {
                    this.only=1;
                    
                    this.ball.x-=1.8;
                    this.ball.y-=3;
                    this.ball.scaleY-=0.0006;
                    this.ball.scaleX-=0.0006;
                }
                if(this.ball.scaleY<=0.01)
                {
                    this.throwleft=1;
                }
            }
             //throw from right
        if(this.throwright==1)
        {
            if(this.ball.x>=230 && this.ball.y>=345)
            {
                this.ball.x-=2.8;
                this.ball.y-=2.8;
            }
            if(this.ball.x<=255 && this.ball.y<=385)
            {
                this.end=1;
            }
        }

        //throw from left
        if(this.throwleft==1)
        {
            if(this.ball.x<=240 && this.ball.y>=370)
            {
                this.ball.x+=2.8;
                this.ball.y-=1.4;
            }
            if(this.ball.x<=235 && this.ball.y<=385)
            {
                this.end=1;
            }
        }
        if(this.only==0){
            if(this.ball.y<=570 && this.ball.x>=210 && this.d==0)
            {
                this.ball.y+=2.8;
                this.ball.x-=0.25;
                this.ball.scaleX+=0.0003;
                this.ball.scaleY+=0.0003;   
            }
            if(this.ball.y==572.7999999999996 )
            {
                this.d=1;
            }
            if(this.ball.y<=850 && this.ball.x<=275 && this.d==1 && this.f==0)
            {
                this.ball.y+=1.9;
                this.ball.x+=0.25;
                this.ball.body.enable=true;
                this.ball.scaleX+=0.0003;
                this.ball.scaleY+=0.0003;
            }
        }
            
            if(this.std.x<=210 && this.mov==1 )
            {    
                this.std.x+=0.3;
                this.bats.x+=0.3;
                this.stump.x+=0.3;
                this.bowler.x+=0.3;
                this.field1.x+=0.3;
                this.field2.x+=0.3;
                this.field3.x+=0.3;
                this.field4.x+=0.3;
                this.stump1.x+=0.3;
                this.banner.x+=0.3;
            }

           if(this.std.x>=190 && this.mov1==1 )
            {    
                this.std.x-=0.3;
                this.bats.x-=0.3;
                this.stump.x-=0.3;
                this.bowler.x-=0.3;
                this.field1.x-=0.3;
                this.field2.x-=0.3;
                this.field3.x-=0.3;
                this.field4.x-=0.3;
                this.stump1.x-=0.3;
                this.banner.x-=0.3;
            }
        }
       
    }

  
}