import { useRouteError, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { errorImg } from "shared/assets/images";

export default function ErrorPage() {
	const error: any = useRouteError();
	const navigate = useNavigate();

	return (
		<div style={{ textAlign: "center" }}>
			<img src={errorImg} alt="error" style={{ width: "30%" }} />
			<motion.h1
				initial={{ transform: "scale(1)" }}
				animate={{ transform: "scale(1.1)" }}
				transition={{
					repeat: Infinity,
					repeatType: "reverse",
					ease: "linear",
				}}
				style={{ width: "fit-content", margin: "auto" }}
			>
				Oops!
			</motion.h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>{error?.statusText || error?.message}</p>

			<Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
				Go Back
			</Button>
		</div>
	);
}
