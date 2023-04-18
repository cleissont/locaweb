<template>
  <div class="container-login">
    <img
      src="../assets/logo-locaweb.png"
      :style="{
        maxWidth: '126px',
        height: 'auto',
        marginTop: '187px',
        marginBottom: '32px',
      }"
      alt="Vídeo"
    />

    <div class="box-login">
      <div class="content-login">
        <div class="content text-space text-column">
          <span class="title">Entre na sua conta</span>
          <span class="sub-title"
            >Para acessar sua conta informe seu e-mail e senha</span
          >
        </div>
        <div class="input-field">
          <label for="email">E-mail</label>
          <input type="email" id="email" placeholder="Seu e-mail" />
        </div>

        <div class="input-field">
          <label for="password">Senha</label>
          <input type="password" id="password" placeholder="Sua senha" />
        </div>
        <div class="forgot-password">
          <span class="text-forgot-password">Esqueci minha senha</span>
        </div>
        <button class="button-login"><span>FAZER LOGIN</span></button>
      </div>
    </div>

    <div class="box-register">
      <span class="sub-title"
        >Ainda não tem conta?
        <span class="text-register">Cadastre-se</span></span
      >
    </div>
  </div>
</template>
<script>
  export default {
    name: "Login",
  }
</script>

<style lang="scss">
  .container-login {
    display: block;
    text-align: center;
  }
  .content-login {
    margin: 33px;
  }
  .box-login {
    max-width: 617px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #e6eaf2;
    border-radius: 5px;
    max-height: 492px;
  }
  .text-column {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .title-login {
    margin-top: 28px;
  }
  .box-register {
    margin-top: 32px;
  }
  .text-register {
    text-decoration: underline;
    color: #f30168;
  }
  .text-forgot-password {
    color: #515d74;
  }
  input {
    display: block;
    width: 100%;
    padding: 10px;
    min-height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }

  .input-field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 80px;
    width: 96%;
  }

  label {
    margin-bottom: 5px;
  }

  span {
    width: 80%;
  }

  .forgot-password {
    text-align: right;
  }

  .button-login {
    color: #fff;
    cursor: pointer;
    padding: 30px 24px;
    width: 100%;
    height: 80px;
    background: #f30168;
    border-radius: 5px;
    border: none;
    margin-top: 28px;
    margin-bottom: 35px;
  }
</style>
