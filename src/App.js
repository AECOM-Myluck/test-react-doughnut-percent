import React from 'react'
import "./App.css";
import { Doughnut } from 'react-chartjs-2'
import html2canvas from 'html2canvas';
import canvasToImage from 'canvas-to-image';
// import * as htmlToImage from 'html-to-image';
// import { toJpeg } from 'html-to-image';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      percentColor : 50,
      percentOther : 50,
      bgColor : '#4a66ac'
    }
  }

  setValue = (e) => {
    if (e.currentTarget.value > 100 || e.currentTarget.value < 0) {
      e.currentTarget.value = 100
    }
    this.setState({
      percentColor : e.currentTarget.value,
      percentOther : (100 - e.currentTarget.value),
    })
  }
  changeColor = (c) => {
    this.setState({
      bgColor : c.currentTarget.value
    })
  }

  downloadImage = (i) => {
    document.getElementById('canvas-container').innerHTML = "";
    html2canvas(document.getElementById('doughnut-image')).then(function(canvas) {
      canvasToImage(canvas, {name: 'canvas'});
    });
  }
  

  render() {

    return (
      <div className="App">
        <div className="doughnut-container" id="doughnut-image">
        <Doughnut
          data = {{
            datasets: [{
                data: [this.state.percentColor, this.state.percentOther],
                backgroundColor: [
                  this.state.bgColor,
                  '#fff'
                ],
                borderWidth: 0
            }],
          }}
          options= {{
            cutoutPercentage: 50,
            rotation: 59.69,
          }}
        />
        <div className="value-container"><p>{this.state.percentColor}%</p></div>
        </div>
        <div className="inputs">
          <input type="number" id="percent" name="percent" value={this.state.percentColor} onChange={this.setValue} />
          <input type="color" id="bg-color" name="bg-color" value={this.state.bgColor} onChange={this.changeColor} />
          <button onClick={this.downloadImage}>GENERATE IMAGE</button>
        </div>
        <div id="canvas-container">

        </div>
      </div>
    );
  }
}

export default App;
