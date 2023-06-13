<template>
  <div v-if="direct" class="card">
    <a :href="source">
      <div class="preview">
        <img :src="require(`../assets/${image}`)"/>
      </div>
    </a>
    <a :href="source">
      <div class="pageLink">
        {{ page }}
      </div>
    </a>
  </div>

  <div v-else class="card">
    <router-link :to="source">
      <div class="preview">
        <img :src="require(`../assets/${image}`)"/>
      </div>
    </router-link>
    <router-link :to="source">
      <div class="pageLink">
        {{ page }}
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  name: 'PageCard',
  props: {
    page: String,
    source: String,
    image: String,
    direct: Boolean
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
  gap: 2rem;
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
  border: 5px solid var(--gray);
  /* box-shadow: 3px 5px 2px rgba(0, 0, 0, 0.25); */
}

img {
  width: 100%;
  height: 100%;
  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.25));
  object-fit: cover;
  transition: 0.5s;
}

.pageLink {
  grid-row: 2;
  /* overflow: hidden; */
  transition: 0.5s;
  background: linear-gradient(to left, white 50%, var(--gray) 50%) right;
  background-size: 200% 100%;

  border-style: solid;
  border-width: 3px;
  border-radius: 17.5px;
  border-color: var(--blue);

  width: 15rem;
  min-width: 225px;
  height: 50px;
  margin: auto;

  display: grid;
  align-content: center;
  text-align: center;
  font-size: 25px;
  font-weight: 300;
}

.pageLink:hover {
  background-position: left;
  cursor: pointer;
}

</style>