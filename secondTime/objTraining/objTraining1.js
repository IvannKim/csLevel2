/*객체 실습 1
실행결과
["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]
*/
const widget = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}
// console.log(widget)
const getNumbersElement = (w) => {
    let result = [];
    for (let v in w) {
        let sndObj = w[v];
        for (let k in sndObj) {
            let value = sndObj[k]
            if (!isNaN(value)) result.push(k)
        }
    }
    return result
}
console.log(getNumbersElement(widget))

//for in 에서 object 의  key 와 value 표현
//for(let key in object) 
//object[key] ==> value