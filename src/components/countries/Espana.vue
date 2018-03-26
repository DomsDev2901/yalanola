<template>
  <tr>
    <td>
      <div class="desc">España</div>
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
        { num: 120 },
        { num: 121 },
        { num: 122 },
        { num: 123, nola: true },
        { num: 124 },
        { num: 125 },
        { num: 126 },
        { num: 127 },
        { num: 128 },
        { num: 129 },
        { num: 130, nola: true },
        { num: 131 },
        { num: 132, nola: true },
        { num: 133 },
        { num: 134 },
        { num: 135, nola: true },
        { num: 136 },
        { num: 137 },
        { num: 138 },
        { num: 139 }],
    };
  },
};
</script>
