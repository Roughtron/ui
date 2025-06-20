<template>
  <div class="row">
    <slot />
  </div>
</template>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: calc((-1) * var(--col-gap));
  margin-left: calc((-1) * var(--col-gap));
}

.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
}
</style>
