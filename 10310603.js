       var Data = {
           type: 'scatter',
           x: [103.5, 104.5, 105.5],
           y: [19.15, 19.2, 19.42],
           mode: 'lines+markers',
           name: '%升學率',
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
           title: '103~104、104~105、105~106 年大專院校畢業後的升學率' + '<br><a href="https://data.gov.tw/dataset/6231">大專院校校別學生數</a>',
           xaxis: {
               range: [102, 107],
               zeroline: false
           },
           yaxis: {
               range: [18.8, 19.5],
               zeroline: false
           }
       }

       Plotly.plot('10310603', data, layout);