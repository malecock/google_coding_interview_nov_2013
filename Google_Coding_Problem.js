
//PROBLEM: Write function to check if equation is valid expression (balanced)  
//SAMPLE DATA: 1+2; 1(+2; (1+2)); 1+2(10)10)
//SOLUTION 1:

<script>
function checkBalanced(expression){
	for (i=0, x=0, y=0; i < expression.length; i++){
		if( expression.charAt(i) == "(" ) {
			var countOpen = x++;
		}
		else if( expression.charAt(i) == ")")
			var countClosed = y++;
		}
		if(countOpen == countClosed){
			return "true";
		}
}
</script>

//SOLUTION 2:

<script>
function evalExpression(expression){
	try{
		if(eval(expression)) {return "true";} else { return "false"; }
	}
	catch(err){ return "false";	}
} 
</script>

