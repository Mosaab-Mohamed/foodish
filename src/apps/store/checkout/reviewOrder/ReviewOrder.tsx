import { GridContainer, GridItem, Space } from "store/components";
import ItemsTable from "./ItemsTable";
import ContactInfo from "./ContactInfo";
import Controls from "./Controls";

export default function ReviewOrder() {
	return (
		<>
			<GridContainer spacing={3}>
				<GridItem md={9}>
					<ItemsTable />
				</GridItem>
				<GridItem md={3}>
					<ContactInfo />
				</GridItem>
			</GridContainer>
			<Space />
			<Controls />
		</>
	);
}
