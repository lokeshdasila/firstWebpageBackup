var currentOperation,result;	
	
const buttonPressed=(num)=>{
	var changeField=document.querySelector("#resultField");
	var changeOp1=document.querySelector("#op1");
	var changeOp2=document.querySelector("#op2");
	var operatorField=document.querySelector("#operator");

	if ((!operatorField.innerHTML)) 
	{
		changeOp1.innerHTML+=num;
	}
	else if (changeField.innerHTML) 
	{
		changeOp1.innerHTML=num;
		changeField.innerHTML='';
		changeOp2.innerHTML='';
		operatorField.innerHTML='';
	}
	else
	{
		changeOp2.innerHTML+=num;

	}
}
const clearAll=()=>{
	var changeField=document.querySelector("#resultField");
	var changeOp1=document.querySelector("#op1");
	var changeOp2=document.querySelector("#op2");
	var operatorField=document.querySelector("#operator");
	changeField.innerHTML="";
	changeOp1.innerHTML="";
	changeOp2.innerHTML="";
	operatorField.innerHTML="";
	
	currentOperation='';
	//changeOp2.innerHTML='';
	//changeOp1.innerHTML='';changeOp1.innerHTML
}
const buttonOp=(operation)=>{
	var changeField=document.querySelector("#resultField");
	var changeOp1=document.querySelector("#op1");
	var changeOp2=document.querySelector("#op2");
	var operatorField=document.querySelector("#operator");
	console.log(changeOp1.innerHTML);
	console.log((changeOp2.innerHTML==''));
	if(changeOp2.innerHTML!=='')
	{
		//changeOp2.innerHTML=parseFloat(changeField.innerHTML);
		if (changeOp1.innerHTML==='') {
			changeOp1.innerHTML=0;
		}
		switch(operatorField.innerHTML)
		{
			case '+':
				result=(parseFloat(changeOp1.innerHTML))+(parseFloat(changeOp2.innerHTML));
				break;
			case '-':
				result=(parseFloat(changeOp1.innerHTML))-(parseFloat(changeOp2.innerHTML));
				break;
			case '*':
				result=(parseFloat(changeOp1.innerHTML))*(parseFloat(changeOp2.innerHTML));
				break;
			case '/':
				result=(parseFloat(changeOp1.innerHTML))/(parseFloat(changeOp2.innerHTML));
				break;

		}
		changeOp1.innerHTML=result;
		changeOp2.innerHTML='';
		changeField.innerHTML='';
	}
	console.log(changeOp1.innerHTML);
	
	operatorField.innerHTML=operation;
}
const buttonEqual=()=>{
	var changeField=document.querySelector("#resultField");
	var changeOp1=document.querySelector("#op1");
	var changeOp2=document.querySelector("#op2");
	var operatorField=document.querySelector("#operator");

	console.log(parseFloat(changeField.innerHTML));
	//changeOp2.innerHTML=parseFloat(changeField.innerHTML);
	switch(operatorField.innerHTML)
	{
		case '+':
			result=(parseFloat(changeOp1.innerHTML))+(parseFloat(changeOp2.innerHTML));
			break;
		case '-':
			result=(parseFloat(changeOp1.innerHTML))-(parseFloat(changeOp2.innerHTML));
			break;
		case '*':
			result=(parseFloat(changeOp1.innerHTML))*(parseFloat(changeOp2.innerHTML));
			break;
		case '/':
			result=(parseFloat(changeOp1.innerHTML))/(parseFloat(changeOp2.innerHTML));
			break;
	}

	//changeField.innerHTML=result;
	changeField.innerHTML=result;
	//changeOp2.innerHTML='';
	//result='';
	//currentOperation='';

}
