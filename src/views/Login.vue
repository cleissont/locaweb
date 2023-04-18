<template>
  <div class="container-login">
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

    <div class="box-login">
      <div class="content-login">
        <div class="content text-space text-column">
          <span class="title">Entre na sua conta</span>
          <span class="sub-title"
            >Para acessar sua conta informe seu e-mail e senha</span
          >
        </div>
        <div class="mb-3 label-login">
          <label for="email" class="form-label">E-mail</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Seu e-mail"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-2 label-login">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Sua senha"
          />
        </div>
        <div class="forgot-password">
          <span class="text-forgot-password">Esqueci minha senha</span>
        </div>

        <div class="d-grid gap-2">
          <router-link to="/home">
            <button class="button-login" type="submit">FAZER LOGIN</button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="box-register">
      <span class="sub-title"
        >Ainda não tem conta?
        <router-link to="/plan"
          ><span class="text-register">Cadastre-se</span></router-link
        ></span
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

  .label-login {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
