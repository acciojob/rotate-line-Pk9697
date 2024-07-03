//your JS code here. If required.
const line=document.getElementById('line')
let deg=0
 
line.style.transition="all 0.02s"
setInterval(()=>{
	deg+=2
	line.style.transform=`rotate(${deg}deg)`
},20)