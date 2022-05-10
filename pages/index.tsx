import { Box, Button, Card, CardMedia, Container } from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<Box
			display='flex'
			flexDirection='column'
			sx={{
				minHeight: '100vh',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Card sx={{ maxWidth: 'sm' }} elevation={6}>
				<CardMedia component='img' height='50%' image='/unknown.png' />
				<Button
					variant='contained'
					fullWidth
					size='large'
					target='_blank'
					href='https://docs.google.com/forms/d/e/1FAIpQLSdDmuqeQDCxG0BYie7Gwvyim0euyoqdyLkm_JnbTK5AyaL_Ow/viewform'
				>
					sign up
				</Button>
			</Card>
		</Box>
	);
};

export default Home;
