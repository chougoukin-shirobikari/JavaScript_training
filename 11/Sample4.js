function check(){
    var p = new RegExp("^[0-9a-zA-Z_\.-]+@[0-9a-zA-Z_\.-]+\.[a-zA-Z]+$", "i");
    var s = myform.address.value;
    var res = s.match(p);

    if(res == null){
        window.alert("入力が誤っています。");
        res = false;
    }else{
        window.alert("送信します。");
        rel = true;
    }
    return res;
}