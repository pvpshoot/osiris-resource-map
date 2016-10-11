import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHighcharts from 'react-highcharts';


const config = {
  chart: {
      type: 'scatter',
      zoomType: 'xy',
      height: window.innerHeight
  },
  title: {
      text: 'Height Versus Weight of 507 Individuals by Gender'
  },
  series: [
    {
      name: 'Aluminium',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/a/ac/Icon_Aluminum.png/100px-Icon_Aluminum.png?version=3e0729d83222d10491af973c0f8e9a94)'
      },
      data: [
        [19.2, -24.7],
        [0.9, -12.9],
        [-10.2, 2],
        [1.6, 7.2],
        [-6.1, 16.2],
        [-9.9, 5.1],
        [1.3, 6.7],
      ],
    },
    {
      name: 'Berry',
      marker: {
          height: 20,
          width: 20,
      },
      data: [
        [-0.5, 6.4],
        [-9.9, 15.6],
        [16.3, -4.9],
      ],
    },
    {
      name: 'Carbon',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/d/d1/Icon_Carbon.png/100px-Icon_Carbon.png?version=a524a164b88f9c52b6ca4485b98b95bb)'
      },
      data: [
        [15.6, -16.4],
        [3.2, 12.4],
        [16.5, -13.3],
        [15.5, -16.2],
        [3.2, 12.4],
        [-14, 18.4],
        [14.6, 6.2],
        [18, 10.7],
        [2.8, 12.3],
      ],
    },
    {
      name: 'Chlorine',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/9/94/Icon_Clorine.png/100px-Icon_Clorine.png?version=3c48be1600a6d72a43b376c88d9a1811)'
      },
      data: [
        [8.3, -2.7],
        [8.2, -2.8],
        [-5.1, -0.2],
        [-10, -19.4],
      ],
    },
    {
      name: 'Copper',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/d/db/Icon_Copper.png/100px-Icon_Copper.png?version=3ef768bfa5b39dedc4e1a888e5c1ae5d)'
      },
      data: [
        [15.7, -26.8],
        [-0.3, 9.5],
        [1.1, 6.5],
        [1.3, 6.7],
        [-4, 13.2],
        [-7.6, 11.7],
        [-9, 12.8],
        [1.6, 7.2],
        [5.1, 0.9],
        [20.7, -21.1],
        [1.5, 9.5],
        [7.7, 10.4],
      ],
    },
    {
      name: 'Aluminium',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/a/ac/Icon_Aluminum.png/100px-Icon_Aluminum.png?version=3e0729d83222d10491af973c0f8e9a94)'
      },
      data: [
        [19.2, -24.7],
        [0.9, -12.9],
        [-10.2, 2],
        [1.6, 7.2],
        [-6.1, 16.2],
        [-9.9, 5.1],
        [1.3, 6.7],
      ],
    },
    {
      name: 'Aluminium',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/a/ac/Icon_Aluminum.png/100px-Icon_Aluminum.png?version=3e0729d83222d10491af973c0f8e9a94)'
      },
      data: [
        [19.2, -24.7],
        [0.9, -12.9],
        [-10.2, 2],
        [1.6, 7.2],
        [-6.1, 16.2],
        [-9.9, 5.1],
        [1.3, 6.7],
      ],
    },
    {
      name: 'Aluminium',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/a/ac/Icon_Aluminum.png/100px-Icon_Aluminum.png?version=3e0729d83222d10491af973c0f8e9a94)'
      },
      data: [
        [19.2, -24.7],
        [0.9, -12.9],
        [-10.2, 2],
        [1.6, 7.2],
        [-6.1, 16.2],
        [-9.9, 5.1],
        [1.3, 6.7],
      ],
    },
    {
      name: 'Aluminium',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/a/ac/Icon_Aluminum.png/100px-Icon_Aluminum.png?version=3e0729d83222d10491af973c0f8e9a94)'
      },
      data: [
        [19.2, -24.7],
        [0.9, -12.9],
        [-10.2, 2],
        [1.6, 7.2],
        [-6.1, 16.2],
        [-9.9, 5.1],
        [1.3, 6.7],
      ],
    },
    {
      name: 'Aluminium',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/a/ac/Icon_Aluminum.png/100px-Icon_Aluminum.png?version=3e0729d83222d10491af973c0f8e9a94)'
      },
      data: [
        [19.2, -24.7],
        [0.9, -12.9],
        [-10.2, 2],
        [1.6, 7.2],
        [-6.1, 16.2],
        [-9.9, 5.1],
        [1.3, 6.7],
      ],
    },
    {
      name: 'Aluminium',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/a/ac/Icon_Aluminum.png/100px-Icon_Aluminum.png?version=3e0729d83222d10491af973c0f8e9a94)'
      },
      data: [
        [19.2, -24.7],
        [0.9, -12.9],
        [-10.2, 2],
        [1.6, 7.2],
        [-6.1, 16.2],
        [-9.9, 5.1],
        [1.3, 6.7],
      ],
    },
    {
      name: 'Aluminium',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/a/ac/Icon_Aluminum.png/100px-Icon_Aluminum.png?version=3e0729d83222d10491af973c0f8e9a94)'
      },
      data: [
        [19.2, -24.7],
        [0.9, -12.9],
        [-10.2, 2],
        [1.6, 7.2],
        [-6.1, 16.2],
        [-9.9, 5.1],
        [1.3, 6.7],
      ],
    },
    {
      name: 'Aluminium',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/a/ac/Icon_Aluminum.png/100px-Icon_Aluminum.png?version=3e0729d83222d10491af973c0f8e9a94)'
      },
      data: [
        [19.2, -24.7],
        [0.9, -12.9],
        [-10.2, 2],
        [1.6, 7.2],
        [-6.1, 16.2],
        [-9.9, 5.1],
        [1.3, 6.7],
      ],
    },
    {
      name: 'Aluminium',
      marker: {
          height: 20,
          width: 20,
          symbol: 'url(https://hydra-media.cursecdn.com/osirisnewdawn.gamepedia.com/thumb/a/ac/Icon_Aluminum.png/100px-Icon_Aluminum.png?version=3e0729d83222d10491af973c0f8e9a94)'
      },
      data: [
        [19.2, -24.7],
        [0.9, -12.9],
        [-10.2, 2],
        [1.6, 7.2],
        [-6.1, 16.2],
        [-9.9, 5.1],
        [1.3, 6.7],
      ],
    },
  ],
};
class App extends Component {
  componentDidMount() {
    const chart = this.refs.chart.getChart();
    chart.series[0].addPoint({x: 10, y: 12});
  }
  render() {
    return (
      <ReactHighcharts config={config} ref="chart" />

    );
  }
}

export default App;
