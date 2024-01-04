<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: '#4d89ea',
  },
  label: {
    type: String,
  },
})
</script>

<template>
  <button class="bubbly-button">
    <slot name="icon" />
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.bubbly-button {
  $fuschia: #4d89ea;
  $button-bg: $fuschia;
  $button-text-color: #fff;
  font-family: 'Helvetica', 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-items: center;
  font-size: 0.8rem;
  padding: 12px;
  text-decoration: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: $button-bg;
  color: $button-text-color;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;

  &:hover {
    box-shadow: 0 0 12px #4e89ea;
  }

  &:active {
    transform: scale(0.9);
    background-color: darken($button-bg, 5%);
  }
}
</style>
