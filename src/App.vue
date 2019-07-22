<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import SideNav from "./components/SideNav";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    SideNav
  },
  data() {
    return {
      //
    };
  },
  methods: {
    //actionのメソッド呼び出し
    ...mapActions(["toggleSideMenu"])
  }
};
</script>
