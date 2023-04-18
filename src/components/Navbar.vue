<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img
        src="../assets/logo-locaweb.png"
        alt="Nav Bar Image"
        class="navbar-image"
      />
    </div>
    <div class="navbar-right">
      <ul class="navbar-menu">
        <li><a href="#">Menu Item 1</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
  }
</script>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .navbar-left {
    display: flex;
    align-items: center;
  }

  .navbar-image {
    margin-right: 10px;
  }

  .navbar-menu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .navbar-menu li:not(:last-child) {
    margin-right: 10px;
  }
</style>
