<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> We're working to make this site look better, you can checkout/contribute <a href="https://github.com/DSCBUK/dscbuk-members" target="_blank"> <b> here </b> </a> </p>
    <p> Is your details missing? Click <a href="http://bit.ly/dscbuk-join" target="_blank"> <b> here </b> </a> to add yours ;-) </p>
    <button class="button is-info" @click="showMembers = true"> View Our Members </button> <br>
    <detect-network> 
        <div slot="offline"> <pre> :-( You are offline => Our Members are only visible online.  </pre> </div>
        <div slot="online" v-for="member in members" :key="member.phone" v-if="showMembers && members.length > 0">
        Name: {{member.name}} |
        Dept: {{member.regno.substring(7,10).toUpperCase()}} |
        Areas of interests: {{member.interests}}
        <hr> <br>
        </div>
    </detect-network>
</div>
</template>

<script>
import secretURL from "./secretURL.js";
import detectNetwork from 'v-offline';

export default {
    props: {
        msg: String
    },
    components: {
      'detect-network': detectNetwork
    },
    data() {
        return {
            members: [],
            showMembers: false
        };
    },
    mounted() {
        let url = secretURL;
        fetch(url)
            .then(resp => resp.json()) // Transform the data into json
            .then(data => {
                let results = data["feed"]["entry"];
                results.forEach(element => {
                    this.members.push({
                        name: element.gsx$fullname["$t"],
                        email: element.gsx$emailaddress["$t"],
                        phone: `234${element.gsx$phonenumber["$t"]}`,
                        regno: element.gsx$registrationnumber["$t"],
                        interests: element.gsx$areasofinterest["$t"]
                    });
                });
            });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
