/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'musiccastle': 'bgmusiccastle.mp3',
	'musicgarden': 'bgmusicgarden.mp3'

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'knock': 'knockknock.mp3'

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	'flower': 'flower.jpg'
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'castle': 'bgcastle.jpg',
	'room' : 'bgprincessroom.jpg',
	'garden': 'bggarden.jpg'
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},
	'k': {
		name: 'King Harry',
		color: '#decaff',
		directory: "king",
		sprites: {
            angry: 'kingangry.png',
            happy: 'kinghappy.png',
            normal: 'kingsmile.png',
            sad: 'kingsad.png',
            surprised: 'kingsurprised.png'
        },
        expressions: {
            angry: 'expressions/kingangryexpression.png.',
            happy: 'expressions/kinghappyexpression.png',
            normal: 'expressions/kingsmileexpression.png',
            sad: 'expressions/kingsadexpression.png',
            surprised: 'expressions/kingsurpriseexpression.png'
        },
        default_expression: 'normal',
	},
	'g': {
		name: 'Guard',
		color: '#00ffff',
		directory: 'guard',
		sprites: {
			angry: 'guardangry.png',
			normal: 'guardnormal.png',
			surprised: 'guardsurprised.png'
		},
		expressions: {
			angry: 'expressions/guardangryexpression.png',
			normal: 'expressions/guardnormalexpression.png',
			surprised: 'expressions/guardsurprisedexpression.png',
		},
		default_expression: 'normal',
	},
	'p': {
		name: 'Princess Jasmine',
		color: '#decaff',
		directory: "princess",
		sprites: {
            angry: 'princessangry.png',
            happy: 'princesshappy.png',
            normal: 'princessnormal.png',
            sad: 'princesssad.png',
			surprised: 'princesssurprised.png',
			pinkhappy: 'pinkhappy.png',
			pinknormal: 'pinknormal.png',
			pinkangry: 'pinkAngry.png'
        },
        expressions: {
            angry: 'expressions/princessangryexpression.png.',
            happy: 'expressions/princesshappyexpression.png',
            normal: 'expressions/princessnormalexpression.png',
            sad: 'expressions/princesssadexpression.png',
			surprised: 'expressions/princesssurpriseexpression.png',
			pinkhappy: 'expressions/pinkhappyexpression.png',
			pinknormal: 'expressions/pinknormalexpression.png',
			pinkangry: 'expressions/pinkangryexpression.png'
        },
        default_expression: 'normal',
	},
	'kn': {
		name: 'Swane'
	},
	'player': {
		name: '{{player.name}}',
		color: '#decaff'
	},

});

