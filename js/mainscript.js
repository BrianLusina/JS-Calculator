$(document).ready(function(){
	/*Obtain all JS calculator buttons and store in variables
	*/
	
	/*button containers*/
	var buttonContainer = $('.button-container');
	var clearButton = $('.clear-button');
	var equalsContainer = $('.eq-container');
	
	//calculator display
	var calcDisplay = $('#calc-display');
	
	//clear buttons
	var acButton = $('.ac-button'), 
		cButton = $('.cancel-btn');
	
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
	/*operator symbols*/
	var operators = ['+','-','*','/'];
	var decimalAdded = false;
	var fontSize = 40;
	var brackets = 0;

	/*equals button*/
	var equalsBtn = $('#equals-btn');
	
/*Round the number to five*/
  function roundToFive(num) {    
    return +(Math.round(num + "e+5")  + "e-5");
  }
  calcDisplay.html('');
	
  $('.button-container').on('click',function(e){
	  console.log(calcDisplay[0].offsetWidth<calcDisplay[0].scrollWidth);
    if(calcDisplay[0].offsetWidth < calcDisplay[0].scrollWidth){
      fontSize = fontSize <= 10 ? 10 : fontSize/1.3;
      calcDisplay.css('font-size',fontSize+'px');
    }
    var btnValue = e.target.innerText;
    var $screen = $('#calc-display');
    var screenHtml = $screen.html();
    var screenLastChar = screenHtml[screenHtml.length-1];
    if(btnValue === 'AC'){
      $('.screen').css('font-size','60px');
      fontSize= 40;
      $screen.html('');
      decimalAdded = false;
      brackets = 0;
    }else if(btnValue === 'C'){
      if(screenLastChar === '.'){
        decimalAdded = false;
      }
      if(screenLastChar === '('){
        brackets -= 1;
      }
      if(screenLastChar === ')'){
        brackets += 1;
      }
      if(screenHtml === 'Infinity' || screenHtml === 'NaN' || screenHtml === '-Infinity'){
        $screen.html('');  
      }else{
        screenHtml = screenHtml.replace(/.$/,'');
        $screen.html(screenHtml);  
      }
      
    }else if(btnValue === '='){
      if(brackets){
        $('.error').css('opacity','1');
        setTimeout(function(){
          $('.error').css('opacity','0');
        },1000)
      }
      if(~operators.indexOf(screenLastChar)){
        screenHtml = screenHtml.replace(/.$/,'');
      }
      
        var answer = eval(screenHtml);
        if(answer !== Infinity){
          answer = roundToFive(answer);
        }
        $('.screen').css('font-size','40px');
        fontSize=40;
        if(Number.isNaN(answer)){
          $screen.html(answer+'');  
        }else{
          $screen.html(answer);  
        }
        answer = answer+'';
        if(~answer.indexOf('.')){
          decimalAdded = true;
        }else{
          decimalAdded = false;
        }
    }else if(~operators.indexOf(btnValue)){
      if(screenHtml && !~operators.indexOf(screenLastChar)){
        $screen.html(screenHtml+btnValue);
      }
      if(screenHtml && ~operators.indexOf(screenLastChar)){
        $screen.html(screenHtml.replace(/.$/,btnValue));
      }
      if(!screenHtml && btnValue === '-'){
        $screen.html(btnValue);
      }
      decimalAdded = false;
    }else if(btnValue === '.'){
      if(!decimalAdded){
        $screen.html(screenHtml+btnValue);
        decimalAdded = true;
      }
    }else if(btnValue === '('){
      if(~operators.indexOf(screenLastChar) || !screenHtml){
        $screen.html(screenHtml+btnValue);
        brackets += 1;  
      }else{
       $screen.html(screenHtml); 
      }
    }else if(btnValue === ')'){
      if(screenLastChar === '(' || !brackets || !screenHtml){
       $screen.html(screenHtml);
      }else{
       $screen.html(screenHtml+btnValue);
       brackets -= 1; 
      }
    }else{
        if(screenHtml === 'Infinity') $screen.html(btnValue);
        else $screen.html(screenHtml+btnValue);
    }
  });
});