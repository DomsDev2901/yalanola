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
  name: 'Dinamarca',
  data() {
    return {
      nameTeam: 'Dinamarca',
      activeClass: 'nola',
      team: [
        { num: 240 },
        { num: 241 },
        { num: 242, nola: true },
        { num: 243 },
        { num: 244 },
        { num: 245 },
        { num: 246 },
        { num: 247 },
        { num: 248 },
        { num: 249 },
        { num: 250, nola: true },
        { num: 251 },
        { num: 252 },
        { num: 253 },
        { num: 254, nola: true },
        { num: 255 },
        { num: 256, nola: true },
        { num: 257 },
        { num: 258 },
        { num: 259 }],
    };
  },
};
</script>
