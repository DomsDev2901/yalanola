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
  name: 'Tunez',
  data() {
    return {
      nameTeam: 'Tunez',
      activeClass: 'nola',
      team: [
        { num: 540, nola: true },
        { num: 541, nola: true },
        { num: 542 },
        { num: 543, nola: true },
        { num: 544 },
        { num: 545 },
        { num: 546 },
        { num: 547 },
        { num: 548 },
        { num: 549 },
        { num: 550, nola: true },
        { num: 551 },
        { num: 552 },
        { num: 553 },
        { num: 554 },
        { num: 555 },
        { num: 556, nola: true },
        { num: 557 },
        { num: 558 },
        { num: 559 }],
    };
  },
};
</script>
