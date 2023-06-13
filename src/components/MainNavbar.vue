<template>
  <router-link to="/">
  <nav id="left" :class="{hover: leftHover}"
    @mouseover="leftHover = true"
    @mouseleave="leftHover = false"
    >
      Riley <br/> Wong
  </nav>
</router-link>

  <nav id="right" @click="toggleHamburger"  :class="{hover: rightHover}"
    @mouseover="rightHover = true" 
    @mouseleave="rightHover = false"
  >
    <div id="hamburger">
      <div class="bar1" :class="{change: showNav , hover: rightHover}"></div>
      <div class="bar2" :class="{change: showNav , hover: rightHover}"></div>
      <div class="bar3" :class="{change: showNav , hover: rightHover}"></div>
    </div>
  </nav>

  <div id="navList" :class="{change: showNav }">
    <ul>
      <li v-show="showNav">
        <a href="/#AboutMe" @click="closeNavbar">About Me</a>
      </li>
      <li v-show="showNav">
        <router-link to="projects">Projects</router-link>
      </li>
      <li v-show="showNav">
        <router-link to="experience">Experience</router-link> 
      </li>
      <li v-show="showNav">
        <a href="documents/resume.pdf" target="_blank">Résumé</a> 
      </li>
      <li v-show="showNav">
        <router-link to="renders">3D Renders</router-link> 
      </li>
      <li v-show="showNav">
        <router-link to="photos">Photos</router-link> 
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: 'MainNavbar',
  methods: {
      toggleHamburger() {
          this.showNav = !this.showNav;
      },
      closeNavbar() {
        this.showNav = false;
      }
  },
  data: () => {
    return {
      showNav: false,
      leftHover: false,
      rightHover: false,
    }
  }
}
</script>



<style scoped>
nav {
  background-color: var(--black);
  color: white;
  position: fixed;
  top: 20px;
  height: 80px;
  width: 80px;
  transition: 0.5s;
  border-radius: 20px;
  z-index: 69;
}

nav.hover {
  background-color: var(--yellow);
  color: black;
  cursor: pointer;
}

#left {
  left: 20px;
  font-size: 20px;
  display: grid;
  place-content: center;
  text-align: right;
}

#right {
  right: 20px;
  display: grid;
  place-content: center;
}

#hamburger {
  background-color: rgba(0, 0, 0, 0);
  height: 45px;
  width: 45px;
}

.bar1, .bar2, .bar3 {
  width: 100%;
  height: 4px;
  background-color: white;
  transition: 0.5s;
  border-radius: 3px;
}

.bar2 {
  width: 70%;
  margin-left: 30%;
  margin-top: 15px;
  margin-bottom: 15px;
}

.change.bar1 {
  transform: translate(0, 19px) rotate(-45deg);
}

.change.bar2 {
  margin-left: 100%;
  width: 0px;
}

.change.bar3 {
  transform: translate(0, -19px) rotate(45deg);
}

.hover.bar1, .hover.bar2, .hover.bar3 {
  background-color: var(--black);
}

@media screen and (max-width: 1200px) {
  nav.hover{
    background-color: var(--black) !important;
  }

  #left a.hover {
    color: white !important;
  }

  .hover.bar1, .hover.bar2, .hover.bar3 {
    background-color: white !important;
  }
  
}

@media screen and (max-width: 600px) {
  nav {
    top: 10px;
    height: 45px;
    width: 45px;
    border-radius: 10px;
  }

  #left {
    left: 10px;
    font-size: 12px;
  }

  #right {
    right: 10px;
  }

  #hamburger {
    height: 25px;
    width: 25px;
  }

  .bar1, .bar2, .bar3 {
    width: 100%;
    height: 2px;
  }

  .bar2 {
    width: 70%;
    margin-left: 30%;
    margin-top: 9px;
    margin-bottom: 9px;
  }

  .change.bar1 {
    transform: translate(0, 11px) rotate(-45deg);
  }

  .change.bar3 {
    transform: translate(0, -11px) rotate(45deg);
  }
}


#navList ul {
  position: fixed;
  z-index: 68;
  margin: 0;
  padding: 3rem 0 3rem;
  visibility: hidden;
  opacity: 0;
  background: white;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 50px rgb(58, 58, 58);
  width: 100%;
  height: max(60vh, 45rem);
  
  list-style: none;
  display: grid;
  justify-content: center;
  text-align: left;
}

#navList li {
  font-size: 3.5rem;
  font-weight: 400;
  margin: 1.25rem;
}

#navList a {
  text-decoration: none;
  color: var(--black);
}

#navList a:hover {
  /* color: var(--blue); */
  background: var(--gray);
  /* text-decoration: underline; */
}

.change#navList ul{
  opacity: 0.98;
  visibility: visible;
}
</style>
