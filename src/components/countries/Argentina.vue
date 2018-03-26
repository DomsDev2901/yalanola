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
  name: 'Argentina',
  data() {
    return {
      nameTeam: 'Argentina',
      activeClass: 'nola',
      team: [
        { num: 260, nola: true },
        { num: 261 },
        { num: 262 },
        { num: 263 },
        { num: 264 },
        { num: 265 },
        { num: 266 },
        { num: 267 },
        { num: 268 },
        { num: 269, nola: true },
        { num: 270 },
        { num: 271 },
        { num: 272 },
        { num: 273 },
        { num: 274 },
        { num: 275 },
        { num: 276 },
        { num: 277 },
        { num: 278 },
        { num: 279, nola: true }],
    };
  },
};
</script>
