import { useEffect, useState } from "react";

export default function useDebounce(value, duration) {
	const [debounceValue, setDebounceValue] = useState(value);
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounceValue(value);
		}, duration);
		return () => {
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);
	return debounceValue;
}
