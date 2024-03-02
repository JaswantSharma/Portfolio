<template>
    <div class="resume">
      <div class="header">
        <div class="line"></div>
        <div class="line_2"></div>
        <div class = "frame">
            <img src="../assets/image.jpg" alt="Your Photo" class="photo">
        </div>
        <div class="itemContain">
            <div class="icon-container" data-phone-number="123-456-7890">
                <i class="fas fa-phone"></i>
         </div>
        </div>
        
        
      </div>
      
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'resume'
  }
  </script>
  
  <style>
  
 .resume {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  margin-bottom: 20px;
 
}
.frame {
  width: 100px; /* Adjust the size of the frame */
  height: 100px; /* Adjust the size of the frame */
  border-radius: 50%; /* Make it circular */
  overflow: hidden;
  left:0;
  top:0;
  position: absolute;
  
}
.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: 0; /* Position from the top */
  left: 0; /* Position from the right */
}

.content {
  flex: 1;
}

.section {
  margin-bottom: 30px;
}

h2 {
  margin-bottom: 10px;
}

.line {
        width: 3px; 
        height: 100%;
        background-color: green; 
        left : 105px;
        top:0;
        position: absolute;
    }

.line_2{
      width: 100%; /* Set the width to 100% for horizontal line */
      height: 2px; /* Adjust the height of the line */
      background-color: green; /* Set the color of the line */
      top:105px;
      left:0;
      position : absolute;
}

.itemContain{
    display: block;
    width: 50px;
    height: 100px;
    top:200px;
    position: absolute;
}
.icon-container {
      position: absolute;
      display: block;
    }

    .icon-container::after {
      content: attr(data-phone-number); /* Default content */
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      display: none; /* Hide by default */
      background-color: #d91414;
      padding: 5px;
      border: 1px solid #0d0d0d;
      border-radius: 5px;
    }

    .icon-container:hover::after {
      display: block; /* Show on hover */
    }
    .icon-container .fa-phone {
      background-color: #ed4b4b; /* Adjust the color of the phone icon */
    }

  </style>
  