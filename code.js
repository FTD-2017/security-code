var codeBox = document.getElementsByClassName('codeBox')[0];
function queryCode() {
    var areaStr = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var result = '';
    for(var i = 0;i < 4;i++){
        var num = Math.round(Math.random()*61);
        var char = areaStr[num];
        if(result.toLowerCase().indexOf(char.toLowerCase())>-1){
            i--;
            continue;
        }
        result += char;
    }
    codeBox.innerHTML = result;
};
queryCode();
codeBox.onclick = function () {
    queryCode();
}

