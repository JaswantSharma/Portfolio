<template>
  <div class="container">
    <div class="snowfall">
      <div v-for="(flake, index) in flakes" :key="index" class="flake" :style="{ top: flake.top + 'px', left: flake.left + 'px' }"></div>
    </div>
    <div class="photo-area">
      <div class = "frame" >
        <img class = "dimage" src="../assets/image.png" alt="Your Photo">
      </div>
    </div>
    <div class="header-name">Jaswant Sharma</div>
    <div class="contact-icons">
      <div class="icon-box">

        <div class="flip">
          <div class="flipinner">
            <div class="flipfront">
          <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/phone.png" alt="phone"/>
          </div>

          <div class="flipback">
              <a >+919518134088</a>
            </div>
          </div>
          
        </div>

        <div class="flip">
          <div class="flipinner">
            <div class="flipfront">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
              <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,15.7C9,16.4,8.4,17,7.7,17	c-0.7,0-1.3-0.6-1.3-1.3v-4.5C6.5,10.6,7,10,7.7,10C8.4,10,9,10.6,9,11.3V15.7z M7.7,8.7c-0.8,0-1.3-0.5-1.3-1.2	c0-0.7,0.5-1.2,1.4-1.2c0.8,0,1.3,0.5,1.3,1.2C9.1,8.2,8.6,8.7,7.7,8.7z M18,15.8c0,0.7-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2v-2.6	c0-1.1-0.7-1.2-0.9-1.2c-0.2,0-1.1,0-1.1,1.2v2.6c0,0.7-0.5,1.2-1.2,1.2h-0.1c-0.7,0-1.2-0.5-1.2-1.2v-4.5c0-0.7,0.6-1.3,1.3-1.3	s1.3,0.6,1.3,1.3c0,0,0.3-1.3,2.2-1.3c1.2,0,2.2,1,2.2,3.2V15.8z"></path>
        </svg>
            </div>
            <div class="flipback">
              <a href="https://www.linkedin.com/in/jaswant-sharma-4b85971b5/" target="_blank">LinkedIn</a>
            </div>
          </div>
          
        </div>
        <div class="flip">
          <div class="flipinner">
            <div class="flipfront">
              <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/new-post.png" alt="new-post"/>
            </div>
            <div class="flipback">
              <a href="mailto:jaswantsharma125@gmail.com" target="_blank">Email Address</a>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <div class="experience">
      <div class="Myheading">Experience</div>
      <ul class = "list">
        <li>Sopra Steria</li>
        <li>Seo-Friendly</li>
        <li>Board Infinity</li>
      </ul>
    </div>
    <div class="education">
      <div class="Myheading">Education</div>
      <ul class = "list">
        <li>BMIET</li>
        <li>HVP</li>
      </ul>
    </div>
    <div class="empty"></div>
    <div class="hobby">
      <div class="Myheading2">Hobby</div>
      <div class= "hobby-container">
        <div class="football">football</div>
      <div class="music">music</div>
      <div class="chess">chess</div>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name: 'detail',
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

<style>

.snowfall {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
  
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

.flip{
  display: inline;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}
.flipinner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flipfront, .flipback {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}



.flip:hover .flipinner {
  transform: rotateY(180deg);
}

.flipfront {
 
  color: black;
}

.flipback {
  
  transform: rotateY(180deg);
}

.container{
  display: grid;
  width: 100vw;
  height: 100vh;
  gap:0.1rem;
  padding: 0.1rem;
  margin:0;
  grid-template-columns: minmax(120px, 200px) 4fr;
  grid-template-rows: repeat(6,1fr);
  grid-template-areas:
  "photo name name name name "
  "contact experience experience experience experience"
  "contact experience experience experience experience"
  "contact education education education education"
  "empty education education education education"
  "empty hobby hobby hobby hobby"; 

}




.photo-area{
  grid-area: photo;
  max-height: 150px;
  
}

.frame{
  width: 100%; 
  height: 100%; 
  border-right: 3px solid rgb(11, 241, 34);
  border-bottom: 3px solid rgb(11, 241, 34);
  display: flex;
  justify-content: center;

}

 .dimage{
    width: 100%;
    height: 100%;
    object-fit: cover;
}



.header-name{
  grid-area: name;
  
  border-left: 3px solid rgb(11, 241, 34);
  border-bottom: 3px solid rgb(11, 241, 34);
  color:black;
  font-size: 70px;
    display: flex;
    justify-content: center;
    font-family: "Biryani", sans-serif;
  font-weight: 300;
  font-style: normal;
  text-decoration: underline;
  padding:10px;
}

.contact-icons{
    grid-area: contact;
    
    border-right: 3px solid rgb(11, 241, 34);
    border-top: 3px solid rgb(11, 241, 34);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 50px;
}

.icon-box{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

.experience{
  grid-area: experience;
  border: 3px solid rgb(11, 241, 34);
  display:flex;
  flex-direction: column;
}

.education{
  grid-area: education;
  border: 3px solid rgb(11, 241, 34);
  display:flex;
  flex-direction: column;
  
  
}

.Myheading{
  font-size: 40px;
    justify-content: center;
    font-family: "Biryani", sans-serif;
    font-weight: 300;
    display: inline;
    font-style: normal;
    text-decoration: underline;
}

.Myheading2{
  font-size: 30px;
    justify-content: center;
    font-family: "Biryani", sans-serif;
    font-weight: 400;
    display: inline;
    font-style: normal;
    text-decoration: underline;
}

.list{
  padding-left: 2rem;
}

.empty{
  grid-area: empty;
  border-right: 3px solid rgb(11, 241, 34);
}
.hobby{
    grid-area: hobby;
    display: flex;
   
    border: 3px solid rgb(11, 241, 34);
    flex-direction: column;
}

.hobby-container{
  padding-left: 20px;
  width: 86%;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
}

.football{
  display:inline-block;
  overflow: hidden;
}
.music{
  display:inline-block;
  overflow: hidden;
}
.chess{
  display:inline-block;
  overflow: hidden;
}



@media screen and (max-width: 768px){

.container{
  display: grid;
  width: 100vw;
  height: 100vh;
  row-gap:0.2rem;
  padding: 0.5rem;
  grid-template-rows: repeat(3,minmax(20px,80px) ) repeat(9,1fr);
  grid-template-columns: repeat(1,1fr);
  grid-template-areas: "photo"
  "name"
  "contact"
  "experience"
  "experience"
  "experience"
  "education"
  "education"
  "education"
  "hobby"
  "hobby"
  ;
}
.contact-icons{
  grid-area: contact;
  border: 3px solid rgb(11, 241, 34);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 30px;
}
.icon-box{
  display: flex;
  flex-direction: row;
  height: 70%;
  width: 100%;
  justify-content: space-between;
}

.header-name{
grid-area: name;
border: 3px solid rgb(11, 241, 34);
color:black;
font-size: 30px;
  display: flex;
  justify-content: center;
  font-family: "Biryani", sans-serif;
font-weight: 300;
font-style: normal;
text-decoration: underline;
padding: 10px;
}

.frame{
  border:none;
}

.dimage {
    width: 47%;
    height: 110%;
    object-fit: cover;

}

}
</style>