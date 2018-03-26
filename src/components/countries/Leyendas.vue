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
  name: 'Leyendas',
  data() {
    return {
      nameTeam: 'Leyendas',
      activeClass: 'nola',
      team: [
        { num: 660 },
        { num: 661, nola: true },
        { num: 662, nola: true },
        { num: 663, nola: true },
        { num: 664, nola: true },
        { num: 665, nola: true },
        { num: 666, nola: true },
        { num: 667, nola: true },
        { num: 668, nola: true },
        { num: 669, nola: true }],
    };
  },
};
</script>
