import React from 'react'
// import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts';

class ChartsEG extends React.Component {
  componentDidMount() {
    const myChart = echarts.init(this.chartDom)
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  }
  render() {
    return (
      <div ref={(dom) => { this.chartDom = dom }} style={{ width: '600px', height: '400px' }} />
    )
  }
}


export default ChartsEG
