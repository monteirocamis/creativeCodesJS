const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080  , 1080 ]
};


// const degToRad = (degrees) =>{
//   return degrees/ 180 * Math.PI
// }

// const randomRange = (min , max) => {
//   return Math.random() * (max - min) + min
// }

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    // const x = width* 0.5
    // const y = height* 0.5
    // const w = width * 0.3
    // const h = height * 0.3






    // ---  transform --- //

//    context.save();
//     context.translate(x,y)
//     context.rotate(0.3)

//     context.beginPath();
//     context.rect(x,y ,w,h)
//     // context.rect( 0,0 ,w,h)
//    // context.rect( -w / 2 , -y / 2 ,w,h)
//    context.rect( -w * 0.5, -y * 0.5 ,w,h)
//     context.fill()
//     context.restore();

//  context.translate(100,400)

// context.beginPath()
// context.arc( 0,0,50,0, Math.PI * 2)
//   context.fill()





    // ---  angles --- //
 
    // const centerX = width* 0.5
    // const centerY = height* 0.5
    // const w = width * 0.01
    // const h = height * 0.1
    // let x, y

    // const numbersOfCopy = 12
    // const radius = width * 0.3

    // for(let i = 0; i < numbersOfCopy ; i++){
    //   const slice = degToRad( 360 / numbersOfCopy)
    //   const angle = slice * i 

    //   x = centerX + radius * Math.sin(angle)
    //   y = centerY + radius * Math.cos(angle)

    //   context.save();
    //   context.translate(x,y)
    //   context.rotate(- angle)
  
    //   context.beginPath();
    //   context.rect( -w * 0.5, -h * 0.5 ,w,h)
    //   context.fill()
    //   context.restore();
    // }



// --- complete circle ----//

// const centerX = width * 0.5
// const centerY = height * 0.5
// const w = width * 0.01
// const h = height * 0.1
// let x, y

// const numbersOfCopy = 40 //12
// const radius = width * 0.3

// for(let i = 0; i < numbersOfCopy ; i++){
//   const slice = math.degToRad( 360 / numbersOfCopy)
//   const angle = slice * i 

//   x = centerX + radius * Math.sin(angle)
//   y = centerY + radius * Math.cos(angle)

//   context.save();
//   context.translate(x,y)
//   context.rotate(- angle)
//   // context.scale(1,1)
//   // context.scale( random.range(0.1 , 2) , 1)
//   context.scale( 
//     random.range(0.1 , 2) ,
//   random.range(0.2, 0.5)
//   )
  

//   context.beginPath();
//   // context.rect( -w * 0.5, -h * 0.5 ,w,h)
//   context.rect(
//     -w * 0.5, 
//     random.range(0, -h * 0.5),
//      w, h)
//   context.fill()
//   context.restore();

//   context.save();
//   context.translate(centerX, centerY)
//   context.rotate(- angle)

//   // context.lineWidth = 20

//   context.lineWidth = random.range(5, 20)

//   context.beginPath()
//   // context.arc( 0,0,radius,slice * -0.3,slice * 0.3)
// 	context.arc(
//     0, 
//     0, 
//     radius * random.range(0.7, 1.3), 
//     slice * random.range(1, -8), 
//     slice * random.range(1, 5)
//     )
//   context.stroke();

//   context.restore();


//     } 
//   };
// };



// --- corner circle ----//

const centerX = width * 0.1 // <-- 
const centerY = height * 0.2 // <-- 
const w = width * 0.01
const h = height * 0.1
let x, y

const numbersOfCopy = 20 
const radius = width * 0.4

for(let i = 0; i < numbersOfCopy ; i++){
  const slice = math.degToRad( 90 / numbersOfCopy)    // <-- 
  const angle = slice * i 

  x = centerX + radius * Math.sin(angle)
  y = centerY + radius * Math.cos(angle)

  context.save();
  context.translate(x,y)
  context.rotate(- angle)
  context.scale( 
    random.range(0.1 , 2) ,
    random.range(0.2, 0.5)
  )
  

  context.beginPath();
  context.rect(
    -w * 0.8, 
    random.range(0, -h * 0.8),
     w, h)
  context.fill()
  context.restore();

  context.save();
  context.translate(centerX, centerY)
  context.rotate(- angle)

  context.lineWidth = random.range(5, 20)

  context.beginPath()
	context.arc(
    0, 
    0, 
    radius * random.range(0.7, 2.2),  // <-- 
    slice * random.range(5, -8),  // <-- 
    slice * random.range(1, 5) // <-- 
    ) 
  context.stroke();

  context.restore();


    } 
  };
};


canvasSketch(sketch, settings);
