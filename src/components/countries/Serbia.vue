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
  name: 'Serbia',
  data() {
    return {
      nameTeam: 'Serbia',
      activeClass: 'nola',
      team: [
        { num: 400 },
        { num: 401 },
        { num: 402 },
        { num: 403 },
        { num: 404 },
        { num: 405 },
        { num: 406, nola: true },
        { num: 407 },
        { num: 408 },
        { num: 409 },
        { num: 410, nola: true },
        { num: 411, nola: true },
        { num: 412 },
        { num: 413 },
        { num: 414 },
        { num: 415 },
        { num: 416 },
        { num: 417, nola: true },
        { num: 418 },
        { num: 419, nola: true }],
    };
  },
};
</script>
