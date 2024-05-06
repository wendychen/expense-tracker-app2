import React from 'react';
import ApexCharts from 'apexcharts';

const PyramidChart = () => {
  var options = {
    series: [
    {
      name: "Ecological Pyramid",
      data: [100, 200, 400, 500, 600],
    },
  ],
    chart: {
    type: 'bar',
    height: 250,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  colors: [
    '#F44F5E',
    '#E55A89',
    '#D863B1',
    '#CA6CD8',
    '#B57BED',
    // '#8D95EB',
    // '#62ACEA',
    // '#4BC3E6',
  ],
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] 
    },
    dropShadow: {
      enabled: true,
    },
  },
  title: {
    text: 'Ecological Pyramid',
    align: 'middle',
  },
  xaxis: {
    categories: ['Quaternary Consumers', 'Tertiary Consumers', 'Secondary Consumers', 'Primary Consumers', 'Producers'],
  },
  legend: {
    show: false,
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  return chart.render();
}

const PyramidFunnel = () => {

  PyramidChart();
  return (
    <div style={{ width: 600}}>
      <div id="chart"></div>
    </div>
    
  )
}

export default PyramidFunnel;
