var buttons=document.getElementsByClassName('button');
var opr1=0;
var opr2=null;
var result;
var oper=null;
var input=document.getElementById('input_box');

for(let i=0;i<buttons.length;i++){
	buttons[i].addEventListener('click',function(){
		var value=this.getAttribute('btn-value');
		if(value =='+'){
			oper='+';
			opr1=parseFloat(input.textContent);
			input.innerText="";
		}
		else if(value =='-'){
			oper='-';
			opr1=parseFloat(input.textContent);
			input.innerText="";
		}
		else if(value =='*'){
			oper='*';
			opr1=parseFloat(input.textContent);
			input.innerText="";
		}
		else if(value =='/'){
			oper='/';
			opr1=parseFloat(input.textContent);
			input.innerText="";
		}
		else if(value =='%'){
			opr1=parseFloat(input.textContent);
			input.innerText=opr1/100;
		}
		else if(value =='AC'){
			input.innerText="";
		}
		else if(value=="sqr"){
			opr1=parseFloat(input.textContent);
			input.innerText=opr1*opr1;
		}
		else if(value=='='){
			opr2=parseFloat(input.textContent);
			//input.innerText="";
			result=eval(opr1+' '+oper+' '+opr2);
			if(oper=='/' && opr2=='0'){
				result="error";
			}
			input.innerText=result;
		}
		else{
			input.innerText +=value;
		}
	})
}