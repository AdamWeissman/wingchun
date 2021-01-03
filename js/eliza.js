var responses = {
	"NOTFOUND" : {
				 "weight" : 0,
				 "responses" : [
						"Do you understand what the code you have does?",
						"Do you understand your current code?",
						"I'm not sure I understand you fully.",
						"Can you elaborate on *?",
						"What do you want to do?",
						"Is the obstacle one of syntax or is it conceptual?",
						"Is this a matter of syntax?",
						"Let's change focus a bit... Tell me about what you're trying to do.",
						"If * isn't the problem, might it be something else?",
						"Tell me more about *?"
					]
				},
	"sorry" : {
				 "weight" : 1,
				 "responses" : ["Please don't apologize.", "Apologies are not necessary.", "Apologies are not required."]},
	"always" : {
				 "weight" : 1,
				 "responses" : ["Can you think of a specific example?"]},
	"because" : {
				 "weight" : 6,
				 "responses" : ["Is that the real reason?", "Do you mean because \"*\"", "What other causes might there be?", "What else are we missing?"]},
	"maybe" : {
				 "weight" : 1,
				 "responses" : ["You don't seem very certain.", "Is there a way you can become more 'sure?'"]},
	"i think" : {
				 "weight" : 2,
				 "responses" : ["Do you really think so?", "What else can you think of?", "If that weren't correct, what else could it be?", "But, might there be another way?"]},
	"you" : {
				 "weight" : 1,
				 "responses" : ["We were discussing you, not me.","Why do you say that about me?","Why do you care whether I \"*\"?", "I'm here for you."]},
	"yes" : {
				 "weight" : 1,
				 "responses" : ["Why do you think so?","You seem quite positive.","Nice, let's move forward from there."]
				},
	"no" : {
				 "weight" : 1,
				 "responses" : ["Why not?","Are you sure?","What might be another way?"]},
	"i am" : {
				 "weight" : 1,
				 "responses" : ["I am sorry to hear you are *.","How long have you been *?","Is that typical?","Do you enjoy being *?","Be mindful of your mindset."]},
	"i feel" : {
				 "weight" : 4,
				 "responses" : ["Tell me more about such feelings.","Is feeling * helpful?","Does feeling * bring you closer to the goal?","Why do you feel that way?"]},
	"code" : {
				 "weight" : 16,
				 "responses" : ["Tell me more about your code.","Is there some value you can call, combine, set or assign?","Might you iterate, track, or create some variable?"]},
	"compare" : {
				 "weight" : 16,
				 "responses" : ["Tell me more about the code.","What are you comparing? To what?","If you're going to be comparing values, might you need to track something as well?", "If you're comparing such and such values, is there anything you need to replace, or swap?"]},
	"combine" : {
				 "weight" : 16,
				 "responses" : ["Do you need to return some other value?","If you combine *, should you also be tracking it?","Do you then also need to compare or replace anything?", "Do you then need to create a new value?"]},
	"call" : {
				 "weight" : 16,
				 "responses" : ["In what scope does that make sense?","In what context would you do that?","Have you considered creating some variable to store the return?", "But what will you return?"]},
	"track" : {
				 "weight" : 16,
				 "responses" : ["If you're tracking *, do you need to do anything else?","When will you return what you track?","Do you need to swap, sort, set, return or replace anything while you're doing this?"]},
	"iterate" : {
				 "weight" : 16,
				 "responses" : ["What type of loop will you be using?","Can you do this recursively?","Are there any disadvantages to doing it this way?", "Is there a simpler approach?", "What's the easiest way to do this?", "What do you need to keep track of?", "What are your returns?"]},
	"create" : {
				 "weight" : 16,
				 "responses" : ["Is it necessary to create it, might you just swap or replace?","Do you need to set any values?","Do you foresee any flaws with this approach?", "What's the most optimal way to do this?", "What's the bad way to do this?"]},
	"assign" : {
				 "weight" : 16,
				 "responses" : ["Where will you get the value from?","Is that the only way?","Do you need to assign anything else?", "Should you be swapping values?"]},
	"sort" : {
				 "weight" : 16,
				 "responses" : ["Will you use a built-in??","Do you know the syntax?","Are there many ways to do this?"]},
	"swap" : {
				 "weight" : 16,
				 "responses" : ["What valuess are you tracking here?", "Do you know how you will code it?"]},
	"sample" : {
				 "weight" : 16,
				 "responses" : ["Will you be using a sliding window?","Will you be using pointers?","What can you do with it?"]},
	"hello" : {
				 "weight" : 1,
				 "responses" : ["Hi again! How is going?","How are you today? Any problems?"]},
	"return" : {
				 "weight" : 16,
				 "responses" : ["Are you pretty cognizant of the scope?","Will you pass by reference or value?"]},
	"replace" : {
				 "weight" : 16,
				 "responses" : ["Is it okay to do that?","What else might you do?", "Is this efficient?"]},
	"hi" : {
				 "weight" : 1,
				 "responses" : ["Hi again! How is going?","How are you today? Any problems?"]},
	"goodbye" : {
				 "weight" : 1,
				 "responses" : ["Goodbye.  Thank you for talking to me."]},
	"i need" : {
				 "weight" : 5,
				 "responses" : ["Why do you need *?","Would it really help you to get *?","Are you sure you need *?"],},
	"why don\'t you" : {
				 "weight" : 3,
				 "responses" : ["Do you really think I don't *?","Perhaps eventually I will *.","Do you really want me to *?"],},
	"why can\'t i" : {
				 "weight" : 3,
				 "responses" : ["Do you think you should be able to *?","If you could *, what would you do?","I don't know -- why can't you *?","Have you really tried?"],},
	"i can\'t" : {
				 "weight" : 4,
				 "responses" : ["How do you know you can't \"*\"?","Perhaps you could * if you tried.","What would it take for you to *?"]},
	"perhaps" : {
				 "weight" : 1,
				 "responses" : ["How do you know you can't \"*\"?","Perhaps you could * if you tried.","What would it take for you to *?"]},
	"remember" : {
				 "weight" : 5,
				 "responses" : ["Do you often think of *?","Does thinking of * bring anything else to mind","What else do you recollect?","Why do you recollect * just now?","What in the present situation reminds you of *?","What is the connection between me and *?"]},
	"do you remember" : {
				 "weight" : 6,
				 "responses" : ["Do you think I would forget?","Yes I do remember *."]},
	"if" : {
				 "weight" : 3,
				 "responses" : ["Do you think it\'s likely that *?","Do you wish that *?","What do you know about *?","Really, if *?"]},
	"name" : {
				 "weight" : 15,
				 "responses" : ["I am not interested in names.","I\'ve told you before, I do not care about names -- please continue."]},
	"another language" : {
				 "weight" : 1,
				 "responses" : ["I told you before, I don't understand languages that are not English."]},
	"computer" : {
				 "weight" : 12,
				 "responses" : ["Do computers worry you?","Why do you mention computers?","Could you expand on how computers and * are related?","What do you think machines have to do with your problem?","Don't you think computers can help people?","What about machines worrys you?","What do you think about machines?"]},
	"are you" : {
				 "weight" : 2,
				 "responses" : ["Why are you interested in whether I am * or not?","Would you prefer if I weren't *?","Perhaps I am * in your fantasies.","Do you sometimes think I am *?"]},
	"are" : {
				 "weight" : 1,
				 "responses" : ["Did you think they might not be *?","Would you like it if they were not *?","What if they were not *?","Possibly they are *."]},
	"your" : {
				 "weight" : 1,
				 "responses" : ["Why are you concerned over my *?","What about your own *?","Are you worried about someone else's *?","Really, my *?"]},
	"was i" : {
				 "weight" : 2,
				 "responses" : ["What if you were *?","Do you think you were *?","Were you *?","What would it mean if you were *?","What does * suggest to you?"]},
	"was you" : {
				 "weight" : 2,
				 "responses" : ["Would you like to believe I was *?","What suggests that I was *?","What do you think?"]},
	"i want" : {
				 "weight" : 1,
				 "responses" : ["What would it mean to you if you got it?","Why do you want it?","What if it didn't work?"]},
	"i wanted" : {
				 "weight" : 1,
				 "responses" : ["Did you achieve it or simply moved on?"]},
	"i aimed" : {
					"weight" : 1,
					"responses" : ["Did you achieve it, or did you miss??"]},
	"i tried" : {
						"weight" : 1,
						"responses" : ["What else did you try?"]},
	"i am frustrated" : {
				"weight" : 6,
				"responses" : ["Sorry to hear you are frustrated. We're only human", "Step back for a moment, clear your mind.", "What can we work on to become unfrustrated?"]
			},
	"i am confused" : {
				"weight" : 6,
				"responses" : ["Do any of these words seem like threads to unravel your confusion... \"compare, combine, call, track, set, assign, sort, swap, sample, return, iterate, create, return, replace\"?"]
			},
	"i am lost" : {
				"weight" : 6,
				"responses" : ["We'll sort it out.", "Being lost is the first place we must start in order find where we're going.", "What have you tried so far?"]
			},
	"i am stressed" : {
				"weight" : 6,
				"responses" : ["That's okay, we'll work together to overcome the obstacle.", "It's good to admit that, it'll make it easier to grow from there."]
			},
	"i need help" : {
				"weight" : 6,
				"responses" : ["Let's work together.", "The answer is within yourself, it's just a matter of finding it.", "What in particular do you need help on?", "Thank you for letting me know, tell me about the problem.", "Great! Tell me what you're working on."]
			},
	"i don't know" : {
				"weight" : 6,
				"responses" : ["You at least know \"*\"", "Look harder.", "Try harder.", "Tell me more about the code.", "Do any of these words jump out at you: \"compare, combine, call, track, set, assign, sort, swap, sample, return, iterate, create, return, replace\"?"]
			},
	"i am unsure" : {
		"weight" : 6,
		"responses" : ["That's okay, but at least what CAN you be sure of?", "Let's make a decision and go from there.", "What's a bad solution look like?", "What do you know you can do for sure, right now?", "Is there anything can we be certain of?"]
	},

	
};

