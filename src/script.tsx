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
