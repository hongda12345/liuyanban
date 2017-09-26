/*
* @Author: 宏达
* @Date:   2017-09-25 21:27:30
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-26 21:10:45
*/
window.addEventListener('load',function(){
	let submit=document.querySelector('.submit');
	submit.onclick=function(){
		let massage=document.querySelector('#massage')
		let msgcon=document.querySelector('div.msgcon');
		let yonghu=document.querySelector('#yonghu');
		let lis=document.createElement('li');
		let xm=yonghu.value;
		let ly=massage.value;
		lis.innerHTML=`
			<img src="img/qianqian.jpg" alt="">
			<div class="middle">
				<div class="xm">${xm}</div>
				<div class="ly">${ly}</div>
			</div>`
		msgcon.prepend(lis);
		yonghu.value='';
		massage.value='';
        msgcon.onmouseover=function(e){
        let element=e.target
        if(element.nodeName =='LI'){
          element.onmouseover=function(e){
            if(e){
              element.style.background='#ccc';
            }
          } 
        }
      } 
       msgcon.onmouseout=function(e){
        let element=e.target
        if(element.nodeName =='LI'){
          element.onmouseout=function(e){
            if(e){
              element.style.background='';
            }
          } 
        }
      } 
		
	}
})