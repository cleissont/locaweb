<template>
  <Navbar />
  <div class="container">
    <div class="content text-space">
      <span class="title">Olá João</span>
      <p class="sub-text">Seja bem vindo a sua conta de hospedagem.</p>
    </div>
    <div class="content">
      <img
        src="../assets/video.png"
        :style="{ maxWidth: '100%', height: 'auto' }"
        alt="Vídeo"
      />
    </div>
    <div class="content text-space">
      <span class="sub-text">Caso tenha alguma dúvida, </span>
      <span class="sub-text text-underline"
        >visite nossa central de ajuda.
      </span>
    </div>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue"

  export default {
    name: "Home",
    components: { Navbar },
  }
</script>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: calc((100vw - 350px - 602px) / 2);
  }
  .title {
    font-family: "Sora";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    color: #292d32;
  }
  .sub-text {
    font-family: "Sora";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #292d32;
  }
  .text-underline {
    text-decoration: underline;
    font-weight: 400;
    font-size: 16px;
  }
  .content {
    text-align: left;
  }
  .text-space {
    margin-top: 28px;
    margin-bottom: 18px;
  }
</style>
