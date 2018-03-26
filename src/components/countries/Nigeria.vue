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
  name: 'Nigeria',
  data() {
    return {
      nameTeam: 'Nigeria',
      activeClass: 'nola',
      team: [
        { num: 320, nola: true },
        { num: 321 },
        { num: 322 },
        { num: 323, nola: true },
        { num: 324 },
        { num: 325 },
        { num: 326 },
        { num: 327 },
        { num: 328, nola: true },
        { num: 329 },
        { num: 330, nola: true },
        { num: 331 },
        { num: 332 },
        { num: 333 },
        { num: 334, nola: true },
        { num: 335 },
        { num: 336 },
        { num: 337 },
        { num: 338 },
        { num: 339, nola: true }],
    };
  },
};
</script>
