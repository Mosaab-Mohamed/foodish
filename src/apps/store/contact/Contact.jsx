import { Box } from "@mui/material";
import {
	Container,
	GridContainer,
	GridItem,
	Space,
	Helmet,
} from "store/components";
import Banner from "./Banner";
import InfoCard from "./InfoCard";
import ContactForm from "./contactForm/ContactForm";
import classes from "./style.module.scss";

export default function Contact() {
	return (
		<Box className={classes.contact}>
			<Helmet title="Contact" />
			<Banner />
			<Space />
			<Container>
				<GridContainer spacing={3}>
					<GridItem md={4}>
						<InfoCard />
					</GridItem>
					<GridItem md={8}>
						<ContactForm />
					</GridItem>
				</GridContainer>
			</Container>
			<Space />
		</Box>
	);
}
