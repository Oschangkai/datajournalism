var Data = {
    type: 'scatter',
    x: [82, 83, 84, 85],
    y: [325613, 322938, 329581, 325545],
    mode: 'lines+markers',
    name: '出生嬰兒數',
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
    title: '103至106年 對應至82年至85年出生嬰兒數',
    xaxis: {
        range: [81, 86],
        zeroline: false
    },
    yaxis: {
        range: [320000, 330000],
        zeroline: false
    }
}

Plotly.plot('103106born', data, layout);