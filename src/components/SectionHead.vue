<template>
  <div class="sectionHead">
    <slot></slot>
    <div class="backgroundElements">
      <svg></svg>
    </div>
  </div>
</template>



<script>
export default {
  name: 'SectionHead',
}
</script>



<style>
.sectionHead {
    display: grid;
    justify-content: center;
    position: relative;

    --size: max(5rem, 50px);

    font-size: var(--size);
    padding-bottom: var(--size);
    font-weight: 400;
    /* background: red; */
  }

.sectionHead .backgroundElements {
  bottom: 37.5%;
}

.sectionHead svg {
  background: var(--yellow);
  width: calc(var(--size) * 6);
  height: calc(var(--size) / 2.75);
  /* border-radius: 0.75rem; */
}
</style>