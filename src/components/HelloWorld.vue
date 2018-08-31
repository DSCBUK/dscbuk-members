<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p> We're working to make this site look better, you can checkout/contribute <a href="https://github.com/DSCBUK/dscbuk-members" target="_blank"> <b> here </b> </a> </p>
    <p> Is your details missing? Click <a href="http://bit.ly/dscbuk-join" target="_blank"> <b> here </b> to add yours ;-) </p>
    <h3> View Our Members </h3> <br>
    <div v-for="member in members" :key="member.phone">
      Name: {{member.name}} |
      Email: {{member.email}} |
      Phone: {{member.phone}} |
      Reg No: {{member.regno}} |
      Areas of interests: {{member.interests}} 
      <hr> <br>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data(){
    return {
      members: [],
      showMembers: false
    }
  },
  mounted(){
    let url = 'https://spreadsheets.google.com/feeds/list/141AYclwr44uNsXWVbmp96mjWjWlcZxtny0UkitmwYiw/1/public/full?alt=json'
    fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then((data) => {
      let results = data['feed']['entry']
      results.forEach(element => {
        this.members.push({
          'name': element.gsx$fullname['$t'],
          'email': element.gsx$emailaddress['$t'],
          'phone': `234${element.gsx$phonenumber['$t']}`,
          'regno': element.gsx$registrationnumber['$t'],
          'interests': element.gsx$areasofinterest['$t'],
        })
      });
    }
    )
  }
}
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
