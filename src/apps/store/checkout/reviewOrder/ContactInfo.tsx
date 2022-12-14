import { useContext } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { Map, Phone, Person, Place } from "@mui/icons-material";
import { CheckoutContext, CheckoutContextType } from "../Context";
import ContactLine from "./ContactLine";

export default function ContactInfo() {
	const { contactInfo } = useContext(CheckoutContext) as CheckoutContextType;

	return (
		<Paper elevation={3}>
			<Box textAlign="center" p={1.5} borderBottom="1px solid #d9d9d9">
				<Typography variant="subtitle1">Contact Info</Typography>
			</Box>
			<ContactLine name="Name" value={contactInfo?.name} Icon={Person} />
			<ContactLine
				name="Phone Number"
				value={contactInfo?.phoneNumber}
				Icon={Phone}
			/>
			<ContactLine name="City" value={contactInfo?.city} Icon={Map} />
			<ContactLine
				name="Address"
				value={contactInfo?.address}
				Icon={Place}
			/>
		</Paper>
	);
}
