var Data = {
    type: 'scatter',
    x: [101, 103, 105],
    y: [37098, 38307, 37435],
    mode: 'lines+markers',
    name: '元',
    showlegend: true,
    hoverinfo: 'all',
    line: {
        color: 'blue',
        width: 2
    },
    marker: {
        color: 'blue',
        size: 8,
        symbol: 'circle'
    }
}



var data = [Data]

var layout = {
    title: '101至105年 研究所畢業平均起薪',
    xaxis: {
        range: [100, 106],
        zeroline: false
    },
    yaxis: {
        range: [36500, 38500],
        zeroline: false
    }
}
Plotly.plot('101105', data, layout);