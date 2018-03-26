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
  name: 'France',
  data() {
    return {
      nameTeam: 'France',
      activeClass: 'nola',
      team: [
        { num: 180 },
        { num: 181 },
        { num: 182, nola: true },
        { num: 183 },
        { num: 184 },
        { num: 185 },
        { num: 186 },
        { num: 187 },
        { num: 188 },
        { num: 189 },
        { num: 190 },
        { num: 191, nola: true },
        { num: 192, nola: true },
        { num: 193 },
        { num: 194, nola: true },
        { num: 195 },
        { num: 196, nola: true },
        { num: 197 },
        { num: 198 },
        { num: 199 }],
    };
  },
};
</script>
