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
  name: 'Japon',
  data() {
    return {
      nameTeam: 'Japon',
      activeClass: 'nola',
      team: [
        { num: 640 },
        { num: 641 },
        { num: 642 },
        { num: 643, nola: true },
        { num: 644 },
        { num: 645 },
        { num: 646 },
        { num: 647, nola: true },
        { num: 648 },
        { num: 649 },
        { num: 650, nola: true },
        { num: 651 },
        { num: 652 },
        { num: 653 },
        { num: 654 },
        { num: 655 },
        { num: 656 },
        { num: 657, nola: true },
        { num: 658, nola: true },
        { num: 659 }],
    };
  },
};
</script>
