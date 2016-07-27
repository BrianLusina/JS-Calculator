$(document).ready(function(){
	/*Obtain all JS calculator buttons and store in variables
	*/
	
	/*button containers*/
	var buttonContainer = $('.button-container');
	var clearButton = $('.clear-button');
	var equalsContainer = $('.eq-container');
	
	//calculator display
	var calcDisplay = $('#calc-display p');
	
	//clear buttons
	var acButton = $('#ac-btn'), 
		cButton = $('#cancel-btn');
	
	//bracket buttons
	var lftBracketbtn = $('#left-bracket'),
		rghtBracketbtn = $('#right-bracket-btn');
		
	//number buttons
	var sevBtn = $('#sev-btn'), eghtBtn = $('#eight-btn'), nineBtn = $('#nine-btn'), fourBtn = $('#four-btn'), fiveBtn = $('#five-btn'), sixBtn = $('#six-btn'), oneBtn = $('#one-btn'), twoBtn = $('#two-btn'), threeBtn = ('#three-btn'), periodBtn = $('#period-btn'), zeroBtn = $('#zero-btn'), doubleZero = $('#double-zero-btn');
	
	//operator buttons
	var operators = $('.operator-button'),
		plusBtn = $('#plus-btn'),
		minusBtn = $('#minu-btn'),
		multBtn = $('#mult-btn'),
		divBtn = $('#div-btn');
	
	/*equals button*/
	var equalsBtn = $('#equals-btn');
	
	/*record click events from button containers
	store value in variable and display in calc display
	*/
	buttonContainer.on("click", function(){
		//save this instance
		var thisBtn = $(this);
		var currVal = $(this).find('button').val();
		
		console.log(currVal);
		calcDisplay.append("<span>" + currVal + "</span>");
	});
	
	//configure AC button to clear display	
	acButton.on('click', function(){
	   calcDisplay.empty();		
	});
	
	 //remove last child input from display		
	cButton.on('click', function(){
		$("#calc-display p span:last-child").remove(); 
	});	
	
});