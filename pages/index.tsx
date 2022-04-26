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
		if (key.code == 'ArrowRight' && currentStepFinished) {
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
				{theater
					.slice(0, step + 1)
					.map(({ content }: { content: React.ReactNode }, index) => {
						return (
							<DialogBox key={index} finish={() => setFinished(true)}>
								{content}
							</DialogBox>
						);
					})}
				{keepY}
				{step >= theater.length && (
					<ButtonGroup fullWidth>
						<Button LinkComponent={Link} href='/artist'>
							Artist
						</Button>
						<Button LinkComponent={Link} href='/chef'>
							Chef
						</Button>
						<Button LinkComponent={Link} href='/Librarian'>
							Librarian
						</Button>
						<Button LinkComponent={Link} href='/florist'>
							Florist
						</Button>
					</ButtonGroup>
				)}
			</div>
		</Container>
	);
};

export default Home;
