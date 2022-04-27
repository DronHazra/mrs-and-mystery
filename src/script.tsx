import { Divider } from '@mui/material';
import React, { ReactNode } from 'react';

type scriptNode = {
	content: ReactNode;
	answer?: string;
	iframeURL?: string;
};

const HEIGHT = 450;
const WIDTH = 720;

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
			'Just as expected, the door to the manor was left unlocked and you all walk in. The manor is completely silent and to your surprise, no one is there to greet you. No matter how many you call out their names or ring their phones, none of you receive a response. Your footsteps echo in the hallway as you try to check the other rooms for any signs of life, but all of the doors were locked except for one.',
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
		iframeURL: 'https://earnest-brigadeiros-708d7e.netlify.app/',
	},
	{
		content:
			'One of you notices the piles of paper, messily strewn all over the wooden desk nearby. As you sift through them, you realize that they appear to be scripts of some sort.',
	},
	{
		content: '',
		answer: 'bee, panther, lion, caterpillar, bear, clownfish', //CHANGED ANSWER TO CLOWNFISH NO SPACES
	},
	{
		content:
			'Unlocking the padlocks, you swing the cabinet open to reveal a box with four keys, each with its own tag dangling from it. Which key do you take?',
	},
];

export const artist: scriptNode[] = [
	{
		content:
			'You choose the colourful key and insert it into the matching door. The satisfying click of the door unlocking brings you comfort as you step into a long, bright hallway. The door behind you immediately shuts, leaving you all alone with a row of paintings staring back at you. Something crumples underneath your feet when you move closer to the paintings and you pick up a piece of paper with symbols of an eye, a bowtie, stripes and closed eye down.',
		iframeURL: 'https://quiet-pie-226127.netlify.app/',
	},
	{
		content:
			'Four doodles, four digit code… maybe that’s got something to do with it? There’s a keypad at the very end of the hallway',
		answer: '4364',
	},
	{
		content:
			'You type the code into the keypad and it spits out a list of some sort for you to take. Upon closer inspection, it seems to be an itinerary for some sort?',
		iframeURL: 'https://kaleidoscopic-choux-0bd54e.netlify.app/',
	},
	{
		content:
			'The door at the end of the hallway is also now open to reveal a much more spacious room, occupied with only a table in the center. Spread across that table is a giant map and you can see another keypad next to it.',
		answer: '17',
	},
	{
		content:
			'Through pinning the path between each destination, you map out the number 17 and type it into the keypad. The screen flashes green and a lovely tune rings out; you can’t resist from doing a little dance. Then, the floor beneath you promptly gives out and you fall into oblivion.',
	},
];
export const florist: scriptNode[] = [
	{
		content:
			'You choose the key decorated with flowers and insert it into the matching door. To your surprise, it swings open to reveal the manor’s garden. The luscious hedges decorate the field with a meticulous pattern and force you to walk straight on until you are finally forced to choose a direction.',
	},
	{
		content:
			'On your left, there is a wooden table. Two potted plants sit on it — with your experience, you immediately know the first one is a rose, and the second is a lily. There is also a calendar with a stamp placed nearby. Along the edges of the stamp, the letters “mmdd” are engraved.',
	},
];

export const chef: scriptNode[] = [
	{
		content:
			'Your stomach grumbles as you take the key that looks awfully like a cake. In secret, you actually do take a bite of it just to make sure. (It wasn’t cake). The key fits perfectly in its matching door and you step into the manor’s stunning banquet hall. Everything looks amazing! But you notice that something seems out of place… Every good chef knows to serve their courses in order. And what’s with that huge safe at the end of the table?',
		iframeURL: 'https://singular-baklava-b2281c.netlify.app/',
		answer: '5362',
	},
	{
		content:
			'You open up the huge safe to reveal what appears to be a set of recipes, however everything is cut up and jumbled together. As you put the pieces back together, you remember your friends telling you something about the lethality of azaleas, but can’t remember the exact details they said.',
		iframeURL: 'https://meek-cuchufli-922b89.netlify.app/',
	},
	{
		content:
			'You notice the weird set of letters at the bottom of the recipe. What could they possibly mean? Perhaps there’s something in the recipe that could help you out?',
		answer: 'and in the taste confounds the appetite',
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
		content:
			'The pattern of books on the smallest key resonates with you and you insert it into the matching door. As the door opens, your heart is filled with the familiar, calming scent of old books and cedarwood. You find yourself standing in the middle of the manor’s renowned library and sneeze from all of the dust. On the other side of the room is another door, which is locked shut with a padlock. Upon closer inspection, you find that the code to open this lock is three, three digit numbers: ###-###-###. Everything appears untouched, as if no one has visited the place for years, but a book left open on the floor catches your attention.',
	},
	{
		content: (
			<React.Fragment>
				You walk over to the book and recognize the title: Romeo and Juliet.
				There is a piece of paper sticking out from the pages with what you
				recall as a passage from this book <br />{' '}
				<em>PARTING IS SUCH SWEET SORROW</em> <br />
				The classic Shakesperian play of two star-crossed lovers whose fate led
				both to their deaths… You think about the missing wedding couple and
				chuckle. How fitting. Maybe this quote is somehow connected to the
				combination on the door.
			</React.Fragment>
		),
		answer: '002-003-199',
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
			'You walk over to inspect the bookshelf. All the books on this shelf are in alphabetical order, except for 9 books. On each book is a number from 1 to 9. You eye the box on the table again and suspect it must be something that could help you get out of there.',
		iframeURL: 'https://eclectic-puffpuff-226153.netlify.app/',
		answer: '4, 3, 5, 1, 2',
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
