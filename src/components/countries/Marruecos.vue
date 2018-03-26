<template>
  <tr>
    <td>
      <div class="desc">Marruecos</div>
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
  name: 'Espana',
  data() {
    return {
      activeClass: 'nola',
      team: [
        { num: 140, nola: true },
        { num: 141 },
        { num: 142, nola: true },
        { num: 143 },
        { num: 144 },
        { num: 145 },
        { num: 146 },
        { num: 147 },
        { num: 148 },
        { num: 149 },
        { num: 150 },
        { num: 151 },
        { num: 152 },
        { num: 153, nola: true },
        { num: 154 },
        { num: 155 },
        { num: 156 },
        { num: 157 },
        { num: 158 },
        { num: 159 }],
    };
  },
};
</script>
