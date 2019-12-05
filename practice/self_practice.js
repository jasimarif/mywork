var array=[];
var render={
	display:()=>{	
		console.log(array);
		document.getElementById("myInput").value='';
		array.forEach(func);
		function func(item,index){
		  document.getElementById("content").innerHTML +=  item   + "<br>" ; 

}}
	
}

var events={
	log: () =>{
	let input=document.getElementById("myInput").value;
	array.push(input);
	render.display();
	
},
	delete:()=>{
		alert("jasim");
	}	
}
document.querySelector('#delete').addEventListener('click',events.delete);
document.querySelector('#addPerson').addEventListener('click',events.log);



''