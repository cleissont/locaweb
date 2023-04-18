<template>
  <div class="container-plan">
    <img
      src="../assets/logo-locaweb.png"
      :style="{
        maxWidth: '126px',
        height: 'auto',
        marginTop: '50px',
        marginBottom: '32px',
      }"
      alt="Vídeo"
    />
    <div>
      <span class="title-hosting"
        >Você está muito próximo de mudar a forma de
      </span>
      <p class="text-hosting">hospedar seu site</p>
      <p>Escolha o seu plano</p>
      <button class="button-sale">MAIS USADO</button>
    </div>
    <div class="choice-plan">
      <ChoicePlan />
    </div>
  </div>
</template>
<script>
  import ChoicePlan from "@/components/ChoicePlan.vue"

  export default {
    name: "Plan",
    components: {
      ChoicePlan,
    },
    props: {
      data() {
        return {}
      },
    },
  }
</script>
<style lang="scss">
  .container-plan {
    display: block;
    text-align: center;
  }
  .title-hosting {
    font-weight: 700;
    font-size: 28px;
    color: #292d32;
  }
  .text-hosting {
    font-weight: 700;
    font-size: 28px;
    text-decoration: underline;
    color: #f30168;
  }
  .choice-plan {
    display: flex;
  }
  .button-sale {
    color: #fff;
    cursor: pointer;
    width: 139px;
    height: 33px;
    background: #10c300;
    border-radius: 10px;
    border: none;
    margin-top: 28px;
    margin-bottom: 35px;
  }
</style>