/*
 * Limits the number of duplicate in the responses that
 * have different keywords.
 */
var synonyms = {
	"sorry" : [
		"apologise"
	],
	"another language" : [
		"deutsch",
		"francais",
		"french",
		"italiano",
		"italian",
		"espanol",
		"spanish",
		"xforeign"
	],
	"dreamed" : [
		"dream",
		"dreams"
	],
	"i am" : [
		"am i",
		"im",
		"i'm"
	],
	"you" : [
		"you're",
		"you are"
	],
	"was i" : [
		"i was"
	],
	"unsure" : [
		"uncertain"
	]
};
/*
 * List of special case
 * 
 * "i am *1-3* happy" -> "i am happy"
 *
 * Ex.
 * User> I am extremely happy
 * this becomes "I am happy"
 * Eliza> Why are you happy?
 * 
 * Ex.
 * User> I am sad because i wish i was happy
 * This is changed because the 1-3 represents this
 * is valid if there is 1 to 3 words between "am" and
 * "happy"
 */
var responsesWithWildcard = {
	"i am *1-3* confused" : {	
							weight : 20,
							replacementWord : "i am confused"
						},
	"i am *1-3* stressed" : {	
							weight : 20,
							replacementWord : "i am stressed"
						},
	"i am *1-3* frustrated" : {	
							weight : 20,
							replacementWord : "i am frustrated"
						},
	"i am *1-3* lost" : {	
							weight : 20,
							replacementWord : "i am lost"
						},
	"i *1-3* help" : {	
							weight : 20,
							replacementWord : "i need help"
						},
	"can *1-3* help" : {	
							weight : 20,
							replacementWord : "i need help"
						},
	"I *1-3* know" : {	
						weight : 20,
						replacementWord : "i don't know"
					},	
	"I *1-3* clue" : {	
						weight : 20,
						replacementWord : "i don't know"
					},
	"use *1-3* loop" : {	
						weight : 20,
						replacementWord : "iterate"
					}
	
};


