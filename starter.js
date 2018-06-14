var Data = {
    type: 'scatter',
    x: [88, 89, 92, 93, 94, 95, 97, 98, 99, 100, 101, 102, 103, 104],
    y: [36569, 36648, 33392, 34418, 34837, 36049, 34084, 34123, 34299, 34505, 33136, 33268, 33133, 33614],
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
    title: '民國88年至104年碩士起薪(換算至民國107年5月的購買力)',
    xaxis: {
        range: [86, 106],
        zeroline: false
    },
    yaxis: {
        range: [30000, 40000],
        zeroline: false
    }
}

Plotly.plot('starter', data, layout);