monogatari.script ({
	// The game starts here.
	'Start': [
		'Before the wedding....',
		'show scene castle with fadeIn',
		'play music musiccastle with volume 40 loop',
		'show character k normal at center with fadeIn',
		'k Welcome to our HTML kingdom!',
		'stop music musiccastle',
		{
			'Choice': {
				'Dialog': 'k What is HTML?',
				'Yes': {
					'Text': 'HyperText Markup Language',
					'Do': 'show character k happy at center',

				},
				'No': {
					'Text': 'HyperText Mark Language',
					'Do': 'jump No'	
				},
			}
		}, 
		'play music musiccastle with volume 40 loop',
		'k:happy Very Good!',
		'show character k normal at center',
		'k What brings you here Prince....',
		{
			'Input': {
				'Text': 'What is your name prince?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name prince!'
			}
		},
		'show character k happy at center',
		'k:happy Prince {{player.name}} Welcome to our Kingdom!',
		'show character k normal at center',
		'player Your majesty may I request to go out with Princess Jasmine before the wedding?',
		'stop music musiccastle',
		{
			'Choice': {
				'Dialog': 'k Before that I want to ask you what is the largest heading in HTML?',
				'Wrong1': {
					'Text': 'h6',
					'Do':'jump Mali'

				},
				'Wrong2': {
					'Text': 'h3',
					'Do': 'jump Mali'
				},
				'Tama': {
					'Text': 'h1',
					'Do': 'show character k happy at center'	
				},
			}
		}, 
		'k:happy Yes! She\'s in her room..',
		'show character k normal at center',
		'k Guard! Kindly go to our princess\'s room and tell her Prince {{player.name}} is here',
		'show character g angry at right with fadeInRightBig',
		'g:angry Yes your majesty!',	
		// 'hide character k with fadeOut',
		// 'hide character g with fadeOut',
		
		// SCENE PRINCESS ROOM  


		'show scene room with fadeIn',
		'Princess\'s Room',
		'play sound knock',
		'show character g normal at left with fadeInLeftBig',
		'g Knock Knock...',
		{
			'Choice': {
				'Dialog': 'g What is the correct HTML linebreak?',
				'guardWrong1': {
					'Text': 'lb',
					'Do':'jump guardWrong'

				},
				'guardRight': {
					'Text': 'br',
					'Do': 'show character g surprised at left'
				},
				'guardWrong2': {
					'Text': 'break',
					'Do': 'jump guardWrong'	
				},
			}
		}, 
		'g:surprised I\'m happy to meet you your Majesty',
		'show character g normal at left',
		'g:normal  My princess.. The prince wishes to see you',
		'show character p normal at right with fadeInRightBig',
		'p:normal Sure . Tell the prince i\'ll get change and i\'ll be seeing him shortly at our place',
		'show character g angry at left',
		'g:angry Yes your highness!',
		// BACK TO CASTLE
		'play music musiccastle with volume 40 loop',
		'show scene castle with fadeIn',
		'show character g normal at right with fadeInRight',
		'g The princess wishes to tell you that she will be seeing you soon at the place',
		'player Your majesty i\'ll be going first to our place. Thank you!',
		'show character k normal at center with fadeIn',
		'k Before you go',
		{
			'Choice': {
				'Dialog': 'k Do you know how to create a hyperlink?',
				'guardWrong1': {
					'Text': 'a url',
					'Do':'jump Mali'

				},
				'Right': {
					'Text': 'a href',
					'Do': 'show character k happy at center'
				},
				'guardWrong2': {
					'Text': 'a name',
					'Do': 'jump Mali'	
				},
			}
		}, 
		'k:happy Thank you very much',
		'k:happy Take care!',
		'stop music musiccastle',
		// GARDEN SCENE
		'play music musicgarden with volume 40 loop',
		'show scene garden with fadeIn',
		'show character p pinknormal at center with fadeIn',
		'p:pinknormal Have you been waiting long?',
		'player Hindi naman kararating ko lang din',
		'p:pinknormal Prince I have to ask something',
		'player What is it?',
		{
			'Choice': {
				'Dialog': 'p:pinknormal How can I make a numbered list in HTML?',
				'happy': {
					'Text': 'ol',
					'Do':'show character p pinkhappy at center'

				},
				'Angry': {
					'Text': 'ul',
					'Do': 'jump princessAngry'
				}
			}
		}, 
		'p:pinkhappy Thank you Prince!',
		'player I\'ts an honour Princess', 
		'player Nagugutom ka naba? Sandali babalik ako kukuha lang ako ng makakain natin',
		'p:pinknormal Sige!',
		'stop music musicgarden',
		
		//KIDNAP SCENE
		'show scene garden with fadeIn',
		'player Princess??',

		//Castle Scene 
		'play music musiccastle with volume 40 loop',
		'show scene castle with fadeIn',
		'player Paumanhin mahal na hari ngunit nawawala po si princess Jasmine',
		'stop music musiccastle',
		'show character k surprised at center with fadeIn',
		'k:surprised Ano! Diba magkasama kayo? Paano syang nawala?',
		'player Umalis lamang ako para kumuha ng pagkain pero pag balik ko wala na sya',
		'show character g angry at right with fadeIn',
		'g:angry Mahal na hari may sulat pong dumating para sainyo',
		'To see what\'s inside of the letter ',
		{
			'Choice': {
				'Dialog': 'How to insert Image in HTML',
				'imgcorrect': {
					'Text': 'img src',
					'Do':'show character k normal at center'

				},
				'imgwrong': {
					'Text': 'image source',
					'Do': 'jump Mali'
				}
			}
		}, 
		'play music musiccastle with volume 40 loop',
		'k Prince {{player.name}} this letter said that you need to save princess Jasmine',
	],
		
	// 'Yes': [
	// 	'show character k happy at center',
	// 	'k:happy Very Good!',
	// ],

	'No': [
		'show character k angry at center',
		'k:angry You Traitor!',
		'end'
	],
	'Mali':[
		'show character k angry at center',
		'k:angry You can go now! and don\'t ever come back',
		'end'
	],
	'guardWrong':[
		'show character g angry at left',
		'g:angry You will not see the Princess',
		'end'
	],
	'princessAngry':[
		'show character p pinkangry at center',
		'p:pinkangry I hate you'
	] 
});