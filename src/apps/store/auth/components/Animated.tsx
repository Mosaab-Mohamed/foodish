import { motion } from "framer-motion";

export function Animated({
	className,
	children,
}: {
	className: string;
	children: React.ReactNode;
}) {
	return (
		<motion.div
			initial={{ x: -150, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.3 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
