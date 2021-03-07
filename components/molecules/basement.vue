<template>
  <div class="footer">
    <a href="https://vk.com/world.rpgame" target="_blank" class="footer-menu-item">Dev by Valery Kozyr</a>
  </div>
</template>

<script>
import icon from '@/components/atoms/icon'
export default {
  name: "basement",
  components: {
    icon
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/interface/colors.scss";
.footer {
  flex-basis: 100%;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  &-menu-item {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: $grey;
    transition: color 350ms;
    font-feature-settings: 'pnum' on, 'lnum' on;
    &:hover {
      color: $primary;
    }
  }
}
</style>
