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
  name: 'Costa Rica',
  data() {
    return {
      nameTeam: 'Costa Rica',
      activeClass: 'nola',
      team: [
        { num: 380, nola: true },
        { num: 381, nola: true },
        { num: 382, nola: true },
        { num: 383, nola: true },
        { num: 384, nola: true },
        { num: 385 },
        { num: 386 },
        { num: 387 },
        { num: 388 },
        { num: 389 },
        { num: 390, nola: true },
        { num: 391 },
        { num: 392, nola: true },
        { num: 393 },
        { num: 394 },
        { num: 395 },
        { num: 396 },
        { num: 397 },
        { num: 398 },
        { num: 399 }],
    };
  },
};
</script>
