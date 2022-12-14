import { useEffect } from "react";

export default function useMutationObserver(
	target: Node,
	options: MutationObserverInit | undefined,
	callBack: () => void
) {
	useEffect(() => {
		const observer = new MutationObserver(callBack);
		observer.observe(target as HTMLElement, options);

		return () => {
			observer.disconnect();
		};
	}, [target, options, callBack]);
}
