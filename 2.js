function calculate() {
var w = parseFloat(document.getElementById("width").value);
var h = parseFloat(document.getElementById("height").value);
var p = "";
var a = "";
    if(w<=0||h<=0) {
        alert("数值必须大于0！")
    }
    if(isNaN(w) || isNaN(h)) {
        alert("必须输入数值！");
    }
    else {
        p=2*(w+h);
        a=w*h;
    }
    document.getElementById("perimeter").value = p;
    document.getElementById("area").value = a;
}
