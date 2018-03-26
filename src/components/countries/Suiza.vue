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
  name: 'Suiza',
  data() {
    return {
      nameTeam: 'Suiza',
      activeClass: 'nola',
      team: [
        { num: 360 },
        { num: 361 },
        { num: 362 },
        { num: 363 },
        { num: 364, nola: true },
        { num: 365, nola: true },
        { num: 366 },
        { num: 367 },
        { num: 368 },
        { num: 369 },
        { num: 370, nola: true },
        { num: 371, nola: true },
        { num: 372, nola: true },
        { num: 373 },
        { num: 374, nola: true },
        { num: 375 },
        { num: 376 },
        { num: 377 },
        { num: 378 },
        { num: 379 }],
    };
  },
};
</script>