var initialMessages = [
	"Hi. What are you working on?",
	"Hello, what difficulty do you face?",
	"What is the problem you're facing?",
	"What troubles you?",
	"What is your goal today?",
	"What problem are you hoping to solve?",
	"Hello friend, what problem are you facing?",
	"Hi, what can I help you with?",
	"Tell me about your code.",
	"What brings you here today?",
	"What struggle do you face with your code?",
	"What problem are you wrestling with?",
	"What goal are you fighting to achieve?",
	"What is your current struggle?",
	"Tell me about the coding problem you face."
	];
//var initialMessages = ["Hi there, welcome to my office. I'm here to chat about anything. What's on your mind?", "How do you do. Please tell me your problem.","Please tell me what's been bothering you.", "Is something troubling you?", "Hello. How are you doing today?"];
var endChatTerms = ["goodbye","I have to leave","I have to leave.","quit","bye","exit"];
var chatHistory = [];
var keywords = [];
var conversationOver = false;
var usedResponses = [];


/*
 * Initial function to start the coversation with
 * Eliza. This decides the initial message.
 *
 * Adds response keywords and synonyms with weight.
 * Sorts the responses by weight so the more important
 * meaningful is found first.
 */
function startElizaChat(){
	
	//sorts keywords (keywords and similar word) into array based on weight.
	getKeywordsByWeight();

	var initialMessage = initialMessages[Math.floor(Math.random()*initialMessages.length)];
	chatHistory.push({ isEliza : true, content : initialMessage });
	displayChat();

}
/*
 * This function does what it kind of says above.
 * It finds all of the response keywords and their
 * weight. Then finds all of the similar words and
 * their weight (based on response keywords). Then
 * it sorts the whole list.
 * 
 * This function can be more efficient.
 */
