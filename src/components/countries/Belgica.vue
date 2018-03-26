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
  name: 'Belgica',
  data() {
    return {
      nameTeam: 'Belgica',
      activeClass: 'nola',
      team: [
        { num: 500, nola: true },
        { num: 501 },
        { num: 502 },
        { num: 503, nola: true },
        { num: 504 },
        { num: 505 },
        { num: 506 },
        { num: 507 },
        { num: 508, nola: true },
        { num: 509 },
        { num: 510, nola: true },
        { num: 511, nola: true },
        { num: 512 },
        { num: 513 },
        { num: 514 },
        { num: 515, nola: true },
        { num: 516, nola: true },
        { num: 517 },
        { num: 518 },
        { num: 519, nola: true }],
    };
  },
};
</script>
