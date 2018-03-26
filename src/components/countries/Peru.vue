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
  name: 'Australia',
  data() {
    return {
      nameTeam: 'Peru',
      activeClass: 'nola',
      team: [
        { num: 220 },
        { num: 221, nola: true },
        { num: 222 },
        { num: 223, nola: true },
        { num: 224, nola: true },
        { num: 225 },
        { num: 226, nola: true },
        { num: 227 },
        { num: 228, nola: true },
        { num: 229 },
        { num: 230 },
        { num: 231 },
        { num: 232 },
        { num: 233 },
        { num: 234, nola: true },
        { num: 235, nola: true },
        { num: 236 },
        { num: 237 },
        { num: 238 },
        { num: 239 }],
    };
  },
};
</script>
