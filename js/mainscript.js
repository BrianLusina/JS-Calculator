$(document).ready(function(){
	/*Obtain all JS calculator buttons and store in variables*/
	
	//calculator display
	var calcDisplay = $('#calc-display p');
	//buttons
	var acButton = $('#ac-btn'), cButton = $('#cancel-btn'), lftBracketbtn = $('#left-bracket'), rghtBracketbtn = $('#right-bracket-btn'), sevBtn = $('#sev-btn'), eghtBtn = $('#eight-btn'), nineBtn = $('#nine-btn'), plusBtn = $('#plus-btn'), fourBtn = $('#four-btn'), fiveBtn = $('#five-btn'), sixBtn = $('#six-btn'), minusBtn = $('#minu-btn'), oneBtn = $('#one-btn'), twoBtn = $('#two-btn'), threeBtn = ('#three-btn'), multBtn = $('#mult-btn'), periodBtn = $('#period-btn'), zeroBtn = $('#zero-btn'), doubleZero = $('#double-zero-btn'), divBtn = $('#div-btn');
	
	/*equals button*/
	var equalsBtn = $('#equals-btn');
	
	var buttonContainer = $('.button-container');
	var clearButton = $('.clear-button');
	var equalsContainer = $('.eq-container');
	
	/*record click events from button containers
	store value in variable and display in calc display
	*/
	buttonContainer.on("click", function(){
		//save this instance
		var thisBtn = $(this);
		var currVal = $(this).find('button').val();
		
		console.log(currVal);
		calcDisplay.append("<span>" + currVal + "-</span>");
		
		/*check if operator buttons are clicked, + / * -
		save the previous input as one whole number
		*/
		if(currVal == "+"){
			
		}
	});
	
	//configure AC button to clear display
	acButton.on('click', function(){
		calcDisplay.empty();
	});
	
	//remove last child input from display
	cButton.on('click', function(){
		$("#calc-display p:last-child").empty();
	});
	
});