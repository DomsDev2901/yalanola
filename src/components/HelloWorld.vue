<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--
    <div class="row barra">
      <div class="columns small-6">Buscar</div>
      <div class="columns small-6">
        <select name="" id="">
          <option value="fifa">Fifa</option>
          <option value="estadios">Estadios</option>

          <option value="rusia">Rusia</option>
          <option value="egypto">Egypto</option>
          <option value="uruguay">Uruguay</option>
          <option value="arabia">Arabia saudi</option>

          <option value="espana">España</option>
          <option value="portugal">Portugal</option>
          <option value="marruecos">Marruecos</option>
          <option value="iran">Iran</option>

          <option value="francia">Francia</option>
          <option value="peru" selected>Peru</option>
          <option value="dinamarca">Dinamarca</option>
          <option value="australia">Australia</option>

          <option value="argentina">Argentina</option>
          <option value="croacia">Croacia</option>
          <option value="islandia">Islandia</option>
          <option value="nigeria">Nigeria</option>

          <option value="brasil">Brasil</option>
          <option value="suiza">Suiza</option>
          <option value="costarica">Costa Rica</option>
          <option value="serbia">Serbia</option>

          <option value="alemania">Alemania</option>
          <option value="mexico">Mexico</option>
          <option value="suecia">Suecia</option>
          <option value="coreadelsur">Corea del Sur</option>

          <option value="belgica">Belgica</option>
          <option value="inglaterra">Inglaterra</option>
          <option value="tunez">Tunez</option>
          <option value="panama">Panama</option>

          <option value="polonia">Polonia</option>
          <option value="colombia">Colombia</option>
          <option value="senegal">Senegal</option>
          <option value="japon">Japon</option>

          <option value="leyendas">Leyendas</option>
        </select>
      </div>
    </div>-->
    <div class="row">
      <table border="1" borderColor="white">
        <tr>
          <td>
            <div class="desc">FIFA</div>
          </td>
          <td>
            <div class="nola">0</div>
          </td>
          <td>
            <div class="nola">1</div>
          </td>
          <td>
            <div class="nola">2</div>
          </td>
          <td>
            <div class="yala">3</div>
          </td>
          <td>
            <div class="yala">4</div>
          </td>
          <td>
            <div class="nola">5</div>
          </td>
          <td>
            <div class="nola">6</div>
          </td>
          <td>
            <div class="yala">7</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="desc">ESTADIOS</div>
          </td>
          <td>
            <div class="yala">8</div>
          </td>
          <td>
            <div class="yala">9</div>
          </td>
          <td>
            <div class="yala">10</div>
          </td>
          <td>
            <div class="yala">11</div>
          </td>
          <td>
            <div class="nola">12</div>
          </td>
          <td>
            <div class="yala">13</div>
          </td>
          <td>
            <div class="nola">14</div>
          </td>
          <td>
            <div class="yala">15</div>
          </td>
          <td>
            <div class="yala">16</div>
          </td>
          <td>
            <div class="yala">17</div>
          </td>
          <td>
            <div class="yala">18</div>
          </td>
          <td>
            <div class="yala">19</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
          <td>
            <div class="yala">-</div>
          </td>
        </tr>
        <rusia></rusia>
        <arabia-saudi></arabia-saudi>
        <egypto></egypto>
        <uruguay></uruguay>
      </table>
    </div>
  </div>
</template>

<script>
import Rusia from '@/components/countries/Rusia';
import ArabiaSaudi from '@/components/countries/ArabiaSaudi';
import Egypto from '@/components/countries/Egypto';
import Uruguay from '@/components/countries/Uruguay';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Control de figuras',
    };
  },
  components: {
    Rusia,
    ArabiaSaudi,
    Egypto,
    Uruguay,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.barra {
  background-color: #f1f1f1;
  padding-top: 20px;
}
.yala {
  background-color: green;
  color: white;
}
.nola {
  background-color: red;
  color: white;
}
</style>
