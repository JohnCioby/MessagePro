//Three different arrays
const animal = ['Tiger','Wolf','Lion','Cheetah','Bear','Snake','Elephant','Eagle','Shark','Whale'];
const number = ['3','7','13','27','5','9','22','32','17','11'];
const advice = ["Be careful!","Watch your step!","Trust nobody!","Don't look back!","Listen more!","Drive slowly!",
"Watchout for birds!","Don't take no for an answer!","Believe in yourself!","Don't forget to leave a tip!"];

//Function with a for loop iterating over the animal arrayreturning a random element
const randomAnimal = arr => {
	 for(word in arr){
	 word = Math.floor(Math.random() * arr.length)
 }
	return arr[word]; 
};

//Function with a for loop iterating over the number array returning a random element
const randomNumber = arr =>{
	for(word in arr){
	  word = Math.floor(Math.random() * arr.length);
	}
	return arr[word];
};

//Function with a for loop iterating over the advice array returning a random element
const randomAdvice = arr =>{
	for(word in arr){
		word = Math.floor(Math.random() * arr.length);
	}
	return arr[word];
};

//Function outputting the results of the three functions above
const outputMessage = ()=>{
	 console.log(`Your spirit animal is: ${randomAnimal(animal)} 
Your lucky number is: ${randomNumber(number)}
Daily advice: ${randomAdvice(advice)}`);
	
};
outputMessage();