function getKeywordsByWeight(){
	var weights = [];
	var tempKeywords = [];
	//Adds responses
	for(var responseKeyword in responses){
		var weight = responses[responseKeyword].weight;
		tempKeywords[responseKeyword] = weight;
		// console.log("line 310", tempKeywords[responseKeyword])
		// console.log("tempKeywords Array", tempKeywords)

		if(!weights.includes(weight)){
			weights.push(weight);
			// console.log('weights array', weights)
		}
	}

	//Add similar words
	for(var wordWithResponse in synonyms){
		if(wordWithResponse in tempKeywords){
			var weight = tempKeywords[wordWithResponse];
			// console.log("synonyms", weight)

			for(var i = 0;i < synonyms[wordWithResponse].length;i++){
				var similarWord = synonyms[wordWithResponse][i];
				tempKeywords[similarWord] = weight;
				// console.log("line 329", tempKeywords[similarWord])
			}
		}//otherwise ignores it
	}

	//Adds responsesWithWildcard
	for(var word in responsesWithWildcard){
		var weight = responsesWithWildcard[word].weight;
		console.log("weight", weight)

		if(!weights.includes(weight)){
			weights.push(weight);
			// console.log("weights", weights);
		}
		
		tempKeywords[word] = weight;
	}

	//Sorts them based on weight going from highest to lowest
	weights = weights.sort(sortNumber);
	// console.log("sorted weights", weights)
	
	//Populates keywords for final result to be used throughout
	for(var i = 0;i < weights.length;i++){
		var weight = weights[i];
		for(var word in tempKeywords){
			//NOT FOUND is the fallback word. So if it loops through all
			//and none match it will be this word.
			if(tempKeywords[word] === weight && word != "NOTFOUND"){
				var obj = {};
				obj.word = word;
				obj.weight = weight;

				keywords.push(obj);
				// console.log(keywords)
			}
		}
	}
	console.log(keywords)
}
/*
 * SendElizaNewMessage is a function used for a one input, and one response
 * output. The idea is; here is where it gets the output from analyze but
 * this function manipulates the UI.
 */
