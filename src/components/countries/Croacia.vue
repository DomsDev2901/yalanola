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
  name: 'Croacia',
  data() {
    return {
      nameTeam: 'Croacia',
      activeClass: 'nola',
      team: [
        { num: 300, nola: true },
        { num: 301 },
        { num: 302 },
        { num: 303 },
        { num: 304 },
        { num: 305, nola: true },
        { num: 306 },
        { num: 307 },
        { num: 308, nola: true },
        { num: 309 },
        { num: 310 },
        { num: 311 },
        { num: 312 },
        { num: 313 },
        { num: 314, nola: true },
        { num: 315 },
        { num: 316 },
        { num: 317 },
        { num: 318 },
        { num: 319 }],
    };
  },
};
</script>
