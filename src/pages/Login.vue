<template>
<authentication-layout>
</authentication-layout>
</template>

<script lang="ts">
import AuthenticationLayout from '../layouts/AuthenticationLayout.vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'IndexPage',
  components: { AuthenticationLayout },
});
</script>