function sendElizaNewMessage(newMessage){
	
	//Add to UI
	chatHistory.push({ isEliza : false, content : newMessage });
	console.log(chatHistory)
	displayChat();
	clearSendTextbox();

	if(!conversationOver){
		//Makes it lower case
		newMessage = processInput(newMessage);
		//Find the response based on the input. Check the analyze docs
		var response = analyze(newMessage);
	}else{
		var response = "Our conversation has ended. Refresh the page to start again.";
	}

	//Shows the reply from Eliza. To make it seem more real, takes a
	//random short time to response. Reloads the chat.
	setTimeout(function(){
		usedResponses.push(response);
		console.log(usedResponses)
		chatHistory.push({ isEliza : true, content : response });
		displayChat();
	}, determineResponseTime());

}
/*
 * Analyze is Eliza's main function get a response based on
 * user's current input. It also takes in consideration the
 * past messages, and a responses user/client engagement.
 */
function analyze(newMessage){
	var found = false;
	var response = '';

	//Check all
	for (var i = 0;i < keywords.length;i++) {
		var word = keywords[i].word;
		
		if(endChatTerms.contains(newMessage)){
			conversationOver = true;
			newMessage = "goodbye";
		}

		//Check for a wild card in the keyword
		//If yes then its a keyword with an adjective like "i am *1-3* happy"
		//Also checks if the newMessage contains all parts in proper order and following
		//the rules
		if(word.indexOf("*") != -1 && containsKeywordWithWildcard(newMessage, word) && !found){
			
			response = selectResponse(findBasicKeywordFromKeywordWithWildcard(word));
			found = true;

		}else if((newMessage.indexOf(word) != -1 && newMessage.length == word.length || newMessage.indexOf(word + " ") != -1 || newMessage.indexOf(" " + word) != -1) && !found){
			//Check to see if the keyword is in the sentence
			//Ex. input is "Hi" or "This and more" or "Hi doc!"
			
			//This picks a response
			response = selectResponse(word);
			
			//Check for wild card
			found = true;

		}
		

		if(found && response.indexOf("*") !== -1){
				//Wild card exists so sub in the phrase
				//Ex. I had a dream about my dog.
				//Dream is the keyword
				

				//Right of the keyword in the incoming message
				var remainingInput = newMessage.substring(newMessage.indexOf(word) + word.length+1, newMessage.length);
				//RemainingInput: [about my dog]
				
				//Right of the wildcard in the response
				var rightOfWildcardInResponse = response.substring(response.indexOf("*")+1);
				//Right of Wildcard In Response: [ while you were awake?]

				//Start of the response to the wildcard
				var startOfResponseToWildcard = response.substring(0, response.indexOf("*"));
				//Start of response to wildcard: [Have you ever fantasized]

				//The start of the remainingInput to the end minus the one character
				var startOfInputMinusOneCharacter = remainingInput.substring(0, remainingInput.length-1);
				//Start of input minus one character: [about my do]

				//This is remaining of the remaining input.
				//Regular expression replaces things that are not either A-Z or a-z
				var remainingOfInputOnRight = remainingInput.substring(remainingInput.length-1, remainingInput.length).replace("[^A-Za-z]","");
				//Remaining of Input on Right: [g]


				response =  startOfResponseToWildcard + replaceWords(startOfInputMinusOneCharacter + remainingOfInputOnRight) + rightOfWildcardInResponse;
				//Response: Have you ever fantasized about my dog while you were awake?

				//Changes the words and fixes the tenses.
				//Ex. I had a dream about my dog. --> Have you ever fantasized about your dog while you were awake?
				//But it only should work on the input not the response so you apply it to the inner parts.
		}
		if(found){
			break;
		}
		

	}

	if(!found){
		response = responses["NOTFOUND"].responses[Math.floor(Math.random()*responses["NOTFOUND"].responses.length)];
	}

	return response;
}
/*
 * Selects one of the responses based on a few things:
 * - Random (so responses aren't consistant)
 * - if contains wild card
 * - The responses passed in hold the highest value
 * - Checks if the response has been used already
 * 
 * I decided to add an additional(duplicate) response
 * instead of removing because I dont know how long the
 * conversation will go on for.
 *
 * Reason for creating a second array instead of manipulating
 * the existing one was because of a bug where it would
 * duplicate the duplicate.
 */
