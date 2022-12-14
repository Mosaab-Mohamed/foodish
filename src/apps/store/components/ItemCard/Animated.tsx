import { motion } from "framer-motion";

interface AnimdatedProps {
	children: React.ReactNode;
}

export default function Animated({ children }: AnimdatedProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
}
