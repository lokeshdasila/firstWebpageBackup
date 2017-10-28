var currentOperation,operand1,operand2,result;
	
const buttonPressed=(num)=>{
	var changeField=document.querySelector("#resultField");
	if (currentOperation&&(!operand2)) 
	{
		changeField.innerHTML=num;
	}
	else
	{
		changeField.innerHTML+=num;

	}
	if (currentOperation) 
	{
		operand2=parseInt(changeField.innerHTML);
	}
}
const clearAll=()=>{
	var changeField=document.querySelector("#resultField");
	changeField.innerHTML="";
	currentOperation=null;
	operand2=null;
	operand1=null;
}
const buttonOp=(operation)=>{
	var changeField=document.querySelector("#resultField");
	if(operand2!==null)
	{
		operand2=parseInt(changeField.innerHTML);
		switch(currentOperation)
		{
			case '+':
				result=operand1+operand2;
				changeField.innerHTML=result;
				break;
			case '-':
				result=operand1-operand2;
				changeField.innerHTML=result;
				break;
			case '*':
				result=operand1*operand2;
				changeField.innerHTML=result;
				break;
			case '/':
				result=operand1/operand2;
				changeField.innerHTML=result;
				break;

		}
		operand1=result;
		operand2=null;
	}
	else
	{
		operand1=parseInt(changeField.innerHTML);
	}
	currentOperation=operation;
	changeField.innerHTML=operand1;
}
const buttonEqual=()=>{
	var changeField=document.querySelector("#resultField");
	console.log(parseInt(changeField.innerHTML));
	operand2=parseInt(changeField.innerHTML);
	switch(currentOperation)
		{
			case '+':
				result=operand1+operand2;
				changeField.innerHTML=result;
				break;
			case '-':
				result=operand1-operand2;
				changeField.innerHTML=result;
				break;
			case '*':
				result=operand1*operand2;
				changeField.innerHTML=result;
				break;
			case '/':
				result=operand1/operand2;
				changeField.innerHTML=result;
				break;

		}

	//changeField.innerHTML=result;
	operand1=result;
	operand2=null;
	result=null;
	currentOperation=null;

}