function selectResponse(word){
	var potentialResponses = [];
	if(word in responses){
		//Easily find responses by using key value pairing
		potentialResponses = responses[word];
	}else{
		//Need to find the related responses
		potentialResponses = findResponsesForSimilarWord(word);
	}

	
	var newResponses = [];
	var originalResponsesSize = potentialResponses.responses.length;


	for(var i = 0;i < originalResponsesSize;i++){
		newResponses.push(potentialResponses.responses[i]);

		//If has wild card, adds another
		if(potentialResponses.responses[i].indexOf("*") !== -1){
			newResponses.push(potentialResponses.responses[i]);
		}

		//If the response hasnt been used
		if(!usedResponses.contains(potentialResponses.responses[i])){
			newResponses.push(potentialResponses.responses[i]);
		}
	}
	return newResponses[Math.floor(Math.random()*newResponses.length)];
}
/*
 * Process input by making input lower case
 * and remove unnessary punctuation. 
 */
function processInput(message){
	message = removePunctuation(message);
	message = message.toLowerCase();
	return message;
}
/*
 * Replaces the context of words, flipping
 * the voice from the user to eliza.
 * 
 * It's split into an array so it doesn't
 * replace back and forth. Ex. me->i i->me
 */
function replaceWords(input){
	
	var wordsForReplacement = [];
	wordsForReplacement["i'm"] = "you are";
	wordsForReplacement["sort of"] = "sorta";
	wordsForReplacement["i"] = "you";
	wordsForReplacement["you"] = "i";
	wordsForReplacement["me"] = "you";
	wordsForReplacement["my"] = "your";
	wordsForReplacement["am"] = "are";
	wordsForReplacement["are"] = "am";
	wordsForReplacement["was"] = "were";
	wordsForReplacement["i'd"] = "you would";
	wordsForReplacement["i've"] = "you have";
	wordsForReplacement["i'll"] = "you will";
	wordsForReplacement["you've"] = "i have";
	wordsForReplacement["you'll"] = "i will";
	wordsForReplacement["your"] = "my";
	wordsForReplacement["yours"] = "mine";
	wordsForReplacement["me"] = "you";
	//Added in after testing
	wordsForReplacement["always had"] = "always have";
	
	
	var inputSplit = input.split(" ");

	//Was having an overrite issue
	var newSplit = [];
	for(var i = 0;i < inputSplit.length;i++){
		var currentInputWord = inputSplit[i];
		if(currentInputWord in wordsForReplacement){
			var replacementWord = wordsForReplacement[currentInputWord];
			newSplit[i] = replacementWord;

			//I had a dream about my dog.
		}else{
			newSplit[i] = currentInputWord;
		}
	}

	var updatedMessage = "";
	for(var i = 0;i < newSplit.length;i++){
		var word = newSplit[i];
		if(updatedMessage != ""){
			updatedMessage += " ";
		}
		updatedMessage += word;
	}

	return updatedMessage;
}

/*
 * Removes basic punctuation from the
 * user input message.
 */
function removePunctuation(message){
	//',;.?!:'
	message = message.replace("sort of", "sorta")
	message = message.replace(",","");
	message = message.replace(";","");
	message = message.replace("...",".");
	message = message.replace(".","");
	message = message.replace("?","");
	message = message.replace("!","");
	message = message.replace(":","");
	
	
	return message;
}

/*
 * Randomly generate a response time
 */
function determineResponseTime(){
	var m = Math.floor(Math.random() * 2000) + 500;
	return m;
}
/*
 * Taken from: http://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
 * modified by Keith Weaver
 */
function sortNumber(a,b) {
    return b - a;
}

/*
 * Used to find the responses for similar words.
 * Looks up the key of the similar word. Then
 * fetches the responses.
 */
function findResponsesForSimilarWord(word){
	var foundKey = "";
	for(var key in synonyms){
		var similarWords = synonyms[key];
		for(var i = 0;i < similarWords.length;i++){
			if(similarWords[i] == word){
				foundKey = key;
				break;
			}
		}
		if(foundKey != ""){
			break;
		}
	}

	//Find responses for that key
	return responses[foundKey];
}

/*
 * Checks to see if the keyword exists properly 
 * so "I am happy" is in proper order. Also 
 * checks to against runs so only so many words
 * are between "am" and "happy". So
 * "I am extremely happy" but 
 * "I am sad because I am happy" would fail.
 */
