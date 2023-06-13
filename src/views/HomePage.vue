<template>
  <MainNavbar />

  <section class="title" id="Title">
    <div class="left">
      <!-- <img src=".\assets\ProfileLeft.png" width="100%" alt="ProfileLeft" /> -->
      <img src="@\assets\ProfileLeftUpscale.jpeg" width="100%" alt="ProfileLeft" />
    </div>
    <div class="right">
      <!-- <img src=".\assets\ProfileRight.png" width="100%" alt="ProfileRight" /> -->
      <img src="@\assets\ProfileRightUpscale.jpeg" width="100%" alt="ProfileRight" />
    </div>
    <div class="text">
      <div id="Riley">Riley</div>
      <div id="Wong">Wong</div>
    </div>
    <div class="backgroundElements rect">
      <svg class="gray"></svg>
    </div>
  </section>
  
  <LogosBar />

  <div class="welcome">
    Welcome!
  </div>

  <SectionHead id="Pages">
    Pages
  </SectionHead>

  <!-- <div style="margin-top: 10rem"></div> -->

  <section class="pages">
    <PageCard page="Projects" source="projects" image="ProjectsImage.jpg" />
    <PageCard page="Experience" source="experience" image="ExperienceImage.jpg" />
    <PageCard page="Résumé" source="documents/resume.pdf" :direct="true" image="ResumeImage.png" />
    <PageCard page="3D Renders" source="renders" image="RendersImage.jpg" />
    <PageCard page="Photos" source="photos" image="PhotosImage.jpg" />
  </section>

  <!-- <SectionHead  id="AboutMe" style="background-color: var(--gray); z-index: -2;"> -->
  <SectionHead  id="AboutMe">
      About Me
  </SectionHead>
  <section class="aboutMe">
    <div class="pic">
      <img src="@\assets\AboutMeImage.jpg" alt="Profile Image"/>
    </div>
    <p class="class">
      Santa Clara University, Class of 2026 
    </p>
    <p class="about">
      👋 I’m Riley, a Sophomore computer science student from the Bay Area.
      My passion for programming began in middle school when I discovered MIT Scratch. 
      Today, I enjoy learning new technologies from REST API's to circuits! 
      In my free time, I’ll be found playing tennis, rendering a new 3D project in Blender, 
      or practicing a new finger-style song on the acoustic guitar. 
      Feel free to check out my Résumé, connect with me on LinkedIn, or contact me below!
    </p>
    <div class="backgroundElements">
      <svg></svg>
    </div>
  </section>
  
  <SectionHead id="Contact">
    Contact
  </SectionHead>
  <section class="contact">
    <a href="mailto: rnwong@scu.edu" style="text-decoration: none; color: black">
      <div class="contactLink">
        Send Email
      </div>
    </a>
    <div style="display: flex; gap: 8rem; justify-content: center">
      <div class="logo">
        <a href="https://github.com/rileywong311" target="_blank">
          <img src="@/assets/logos/github.png" width="100%" alt="GitHub"/>
        </a>
      </div>
      <div class="logo">
        <a href="https://www.linkedin.com/in/rileywong510/" target="_blank">
          <img src="@/assets/logos/linkedin.png" width="100%" alt="LinkedIn"/>
        </a>
      </div>
      <div class="logo">
        <a href="https://www.instagram.com/yelirgnow/" target="_blank">
          <img src="@/assets/logos/instagram.png" width="100%" alt="Instagram"/>
        </a>
      </div>
    </div>
  </section>

  <div style="margin-top: 100px; height: 500px; background: var(--black); color: white; display: grid;">
    <p style="font-size: 18px; margin: auto 25px 25px; text-align: right">© 2023 by Riley Wong</p>
  </div>
</template>



<script>
import MainNavbar from '@/components/MainNavbar.vue';
import LogosBar from '@/components/LogosBar.vue';
import SectionHead from '@/components/SectionHead.vue';
import PageCard from '@/components/PageCard.vue';

export default {
  name: 'HomePage',
  components: {
    MainNavbar, 
    LogosBar,
    SectionHead,
    PageCard
  }
}
</script>



<style>
/* ===============
        Title
   =============== */

.title {
  --grid-size: 450px;
  display: grid;
  justify-content: center;
  padding-top: 20px;
  grid-template-columns: calc(var(--grid-size) * (3/4)) var(--grid-size);
  grid-auto-rows: auto;
  /* grid-template-rows: calc(var(--grid-size) * 1.13) calc(var(--grid-size) * 0.74); */
  column-gap: calc(var(--grid-size) / 15);
  position: relative;
}

