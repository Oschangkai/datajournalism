// data
var Data = {
    type: 'scatter',
    x: [103, 104, 105, 106],
    y: [218636, 219503, 220769, 218182],
    mode: 'lines+markers',
    name: '學生數',
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
    title: '103至106年 大專院校預計畢業人數',
    xaxis: {
        range: [102, 107],
        zeroline: false
    },
    yaxis: {
        range: [216000, 223000],
        zeroline: false
    }
}

Plotly.plot('10310601', data, layout);