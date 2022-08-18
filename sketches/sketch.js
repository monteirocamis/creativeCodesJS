const canvasSketch = require('canvas-sketch');

const settings = {
  // dimensions: [ 600, 600 ]

  // dimensions:"A4",
  // pixelsPerInch : 300,
  // orientation: "landscape"

  //4 instagram
  dimensions: [ 1000, 1000 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'purple';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;
    
    const rectWidth = width * 0.10; //10% 
    const rectHeight = height * 0.10;
    const gap = width * 0.03 ; //3%
    let ox = width * 0.17
    let oy = height * 0.17

    const off = width * 0.02


    let x , y;

    context.strokeStyle = "white ";
    
    
    
    //2 class
    for(let i = 0; i < 5 ; i++){
        for(let j = 0; j < 5 ; j++){
    
       x= ox + (rectWidth + gap) * i;
       y = oy + (rectWidth + gap) * j;

        context.beginPath();
        context.rect(x,y ,rectWidth,rectHeight)
        context.stroke();
            // if(i>0 && i < 4){
    
            if(Math.random() > 0.5){
                context.beginPath();
                context.rect(x + off /2 ,y + off / 2 ,rectWidth - off ,rectHeight - off )
                context.stroke();
                
            }
        }
    }
    
    menu.array.forEach(item => {
        console.log(item)
    });
  };
};

canvasSketch(sketch, settings);