.title .right {
  grid-column: 2;
  grid-row: 1 / 3;
  /* overflow: hidden; */
  
}

.title .left {
  grid-column: 1;
  grid-row: 1;
  /* overflow: hidden; */
}

.title img {
  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.25));
}

/* .title img {
  transition: 0.6s ease-in-out;
} */

/* .title img:hover {
  transform: scale(1.1);
} */

.title .text {
  grid-column: 1;
  grid-row: 2;
  
  font-size: 7rem;
  text-align: right;
  margin-top: auto;
  font-weight: 500;  
}

#Riley, #Wong {
  margin: 0;
  padding: 0;
}

.backgroundElements {
  position: absolute;
  z-index: -1;
  width: 100%;
  text-align:center;
}

.title .backgroundElements.rect {
  top: calc(var(--grid-size) * -0.9);
}

.title svg.gray {
  background: var(--gray);
  width: calc(var(--grid-size) * 2.05);
  /* width: 100%; */
  height: calc(var(--grid-size) * 2.175);
}

@media screen and (max-width: 1200px) {
  .title {
    --grid-size: 300px;
  }

  html, body {
    font-size: 0.7rem;
  }
}

@media screen and (max-width: 800px) {
  .title {
    --grid-size: 200px;
  }

  html, body {
    font-size: 0.45rem;
  }
}

@media screen and (max-width: 500px) {

  .title {
    --grid-size: 180px;
  }

  .title .text {
    font-size: 42px;
    grid-column: 1 / 3;
    grid-row: 3;
    
    font-size: 10.5rem;
  }

  .title svg.gray {
    width: 100%;
    height: calc(var(--grid-size) * 2.25);
  }

  #Riley {
    text-align: left;
  }
}

@media screen and (max-width: 350px) {
  .title {
    --grid-size: 150px;
  }

  .title .text {
    font-size: 10rem;
  }
}


/* ===============
        Pages
   =============== */

.welcome {
  background: var(--gray);
  height: auto;
  width: auto;

  margin: 8rem auto 8rem;
  padding: 2rem;
  font-size: 3rem;
  color: var(--blue);

  display: flex;
  justify-content: center;
  align-items: center;
}

.pages {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 2.5rem;
  row-gap: max(2.5rem, 40px);

  position: relative;
  max-width: 75%;
  margin: auto auto 8rem;
}


/* ===============
        About Me
   =============== */


.aboutMe {
  /* background-color: var(--gray); */
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  --imageSize: max(18rem, 175px);
}

.aboutMe img {
  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.25));
}

.aboutMe .pic {
  width: var(--imageSize);
  height: calc(var(--imageSize) * 1.25);
  /* overflow: hidden; */
}

.aboutMe .backgroundElements {
  top: calc(var(--imageSize) * -0.08);
}

.aboutMe svg {
  background: var(--yellow);
  width: calc(var(--imageSize) * 1.4);
  height: calc(var(--imageSize) * 1.4);
  border-radius: 50%;
}

.aboutMe img {
  width: 100%;
  height: 100%;
  transition: 0.6s ease-in-out;
  object-fit: cover;
}

/* .aboutMe img:hover {
  transform: scale(1.1);
} */

.aboutMe p {
  max-width: 60rem;
  padding: 3rem 5% 0;
}

.aboutMe p.class {
  color: var(--blue);
  padding-bottom: 0rem;
  font-size: 2rem;
  font-weight: 400;
}

.aboutMe p.about {
  color: #4b4b4b;
  padding-top: 0rem;
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 8rem;
}

@media screen and (max-width: 500px) {
  .aboutMe p.about {
    font-size: 2.25rem;
  }
}


/* ===============
        Contact
   =============== */

.contact {

}

.contactLink {
  transition: 0.5s;
  background: linear-gradient(to bottom, white 50%, var(--gray) 50%) top;
  background-size: 100% 200%;

  border-style: solid;
  border-width: 3px;
  border-radius: 1000px;
  border-color: var(--blue);

  width: 17.5rem;
  min-width: 200px;
  padding: 1rem;

  margin: 2.5rem auto 8rem;

  text-align: center;
  font-size: 30px;
  font-weight: 300;
}

.contactLink:hover {
  background-position: bottom;
}

.contact .logo {
  transition: 0.5s;
  width: 6.5rem;
  height: auto;
}

.contact .logo:hover {
  transform: scale(1.15);
}

@media screen and (max-width: 500px) {
  .contactLink {
    font-size: 20px;
  }
}

</style>
