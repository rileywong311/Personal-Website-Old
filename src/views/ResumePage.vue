<script>
export default {

  async created() {
    await this.$router.push('documents/resume.pdf');
    window.location.reload();
  },

};
</script>