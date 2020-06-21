document.addEventListener('DOMContentLoaded',() => {
   const container = document.querySelector('#grid-contenedor');//Getting
   const square = document.createElement('div');//           all the needed stuff
   const botonSize = document.querySelector('#boton-size');// on the html
   const botonScale = document.querySelector('#boton-scale');//file!!
   container.style.width = '480px';//This is the width of the canvas
   botonSize.style.width = '480px';//it can ba changed
   botonScale.style.width = '480px';//the default size of each square is 30px btw 
   var gridPropierty = '';//important to set the number of squares and their size
   var numberSquares = 16;//of course this is the default
   createGrid();//you may see what it says, it does what it says
   changeColor();//same here
   
   function createGrid(){
      for (let i = 0; i < numberSquares**2; i ++){//this creates the divs
         const square = document.createElement('div');
         square.style.backgroundColor = 'blue';//they are blue cause it is a cool color
         square.classList.add('square');
         container.appendChild(square);         
      } 
   };   
   function deleteGrid(){//this one deletes the squares, quite important 
      const deleteSquares = document.querySelectorAll('.square');// if you dont use this
      deleteSquares.forEach(div => {//it may overflow your stuff
         container.removeChild(div);
      });
   };
   
   function changeColor(){//changing color quite simple
      const acomodo = document.querySelectorAll('.square');
      acomodo.forEach(square=>{
         square.addEventListener('mouseover',()=>{//waits for the mouse to be over a square
         const randomColorHEX = randomColor();// then picks a random color
         square.style.backgroundColor = '#' + randomColorHEX;//and gives the color to the square       
        
      })});
      botonSize.addEventListener('click',changeSize);//this button changes siez of the canvas
      botonScale.addEventListener('click',changeSquares);//this one the number of squares
     
      
   };
    
               
   function randomColor(){
      var randomColor = Math.floor(Math.random()*16**6);//finding a random color between 000000 and FFFFFF
      
      if(randomColor < 1000000){//some times ig vies a 5 hex number, using this
         randomColor = randomColor + 1100000;//transform to number to a 6 hex one
      };
      let randomColorHEX = randomColor.toString(16);//of coruse we were working on decimal, now it is HEX
      return randomColorHEX;//This is the value given to changeColor, see above!
   };
   
   function changeSize(){
      let gridWidth = container.style.width;//we need to define this first
            
      gridWidth = prompt('Enter new grid width, ' + gridWidth +' is the current one', gridWidth);//once we get the value it will be send to the buttons and cotnainer
      container.style.width = gridWidth;//important for the function to work properly
      acomodatingGrid();// to fix everythig
      deleteGrid();//then we go back to the start!
      createGrid();
      changeColor();
      };
    
   function changeSquares(){//changing number of squares
      
      numberSquares = prompt('Enter the number of squares for each row and column \(they are the same\) rightthnow it is ' + numberSquares + 'x' + numberSquares + '\nbtw if you make to many squares it may freeze, be carefullllll!',numberSquares);
      deleteGrid();
      createGrid(); 
      acomodatingGrid();
      changeColor();
    };


   function acomodatingGrid(){
      
      let gridWidth = container.style.width;//here we acomodate everything
      container.style.width = gridWidth;//like this
      botonSize.style.width = gridWidth;
      botonScale.style.width = gridWidth;
      let size = parseInt(gridWidth.substring(0,gridWidth.length-2));// but we need to adjust the size of the sqaures so they mantain the same ratio when changing the sizes of the container, or even if it doesnt chang ;)
         
      var squareSize = size/numberSquares;//you can see the divition here
              
      for (let i = 0; i < numberSquares; i++){
            
         gridPropierty += squareSize + 'px ';//this one is to set the ammount of colums  and sqaures, aswell as the actual sizes of each square
          
      };     
      container.style.gridTemplateColumns = gridPropierty;//then the values are send here
      container.style.gridTemplateRows = gridPropierty;
      gridPropierty = '';// and we clean the variable to not overload
   }
});

