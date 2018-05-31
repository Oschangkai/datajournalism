// data
var Data = {
    type: 'scatter',
    x: ["符合工作需求的經驗", "專業知識與技術", "曾任職於同業", "口語表達能力", "學歷與科系", "外語能力", "薪資要求", "人脈關係", "人格特質", "以上皆是", "其他"],
    y: [945, 708, 487, 181, 155, 127, 63, 22, 14, 10, 7],
    type: 'bar'
}

var data = [Data]

var layout = {
    title: '決定錄取與否的重要條件分析表'
}


Plotly.plot('isAdmit', data, layout);