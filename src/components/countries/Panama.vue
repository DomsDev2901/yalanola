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
  name: 'Panama',
  data() {
    return {
      nameTeam: 'Panama',
      activeClass: 'nola',
      team: [
        { num: 520, nola: true },
        { num: 521 },
        { num: 522 },
        { num: 523, nola: true },
        { num: 524 },
        { num: 525 },
        { num: 526, nola: true },
        { num: 527, nola: true },
        { num: 528 },
        { num: 529 },
        { num: 530 },
        { num: 531, nola: true },
        { num: 532 },
        { num: 533 },
        { num: 534, nola: true },
        { num: 535 },
        { num: 536, nola: true },
        { num: 537 },
        { num: 538 },
        { num: 539 }],
    };
  },
};
</script>
