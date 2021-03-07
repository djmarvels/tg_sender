<template>
  <div class="navbar" >
    <div class="navbar__inner">
      <div class="navbar-brand">Shamining Bot</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
}
</script>

<style scoped lang="scss">
@import "@/styles/interface/colors.scss";
.navbar {
  width: 100%;
  flex-basis: 100%;
  box-shadow: inset 0px -1px 0px #E9EEF4;
  background: $white;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 575px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  &-brand {
    font-family: Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.01em;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 32px;
    display: flex;
    align-items: center;
    color: $grey-600;
    white-space: nowrap;
    transition: color 350ms;

    &:hover {
      color: $primary;
    }
  }
}
</style>
