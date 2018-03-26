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
  name: 'Suecia',
  data() {
    return {
      nameTeam: 'Suecia',
      activeClass: 'nola',
      team: [
        { num: 460, nola: true },
        { num: 461 },
        { num: 462 },
        { num: 463 },
        { num: 464 },
        { num: 465 },
        { num: 466 },
        { num: 467 },
        { num: 468, nola: true },
        { num: 469 },
        { num: 470, nola: true },
        { num: 471 },
        { num: 472 },
        { num: 473 },
        { num: 474 },
        { num: 475, nola: true },
        { num: 476 },
        { num: 477 },
        { num: 478 },
        { num: 479 }],
    };
  },
};
</script>
