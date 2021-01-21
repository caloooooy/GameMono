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
			pinknormal: 'pinknormal.png'
        },
        expressions: {
            angry: 'expressions/princessangryexpression.png.',
            happy: 'expressions/princesshappyexpression.png',
            normal: 'expressions/princessnormalexpression.png',
            sad: 'expressions/princesssadexpression.png',
			surprised: 'expressions/princesssurpriseexpression.png',
			pinkhappy: 'expressions/pinkhappyexpression.png',
			pinknormal: 'expressions/pinknormalexpression.png'
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
		'show character k surprised at center with fadeIn',
		'vibrate 200',
		'k:surprised Welcome to our kingdom! What brings you here Prince....',
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
		'show character k normal at center with fadeIn',
		'k Prince {{player.name}} Welcome to our Kingdom!',
		'player Nais ko sana ipaalam sainyo mahal na hari na gusto ko sanang mamasyal kami ni Princess Jasmine bago maganap ang kasalan bukas?',
		'k Sure! Nasa silid sya ngayon.. *tinawag ung guard* Puntahan mo si princess sabihin mo nandito si Prince {{player.name}}',
		'show character g angry at right with fadeIn',
		'g:angry Masusunod mahal na hari!',
		// 'hide character k with fadeOut',
		// 'hide character g with fadeOut',
		
		// SCENE PRINCESS ROOM  


		'show scene room with fadeIn',
		'Princess Room',
		'play sound knock',
		'show character g normal at left with fadeIn',
		'g Knock Knock...',
		'g:normal  Mahal na prinsesa nais po kayong makita ng prinsipe',
		'show character p normal at right with fadeIn',
		'p:normal Osige! Paki-sabi mag bibihis lang ako magkita na lamang kami sa aming tagpuan',
		'g Masusunod mahal na prinsesa!',
		// BACK TO CASTLE
		'show scene castle with fadeIn',
		'show character g normal at right with fadeIn',
		'g Pinapasabi po ng mahal na prinsesa na mag hahanda lamang po sya magkita nalang daw po kayo sa tagpuan',
		'player Sige mauna na po ako sa tagpuan mahal na hari',
		'show character k normal at center with fadeIn',
		'k Sige mag-iingat ka!',
		// GARDEN SCENE
		'show scene garden with fadeIn',
		'show character p pinknormal at center with fadeIn',
		'p:pinknormal Kanina ka pa ba dito?',
		'player Hindi naman kararating ko lang din eto para sayo.....',
		'hide character p',
		'show character p pinkhappy at center',
		'p:pinkhappy Salamat!',
		'hide character p',
		'show character p pinknormal at center',
		'player Nagugutom ka naba? Sandali babalik ako kukuha lang ako ng makakain natin',
		'p:pinknormal Sige!',
		
		//KIDNAP SCENE
		'show scene garden with fadeIn',
		'player Princess??',

		//Castle Scene 
		'show scene castle with fadeIn',
		'player Paumanhin mahal na hari ngunit nawawala po si princess Jasmine',
		'show character k surprised at center with fadeIn',
		'k:surprised Ano! Diba magkasama kayo? Paano syang nawala?',
		'player Umalis lamang ako para kumuha ng pagkain pero pag balik ko wala na sya',
		'show character g angry at right with fadeIn',
		'g:angry Mahal na hari may sulat pong dumating para sainyo'


		// {
		// 	'Choice': {
		// 		'Dialog': 'k Have you already read some documentation?',
		// 		'Yes': {
		// 			'Text': 'Yes',
		// 			'Do': 'jump Yes'
		// 		},
		// 		'No': {
		// 			'Text': 'No',
		// 			'Do': 'jump No'
		// 		}
		// 	}
		// }
	]

	// 'Yes': [
	// 	'y Thats awesome!',
	// 	'y Then you are ready to go ahead and create an amazing Game!',
	// 	'y I can’t wait to see what story you’ll tell!',
	// 	'end'
	// ],

	// 'No': [

	// 	'y You can do it now.',

	// 	'show message Help',

	// 	'y Go ahead and create an amazing Game!',
	// 	'y I can’t wait to see what story you’ll tell!',
	// 	'end'
	// ]
});