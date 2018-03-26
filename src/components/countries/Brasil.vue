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
  name: 'Brasil',
  data() {
    return {
      nameTeam: 'Brasil',
      activeClass: 'nola',
      team: [
        { num: 340 },
        { num: 341 },
        { num: 342 },
        { num: 343 },
        { num: 344, nola: true },
        { num: 345 },
        { num: 346, nola: true },
        { num: 347 },
        { num: 348, nola: true },
        { num: 349 },
        { num: 350, nola: true },
        { num: 351 },
        { num: 352 },
        { num: 353 },
        { num: 354, nola: true },
        { num: 355 },
        { num: 356 },
        { num: 357 },
        { num: 358, nola: true },
        { num: 359 }],
    };
  },
};
</script>
