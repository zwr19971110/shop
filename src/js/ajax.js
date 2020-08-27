function getSend(url,cb){
    var xhr=new XMLHttpRequest();
    xhr.open('get',url);
    xhr.onload=function(){
        cb(xhr.responseText)
    };
    xhr.send(null);
}


function postSend(url,cb,date){
    var xhr=new XMLHttpRequest();
    xhr.open('post',url);
    xhr.onload=function(){
        cb(xhr.responseText)
    };
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    xhr.send(date)
}