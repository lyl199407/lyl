/*菜单栏*/
var nav=document.getElementById("nav");
var subm=document.getElementById("subm");
var g=0;
var h=355;
nav.onmouseover=function(){
  subm.style.display="block";
  subm.style.height="355px";
  subm.style.transition="all 1s linear";
  setTimeout(function(){
    subm.style.opacity=1;
  },300)
};

subm.onmouseleave=function(){
  subm.style.height="0px";
  subm.style.transition="all 1s linear";
  setTimeout(function(){
    subm.style.opacity=0;
    subm.style.transition="all 1s linear";
  },300)
};

/*选项卡按钮*/
function btns1(){
  c1.style.lineHeight="30px";
  c1.style.color="#ffd118";
  c1.style.background="url(./images/news-tab_hover.png) no-repeat";
  c2.style.lineHeight="28px";
  c2.style.color="#8c9ca9";
  c2.style.background="url(./images/news-tab.png) no-repeat";
  c3.style.lineHeight="28px";
  c3.style.color="#8c9ca9";
  c3.style.background="url(./images/news-tab.png) no-repeat";
  c4.style.lineHeight="28px";
  c4.style.color="#8c9ca9";
  c4.style.background="url(./images/news-tab.png) no-repeat";
  e1.style.display="block";
  e2.style.display="none";
  e3.style.display="none";
  e4.style.display="none";
}
function btns2(){
  c2.style.lineHeight="30px";
  c2.style.color="#ffd118";
  c2.style.background="url(./images/news-tab_hover.png) no-repeat";
  c1.style.lineHeight="28px";
  c1.style.color="#8c9ca9";
  c1.style.background="url(./images/news-tab.png) no-repeat";
  c3.style.lineHeight="28px";
  c3.style.color="#8c9ca9";
  c3.style.background="url(./images/news-tab.png) no-repeat";
  c4.style.lineHeight="28px";
  c4.style.color="#8c9ca9";
  c4.style.background="url(./images/news-tab.png) no-repeat";
  e2.style.display="block";
  e1.style.display="none";
  e3.style.display="none";
  e4.style.display="none";
}
function btns3(){
  c3.style.lineHeight="30px";
  c3.style.color="#ffd118";
  c3.style.background="url(./images/news-tab_hover.png) no-repeat";
  c2.style.lineHeight="28px";
  c2.style.color="#8c9ca9";
  c2.style.background="url(./images/news-tab.png) no-repeat";
  c1.style.lineHeight="28px";
  c1.style.color="#8c9ca9";
  c1.style.background="url(./images/news-tab.png) no-repeat";
  c4.style.lineHeight="28px";
  c4.style.color="#8c9ca9";
  c4.style.background="url(./images/news-tab.png) no-repeat";
  e3.style.display="block";
  e2.style.display="none";
  e1.style.display="none";
  e4.style.display="none";
}
function btns4(){
  c4.style.lineHeight="30px";
  c4.style.color="#ffd118";
  c4.style.background="url(./images/news-tab_hover.png) no-repeat";
  c2.style.lineHeight="28px";
  c2.style.color="#8c9ca9";
  c2.style.background="url(./images/news-tab.png) no-repeat";
  c3.style.lineHeight="28px";
  c3.style.color="#8c9ca9";
  c3.style.background="url(./images/news-tab.png) no-repeat";
  c1.style.lineHeight="28px";
  c1.style.color="#8c9ca9";
  c1.style.background="url(./images/news-tab.png) no-repeat";
  e4.style.display="block";
  e2.style.display="none";
  e3.style.display="none";
  e1.style.display="none";
}

/*轮播图*/
var index=0;
//获取最外面的div
var box = document.getElementById("box");
//console.log(box);
//获取相框
var inner = box.children[0];
//获取去相框的宽度
var imgWidth = inner.offsetWidth;
// 获取ul
var ulObj = inner.children[0];
//获取ul中所有的li
var list = ulObj.children;
//获取ol
var olObj = inner.children[1];
//获取焦点
//var arr = my$("arr");
//获取左按钮
var left = document.getElementById("left");
//获取右按钮
var right = document.getElementById("right");
//创建小按钮-----根据ul中li的个数
for (var i = 0; i < list.length; i++) {
  var liObjs = document.createElement("li");
  olObj.appendChild(liObjs);
  //liObjs.innerHTML = (i + 1);
  //在ol中每个li中增加自定义属性，添加索引值
  liObjs.setAttribute("index", i);
  //注册鼠标进入事件
  liObjs.onmouseover = function () {
    //先干掉所有背景颜色
    for (var j = 0; j < olObj.children.length; j++) {
      olObj.children[j].removeAttribute("class");
    }
    //设置当前鼠标进来的类样式
    this.className = "current";
    //获取ol中li的索引值
    index = this.getAttribute("index");
    //移动ul
    animate(ulObj, -index * imgWidth); //移动动画函数
  };
}
//设置第一个ol中li的背景颜色
olObj.children[0].className = "current";
//克隆ol中第一个li放到最后一个
ulObj.appendChild(ulObj.children[0].cloneNode(true));

