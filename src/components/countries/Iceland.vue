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
  name: 'Iceland',
  data() {
    return {
      nameTeam: 'Iceland',
      activeClass: 'nola',
      team: [
        { num: 280, nola: true },
        { num: 281 },
        { num: 282 },
        { num: 283 },
        { num: 284 },
        { num: 285 },
        { num: 286 },
        { num: 287 },
        { num: 288 },
        { num: 289 },
        { num: 290 },
        { num: 291 },
        { num: 292 },
        { num: 293 },
        { num: 294 },
        { num: 295 },
        { num: 296 },
        { num: 297 },
        { num: 298 },
        { num: 299 }],
    };
  },
};
</script>
