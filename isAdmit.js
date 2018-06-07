// data
var Data = {
    type: 'scatter',
    x: ["符合工作需求的經驗", "專業知識與技術", "曾任職於同業", "口語表達能力", "學歷與科系", "外語能力", "薪資要求", "人脈關係", "人格特質", "以上皆是", "其他"],
    y: [945, 708, 487, 181, 155, 127, 63, 22, 14, 10, 7],
    type: 'bar'
}

var data = [Data]

var layout = {
    title: '決定錄取與否的重要條件分析表' + '<br> 資料來源: <a href="https://www.taiwanjobs.gov.tw/Internet/2017/Survey/Q4_1/page01.html">2017企業徵才喜好大調查</a> <br> https://www.taiwanjobs.gov.tw/Internet/2017/Survey/Q4_1/page01.html'
}


Plotly.plot('isAdmit', data, layout);