<template>
    <div class="snowfall">
      <div v-for="(flake, index) in flakes" :key="index" class="flake" :style="{ top: flake.top + 'px', left: flake.left + 'px' }"></div>
    </div>
    <div class="frame-container">
      <div class="frame">
      <img src="../assets/image_bg.jpg" alt="Your Image" class="picture">
      
    </div>
    <a href="./detail" class="redirect-link">Explore more about me</a>
    </div>
    
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        flakes: [],
        numFlakes: 600 // Adjust the number of snowflakes as needed
      };
    },
    mounted() {
      this.generateSnowflakes();
      this.animateSnowflakes();
    },
    methods: {
      generateSnowflakes() {
      for (let i = 0; i < this.numFlakes; i++) {
        this.flakes.push({
          top: Math.random() * window.innerHeight, // Random vertical position
          left: Math.random() * window.innerWidth, // Random horizontal position
          animationDuration: Math.random() * 2+2 // Random animation duration
        });
      }
    },
    animateSnowflakes() {
      setInterval(() => {
        for (let i = 0; i < this.numFlakes; i++) {
          if (this.flakes[i].top >= window.innerHeight) {
            // Reset the snowflake's position to the top
            this.flakes[i].top = 0;
            this.flakes[i].left = Math.random() * window.innerWidth;
          } else {
            // Move the snowflake down
            this.flakes[i].top += 5; // Adjust the speed of falling
          }
        }
      }, 40); // Adjust the interval for smoother animation
    }
    }
  };
  </script>
  
  <style scoped>
  .snowfall {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.473);
  
  }
  
  .flake {
    position: relative;
    width: 5px;
    height: 5px;
    background-color: #0d2be8ef;
    border-radius: 50%;
    animation: fall linear infinite;
  }
  
  @keyframes fall {
    0% {
      transform: translateY(-100px) rotate(0deg);
    }
    50% {
      transform: translateY(50vh) rotate(180deg);
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
    }
    
  }
  .frame-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
}
  .frame {
  width: 200px; /* Adjust the size of the frame */
  height: 200px; /* Adjust the size of the frame */
  border-radius: 50%; /* Make it circular */
  overflow: hidden;
  position: relative;
  
}

.picture {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
.redirect-link {
  position: absolute;
  bottom:25%;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  z-index: 1; /* Ensure the link is above the snowflakes */
}
  </style>