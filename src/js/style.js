//轮播图代码
function Slider(id){
    this.div=document.getElementById(id);
    this.imgs=this.div.children[0].children;
    this.points=this.div.children[1].children;
    this.index=0;
    this.timer=null;
}
Slider.prototype.nextImg=function(){
    var newIndex=this.index+1;
    if(newIndex>this.imgs.length-1){
        newIndex=0;
    }
    for(var i=0;i<this.imgs.length;i++){
        animation(this.imgs[i],{opacity:0});
        this.points[i].className=''
    }
    animation(this.imgs[newIndex],{opacity:100});
    this.points[newIndex].className="current";
    this.index=newIndex;
}
Slider.prototype.init=function(){
    this.timer=setInterval(this.nextImg.bind(this),5000)
}
var s1=new Slider('banner');
s1.init();
//点击显示二维码
var bd=document.getElementsByClassName('bd')[2];
var imgbox=document.getElementsByClassName('imgbox')[0];
bd.onmouseenter=function(){
    imgbox.style.display="block";
    bd.onmouseleave=function(){
        imgbox.style.display="none"
    }
}
//秒杀倒计时
function getTime(){
    var imgs=document.getElementsByClassName('timeout')[0].children;
    var time1=new Date();
    var time2=new Date("2020-10-1 00:00:00");
    time1 = time1.getTime();
    time2 = time2.getTime();
    var diff=time2-time1;
    var d=diff/(1000*60*60*24);
    d=Math.floor(d);
    diff=diff-1000*60*60*24*d;
    var h=diff/(1000*60*60);
    h=Math.floor(h);
    diff=diff-1000*60*60*h;
    var m=diff/(1000*60);
    m=Math.floor(m);
    diff=diff-1000*60*m;
    var s=Math.floor(diff/1000);
    var arr=[parseInt(d/10),d%10,parseInt(h/10),h%10,parseInt(m/10),m%10,parseInt(s/10),s%10];
    for(i=0;i<arr.length;i++){
        imgs[i].src="./images/"+arr[i]+".png"
    }
}
getTime();
setInterval(getTime,1000)
//回到顶部
    //是否隐藏
// var btn=document.getElementById('btn');
// window.onscroll=function(){
//     if(scroll().top==0){
//         btn.style.display='none';
//     }else{
//         btn.style.display='block';
//     }
// }
    //点击事件
// btn.onclick=function(){
//     document.documentElement.scrollTop=document.body.scrollTop=0;
// }    


