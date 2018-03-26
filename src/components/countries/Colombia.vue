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
  name: 'Colombia',
  data() {
    return {
      nameTeam: 'Colombia',
      activeClass: 'nola',
      team: [
        { num: 620 },
        { num: 621 },
        { num: 622 },
        { num: 623 },
        { num: 624 },
        { num: 625 },
        { num: 626 },
        { num: 627, nola: true },
        { num: 628 },
        { num: 629 },
        { num: 630 },
        { num: 631, nola: true },
        { num: 632 },
        { num: 633 },
        { num: 634 },
        { num: 635 },
        { num: 636, nola: true },
        { num: 637 },
        { num: 638 },
        { num: 639 }],
    };
  },
};
</script>
