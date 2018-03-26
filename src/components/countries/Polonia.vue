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
  name: 'Polonia',
  data() {
    return {
      nameTeam: 'Polonia',
      activeClass: 'nola',
      team: [
        { num: 580 },
        { num: 581 },
        { num: 582 },
        { num: 583 },
        { num: 584 },
        { num: 585, nola: true },
        { num: 586 },
        { num: 587 },
        { num: 588 },
        { num: 589 },
        { num: 590, nola: true },
        { num: 591 },
        { num: 592, nola: true },
        { num: 593 },
        { num: 594 },
        { num: 595, nola: true },
        { num: 596 },
        { num: 597 },
        { num: 598 },
        { num: 599 }],
    };
  },
};
</script>