function containsKeywordWithWildcard(input, keywordsWithWildcardStr){
	
	var responseWildcardObj = getResponseWildcardInfo(keywordsWithWildcardStr);

	var numberOfWordsInWildcard = 0;
	var foundKeywords = 0;
	var inputArray = input.split(" ");
	for(var i = 0;i < inputArray.length;i++){
		var currentWord = inputArray[i];
		
		//if the word is not a keyword, add it. and we are in the wildcard
		if((foundKeywords >= responseWildcardObj.minNumWords && foundKeywords <= responseWildcardObj.maxNumWords) && !responseWildcardObj.keywords.contains(currentWord)){
			numberOfWordsInWildcard++;
		}

		if(responseWildcardObj.keywords.length > 0 && currentWord == responseWildcardObj.keywords[0]){
			//so first this would be "i" for ["i","am","happy"]
			responseWildcardObj.keywords.remove(currentWord);
			foundKeywords++;
		}
	}

	//Doesnot have all keywords
	//"I am * sad"
	//"I am * happy"
	//> I am extremely happy
	//Sad should stop here cause its not valid
	if(responseWildcardObj.keywords.length > 0){
		//console.log("Not the correct keyword");
		return false;
	}
	if(!(numberOfWordsInWildcard >= responseWildcardObj.minNumWords && numberOfWordsInWildcard <= responseWildcardObj.maxNumWords)){
		//console.log("Does not follow wildcard rules");
		return false;
	}
	
	return true;
}

/*
 * Find the replacement word so "I am extremely happy" would return "I am happy"
 */
function findBasicKeywordFromKeywordWithWildcard(keywordsWithWildcardStr){
	var t =  responsesWithWildcard[keywordsWithWildcardStr].replacementWord;
	console.log("Replacement:" + t);
	return t;
}

/*
 * Creates an object about the response replacement.
 * It breaks the keywords in an array. With the position
 * of the word before the wildcard and the position of
 * the word after the wildcard. Also with the max and min
 * number of words.
 */
function getResponseWildcardInfo(keywordsWithWildcardStr){
	var keywordsWithWildcard = keywordsWithWildcardStr.split(" ");
	
	var rulesInSingleStr = "";
	var positionOfWordBeforeOfWildcard = 0;
	var positionOfWordAfterOfWildcard = 0;
	for(var i = 0;i < keywordsWithWildcard.length;i++){
		var str = keywordsWithWildcard[i];
		
		positionOfWordAfterOfWildcard = i;
		//gets the position of wild card
		//since its going to be removed, we know
		//this is where the word "happy" should be

		if(str.indexOf("*") != -1){
			rulesInSingleStr = str;
			break;
		}
	}
	positionOfWordBeforeOfWildcard = positionOfWordAfterOfWildcard-1;


	//["i","am","*1-3*","happy"]
	keywordsWithWildcard = keywordsWithWildcard.remove(rulesInSingleStr);
	//["i","am","happy"]
	rulesInSingleStr = rulesInSingleStr.replace("*","").replace("*","");//*1-3* --> 1-3
	if(rulesInSingleStr.length < 3){
		return false;
	}
	//Now know the upper and lower bounds for the number of accepted words in the wildcard
	var minNumWords = rulesInSingleStr.substring(0,1);
	var maxNumWords = rulesInSingleStr.substring(2);
	

	var obj = {
		minNumWords : minNumWords,
		maxNumWords : maxNumWords,
		wordBeforeWildcard : positionOfWordBeforeOfWildcard,
		wordAfterWildcard : positionOfWordAfterOfWildcard,
		keywords : keywordsWithWildcard
	};


	return obj;
}
/*
 * Taken from: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
 * Modified
 */
Array.prototype.remove = function ( needle ) {
	var index = this.indexOf(needle);
	
	if(index > -1){
		this.splice(index, 1);
		return this;
	}
	return this;
}
/*
 * Taken from: http://stackoverflow.com/questions/12623272/how-to-check-if-a-string-array-contains-one-string-in-javascript
 */
Array.prototype.contains = function ( needle ) {
   for (i in this) {
      if (this[i] == needle) return true;
   }
   return false;
}
