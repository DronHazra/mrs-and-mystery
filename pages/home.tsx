import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Link from '../src/Link';
import DialogBox from '../src/DialogBox';
import { theater } from '../src/script';
import useComponentSize from '@rehooks/component-size';
import { useKeepInViewer } from '../src/useKeepInViewer';
import { Button, ButtonGroup } from '@mui/material';

const Home: NextPage = () => {
	const [step, setStep] = React.useState(0);
	const [currentStepFinished, setFinished] = React.useState(false);

	const rootRef = React.useRef<HTMLDivElement>(null);
	const { height } = useComponentSize(rootRef);
	const keepY = useKeepInViewer(height);

	const handleFinish = () => {
		setFinished(true);
	};
	const proceed = (key: KeyboardEvent) => {
		if (
			(key.code == 'ArrowRight' ||
				key.code === 'Enter' ||
				key.code == 'ArrowDown') &&
			currentStepFinished
		) {
			setStep(step + 1);
			setFinished(false);
		}
	};
	React.useEffect(() => {
		window.addEventListener('keydown', proceed);
		return () => {
			window.removeEventListener('keydown', proceed);
		};
	});
	return (
		<Container maxWidth='md' sx={{ my: 1 }}>
			<div ref={rootRef}>
				{theater.slice(0, step + 1).map((scriptItem, index) => {
					return (
						<DialogBox
							key={index}
							finish={() => setFinished(true)}
							answer={scriptItem.answer}
							iframeURL={scriptItem.iframeURL}
							answerFormat={scriptItem.answerFormat}
						>
							{scriptItem.content}
						</DialogBox>
					);
				})}
				{keepY}
				{step >= theater.length && (
					<Button
						LinkComponent={Link}
						href={`/${localStorage.getItem('role')}`}
						fullWidth
						variant='contained'
						sx={{ mb: 10 }}
					>
						take the {localStorage.getItem('role')}'s key
					</Button>
				)}
			</div>
		</Container>
	);
};

export default Home;
