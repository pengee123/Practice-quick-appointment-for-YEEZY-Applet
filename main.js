// 获取页面元素
var footer = document.querySelector(".footer")
var checksize = document.querySelector(".checksize")
var waitfor = document.querySelector(".waitfor")
var lis = document.querySelectorAll("li")
var index = 0
var t = 3
var tt = "0" + t 

window.onload = function() {
  waitfor.innerHTML = "距离开始预约还有00:00:" +tt
  waitfor.style.backgroundColor = "#999999"
  waitfor.style.pointerEvents = "none"
}

var fun = function() {
  t--
  var tt = "0" + t
  waitfor.innerHTML = "距离开始预约还有00:00:" + tt

  if( t <= 0 ) {
    clearInterval(inner)
    waitfor.innerHTML = "正在预约"
  waitfor.style.backgroundColor = "black"
  waitfor.style.pointerEvents = "auto"


  }
}
var inner = setInterval("fun()",1000)


waitfor.addEventListener('click',function() {
  checksize.style.display= "block"
  waitfor.innerHTML = "提交"
  this.addEventListener('click',function() {
    if(index !== 1) {
      return
    }
    window.location.href = "check.html"
  })
})

for(var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click',function() {
    for(var i = 0; i<lis.length; i++) {
      lis[i].className = ""
    }
    this.className = "active"
    index = 1
  })
}