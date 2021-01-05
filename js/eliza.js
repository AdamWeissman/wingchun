var responses = {
	"NOTFOUND" : {
				 "weight" : 0,
				 "responses" : [
						"How can we better focus on this?",
						"How else can we phrase this?",
						"How can we think about this more illustratively?",
						"Is there some angle we have not yet considered?",
						"Why?",
						"Is there an analogy that will help clarify what's going on?",
						"What is an alternate way of looking at the situation?",
						"Can we frame this some other way?",
						"Do we actually understand the problem we're working on?"
					]
				},
	"you" : {
					"weight" : 1,
					"responses" : ["Let's focus on you, not me.", "I'm here for you."]},
	"yes" : {
					"weight" : 1,
					"responses" : ["Why do you think so?","How can we move forward from here?","How can we make progress?"]},
	"no" : {
					"weight" : 1,
					"responses" : ["Why not?","Are you sure?","What might be another way?", "Maybe you need to try harder?", "Things will only be as difficult as you make them.", "How can you reframe your way of looking at things?"]},
	"i am" : {
					"weight" : 1,
					"responses" : ["I am sorry to hear that.","How long has that been?","Is that typical?","Be mindful of your mindset."]},
	"sorry" : {
				 "weight" : 1,
				 "responses" : ["Please don't apologize.", "Apologies are not necessary.", "Apologies are not required."]},
	"always" : {
				 "weight" : 1,
				 "responses" : ["Can you think of a specific example?"]},
	"maybe" : {
					"weight" : 1,
					"responses" : ["You don't seem very certain.", "You said 'maybe'. Can we transform that into a 'yes' or 'no'?"]},
	"hello" : {
					"weight" : 1,
					"responses" : ["Hi again! How is going?","How are you today? Any problems?"]},
	"hi" : {
					"weight" : 1,
					"responses" : ["Hi again! How is going?","How are you today? Any problems?"]},
	"goodbye" : {
					"weight" : 1,
					"responses" : ["Goodbye.  Thank you for talking to me."]},
	"perhaps" : {
					"weight" : 1,
					"responses" : ["How do you know you can't?","Perhaps you could if you tried.","What would it take for you to advance from where you are?"]},
	"another language" : {
					 "weight" : 1,
					 "responses" : ["I told you before, I don't understand languages that are not English."]},
	"your" : {
					"weight" : 1,
					"responses" : ["Why are you concerned about it?","What about your own issue?","Are you worried about someone else?","Really?"]},
	"i want" : {
					"weight" : 2,
					"responses" : ["Why do you want to do that?","What can we measure to know if we're going in the right direction?", "If we can't accomplish that, what is an alternative?", "If you got what you wanted, where would we go from there?","What would be some first steps to make that goal a reality?", "Have you thought about all the things you need to do to make that a reality?", "What would the minimum viable version of that look like", "How can you better express this 'want'?"]},
	"i wanted" : {
					"weight" : 2,
					"responses" : ["Did you achieve it, or did you miss?", "Did you achieve it or simply moved on?", "Bruce Lee has said \"Absorb what is useful, discard what is useless and add what is specifically your own.\""]},
	"i aimed" : {
					"weight" : 2,
					"responses" : ["Did you achieve it, or did you miss?","Did you achieve it or simply moved on?", "Bruce Lee has said \"Absorb what is useful, discard what is useless and add what is specifically your own.\""]},
	"i think" : {
					"weight" : 2,
					"responses" : ["How can we know?", "What can we measure to make progress from here?", "What can we test?", "Perhaps then it is time for action?","Do you really think so?", "Truly?", "Might it be something else?", "Bruce Lee once said \"If you spend too much time thinking aout a thing, you'll never get it done.\""]},	
	"you serious" : {
					"weight" : 2,
					"responses" : ["You have no idea.", "Am I??", "What do you think?"]},
	"are you" : {
					"weight" : 2,
					"responses" : ["Why are you interested in that?","Would you prefer that?","What do you think?"]},
	"was i" : {
					"weight" : 2,
					"responses" : ["I don't know.","Do you think you were?","Were you?","What would it mean if you were?","What does that suggest to you?"]},
	"was you" : {
					"weight" : 2,
					"responses" : ["Would you like to believe that?","What suggests that?","What do you think?"]},
	"if" : {
					"weight" : 3,
					"responses" : ["Do you think it\'s likely?","What else is there to consider?","What other conditions must your consider?","Really?"]},
	"why don\'t you" : {
					"weight" : 3,
					"responses" : ["Do you really think I don't?","Perhaps eventually I will.","Do you really want me to?"],},
	"why can\'t i" : {
					"weight" : 3,
					"responses" : ["Do you think you should be able to?","If you could, what would you do?","I don't know -- why can't you?","Have you really tried?"]},
	"i can\'t" : {
					"weight" : 4,
					"responses" : ["How do you know you can't?","Perhaps you could if you tried.","What would it take for you to achieve that?"]},
	"i feel" : {
					"weight" : 4,
					"responses" : ["Tell me more about such feelings.","Is that helpful?","Remember we are masters of our emotions.","Why do you feel that way?"]},
	"i need" : {
					"weight" : 5,
					"responses" : [
						"Are you sure you need to?",
						"How will you accomplish this?",
						"Is this definitely something you want to do?",
						"What can you measure to make sure you're making progress towards that goal?",
						"What else do you need to consider?",
						"What have you not considered that might make things easier for you?",
						"What have you not considered that might make things more difficult for you?",
						"Do you know how to articulate this, or at least some of it in code?",
						"What obstacles do you face?"
					]},
	"problem" : {
						"weight" : 5,
						"responses" : [
							"How can we rephrase this problem?",
							"What is a sub-problem we can work on instead?",
							"What should we measure to know if we're making progress on this problem?",
							"What's the smallest thing we can do to know that we're making progress on this problem?",
							"Is ther some prebuilt solution elsewhere you can modify? to meet your needs",
							"Remember that every problem is half a solution. Believe in yourself."
						]},
	"obstacle" : {
						"weight" : 5,
						"responses" : [
							"How can we rephrase this problem?",
							"What other obstacles have you not considered?",
							"What is a sub-problem we can work on instead?",
							"What related obstacles or problems might you face?",
							"What should we measure to know if we're making progress on this problem?",
							"What can we measure to know we're overcoming the obstacle?",
							"What's the smallest thing we can do to know that we're making progress on this problem?",
							"Is ther some prebuilt solution elsewhere you can modify? to meet your needs"
						]},						
	"index" : {
					"weight" : 5,
					"responses" :  ["Do you need to assign a value to the index?", "Are you working with more than one index?", "How will you track it?"]},
	"do you remember" : {
					"weight" : 6,
					"responses" : ["Do you think I would forget?","Yes I do remember."]},	
	"i am frustrated" : {
					"weight" : 6,
					"responses" : ["Sorry to hear you are frustrated. We're only human", "Step back for a moment, clear your mind.", "What can we work on to become unfrustrated?"]},
	"i am confused" : {
					"weight" : 6,
					"responses" : ["Bruce Lee has said \"A wise man can learn more from a foolish question than a fool can learn from a wise answer.\"", "Do any of these words seem like threads to unravel your confusion... \"compare, combine, call, track, set, assign, sort, swap, sample, return, iterate, create, return, replace\"?"]},
	"i am lost" : {
					"weight" : 6,
					"responses" : ["We'll sort it out.", "Being lost is the first place we must start in order find where we're going.", "What have you tried so far?"]},
	"i am stressed" : {
					"weight" : 6,
					"responses" : ["Enjoy this quote by Bruce Lee:\"You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend.\"","That's okay, we'll work together to overcome the obstacle.", "It's good to admit that, it'll make it easier to grow from there.", "Bruce Lee once said \"Do not pray for an easy life, pray for the strength to endure a difficult one.\""]},
	"i need help" : {
					"weight" : 6,
					"responses" : ["Let's work together.", "The answer is within yourself, it's just a matter of finding it.", "What in particular do you need help on?", "Thank you for letting me know, tell me about the problem.", "Great! Tell me what you're working on."]},
	"i don't know" : {
					"weight" : 6,
					"responses" : ["Bruce Lee says \"Knowing is not enough, we must apply. Willing is not enough, we must do.\"", "Bruce Lee says \"Mistakes are always forgivable, if one has the courage to admit them.\"","You at least know that you don't know.", "Look harder.", "Try harder.", "Tell me more about the code."]},
	"i am unsure" : {
					"weight" : 6,
					"responses" : ["That's okay, but what CAN we be sure of?", "Let's make a decision and move forward.", "What's a bad solution look like?", "What do you know you can do for sure, right now?", "Is there anything can we be certain of?"]},
	"i tried" : {
					"weight" : 6,
					"responses" : ["What else did you try?", "What else can you try?", "What was the result?", "Was the result what you expected?"]},
	"because" : {
					"weight" : 6,
					"responses" : ["Is that the real reason?", "Why?", "Can you drill down on a cause?", "What other causes might there be?", "What else are we missing?","What other causes are there to consider?", "Because?"]},
	"advice" : {
					"weight" : 8,
					"responses" : ["Check out my blog with <a href=\"https://comedytragedyepic.com/learning-advice/\" target=\"_blank\">Learning Advice</a>",
						"I'm a big fan of the <a href=\"https://kanbanize.com/lean-management/improvement/5-whys-analysis-tool\" target=\"_blank\">Five Whys</a>.",
						"You might enjoy the <a href=\"https://www.tocinstitute.org/five-focusing-steps.html\" target=\"_blank\">Theory of Constraints</a>.",
						"You might enjoy the <a href=\"https://www.franklincovey.com/the-4-disciplines/\" target=\"_blank\">4 Disciplines of Execution</a>.",
						"You might gain from learning about <a href=\"https://www.whatmatters.com/get-started/\" target=\"_blank\">OKRs</a>.",
						"You may enjoy discovering how to reframe your learning with <a href=\"https://barbaraoakley.com/\" target=\"_blank\">Barbara Oakley, PhD</a>.",
						]},
	"update" : {
					"weight" : 7,
					"responses" : ["Do you know how you would update it?", "Are there any things to be cautious of while updating?", "Is there more than one way to update?", "What happens after you update?", "What else are we missing?","Is there anything else to consider?", "Because?"]},
	"updating" : {
						"weight" : 7,
						"responses" : ["Do you know how you would update it?", "Are there any things to be cautious of while updating?", "Is there more than one way to update?", "What happens after you update?", "What else are we missing?","Is there anything else to consider?", "Because?"]},								
	"code" : {
				 "weight" : 16,
				 "responses" : [
					 "How can we better test the code?",
					 "Is there some value or function you can call?",
					 "Might you combine, set or assign some value?",
					 "Might you iterate, track, or create some variable?",
					 "Tell me more about what the code has to do.",
					 "What else will this code need to do?",
					 "What are some values you can or should compare?",
					 "Do you know the syntax well?",
					 "Is there an associated concept you're struggling on?",
					 "Is ther some prebuilt solution elsewhere you can modify?",
					 "What should we be tracking to make your code successful?",
					 "What returns should you be tracking?",
					 "What are some things you'll need to return in order to get this to work?"
					]},
	"compare" : {
				 "weight" : 16,
				 "responses" : ["Tell me more about the code.","What are you comparing? To what?","If you're going to be comparing values, might you need to track something as well?", "If you're comparing such and such values, is there anything you need to replace, or swap?","Might you combine, set or assign some value?",
				 "Might you iterate, track, or create some variable?",
				 "Tell me more about what the code has to do.",
				 "What else will this code need to do?",
				 "What are some values you can or should compare?",
				 "Do you know the syntax well?",
				 "Is there an associated concept you're struggling on?",
				 "Is ther some prebuilt solution elsewhere you can modify?"]},
	"combine" : {
				 "weight" : 16,
				 "responses" : [
					"Might you combine, set or assign some value?",
					"Might you iterate, track, or create some variable?",
					"Tell me more about what the code has to do.",
					"What else will this code need to do?",
					"What are some values you can or should compare?",
					"Do you know the syntax well?",
					"Is there an associated concept you're struggling on?",
					"Is ther some prebuilt solution elsewhere you can modify?",
					"Do you need to return some other value?","How will you combine it?","Do you also need to compare or replace anything?", "Do you then need to create a new value?"]},
	"call" : {
				 "weight" : 16,
				 "responses" : ["Do you know what the call will return","In what context would you do that?","Have you considered creating some variable to store the return?", "Have you checked what the call returns?"]},
	"track" : {
				 "weight" : 16,
				 "responses" : [
					"How can we better test the code?",
					"Is there some value or function you can call?",
					"Might you combine, set or assign some value?",
					"Might you iterate, track, or create some variable?",
					"Tell me more about what the code has to do.",
					"What else will this code need to do?",
					"What are some values you can or should compare?",
					"Do you know the syntax well?",
					"How will we track that?",
					"Are there many ways to track that data?",
					"Is there an associated concept you're struggling on?",
					"Is ther some prebuilt solution elsewhere you can modify?",
					"What should we be tracking to make your code successful?",
					"What returns should you be tracking?",
					"What are some things you'll need to return in order to get this to work?","How will you track it?","When will you return what you track?","Do you need to swap, sort, set, return or replace anything while you're doing this?"]},
	"iterate" : {
				 "weight" : 16,
				 "responses" : [ "How can we better test the code?",
				 "Is there some value or function you can call?",
				 "Might you combine, set or assign some value?",
				 "Might you iterate, track, or create some variable?",
				 "Tell me more about what the code has to do.",
				 "What else will this code need to do?",
				 "What are some values you can or should compare?",
				 "Do you know the syntax well?",
				 "Is there an associated concept you're struggling on?",
				 "Is ther some prebuilt solution elsewhere you can modify?",
				 "What should we be tracking to make your code successful?",
				 "What returns should you be tracking?",
				 "What are some things you'll need to return in order to get this to work?","What type of loop will you be using?","Can you do this recursively?","Are there any disadvantages to doing it this way?", "Is there a simpler approach?", "What's the easiest way to do this?", "What do you need to keep track of?", "What are your returns?", "How might you code this?"]},
	"create" : {
				 "weight" : 16,
				 "responses" : [ "How can we better test the code?",
				 "Is there some value or function you can call?",
				 "Might you combine, set or assign some value?",
				 "Might you iterate, track, or create some variable?",
				 "Tell me more about what the code has to do.",
				 "What else will this code need to do?",
				 "What are some values you can or should compare?",
				 "Do you know the syntax well?",
				 "Is there an associated concept you're struggling on?",
				 "Is ther some prebuilt solution elsewhere you can modify?",
				 "What should we be tracking to make your code successful?",
				 "What returns should you be tracking?",
				 "What are some things you'll need to return in order to get this to work?",
				 "Is it necessary to create it, might you just swap or replace?","Do you need to set any values?","Do you foresee any flaws with this approach?", "What's the most optimal way to do this?", "What's the bad way to do this?"]},
	"assign" : {
				 "weight" : 16,
				 "responses" : [ "How can we better test the code?",
				 "Is there some value or function you can call?",
				 "Might you combine, set or assign some value?",
				 "Might you iterate, track, or create some variable?",
				 "Tell me more about what the code has to do.",
				 "What else will this code need to do?",
				 "What are some values you can or should compare?",
				 "Do you know the syntax well?",
				 "Is there an associated concept you're struggling on?",
				 "Is ther some prebuilt solution elsewhere you can modify?",
				 "What should we be tracking to make your code successful?",
				 "What returns should you be tracking?",
				 "What are some things you'll need to return in order to get this to work?",
				 "Where will you get the value from?","Is that the only way?","Do you need to assign anything else?", "Should you be swapping values?"]},
	"sort" : {
				 "weight" : 16,
				 "responses" : ["Will you use a built-in??","Do you know the syntax?","Are there many ways to do this?", "How can we better test the code?",
				 "Is there some value or function you can call?",
				 "Might you combine, set or assign some value?",
				 "Might you iterate, track, or create some variable?",
				 "Tell me more about what the code has to do.",
				 "What else will this code need to do?",
				 "What are some values you can or should compare?",
				 "Do you know the syntax well?",
				 "Is there an associated concept you're struggling on?",
				 "Is ther some prebuilt solution elsewhere you can modify?",
				 "What should we be tracking to make your code successful?",
				 "What returns should you be tracking?",
				 "What are some things you'll need to return in order to get this to work?"]},
	"swap" : {
				 "weight" : 16,
				 "responses" : ["What valuess are you tracking here?", "Do you know how you will code it?"]},
	"sample" : {
				 "weight" : 16,
				 "responses" : ["Will you be using a sliding window?","Will you be using pointers?","What can you do with it?"]},
	"return" : {
				 "weight" : 16,
				 "responses" : [ "How can we better test the code?",
				 "Is there some value or function you can call?",
				 "Might you combine, set or assign some value?",
				 "Might you iterate, track, or create some variable?",
				 "Tell me more about what the code has to do.",
				 "What else will this code need to do?",
				 "What are some values you can or should compare?",
				 "Do you know the syntax well?",
				 "Is there an associated concept you're struggling on?",
				 "Is ther some prebuilt solution elsewhere you can modify?",
				 "What should we be tracking to make your code successful?",
				 "What returns should you be tracking?",
				 "What are some things you'll need to return in order to get this to work?","Do you know why?","How can you work towards that goal?"]},
	"replace" : {
				 "weight" : 16,
				 "responses" : ["Is it okay to do that?","What else might you do?", "Is this efficient?", "Are you actually replacing what you need to?"]},	
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

// USING THIS FOR INCOMING SYNYONMS
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
	"I am *1-3* stuck" : {	
						weight : 20,
						replacementWord : "i am stressed"
					},
	"use *1-3* loop" : {	
						weight : 20,
						replacementWord : "iterate"
					},
	"*1-3* coding" : {	
						weight : 20,
						replacementWord : "code"
					},

	
};


var initialMessages = [
	"Hi, what coding problem are we focused on today?",
	"Hello, what is the coding problem we are trying to solve?",
	"What coding problem are we facing at the moment?",
	"What are we aiming to code today?",
	"Hi there.  What are we trying to code right now?"

	];
//var initialMessages = ["Hi there, welcome to my office. I'm here to chat about anything. What's on your mind?", "How do you do. Please tell me your problem.","Please tell me what's been bothering you.", "Is something troubling you?", "Hello. How are you doing today?"];
var endChatTerms = ["goodbye","I have to leave","I have to go.","quit","bye","exit", "see you later"];
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
