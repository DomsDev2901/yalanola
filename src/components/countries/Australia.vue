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
      nameTeam: 'Australia',
      activeClass: 'nola',
      team: [
        { num: 200 },
        { num: 201 },
        { num: 202 },
        { num: 203 },
        { num: 204, nola: true },
        { num: 205, nola: true },
        { num: 206 },
        { num: 207 },
        { num: 208 },
        { num: 209 },
        { num: 210 },
        { num: 211 },
        { num: 212 },
        { num: 213 },
        { num: 214 },
        { num: 215, nola: true },
        { num: 216 },
        { num: 217 },
        { num: 218, nola: true },
        { num: 219, nola: true }],
    };
  },
};
</script>
