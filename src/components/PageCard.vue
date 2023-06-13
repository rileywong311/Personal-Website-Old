<template>
  <a v-if="direct" :href="source">
    <div class="card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      >
      <div class="preview">
        <img :src="require(`../assets/${image}`)" :class="{hover: hover}"/>
      </div>
      <div class="pageLink">
        {{ page }}
      </div>
    </div>
  </a>

  <router-link v-else :to="source">
    <div class="card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      >
        <div class="preview">
          <img :src="require(`../assets/${image}`)" :class="{hover: hover}"/>
        </div>
        <div class="pageLink">
          {{ page }}
        </div>
    </div>
  </router-link>
</template>


<script>
export default {
  name: 'PageCard',
  props: {
    page: String,
    source: String,
    image: String,
    direct: Boolean
  },
  data: () => {
    return {
      hover: false
    }
  },
  methods: {

  }
  }
</script>



<style scoped>

a {
  text-decoration: none;
  color: var(--black);
}

.card {
  display: grid;
  grid-template-rows: auto;
  background-color: var(--gray);
  padding: max(1rem, 10px);
  gap: max(2.5rem, 30px);
}

.preview {
  grid-row: 1;

  position: relative;
  display: flex;
  align-items: center;

  --size: min(85vw, 350px);
  width: calc(var(--size) * 1);
  height: calc(var(--size) * 0.65);
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ease-in-out 2s;
}

img.hover {
  transform: scale(1.1);
}

.pageLink {
  grid-row: 2;
  /* overflow: hidden; */
  transition: 0.5s;

  width: 15rem;
  min-width: 225px;
  height: 50px;
  margin: auto;

  align-content: center;
  text-align: center;
  font-size: 28px;
  font-weight: 300;
}
</style>