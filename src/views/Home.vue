<template>
  <div class="home">
    <img alt="DSC logo" src="../assets/dsc.png" width="50px" height="50px">
    <HelloWorld msg="Welcome to DSCBUK"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Members from "@/components/Members.vue";

export default {
    name: "home",
    components: {
        Members
    }
};
</script>
