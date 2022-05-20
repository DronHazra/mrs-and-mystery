import { useEffect, useState } from 'react';

export default function useKey(keyCode: string) {
	const [clicked, setClicked] = useState(false);
	useEffect(() => {
		const keyPressHandler = (key: KeyboardEvent) => {
			if (
				key.code === keyCode ||
				key.code === 'Enter' ||
				key.code == 'ArrowDown'
			) {
				setClicked(true);
			}
		};
		window.addEventListener('keydown', keyPressHandler);
		return () => {
			window.removeEventListener('keydown', keyPressHandler);
		};
	}, []);
	return clicked;
}
