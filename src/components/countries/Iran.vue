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
  name: 'Iran',
  data() {
    return {
      nameTeam: 'Iran',
      activeClass: 'nola',
      team: [
        { num: 160, nola: true },
        { num: 161, nola: true },
        { num: 162 },
        { num: 163 },
        { num: 164 },
        { num: 165 },
        { num: 166, nola: true },
        { num: 167 },
        { num: 168 },
        { num: 169 },
        { num: 170 },
        { num: 171, nola: true },
        { num: 172 },
        { num: 173 },
        { num: 174 },
        { num: 175 },
        { num: 176 },
        { num: 177 },
        { num: 178 },
        { num: 179 }],
    };
  },
};
</script>
