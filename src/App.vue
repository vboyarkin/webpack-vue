<template>
  <div>
    <h3>This is Vue</h3>
    <p>{{ randomData }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomData: "Test data",
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 2rem;
}
</style>