var timeId=setInterval(clickHandle,3000);

box.onmouseover=function(){
  //arr.style.display="block";
  clearInterval(timeId);
};
//点击右边按钮
right.onclick=clickHandle;
function clickHandle() {
  if (index==ulObj.children.length-1){
    ulObj.style.left=0+"px";
    index=0;
  }
  index++;

  animate(ulObj,-index*imgWidth);
  if (index==list.length-1){
    olObj.children[0].className="current";
    olObj.children[olObj.children.length-1].className="";
  }else {
    for (var i=0;i<olObj.children.length;i++){
      olObj.children[i].className="";
    }
    olObj.children[index].className="current";
  }
}
//点击左边按钮
left.onclick=function () {
  if (index==0){
    index=list.length-1;
    ulObj.style.left=-index*imgWidth+"px";
  }
  index--;
  animate(ulObj,-index*imgWidth);
  for (var i=0;i<olObj.children.length;i++){
    olObj.children[i].className="";
  }
  olObj.children[index].className="current";
};

box.onmouseout=function(){
  //arr.style.display="block";
  timeId=setInterval(clickHandle,3000);
};

// 设置一个元素，移动到指定位置
function animate(element, target) {
  clearInterval(element.timeId);
  element.timeId = setInterval(function () {
    var current = element.offsetLeft;
    var step = 9;
    step = current > target ? -step : step;
    current += step;
    if (Math.abs(target - current) > Math.abs(step)) {
      element.style.left = current + "px";
    } else {
      clearInterval(element.timeId);
      element.style.left = target + "px";
    }
  }, 10);
}
/*　function get$(id) {
 　　 return document.getElementById(id);
 　　　　}*/

//官方微信微博
function qaq(){
  ewm1.style.opacity="1";
  ewm1.style.transition="opacity 1s ease";
  clea1.style.color="#fff";
  cle.style.background="url(./images/weixin-hd.png) no-repeat 0 0";
  ewm2.style.opacity="0";
  clea2.style.color="#a4a4a4";
}
function qaq1(){
  ewm2.style.opacity="1";
  ewm2.style.transition="opacity 1s ease";
  clea2.style.color="#fff";
  cle.style.background="url(./images/weixin-hd.png) no-repeat 0 -48px";
  ewm1.style.opacity="0";
  clea1.style.color="#a4a4a4";
}

/*新品展示*/
var c=0;
var left1=document.getElementById("left1");
var right1=document.getElementById("right1");
var inner1=document.getElementById("temp1");
var ul1=inner1.children[0];

right1.onclick=function(){
  c++;
  if(c<=9){
    ul1.style.left=(c+1)*-138+"px";
    ul1.style.transition="left .5s linear";
  }
  if(c==10){
    ul1.style.left=(c+1)*-138+"px";
    ul1.style.transition="left .5s linear";
    setTimeout(function(){
      ul1.style.left=-138+"px";
      ul1.style.transition="left 0s linear";
    },500);
    c=0;
  }
};

left1.onclick=function(){
  c--;
  if(c==-1){
    ul1.style.left=-138+"px";
    ul1.style.transition="left .5s linear";
    c=9
  }
  if(c==9){
    ul1.style.left=0+"px";
    ul1.style.transition="left .5s linear";
    setTimeout(function(){
      ul1.style.left=-1380+"px";
      ul1.style.transition="left 0s linear";
    },500);
  }
  if(c<=8&&c>=0){
    ul1.style.left=-(c+1)*138+"px";
    ul1.style.transition="left .5s linear";
  }
};



//轮播图开始
function my$(id) {
  return document.getElementById(id);
}
 
//获取各元素，方便操作
var box1=my$("bd1");
var inner2=box1.children[0];
var ulObj2=inner2.children[0];
var list2=ulObj2.children;
var olObj2=inner2.children[1];
//var arr=my$("arr");
var imgWidth2=inner2.offsetWidth;
var right2=my$("right2");
var left2=my$("left2");
var pic1=0;

//根据li个数，创建小按钮
for(var i=0;i<list2.length;i++){
  var liObj2=document.createElement("li");
  olObj2.appendChild(liObj2);
  //liObj2.innerText=(i+1);
  liObj2.setAttribute("index",i);
 
  //为按钮注册mouseover事件
  liObj2.onmouseover=function(){
  
	//先清除所有按钮的样式
  for (var j=0;j<olObj2.children.length;j++){
    olObj2.children[j].removeAttribute("class");
  }
  this.className="current";
  pic1=this.getAttribute("index");
  animate(ulObj2,-pic1*imgWidth2);
  }
}
 
