<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500&display=swap');

html, body {
  margin: 0px;
  font-size: 1rem;
  font-family: 'Lexend', sans-serif, system-ui;
  font-weight: 300;
  
  --black: #101010;
  --yellow: #E3E9EF;
  --blue: #004DA6;
  /* --gray: #E3E9EF; */
  --gray: #E3E9EF;
  color: var(--black);
}

::selection {
  /* background: var(--yellow); */
  background: #F4F0CF;
}


</style>