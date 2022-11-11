<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <span class="text-secondary">Salary</span> Stone
          <q-avatar>
            <img src="../assets/rosetta-stone2.svg">
          </q-avatar>
        </q-toolbar-title>
        <q-tabs align="right" inline-label>
        <q-route-tab to="/" label="Summary"/>
        <q-route-tab to="/unitprice" label="Unit Price" icon="attach_money" />
        <q-route-tab to="/levelup" label="Level Up" icon="show_chart"/>
        <q-route-tab to="/matchmaker" label="Match Maker" icon="favorite" />
        <q-icon name="account_circle" size='md'></q-icon>
      </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <q-page class="column justify-start">
        <router-view />
        
      </q-page>
    </q-page-container>

    <q-footer bordered class="bg-primary text-white">
      <div class="row no-wrap shadow-1">
      <q-toolbar class="col-11">
        <q-btn flat round dense icon="copyright" />
          <div>2022 George Mason University. All Rights Reserved.</div>
      </q-toolbar>
      <q-toolbar class="col-1">
        <q-btn flat icon="logout" round @click="$router.push('/login')"></q-btn>
      </q-toolbar>
      </div>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
}
</script>

<style>
</style>