<template>
  <div class="home">
    <img alt="DSC logo" src="../assets/dsc.png" width="50px" height="50px">
    <Members msg="Welcome to DSCBUK"/>
    <pre> Send us a mail: hi@dscbuk.club </pre>
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
