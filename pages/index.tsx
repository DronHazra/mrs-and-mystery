import { Box, Button, Card, CardMedia, Container } from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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
				<Link href='/home' passHref>
					<Button variant='contained' fullWidth size='large' component='div'>
						start here
					</Button>
				</Link>
			</Card>
		</Box>
	);
};

export default Home;
