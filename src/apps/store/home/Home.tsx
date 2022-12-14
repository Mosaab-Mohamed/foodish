import { Box } from "@mui/material";
import {
	Space,
	GridContainer,
	GridItem,
	Container,
	Helmet,
} from "store/components";
import Banner from "./banner/Banner";
import CategoriesList from "./categories/CategoriesList";
import FilterBar from "./filter/FilterBar";
import ItemsList from "./items/ItemsList";

export default function Home() {
	return (
		<Box>
			<Helmet title="Home" />
			<Banner />
			<Space />
			<Container>
				<CategoriesList />
				<Space />
				<GridContainer justifyContent="space-between">
					<GridItem md={3}>
						<FilterBar />
					</GridItem>

					<GridItem md={8}>
						<ItemsList />
					</GridItem>
				</GridContainer>
				<Space />
			</Container>
		</Box>
	);
}
