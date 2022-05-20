import {
	Box,
	Button,
	Card,
	CardMedia,
	Container,
	Dialog,
	DialogTitle,
	Grid,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export type Role = 'artist' | 'florist' | 'librarian' | 'chef' | '';

const Home: NextPage = () => {
	const [open, setOpen] = useState(false);
	const [role, setRole] = useState<Role>('');
	const handleSubmit = (x: Role) => {
		setRole(x);
		localStorage.setItem('role', x);
		setOpen(false);
	};
	useEffect(() => {}, [role]);
	return (
		<>
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
						onClick={() => setOpen(true)}
					>
						start here
					</Button>
					{/* <Link href='/home' passHref>
						<Button variant='contained' fullWidth size='large' component='div'>
							start here
						</Button>
					</Link> */}
				</Card>
			</Box>
			<Dialog open={open} onClose={() => setOpen(false)}>
				<DialogTitle sx={{ paddingLeft: 3, paddingTop: 3 }}>
					pick your role :)
				</DialogTitle>
				<Grid container spacing={3} sx={{ padding: 3, paddingTop: 1 }}>
					<Grid item xs={6}>
						<Link href='/invitation' passHref>
							<Button
								onClick={() => handleSubmit('artist')}
								fullWidth
								variant='outlined'
								size='large'
								component='div'
							>
								Artist
							</Button>
						</Link>
					</Grid>
					<Grid item xs={6}>
						<Link href='/invitation' passHref>
							<Button
								onClick={() => handleSubmit('chef')}
								fullWidth
								variant='outlined'
								size='large'
								component='div'
							>
								Chef
							</Button>
						</Link>
					</Grid>
					<Grid item xs={6}>
						<Link href='/invitation' passHref>
							<Button
								onClick={() => handleSubmit('florist')}
								fullWidth
								variant='outlined'
								size='large'
								component='div'
							>
								Florist
							</Button>
						</Link>
					</Grid>
					<Grid item xs={6}>
						<Link href='/invitation' passHref>
							<Button
								onClick={() => handleSubmit('librarian')}
								fullWidth
								variant='outlined'
								size='large'
								component='div'
							>
								Librarian
							</Button>
						</Link>
					</Grid>
				</Grid>
				{/* <Select
					value={role}
					onChange={(e: SelectChangeEvent) => {
						setRole(e.target.value as string);
					}}
					autoWidth
				>
					<MenuItem value='artist'>Artist</MenuItem>
					<MenuItem value='florist'>Florist</MenuItem>
					<MenuItem value='chef'>Chef</MenuItem>
					<MenuItem value='librarian'>Librarian</MenuItem>
				</Select> */}
			</Dialog>
		</>
	);
};

export default Home;
