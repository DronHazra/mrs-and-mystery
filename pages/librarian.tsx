import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import DialogBox from '../src/DialogBox';
import { librarian } from '../src/script';
import useComponentSize from '@rehooks/component-size';
import { useKeepInViewer } from '../src/useKeepInViewer';
import { Button } from '@mui/material';
import Link from '../src/Link';

const Librarian: NextPage = () => {
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
		<Container maxWidth='md' sx={{ mt: 1 }}>
			<div ref={rootRef}>
				{librarian.slice(0, step + 1).map((scriptItem, index) => {
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
				{step >= librarian.length && (
					<Button LinkComponent={Link} href='/final'>
						the darkness
					</Button>
				)}
			</div>
		</Container>
	);
};

export default Librarian;
