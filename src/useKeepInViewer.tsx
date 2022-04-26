import { useRef, useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useKeepInViewer(height: number) {
	const measurementRef = useRef<any>();
	const prevHeightRef = useRef(height);

	const [inViewRef, isInView] = useInView({
		rootMargin: '-100px 0px',
	});
	const setRef = useCallback(
		(node: any) => {
			measurementRef.current = node;
			inViewRef(node);
		},
		[inViewRef]
	);
	useEffect(() => {
		if (!measurementRef.current) {
			return;
		}

		const scrollBottom = window.scrollY + window.innerHeight;
		const bottomPos =
			measurementRef.current.offsetTop + measurementRef.current.offsetHeight;
		const isJustOutOfView = Math.abs(scrollBottom - bottomPos) < 200;
		if (!isInView && height !== prevHeightRef.current && isJustOutOfView) {
			window.scroll({
				top: measurementRef.current.offsetTop - (window.innerHeight / 3) * 2,
				behavior: 'smooth',
			});
		}
	}, [isInView, height]);

	return <div ref={setRef} />;
}
