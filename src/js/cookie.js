/* 
    函数名:setCookie
    功能:可以设置指定过期时间的cookie
    参数:
        key:要设置的cookie的键
        value:要设置的cookie的值
        expires:几天以后如果,如传入的是1,表示1天以后过期

*/

function setCookie(key,value,expires){
    var time=new Date()
    time.setTime(time.getTime()-8*60*60*1000+expires*24*60*60*1000);
    document.cookie=key+"="+value+";expires="+time;
}

/* 
    函数名:removeCookie
    功能:可以删除指定的cookie
    参数:
        key:要删除cookie的键

*/
function removeCookie(key){
    setCookie(key,1,-1);
}


/* 
    函数名:getCookie
    功能:可以获取指定条目的cookie值,比如:cookie有两条,分别是a=23;b=45,我可以指定获取a或者是b的值
    参数:
        key:要获取的cookie的键   
    返回值:
        指定的cookie的值

*/

function getCookie(key){
    var str=document.cookie;
    var cookieArr=str.split("; ");
    for(var i=0;i<cookieArr.length;i++){
        var newArr=cookieArr[i].split("=");
        if(key==newArr[0]){
            return newArr[1]
        }    
    }
}