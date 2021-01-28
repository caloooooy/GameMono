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
	},
	'Letter': {
		title: 'Letter to Prince',
		subtitle: 'From Kidnappers',
		body:`
			<img src="assets/images/tobecontinued.jpg">
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
	'musicgarden': 'bgmusicgarden.mp3',
	'scene8': 'scene8music.mp3',

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
	'chapter2': 'chapter2.mp4'

});

// Define the images used in the game.
monogatari.assets ('images', {
	'flower': 'flower.jpg',
	'letter': 'tobecontinued.jpg',
	'html': 'whatishtml.png'
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'castle': 'bgcastle.jpg',
	'room' : 'bgprincessroom.jpg',
	'garden': 'bggarden.jpg',
	'scene8': 'scene8bg.jpg',
	'scene9': 'scene9bg.jpg',
	'scene10': 'scene10bg.jpg',
	'chapter2': 'chapter2.jpg',
	'black': 'blackscene.jpg'
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
	'prince':{
		name: 'Prince Narrator',
		color: '#decaff',
		directory: 'prince',
		sprites: {
			angry: 'princeangry.png',
			normal: 'princenormal.png',
			happy: 'princehappy.png',
			sad: 'princesad.png'
		},
		expressions: {
			angry: 'expression/princesangryexpression.png.',
			normal: 'expression/princenormalexpression.png.',
			happy: 'expression/princehappyexpression.png.',
			sad: 'expression/princesadexpression.png.'
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
	'maskChar': {
		name: 'Stranger',
		color: '#decaff',
		directory: 'maskchar',
		sprites: {
			normal: 'maskchar.png'
		},
		expressions: {
			normal: 'expression/maskCharexpression.png.'
		},
		default_expression: 'normal',
	}

});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show character prince normal at center with fadeIn',
		'prince:normal Hello! I am your guide to this game and You are?',
		{
			'Input': {
				'Text': 'What is your name Prince?',
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
		'show character prince happy at center',
		'prince:happy Hi Prince {{player.name}} Welcome to our game called HTML Kingdom.',
		'show character prince normal at center',
		'prince:normal This game is where you can Learn HTML with a twist of story.',
		'hide character prince happy with fadeOut',
		'centered Before the wedding....',
		'show scene castle with fadeIn',
		'play music musiccastle with volume 40 loop',
		'show character k normal at center with fadeIn',
		'k Welcome to HTML kingdom!',
		'stop music musiccastle',
		'jump Choice1',
	],
		
	

	'Choice1':[
		{'Choice': {
			'Dialog': 'k What is HTML?',
			'Yes': {
				'Text': 'HyperText Markup Language',
				'Do': 'show character k happy at center',
				'Do':'jump Scene2',

			},
			'No': {
				'Text': 'HyperText Mark Language',
				'Do': 'jump No'	
			},
		}
	}
	
],

	'Scene2': [
		'play music musiccastle with volume 40 loop',
		'show character k happy at center',
		'k:happy Very Good!',
		'show character k normal at center',
		'k:normal Prince {{player.name}} Welcome to our Kingdom!',
		'show character k normal at center',
		'player Your majesty may I request to go out with Princess Jasmine before the wedding?',
		'jump Choice2',
		],

	'Choice2':[
			{'Choice': {
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
		'k Guard! Kindly go to our princess\'s room and tell her Prince {{player.name}} is here.',
		'show character g angry at right with fadeInRightBig',
		'g:angry Yes your majesty!',
		'jump Scene3',
		],

	'Scene3': [
		'stop music musiccastle',
		'show scene room with fadeIn',
		'Princess\'s Room',
		'play sound knock',
		'show character g normal at left with fadeInLeftBig',
		'g Knock Knock...',
		'jump Choice3',
	],


	'Choice3':[
		{'Choice': {
			'Dialog': 'g What is the correct HTML linebreak?',
			'guardWrong1': {
				'Text': 'lb',
				'Do':'jump guardWrong'

			},
			'guardRight': {
				'Text': 'br',
				'Do': 'show character g surprised at left',
				'Do': 'jump Scene4',
			},
			'guardWrong2': {
				'Text': 'break',
				'Do': 'jump guardWrong'
				
			},
		}
	}, 
],
	'Scene4': [
		'show character g surprised at left',
		'g:surprised I\'m happy to meet you your Majesty',
		'show character g normal at left',
		'g:normal  My princess.. The prince wishes to see you.',
		'show character p normal at right with fadeInRightBig',
		'p:normal Sure . Tell the prince i\'ll get change and i\'ll be seeing him shortly at our place.',
		'show character g angry at left',
		'g:angry Yes your highness!',
		// BACK TO CASTLE
		'play music musiccastle with volume 40 loop',
		'show scene castle with fadeIn',
		'show character g normal at right with fadeInRight',
		'g The princess wishes to tell you that she will be seeing you soon at the place.',
		'player Your majesty i\'ll be going first to our place. Thank you!',
		'show character k normal at center with fadeIn',
		'k Before you go..',
		'jump Choice4',
	],
	
	'Choice4': [
			{
		'Choice': {
			'Dialog': 'k Do you know how to create a hyperlink?',
			'guardWrong1': {
				'Text': 'a url',
				'Do':'jump guardWrong1'

			},
			'Right': {
				'Text': 'a href',
				'Do': 'show character k happy at center',
				'Do': 'jump Scene5',
			},
			'guardWrong2': {
				'Text': 'a name',
				'Do': 'jump guardWrong1'	
			},
		}
	},
],

	'Scene5': [
		'show character k happy at center',
		'k:happy Thank you very much',
		'k:happy Take care!',
		'stop music musiccastle',
		// GARDEN SCENE
		'play music musicgarden with volume 40 loop',
		'show scene garden with fadeIn',
		'show character p pinknormal at center with fadeIn',
		'p:pinknormal Have you been waiting long?',
		'player No I\'ve just arrived too.',
		'p:pinknormal Prince I have to ask something.',
		'player What is it?',
		'jump Choice5',
	],


	'Choice5': [
		{'Choice': {
			'Dialog': 'p:pinknormal How can I make a numbered list in HTML?',
			'happy': {
				'Text': 'ol',
				'Do':'show character p pinkhappy at center',
				'Do': 'jump Scene6',

			},
			'Angry': {
				'Text': 'ul',
				'Do': 'jump princessAngry'
			}
		}
	}, 
],

	'Scene6': [
		'show character p pinkhappy at center',
		'p:pinkhappy Thank you Prince!',
		'player I\'ts an honour Princess', 
		'player Are you hungry?. I\'ll just grab us something to eat.',
		'show character p pinknormal at center',
		'p:pinknormal Sure!',
		'stop music musicgarden',

		//KIDNAP SCENE
		'show scene garden with fadeIn',
		'player Princess??',

		//Castle Scene 
		'play music musiccastle with volume 40 loop',
		'show scene castle with fadeIn',
		'show character k normal at center with fadeIn',
		'k:normal Prince {{player.name}} you\'re back where\'s Princess Jasmine?',
		'player I apologize your highness it seems Princess Jasmine is missing!',
		'stop music musiccastle',
		'show character k surprised at center',
		'k:surprised Nanithefuckkk?! Weren\'t you with her? How can you lost her, you fool!',		
		'show character g angry at right with fadeIn',
		'g:angry Your Majesty there is a letter for you...',
		'To see what\'s inside of the letter. ',
		'jump Choice6',
	],


	'Choice6': [
		{'Choice': {
			'Dialog': 'How to insert Image in HTML',
			'imgcorrect': {
				'Text': 'img src',
				'Do':'show character k normal at center',
				'Do': 'jump Scene7',


			},
			'imgwrong': {
				'Text': 'image source',
				'Do': 'jump No2'
			}
		}
	}, 
],

	'Scene7': [
		'play music musiccastle with volume 40 loop',
		'show character k normal at center',
		'k Prince {{player.name}} this letter said that you need to save princess Jasmine here is the letter.',
		'hide character k',
		'hide character g',
		'stop music musiccastle',
		'show scene castle',
		'show image letter center with fadeIn',
		'jump Chapter2'
	],
	'Chapter2':[
		'show scene chapter2 with fadeIn',
		'jump Scene8',
		
	],
	
	// Sir Ryan Section
		'Scene8':[ 
			'play music scene8 with volume 40 loop',
			'show scene black',
			'centered inside the letter',
			'Kailangan mong pumunta sa CSS cave para maaligtas ang prinsesa',
			'show scene castle',
			'show character prince angry at left with fadeIn',
			'show character k angry at center with fadeIn ',
			'show character g angry at right with fadeIn',
			'prince:angry agad na umalis ang prinsipe para hanapin at iligtas ang prinsesa',
			'hide character prince with fadeOut',
			'k:angry Guard imbistigahan ang pagkawala ng princesa',
			'hide character k angry at center with fadeOut ',
			'g:angry masusunod po mahal na hari',
			'hide character g angry at right with fadeOut',
			'show scene black',
			'centered *Sa kalagitnaan ng kanyang pag lalakbay may makakasalubong syang nakaputing maskara*',
			'show scene scene8 with fadeIn',
			'show character maskChar normal at right with fadeIn',
			'{{player.name}} Hello? Sir? Maari po ba akong mag tanong kung saan matatagpuan ang CSS Cave?',
			'maskChar Sino ka? Anong kailangan mo?! Bakit gusto mo pumunta sa CSS Cave?!!',
			'{{player.namen}} Ako po si Prince {{player.name}}. Nang galing po ako sa kahariang JavaScript. Naparito po ako upang iligtas ang aking prinsesa ayon sa sulat na pinadala nila sa CSS Cave ko lamang matatagpuan ang aking prinsesa.',
			'maskChar Pasensya kana ngunit hindi kita matutulungan. Bumalik kana lamang sa inyong kaharian.',
			'show character prince angry Ngunit bakit?!! Hindi po ako babalik ng aming kaharian hangga\'t di ko kasama ang aking prinsesa.',
			'maskChar Mapanganib ang lugar na yon.',
			'maskChar Sino man ang pumunta don ay di na nakakabalik kaya wag ka na lamang tumuloy!',
			'{{playe.name}} Pero kailangan ko po mailigtas ang aking prinsesa.',
			'maskChar Sige tumuloy ka ng pareho kayong di na makabalik sa inyong mga kaharian!',
			'{{player.name}} Pasensya na po pero wala na po akong pakealam kung ano mang kapahamakan ang nakaabang sakin patungo don handa kong isugal ang buhay ko para sa aking prinsesa',
			'maskChar Narinig ko na yan pang ilan kana sa mga matitigas ang ulo na binalaan ko pero tumuloy sila at di na muli nakabalik.',
			'{{player.name}} Ano po bang meron sa lugar na yon at madaming hindi nakakabalik?',
			'maskChar Mahiwaga at mapanlinlang ang kuweba na yon marami kang pag susubok na kahaharapin bago mo marating ang dulo non at kung di ka palarin na malagpasan ang mga pagsubok.. habang buhay ka ng makukulong sa kuweba na iyon.',
			'maskChar Ang tanong handa ka bang ibuwis ang buhay mo mailigtas lang ang prinsesa mo?',
			'{{player.name}} Opo! Ako ang dahilan kung bakit nakuha sya ng mga itim na bandido kaya ako din ang gagawa ng paraan upang maibalik sya sa aming kaharian.',
			'maskChar Hanga ako sa iyong katapangan bata kaya sige ituturo ko sa iyo ang daan',
			'{{player.name}}Talaga po? Maraming maraming salamat!',
			'maskChar Halika\'t sundan mo ko.',	
			'jump Scene9'
	],

	//carlo Section
	'Scene9':[
		'show scene scene9 with fadeIn',
		'{{player.name}} Matagal na po ba kayong nakatira dito sa kagubatan?',
		'show character maskChar at center',
		'maskChar Matagal-tagal na din.',
		'{{player.name}} Bakit? Wala ka po bang asawa o anak?',
		'maskChar WALA',
		'{{player.name}} Gusto nyo po ba manilbihan na lamang sa kaharian ko? Malungkot po dito sa kagubatan.',
		'maskChar Hindi na. Dito na lamang ako upang magabayan ang iba pang gustong pumunta sa CSS Cave.',
		'{{player.name}} Sige.. pero kung sakaling magbago ang isip mo pag balik ko pwede ka sumama samin ng aking prinsesa.',
		'maskChar At talagang sigurado kang makakabalik ka?',
		'{{player.name}} Oo naman po no! Kailangan kong makasiguradong makakabalik ako.',
		'{{player.name}} Kailangan ako ng kaharian namin at nangako ako sa hari na ibabalik at ililigtas ko ang prinsesa.',
		'maskChar Goodluck!',
		'{{player.name}} May alam po ba kayo tungkol sa mga pagsubok ng CSS Cave?',
		'hide scene scene9',
		'maskChar',
		'show scene scene10 with fadeIn',
		'maskChar Hanggang dito nalang kita maihahatid Prince {{player.name}} diretsuhin mo lang ung daan na \'to',
		'{{player.name}} Bakit po?',
		'maskChar Dito na ang sagradong lugar ng kuweba di na ako maaring sumama.',
		'{{player.name}} Ah ganon po ba? Sige po. Maraming salamat po.',
		'maskChar Walang anuman! Mag-iingat ka sana maligtas mo ang iyong prinsesa. Hihintayin ko ang pag babalik mo sa lagusan.',
		'{{player.name}} Opo maraming maraming salamat po sa tulong nyo sir.'

	],
	
	//No Answers Labels

	'No': [
		'show character k angry at center',
		'k:angry You Traitor!',
		'show character k normal at center',
		'k Prince {{player.name}} Please return to choices and select the correct answer.',
		'jump Choice1',
	],
	

	'Mali':[
		'show character k angry at center',
		'k:angry You can go now! and don\'t ever come back',
		'show character k normal at center',
		'k Prince {{player.name}} Please return to choices and select the correct answer.',
		'jump Choice2',
	],

	'guardWrong':[
		'show character g angry at left',
		'g:angry You will not see the Princess',
		'show character g normal at left',
		'g Prince {{player.name}} Please return to choices and select the correct answer.',
		'jump Choice3',

	],

	'guardWrong1':[
		'show character g angry at left',
		'g:angry You will not see the Princess',
		'show character g normal at left',
		'g Prince {{player.name}} Please return to choices and select the correct answer.',
		'jump Choice4',
		
	],
	'princessAngry':[
		'show character p pinkangry at center',
		'p:pinkangry I hate you',
		'show character p pinknormal at center',
		'p:pinknormal Prince {{player.name}} Please return to choices and select the correct answer.',
		'jump Choice5',
	],
	'No2': [
		'show character k angry at center',
		'k:angry You Traitor!',
		'show character k normal at center',
		'k Prince {{player.name}} Please return to choices and select the correct answer.',
		'jump Choice6',
	],
	// Sir Ryan Section




























// Carlo Section

  }); 