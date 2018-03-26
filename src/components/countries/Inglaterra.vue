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
  name: 'Inglaterra',
  data() {
    return {
      nameTeam: 'Inglaterra',
      activeClass: 'nola',
      team: [
        { num: 560, nola: true },
        { num: 561 },
        { num: 562, nola: true },
        { num: 563 },
        { num: 564, nola: true },
        { num: 565 },
        { num: 566, nola: true },
        { num: 567, nola: true },
        { num: 568, nola: true },
        { num: 569 },
        { num: 570 },
        { num: 571 },
        { num: 572 },
        { num: 573 },
        { num: 574 },
        { num: 575, nola: true },
        { num: 576 },
        { num: 577 },
        { num: 578 },
        { num: 579 }],
    };
  },
};
</script>
