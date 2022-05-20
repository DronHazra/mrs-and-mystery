import * as React from 'react';
import { Card, TextField, Typography } from '@mui/material';
import { WindupChildren } from 'windups';
import { keyframes } from '@emotion/react';
import useKey from './useKey';
import { Box } from '@mui/material';

const HEIGHT = 300;
const WIDTH = 480;

const float = keyframes({
	from: {
		transform: 'translate3d(0,0,0)',
	},
	'50%': {
		transform: 'translate3d(0, 6px, 0)',
	},
	to: {
		transform: 'translate3d(0,0,0)',
	},
});

const proceedTriangle = (
	<span
		css={{
			float: 'right',
			opacity: 0.5,
			animation: `${float} 1s ease-out infinite`,
		}}
	>
		▼
	</span>
);

const DialogBox = ({
	finish,
	children,
	answer,
	iframeURL,
}: {
	finish: () => void;
	children: React.ReactNode;
	answer?: string;
	iframeURL?: string;
}) => {
	const skipped = useKey('ArrowRight');
	const [answered, setAnswered] = React.useState(false);
	return (
		<Card sx={{ my: 2, pb: 1 }}>
			<WindupChildren
				skipped={skipped}
				onFinished={() => {
					if (answered || !Boolean(answer)) {
						finish();
					}
				}}
			>
				<Typography m={3} align='justify'>
					{children} {proceedTriangle}
				</Typography>
			</WindupChildren>
			{skipped && answer && (
				<TextField
					onChange={evt => {
						if (evt.target.value.toLowerCase() == answer) {
							setAnswered(true);
							finish();
						}
					}}
					autoFocus
					error={!answered}
					sx={{ m: 3, width: '80%' }}
				></TextField>
			)}
			{skipped && iframeURL && (
				<Box m={2}>
					<iframe src={iframeURL} height={HEIGHT} width={WIDTH} />
				</Box>
			)}
		</Card>
	);
};

export default DialogBox;
