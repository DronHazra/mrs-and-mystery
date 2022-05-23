import React from 'react';

type scriptNode = {
	content: React.ReactNode;
	answer?: string;
	iframeURL?: string;
	answerFormat?: string;
};

const HEIGHT = 450;
const WIDTH = 720;

const artist1 = 'https://steady-klepon-5a98fd.netlify.app/';
const artist2 = 'https://thriving-valkyrie-5359f4.netlify.app/';
const chef1 = 'https://benevolent-madeleine-382949.netlify.app/';
const chef2 = 'https://stirring-gecko-d9672a.netlify.app/';
const theaterlink = 'https://inquisitive-taffy-2f3cd6.netlify.app/';
const exit1 = 'https://quiet-rugelach-6582d5.netlify.app/';
const exit2 = 'https://luxury-cactus-56f615.netlify.app/';
const florist1 = 'https://nimble-manatee-ef173d.netlify.app/';
const florist2 = 'https://admirable-valkyrie-7ff1ed.netlify.app/';
const librarian1 = 'https://delicate-pudding-95ef2f.netlify.app/';
const librarian2 = 'https://friendly-douhua-dc51f1.netlify.app/';

export const invitations = {
	artist: (
		<>
			My good friend, as my wedding day approaches us, I couldn’t help but think
			about all the memories we’ve made together. We do go quite far back, don’t
			we! I remember how good you were with the paintbrush when we were younger.
			Your art never failed to stun everyone who walked by. <br />
			Are you still selling your paintings these days? <br />
			It would be lovely if you could decorate our manor with your paintings.
			Perhaps you would be willing to paint a picture of the ceremony as well.{' '}
			<br />I hope to hear back from you soon.
		</>
	),
	chef: (
		<>
			My good friend, as my wedding day approaches us, I couldn’t help but think
			about all the memories we’ve made together. We do go quite far back, don’t
			we! Every once in a while, I long for the cupcakes you would bring to
			those ridiculously fancy parties our parents always forced us to. (I’ll be
			honest, they were the only reason why I attended). <br />
			I wanted to give you the honour of baking our wedding cake. I know your
			bakery has been going well, and I have full faith that you’ll know just
			what kind of cake to make. <br />
			Please let me know if you are willing.
		</>
	),
	librarian: (
		<>
			My good friend, as my wedding day approaches us, I couldn’t help but think
			about all the memories we’ve made together. It took a lot of effort to
			figure out your whereabouts, you know? <br />
			I know you’ve always been interested in those… witchcraft… sort of
			hobbies… which is why you’re always on the move. But I was wondering if
			just this once, you could make a stop at my place for the wedding. Perhaps
			there is a spell you can cast to make sure everything goes well? <br />
			You may access the library in my manor if you need any resources.
		</>
	),
	florist: (
		<>
			My good friend, as my wedding day approaches us, I couldn’t help but think
			about all the memories we’ve made together. We do go quite far back, don’t
			we? I have a request that I’m sure you’d be excited to receive: it would
			be amazing if you could be in charge of the flowers for this event! <br />
			With your experience working at that flower shop of yours, I’m sure you’ll
			know exactly what to pick out. I want bouquets for each of our guests.{' '}
			<br />
			I’ll send you the list once it’s finalized.
		</>
	),
};

export const theater: scriptNode[] = [
	{
		content:
			'Over the next few months, the happy couple got the wedding prep crew together and planned out everything for the wedding, up to the finest details. The final message from them was that the door to the manor should be open when they arrive.',
	},
	{
		content: 'And then the day of the wedding finally came.',
	},
	{
		content:
			'The four of you arrive at the manor exactly on time (much to your surprise) and stop to admire the sheer size of it. You get an eerie feeling from how quiet everything is and can’t help but notice how peaceful it must be to live so far from the city.',
	},
	{
		content:
			'Just as expected, the door to the manor was left unlocked and you all walk in. The manor is completely silent and to your surprise, no one is there to greet you. No matter how many times you call out their names or ring their phones, none of you receive a response. Your footsteps echo in the hallway as you try to check the other rooms for any signs of life, but all of the doors were locked except for one.',
	},
	{
		content:
			'The sign next to it is battered and rusted, but you can make out the word “THEATER” written across. With no other choice, the four of you enter the room.',
	},
	{
		content: (
			<React.Fragment>
				The theater is nothing like your typical theater. It was a small room —
				barely enough to fit everyone — with four unique doors leading
				elsewhere. You come across something locked by a padlock, but instead of
				the usual numbers in its combination, there are images of... animals?
				You don’t see padlocks like these every day. It’s unclear which
				combination to use.
			</React.Fragment>
		),
		iframeURL: theaterlink,
	},
	{
		content:
			'One of you notices the piles of paper, messily strewn all over the wooden desk nearby. As you sift through them, you realize that they appear to be scripts of some sort.',
		answerFormat:
			'Combine answers for each padlock in lowercase with commas and spaces between each input.',
		answer: 'bee, panther, lion, caterpillar, bear, clownfish', //CHANGED ANSWER TO CLOWNFISH NO SPACES
	},
	{
		content:
			'Unlocking the padlocks, you swing the cabinet open to reveal a box with four keys, each with its own tag dangling from it.',
	},
];

