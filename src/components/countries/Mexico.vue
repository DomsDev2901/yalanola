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
  name: 'Mexico',
  data() {
    return {
      nameTeam: 'Mexico',
      activeClass: 'nola',
      team: [
        { num: 440, nola: true },
        { num: 441 },
        { num: 442, nola: true },
        { num: 443 },
        { num: 444 },
        { num: 445, nola: true },
        { num: 446 },
        { num: 447, nola: true },
        { num: 448 },
        { num: 449, nola: true },
        { num: 450 },
        { num: 451 },
        { num: 452, nola: true },
        { num: 453 },
        { num: 454 },
        { num: 455 },
        { num: 456 },
        { num: 457, nola: true },
        { num: 458 },
        { num: 459 }],
    };
  },
};
</script>
