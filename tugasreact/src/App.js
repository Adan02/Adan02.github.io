import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
            <div class="pembungkus_konten">
                <header class="header">
                <h1 style={{fontSize:32}}>
                    <b>PANTAUAN COVID-19</b>
                </h1>
                <p>JAGA KESEHATAN DAN SELALU GUNAKAN MASKER</p>
            </header>
            </div>
            <div class="wrapper3">
                <div class="bottomawal margin">
                    <div class="isi">
                        <h2 style={{fontSize:24}}><b>GLOBAL</b></h2>
                        <a>POSITIF : </a> <a><strong id="globalpositif"></strong></a> <a>Orang</a><br></br>
                        <a>MENINGGAL :</a> <a><strong id="globalmeninggal"></strong></a> <a>Orang</a><br></br>
                        <a>SEMBUH :</a> <a><strong id="globalsembuh"></strong></a> <a>Orang</a><br></br>
                        <a>Last update :</a> <a id="globalupdate"></a>
                    </div>
                </div>
            </div>
            <div class="wrapper3">
                <div class="bottom margin">
                    <div class="isi">
                        <h2 style={{fontSize:24}}><b>INDONESIA</b></h2>
                        <a>POSITIF : </a> <a><strong id="indopositif"></strong></a> <a>Orang</a><br></br>
                        <a>MENINGGAL :</a> <a><strong id="indomeninggal"></strong></a> <a>Orang</a><br></br>
                        <a>SEMBUH :</a> <a><strong id="indosembuh"></strong></a> <a>Orang</a><br></br>
                        <a>Last update :</a> <a id="indoupdate"></a>
                    </div>
                </div>
            </div>
            <div class="wrapper4">
                <div class="bottom_penutup margin">
                    <div class="isi">
                        <h2 style={{fontSize:24}}><b>PHILIPPINES</b></h2>
                        <a>POSITIF : </a> <a><strong id="pinoypositif"></strong></a> <a>Orang</a><br></br>
                        <a>MENINGGAL :</a> <a><strong id="pinoymeninggal"></strong></a> <a>Orang</a><br></br>
                        <a>SEMBUH :</a> <a><strong id="pinoysembuh"></strong></a> <a>Orang</a><br></br>
                        <a>Last update :</a> <a id="pinoyupdate"></a>
                    </div>
                </div>
            </div>
            <div class="wrapper4">
                <div class="bottom_penutup margin">
                    <div class="isi">
                        <h2 style={{fontSize:24}}><b>MALAYSIA</b></h2>
                        <a>POSITIF : </a> <a><strong id="malaypositif"></strong></a> <a>Orang</a><br></br>
                        <a>MENINGGAL :</a> <a><strong id="malaymeninggal"></strong></a> <a>Orang</a><br></br>
                        <a>SEMBUH :</a> <a><strong id="malaysembuh"></strong></a> <a>Orang</a><br></br>
                        <a>Last update :</a> <a id="malayupdate"></a>
                    </div>
                </div>
            </div>
            <div class="wrapper4">
                <div class="bottom_penutup margin">
                    <div class="isi">
                        <h2 style={{fontSize:24}}><b>THAILAND</b></h2>
                        <a>POSITIF : </a> <a><strong id="thaipositif"></strong></a> <a>Orang</a><br></br>
                        <a>MENINGGAL :</a> <a><strong id="thaimeninggal"></strong></a> <a>Orang</a><br></br>
                        <a>SEMBUH :</a> <a><strong id="thaisembuh"></strong></a> <a>Orang</a><br></br>
                        <a>Last update :</a> <a id="thaiupdate"></a>
                    </div>
                </div>
            </div>
            <div class="wrapper4">
                <div class="bottom_penutup margin">
                    <div class="isi">
                        <h2 style={{fontSize:24}}><b>SINGAPORE</b></h2>
                        <a>POSITIF : </a> <a><strong id="singapositif"></strong></a> <a>Orang</a><br></br>
                        <a>MENINGGAL :</a> <a><strong id="singameninggal"></strong></a> <a>Orang</a><br></br>
                        <a>SEMBUH :</a> <a><strong id="singasembuh"></strong></a> <a>Orang</a><br></br>
                        <a>Last update :</a> <a id="singaupdate"></a>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default App;
