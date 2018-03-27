<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <div class="row">
      <template v-for="figura in repetidas">
        <div class="columnas">
          <div>{{figura.num}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Repetidas',
      repetidas: [
        { num: 17 },
        { num: 23 },
        { num: 81 },
        { num: 163 },
        { num: 195 },
        { num: 201 },
        { num: 251 },
        { num: 274 },
        { num: 295 },
        { num: 324 },
        { num: 369 },
        { num: 373 },
        { num: 376 },
        { num: 407 },
        { num: 409 },
        { num: 426 },
        { num: 432 },
        { num: 441 },
        { num: 453 },
        { num: 456 }, 
        { num: 472 }, 
        { num: 522 }, 
        { num: 581 }, 
        { num: 581 }, 
        { num: 602 }, 
        { num: 613 }, 
        { num: 619 }, 
        { num: 622 }, 
        { num: 652 }],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.barra {
  background-color: #f1f1f1;
  padding-top: 20px;
}
.columnas {
  float: left;
  margin: 1px;
  padding: 5px;
  background-color: #DDD;
}
</style>
