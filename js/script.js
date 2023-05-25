clickconvert.addEventListener('click', function(){
var speech = true;
window.SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
 recognition.continuous = true;
recognition.interimResults = true;

recognition.addEventListener('result',e=>{
		console.log(e);
const transcript = Array.from(e.results)
.map(result =>result[0])
.map(result => result.transcript)
convert_text.innerHTML = transcript;
document.getElementById("abc").innerHTML=transcript;
})

const timeout= setTimeout(clearspeed,5000)
function clearspeed(){
	var a=document.getElementById("convert_text").value;
var speed=document.getElementById("abc").innerHTML;
if(a===""){}
else{
	console.log(a);
	abc.innerHTML = "";
	convert_text.innerHTML="";
	}
}

if(speech == true){
recognition.start();
}
})