export const artist: scriptNode[] = [
	{
		content: (
			<>
				You choose the colourful key and insert it into the matching door. The
				satisfying click of the door unlocking brings you comfort as you step
				into a long, bright hallway. The door behind you immediately shuts,
				leaving you all alone with a row of paintings staring back at you.
				Something crumples underneath your feet when you move closer to the
				paintings and you pick up a piece of paper with symbols of{' '}
				<strong>an eye, a bowtie, flowers and closed eye down.</strong>
			</>
		),
		iframeURL: artist1,
	},
	{
		content:
			'Four doodles, four digit code… maybe that’s got something to do with it? There’s a keypad at the very end of the hallway.',
		answer: '4364',
		answerFormat: 'Answer with four numbers only.',
	},
	{
		content:
			'You type the code into the keypad and it spits out a list of some sort for you to take. Upon closer inspection, it seems to be an itinerary for some sort?',
		iframeURL: artist2,
	},
	{
		content:
			'The door at the end of the hallway is also now open to reveal a much more spacious room, occupied with only a table in the center. Spread across that table is a giant map and you can see another keypad next to it.',
		answer: '73',
		answerFormat: 'Answer with two numbers only.',
	},
	{
		content:
			'Through pinning the path between each destination, you map out the number 73 and type it into the keypad. The screen flashes green and a lovely tune rings out; you can’t resist doing a little dance. Then, the floor beneath you promptly gives out and you fall into oblivion.',
	},
];
export const florist: scriptNode[] = [
	{
		content:
			'You choose the key decorated with flowers and insert it into the matching door. To your surprise, it swings open to reveal the manor’s garden. The luscious hedges decorate the field with a meticulous pattern and lead you to walk straight on until you reach an opening.',
	},
	{
		content: (
			<>
				On your right, you see a paper with two flowers printed on it. With your
				experience, you immediately know the first one is a rose, and the second
				is a lily, but why does it as "what month?" There is also a calendar
				with a stamp placed nearby. Along the edges of the stamp, the letters{' '}
				<strong>“mmdd”</strong> are engraved.
			</>
		),
	},
	{
		content:
			'On your left, there is an altar that reflects a pleasant view of the rest of the garden where a grand fountain resides in the center of the hedges. You notice some odd markings on the fountain, but would need to take a closer look before you can figure out what it is. There are also some flowers littered around the altar and your heart sinks when you relize many of them are missing some petals.',
		iframeURL: florist1,
		answer: '0714',
		answerFormat: 'Answer with four numbers only.',
	},
	{
		content:
			'You recall this familiar date and stamp it with confidence. This was the day the couple got engaged! But... why so cryptic with this puzzle? Are they hiding something?',
	},
	{
		content:
			"Something rustles in the hedges nearby. Turning around, you spot a bunny sniffing at the scraps of paper it's been collecting. There are traces of ink on some of them and you bend down to collect the matching pieces of paper. The bunny looks at you with sad eyes before dashing away.",
		iframeURL: florist2,
		answer: 'deadly nightshade',
		answerFormat: 'Answer in lowercase with spaces between each input.',
	},
	{
		content:
			'You shout your answer in joy and the birds fly away in fear. Oblivious to the fleeing creatures, you don’t notice how still the garden has become, nor do you notice the vines creeping towards you. Before you know it, the vines have latched onto your ankles and you are dragged into the endless hedges.',
	},
];

