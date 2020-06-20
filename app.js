document.addEventListener('DOMContentLoaded',() => {
   const container = document.querySelector('#grid-contenedor');
   const square = document.createElement('div');
   const boton = document.querySelector('#boton');
   container.style.width = '480px';
   boton.style.width = '480px';
   var gridPropierty = '';
   createGrid();

     
   const acomodo = Array.from(document.querySelectorAll('.square'));
   boton.addEventListener('click',reset);
   acomodo.forEach(square=>square.addEventListener('mouseover',()=>{
      const randomColorHEX = randomColor();
      square.style.backgroundColor = '#' + randomColorHEX;  
      
   }));
      
   function createGrid(){
      for (let i = 1; i < 257; i ++){
         const square = document.createElement('div');
         square.style.backgroundColor = 'blue';
         square.classList.add('square');
         container.appendChild(square);   
      
      } 
   };
   
   function randomColor(){
      var randomColor = Math.floor(Math.random()*16**6);
      
      if(randomColor < 1000000){
         randomColor = randomColor + 1100000;
      };
      let randomColorHEX = randomColor.toString(16);
      return randomColorHEX;
   };
   
   function reset(){
      let gridWidth = container.style.width;
      
      acomodo.every(square => square.style.backgroundColor = 'blue');
      
      gridWidth = prompt('Enter new grid width, ' + gridWidth +' is the current one', gridWidth);
      
      container.style.width = gridWidth;
      boton.style.width = gridWidth;
      let size = parseInt(gridWidth.substring(0,gridWidth.length-2));
      
      var squareSize = size/16;
           
      for (let i = 0; i < 16; i++){
         
         gridPropierty += squareSize + 'px ';
       
      };     
      container.style.gridTemplateColumns = gridPropierty;
      container.style.gridTemplateRows = gridPropierty;
      gridPropierty = '';
   };
    
});
