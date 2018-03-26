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
  name: 'Coreadelsur',
  data() {
    return {
      nameTeam: 'Corea del sur',
      activeClass: 'nola',
      team: [
        { num: 480, nola: true },
        { num: 481 },
        { num: 482, nola: true },
        { num: 483 },
        { num: 484 },
        { num: 485 },
        { num: 486 },
        { num: 487 },
        { num: 488 },
        { num: 489, nola: true },
        { num: 490 },
        { num: 491 },
        { num: 492 },
        { num: 493 },
        { num: 494 },
        { num: 495 },
        { num: 496 },
        { num: 497 },
        { num: 498, nola: true },
        { num: 499 }],
    };
  },
};
</script>