export const chef: scriptNode[] = [
	{
		content:
			'Your stomach grumbles as you take the key that looks awfully like a cake. In secret, you actually do take a bite of it just to make sure. (It wasn’t cake). The key fits perfectly in its matching door and you step into the manor’s stunning banquet hall. Everything looks amazing! But you notice that something seems out of place… Every good chef knows to serve their courses in order. And what’s with that huge safe at the end of the table?',
		iframeURL: chef1,
		answer: '3443',
		answerFormat: 'Answer with four numbers only.',
	},
	{
		content:
			'You open up the huge safe to reveal what appears to be a set of recipes, however everything is cut up and jumbled together. As you put the pieces back together, you remember your florist friend telling you something about the lethality of azaleas, but can’t remember the exact details they said.',
		iframeURL: chef2,
	},
	{
		content:
			'You notice the weird set of letters at the bottom of the recipe. What could they possibly mean? Perhaps there’s something in the recipe that could help you out?',
		answer: 'and in the taste confounds the appetite',
		answerFormat:
			'Answer in all lowercase with space between words. Refresh to change the missing tile.',
	},
	{
		content:
			'You read the quote out loud and wonder if there was a reason why the author of the recipe felt the need to reference Romeo and Juliet. A joyous tune rings across the banquet hall but nothing changes. Minutes pass and no matter what you try, you can’t seem to find a way out of the room. Exhausted, you decide to take a seat at the end of the table and stare longingly at the pudding nearby. Surely one bite won’t hurt… right? You grab a spoon and sneak in a small bite.',
	},
	{
		content:
			'Suddenly, your vision turns hazy and everything begins to spin. You manage to hold onto the table as your eyelids grow heavy and the world turns black.',
	},
];

export const librarian: scriptNode[] = [
	{
		content: (
			<>
				The pattern of books on the smallest key resonates with you and you
				insert it into the matching door. As the door opens, your heart is
				filled with the familiar, calming scent of old books and cedarwood. You
				find yourself standing in the middle of the manor’s renowned library and
				sneeze from all of the dust. On the other side of the room is another
				door, which is locked shut with a padlock. Upon closer inspection, you
				find that the code to open this lock is{' '}
				<strong>three, three digit numbers.</strong> Everything appears
				untouched, as if no one has visited the place for years, but a book left
				open on the floor catches your attention.
			</>
		),
	},
	{
		content: (
			<React.Fragment>
				You walk over to the book and recognize the title:{' '}
				<a
					href='https://shakespeare.folger.edu/downloads/pdf/romeo-and-juliet_PDF_FolgerShakespeare.pdf'
					target='_blank'
				>
					Romeo and Juliet
				</a>
				. There is a piece of paper sticking out from the pages with what you
				recall as a passage from this book <br />
				<em>PARTING IS SUCH SWEET SORROW</em> <br />
				The classic Shakesperian play of two star-crossed lovers whose fate led
				both to their deaths… You think about the missing wedding couple and
				chuckle. How fitting. Maybe this quote is somehow connected to the
				combination on the door?
			</React.Fragment>
		),
		iframeURL: librarian1,
		answer: '002-003-199',
		answerFormat: 'Answer in the format ###-###-###',
	},
	{
		content:
			'You input the combination into the lock on the door and you’re able to shove it open. Your jaw drops in awe when you realize the door has led you to an even larger section of the library. Shelves of books tower over you and for the first time ever, you feel a sense of uneasiness from the sheer number of books around you.',
	},
	{
		content:
			'Once again, you notice that on the other side of the room is a locked door. You also spot a small box on one of the tables, which has a number lock for 9 digits attached to it.',
	},
	{
		content:
			'Just like the previous room, the books are perfectly arranged, with exception to a series of books in the corner. Compared to the perfect neatness of the rest of the room, you can’t help but notice it sticks out like a sore thumb.',
	},
	{
		content:
			"You walk over to inspect the bookshelf. All the books seem like they should be in alphabetical order, but 6 of them aren't. On each book is a number from 1 to 8. You eye the box on the table again and suspect it must be something that could help you get out of there. ",
		iframeURL: librarian2,
		answer: '6, 5, 3, 7, 2, 4',
		answerFormat: 'Answer with commas and spaces between each number.',
	},
	{
		content:
			'Inside the box is a key and a lamp. You leave the latter in the box for now and only take the key, which fits perfectly in the lock of the door. When you manage to pull it open, all that it leads to is a slide with no apparent ending. You stare at it in disappointment.',
	},
	{
		content:
			'You hear the thud of a book falling to the ground behind you, followed by the sound of many more books falling as well. You turn around to see the bookshelves collapsing to the floor one by one, forcing you to edge closer to the door.',
	},
	{
		content:
			'The ground shakes beneath you and you nervously stare at the only path left for you to go. Taking a deep breath, you sit yourself on the slide and push yourself into the darkness.',
	},
];

