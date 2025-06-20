<script lang="ts">
import { Dropdown } from 'floating-vue';
import 'floating-vue/dist/style.css';

export default Dropdown;
</script>

<style>
.v-popper--theme-dropdown .v-popper__inner {
  padding: calc(var(--space) * 6);
  color: var(--gray-400);
  background: var(--gray-800);
  border: 1px solid var(--secondary);
  border-radius: var(--border-radius-6x);
  box-shadow: none;
}

.v-popper--theme-dropdown .v-popper__arrow-container {
  display: none;
}
</style>
