


//1 class
             let canvas = document.querySelector('canvas');
             let context = canvas.getContext('2d');
             
             // --- quadrado --- //
            //context.fillStyle ='purple';
            //context.fillRect( 100, 100,400,400); 

            context.lineWidth = 4;
            context.beginPath();
            context.rect( 100, 100,400,400);
           
            //context.stroke();



            //---circulo--- //
            context.beginPath();
            context.arc( 300,300,100,0, Math.PI * 2);
            //context.stroke();

            const width = 60;
            const height = 60;
            const gap = 20;
            let x , y;
            context.strokeStyle = "white ";
         





//2 class
            for(let i = 0; i < 5 ; i++){
                for(let j = 0; j < 5 ; j++){

                 x= 100 + (width + gap) * i;
                 y = 100 + (width + gap) * j;

                context.beginPath();
                context.rect(x,y ,width,height)
                context.stroke();
                    // if(i>0 && i < 4){

                    if(Math.random() > 0.5){
                        context.beginPath();
                        context.rect(x + 8 ,y + 8  ,width - 16 ,height - 16 )
                        context.stroke();
                        
                    }
                }
            }

            menu.array.forEach(item => {
                console.log(item)
            });
