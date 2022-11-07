<template>
  <div class="bg-primary window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <q-card square bordered class="q-pa-xl shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="email" type="email" label="email" />
              <q-input square filled clearable v-model="password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-pa-md">
            <q-btn unelevated color="accent" size="lg" class="full-width" label="Login" />
          </q-card-actions>
          <q-card-actions class="q-pa-md">
            <q-btn unelevated color="secondary" size="lg" class="full-width" label="Register" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-xl">
            <p class="text-grey-6">Not registered? Created an Account</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthenticationLayout'
});
</script>

<style scoped>

</style>