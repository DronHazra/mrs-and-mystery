import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Box, Button, Container, Typography } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { invitations } from '../src/script';
import { Role } from './index';
const Invitation: NextPage = () => {
	const [text, setText] = useState<EmotionJSX.Element | undefined>();
	useEffect(() => {
		const returnText = () => {
			switch (localStorage.getItem('role')) {
				case 'artist':
					return invitations.artist;
					break;
				case 'florist':
					return invitations.florist;
					break;
				case 'chef':
					return invitations.chef;
					break;
				case 'librarian':
					return invitations.librarian;
					break;
				default:
					break;
			}
		};
		setText(returnText());
	}, []);

	return (
		<Container maxWidth='md'>
			<Box
				display={'flex'}
				flexDirection='column'
				sx={{ minHeight: '100vh', justifyContent: 'center' }}
			>
				{text}
				<Link href='/home' passHref>
					<Button>start</Button>
				</Link>
			</Box>
		</Container>
	);
};

export default Invitation;
