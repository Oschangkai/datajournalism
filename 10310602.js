var Data = {
    type: 'scatter',
    x: [103, 104, 105, 106],
    y: [41442, 41890, 42144, 42885],
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
    title: '103至106年 碩士預計入學人數' + '<br><a href="https://data.gov.tw/dataset/6231">大專院校校別學生數</a>',
    xaxis: {
        range: [102, 107],
        zeroline: false
    },
    yaxis: {
        range: [40000, 43000],
        zeroline: false
    }
}

Plotly.plot('10310602', data, layout);