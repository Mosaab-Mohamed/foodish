import { useEffect } from "react";
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./style.module.scss";

interface AlertProps extends MuiAlertProps {
	show: boolean;
	text: string;
	close: () => void;
	closeDuration?: number;
}

export function Alert(props: AlertProps) {
	const { show, text, close, closeDuration = 2500, ...restProps } = props;

	useEffect(() => {
		if (!show) return;
		const timeout = setTimeout(() => {
			close();
		}, closeDuration);

		return () => {
			clearTimeout(timeout);
		};
		// eslint-disable-next-line
	}, [show, text]);

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{ top: "0px", opacity: 0.5 }}
					animate={{ top: "50px", opacity: 1 }}
					exit={{ top: "0px", opacity: 0 }}
					className={classes.alert}
				>
					<MuiAlert variant="filled" elevation={7} {...restProps}>
						{text}
					</MuiAlert>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
