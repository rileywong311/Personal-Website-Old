<template>
  <nav>
    <div>
      <a href="https://github.com/rileywong311" target="_blank">
        <img src="../assets/logos/github.png" alt="GitHub"/>
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/rileywong510/" target="_blank">
        <img src="../assets/logos/linkedin.png" alt="LinkedIn"/>
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/yelirgnow/" target="_blank">
        <img src="../assets/logos/instagram.png" alt="Instagram"/>
      </a>
    </div>
  </nav>
</template>



<script>
export default {
  name: 'LogoBar',
  data: () => {
    return {
      hov: [0, false]
    }
  },
  props: {
    vertical: Boolean,
  }
  }
</script>



<style scoped>
nav {
  z-index: 1;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 75px;

  position: absolute;
  left: 50px;
  top: 8rem;
}

nav:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

nav:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}

nav:nth-child(3) {
  grid-column: 1;
  grid-row: 3;
}

div {
  width: 45px;
  transition: ease-in 0.15s;
}

div:hover {
  transform: scale(1.2);
}

img {
  width: 100%;
}

@media screen and (max-width: 600px) {
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: static;
    gap: 50px;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  div:hover {
    transform: translateY(-10px);
  }
}
</style>
