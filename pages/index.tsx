import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import DialogBox from '../src/DialogBox';
import { theater } from '../src/script';

const Home: NextPage = () => {
	const [step, setStep] = React.useState(0);
	const [currentStepFinished, setFinished] = React.useState(false);
	const handleFinish = () => {
		setFinished(true);
	};
	const proceed = (key: KeyboardEvent) => {
		console.log('in event handler');
		if (key.code == 'ArrowRight' && currentStepFinished) {
			setStep(step + 1);
			setFinished(false);
		}
	};
	React.useEffect(() => {
		console.log('in effect');
		window.addEventListener('keydown', proceed);
		return () => {
			window.removeEventListener('keydown', proceed);
		};
	});
	return (
		<Container maxWidth='md' sx={{ mt: 1 }}>
			{theater
				.slice(0, step + 1)
				.map(({ content }: { content: string }, index) => {
					return (
						<DialogBox key={index} finish={() => setFinished(true)}>
							{content}
						</DialogBox>
					);
				})}
		</Container>
	);
};

export default Home;
