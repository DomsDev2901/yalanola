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
  name: 'Senegal',
  data() {
    return {
      nameTeam: 'Senegal',
      activeClass: 'nola',
      team: [
        { num: 600 },
        { num: 601 },
        { num: 602 },
        { num: 603 },
        { num: 604 },
        { num: 605, nola: true },
        { num: 606 },
        { num: 607 },
        { num: 608 },
        { num: 609 },
        { num: 610 },
        { num: 611, nola: true },
        { num: 612 },
        { num: 613 },
        { num: 614 },
        { num: 615 },
        { num: 616, nola: true },
        { num: 617, nola: true },
        { num: 618 },
        { num: 619 }],
    };
  },
};
</script>
