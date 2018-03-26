<template>
  <tr>
    <td>
      <div class="desc">{{nameTeam}}</div>
    </td>
    <template v-for="figura in team">
      <td>
        <div v-bind:class="[figura.nola ? activeClass : 'yala']">{{figura.num}}</div>
      </td>
    </template>
  </tr>
</template>
<script>
export default {
  name: 'Alemania',
  data() {
    return {
      nameTeam: 'Alemania',
      activeClass: 'nola',
      team: [
        { num: 420, nola: true },
        { num: 421 },
        { num: 422 },
        { num: 423 },
        { num: 424, nola: true },
        { num: 425 },
        { num: 426 },
        { num: 427, nola: true },
        { num: 428 },
        { num: 429 },
        { num: 430, nola: true },
        { num: 431, nola: true },
        { num: 432 },
        { num: 433 },
        { num: 434 },
        { num: 435 },
        { num: 436 },
        { num: 437 },
        { num: 438 },
        { num: 439 }],
    };
  },
};
</script>