export const final: scriptNode[] = [
	{
		content:
			'When you finally come to, you realize you are in a new room. Around you were the rest of the wedding prep crew and you sigh in relief at their familiar faces. The room was otherwise completely empty except for the small door in the corner. There is no lock, but none of you are able to get it to open.',
	},
	{
		content:
			'On the brink of giving up, one of you notices a piece of paper sticking out from the small gap beneath the door. The four of you huddle around the paper and read:',
	},
	{
		content: (
			<em>
				Everything you’ve worked for is behind this door <br />
				To SUM things up, this is quite a simple puzzle <br />
				EVERYTHING comes down to this <br />
				Under pressure like never BEFORE <br />
				THIS decides your fate <br />
				Look behind you; the doors are closed <br />
				Where will you GO? <br />
				The only way is FORWARD
			</em>
		),
		iframeURL: exit1,
		answer: 'eloped',
		answerFormat: 'The bottom of the page looks a little folded...',
	},
	{
		content:
			'You look at each other in shock as you all come to the same realization:',
	},
	{
		content: <em>Wait… eloped! They’re not dead; they ran away!</em>,
	},
	{
		content:
			'As you all share the same thought, the small door creaks open allowing the four of you to crawl through. You arrive in what appears to be a shed of some sort. Rusted tools were littered all over the place and the only source of light was the slow burning fire in the corner. The room is rather dull, but some colourful slips of paper stuck on one of the toolboxes pop out of the scenery.',
	},
	{
		content:
			'The door you came from has no handle on your side, leaving you locked in. The fire flickers, reminding you of the little time you have until it finally dies.',
	},
	{
		content:
			'Dread continues to grow onto your team as you all begin to fear that there is no way out of this puzzle. Your discussions turn heated and you can feel an argument well on its way.',
	},
	{
		content: <em>Breathe.</em>,
	},
	{
		content: (
			<>
				Finally, one of you suggests to stop and read{' '}
				<strong>the notes that could be found in the room.</strong> You all
				huddle around the first note:
			</>
		),
	},
	{
		content:
			'That’s it, you can make a key! Somebody left the blueprints behind… All you guys need to do is find the materials and the right length of key cuts.',
	},
	{
		content: 'But… how are you going to shape the key?',
	},
	{
		content:
			'You all turn to the fire in the corner. The fire in the corner is diminishing but it should do.',
		iframeURL: exit2,
	},
	// {
	//   content: <em>Who do you think should make the key?</em>
	// } removed for now
	{
		content:
			'The rest of you quickly start working to find the rest of the notes. What material should you use?',
		answer: 'iron',
		answerFormat: 'Answer in lowercase, one word.',
	},
	{
		content: 'And the cuts?',
		answer: '3212',
		answerFormat: 'Answer with four numbers only.',
	},
	{
		content:
			'The room is barely lit by the fire, but the key has been made and that’s all that mattered. The four of you quickly start shoving aside all of the random tools and leftover junk to make a path to the shed’s door. The atmosphere is tense as the key is inserted into the lock, and there is a collective sigh of relief when you hear the familiar click.',
	},
	{
		content:
			'The door is pushed open and you’ve never felt more grateful for fresh air. You crash into one another on the front steps of the manor and fall into a pile on the rough pavement. A bunny stops to stare at you in curiosity before dashing away.',
	},
	{
		content:
			'The four of you look back at the manor and notice that the only door visible is the front entrance, still left unlocked. There is an unspoken agreement between everyone that you wouldn’t dare to check inside the manor again.',
	},
	{
		content:
			'You wonder why the wedding was even planned in the first place when the couple had already eloped. Where were the guests? The other wedding planners?',
	},
	{
		content:
			'Who left the door unlocked? Who took the time to set up all the puzzles?',
	},
	{
		content: '… Was this some sick joke?',
	},
	{
		content:
			'Your heads are filled with questions, but none of you have the energy to find an answer. Someday, you will all reconvene to discuss everything that happened, but for now, you plan to head home and get some rest.',
	},
	{
		content:
			'The sun is still shining above and the fluffy clouds pass by, providing just the right amount of shade. Everything was the same as when you all arrived; warm, peaceful, and quiet.',
	},
	{
		content: 'Perfect weather for a wedding.',
	},
];
