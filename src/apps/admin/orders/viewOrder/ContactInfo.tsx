import { Card, Table, TableBody, TableRow, TableCell } from "@mui/material";

type Info = {
	name: string;
	phoneNumber: string;
	city: string;
	address: string;
	email?: string | undefined;
	notes?: string | undefined;
};
export default function ContactInfo({ info }: { info: Info }) {
	if (!info) return null;
	return (
		<Card elevation={3}>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell variant="head">Name</TableCell>
						<TableCell variant="head">{info.name}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell variant="head">Phone Number</TableCell>
						<TableCell variant="head">{info.phoneNumber}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell variant="head">City</TableCell>
						<TableCell variant="head">{info.city}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell variant="head">Address</TableCell>
						<TableCell variant="head">{info.address}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell variant="head">Email</TableCell>
						<TableCell variant="head">{info.email || "None"}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell variant="head">Notes</TableCell>
						<TableCell variant="head">{info.notes || "None"}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</Card>
	);
}
