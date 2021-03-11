var btn = document.getElementById('btn').addEventListener('click', function() {
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var text = document.getElementById('text').value;
    var result = fName + ' ' + lName + ' ' + '<br>' + text;
    document.write(result);
    // var displayResult = document.getElementById('displayResult').value = result;

})

function test() {
    document.body.style.backgroundColor = 'white';
}
var click = document.getElementById('naiem');
click.onclick = test;

function ea() {
    document.body.style.backgroundColor = '#FF0000';
}

var dd = document.getElementById('n');
dd.onclick = ea;


var a = document.getElementById('a').addEventListener('click', function() {
    document.body.style.backgroundColor = '#00FFFF';
})