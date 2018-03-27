<template>
  <div class="hello">
    <h1>{{ msg }} (<a href="repetidas">repetidas</a>)</h1>
    <div class="row">
      <div class="columns small-6"><input type="text"></div>
      <div class="columns small-6">
        <select name="" id="">
          <option value="fifa">Fifa</option>
          <option value="estadios">Estadios</option>
          <option value="rusia">Rusia</option>
        </select>
      </div>
    </div>
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
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="desc">Estadios</div>
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
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
          <td>
            <div class="">-</div>
          </td>
        </tr>
        <tr>
          <td>--</td>
        </tr>
        <rusia></rusia>
        <arabia-saudi></arabia-saudi>
        <egypto></egypto>
        <uruguay></uruguay>
        <tr>
          <td>--</td>
        </tr>
        <portugal></portugal>
        <espana></espana>
        <marruecos></marruecos>
        <iran></iran>
        <tr>
          <td>--</td>
        </tr>
        <france></france>
        <australia></australia>
        <peru></peru>
        <dinamarca></dinamarca>
        <tr>
          <td>--</td>
        </tr>
        <argentina></argentina>
        <iceland></iceland>
        <croacia></croacia>
        <nigeria></nigeria> 
        <tr>
          <td>--</td>
        </tr>
        <brasil></brasil>
        <suiza></suiza>
        <costa-rica></costa-rica>
        <serbia></serbia>
        <tr>
          <td>--</td>
        </tr>
        <alemania></alemania>
        <mexico></mexico>
        <suecia></suecia>
        <corea-del-sur></corea-del-sur>
        <tr>
          <td>--</td>
        </tr>
        <belgica></belgica>
        <panama></panama>
        <tunez></tunez>
        <inglaterra></inglaterra>
        <tr>
          <td>--</td>
        </tr>
        <polonia></polonia>
        <senegal></senegal>
        <colombia></colombia>
        <japon></japon>
        <tr>
          <td>--</td>
        </tr>
        <leyendas></leyendas>
      </table>
    </div>
  </div>
</template>

<script>
import Rusia from '@/components/countries/Rusia';
import ArabiaSaudi from '@/components/countries/ArabiaSaudi';
import Egypto from '@/components/countries/Egypto';
import Uruguay from '@/components/countries/Uruguay';

import Portugal from '@/components/countries/Portugal';
import Espana from '@/components/countries/Espana';
import Marruecos from '@/components/countries/Marruecos';
import Iran from '@/components/countries/Iran';

import France from '@/components/countries/France';
import Australia from '@/components/countries/Australia';
import Peru from '@/components/countries/Peru';
import Dinamarca from '@/components/countries/Dinamarca';

import Argentina from '@/components/countries/Argentina';
import Iceland from '@/components/countries/Iceland';
import Croacia from '@/components/countries/Croacia';
import Nigeria from '@/components/countries/Nigeria';

import Brasil from '@/components/countries/Brasil';
import Suiza from '@/components/countries/Suiza';
import CostaRica from '@/components/countries/CostaRica';
import Serbia from '@/components/countries/Serbia';

import Alemania from '@/components/countries/Alemania';
import Mexico from '@/components/countries/Mexico';
import Suecia from '@/components/countries/Suecia';
import CoreaDelSur from '@/components/countries/CoreaDelSur';

import Belgica from '@/components/countries/Belgica';
import Panama from '@/components/countries/Panama';
import Tunez from '@/components/countries/Tunez';
import Inglaterra from '@/components/countries/Inglaterra';

import Polonia from '@/components/countries/Polonia';
import Senegal from '@/components/countries/Senegal';
import Colombia from '@/components/countries/Colombia';
import Japon from '@/components/countries/Japon';

import Leyendas from '@/components/countries/Leyendas';

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
    Portugal,
    Espana,
    Marruecos,
    Iran,
    France,
    Australia,
    Peru,
    Dinamarca,
    Argentina,
    Iceland,
    Croacia,
    Nigeria,
    Brasil,
    Suiza,
    CostaRica,
    Serbia,
    Alemania,
    Mexico,
    Suecia,
    CoreaDelSur,
    Belgica,
    Panama,
    Tunez,
    Inglaterra,
    Polonia,
    Senegal,
    Colombia,
    Japon,
    Leyendas,
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
</style>