//设置ol中第一个li有背景颜色
olObj2.children[0].className ="current";

//克隆一个ul中第一个li,加入到ul中的最后=====克隆
ulObj2.appendChild(ulObj2.children[0].cloneNode(true));
var timeId1=setInterval(onmouseclickHandle1,3000);

//左右焦点实现点击切换图片功能
box1.onmouseover=function(){
  //arr.style.display="block";
  clearInterval(timeId1);
};
box1.onmouseout=function(){
  //arr.style.display="none";
  timeId1=setInterval(onmouseclickHandle1,3000);
};
 
right2.onclick=onmouseclickHandle1;
  function onmouseclickHandle1(){

		//如果pic的值是5,恰巧是ul中li的个数-1的值,此时页面显示第六个图片,而用户会认为这是第一个图,
		//所以,如果用户再次点击按钮,用户应该看到第二个图片
		if (pic1 == list2.length - 1) {
		//如何从第6个图,跳转到第一个图
		pic1 = 0;//先设置pic=0
		ulObj2.style.left = 0 + "px";//把ul的位置还原成开始的默认位置
		}
    pic1++;//立刻设置pic加1,那么此时用户就会看到第二个图片了
    animate(ulObj2, -pic1 * imgWidth2);//pic从0的值加1之后,pic的值是1,然后ul移动出去一个图片
    
		//如果pic==5说明,此时显示第6个图(内容是第一张图片),第一个小按钮有颜色,
    if (pic1 == list2.length - 1) {
      
			//第五个按钮颜色干掉
      olObj2.children[olObj2.children.length - 1].className = "";
      
			//第一个按钮颜色设置上
      olObj2.children[0].className = "current";
        }else{
          //干掉所有的小按钮的背景颜色
          for (var i = 0; i < olObj2.children.length; i++) {
            olObj2.children[i].removeAttribute("class");
          }
          olObj2.children[pic1].className = "current";
        }
    }
left2.onclick=function(){
  if (pic1==0){
    pic1=list2.length-1;
    ulObj2.style.left=-pic1*imgWidth2+"px";
  }
  pic1--;
  animate(ulObj2,-pic1*imgWidth2);
  for (var i = 0; i < olObj2.children.length; i++) {
    olObj2.children[i].removeAttribute("class");
  }
  //当前的pic索引对应的按钮设置颜色
  olObj2.children[pic1].className = "current";
};
 
//设置任意的一个元素,移动到指定的目标位置
function animate(element, target){
  clearInterval(element.timeId);
  //定时器的id值存储到对象的一个属性中
  element.timeId = setInterval(function(){
  //获取元素的当前的位置,数字类型
  var current = element.offsetLeft;
  //每次移动的距离
  var step = 20;
  step = current < target ? step : -step;
  //当前移动到位置
  current += step;
  if (Math.abs(current - target) > Math.abs(step)) {
     element.style.left = current + "px";
  }else{
    //清理定时器
    clearInterval(element.timeId);
    //直接到达目标
    element.style.left = target + "px";
      }
  },20);
}

//冒险影音
var left3=document.getElementById("left3");
var right3=document.getElementById("right3");
var yy=0;
right3.onclick=function(){
  yy++;
  if(yy==1){
    mxyy.style.left="-1060px";
    mxyy.style.transition="left .5s linear";
  }
  if(yy==2){
    mxyy.style.left="-1590px";
    mxyy.style.transition="left .5s linear";
    setTimeout(function(){
      mxyy.style.left="-530px";
      mxyy.style.transition="left 0s linear";
    },500);
    yy=0;
  }
};

left3.onclick=function(){
  yy++;
  if(yy==1){
    mxyy.style.left=0;
    mxyy.style.transition="left .5s linear";

    setTimeout(function(){
      mxyy.style.left="-1060px";
      mxyy.style.transition="left 0s linear";
    },500);
  }
  if(yy==2){
    mxyy.style.left="-530px";
    mxyy.style.transition="left .5s linear";
    yy=0;
  }
};
//底部动画
var hi=0;
var cbg=document.getElementById("copybg");
function ani(){
  hi++;
  cbg.style.backgroundPosition=-hi+"px 50%";
}

var timerz=setInterval(function(){
  ani();
},30);
cbg.onmouseover=function(){
  cbg.style.cursor="pointer";
  clearInterval(timerz);
};

cbg.onmouseleave=function(){
  timerz=setInterval(function(){
    ani();
  },30);
};
