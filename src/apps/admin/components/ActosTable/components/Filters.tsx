import { useState, useContext } from "react";
import { Paper, Button, Collapse } from "@mui/material";
import { FilterList, RestartAlt } from "@mui/icons-material";
import { GridContainer, GridItem } from "admin/components";
import { TableContext } from "../Context";
import { TableContextInterface, FILTER } from "../index";
import TextFilter from "./TextFilter";
import SelectFilter from "./SelectFilter";

export default function Filters() {
	const { filters, filterValues, dispatch } = useContext(
		TableContext
	) as TableContextInterface;
	const [isOpen, setIsOpen] = useState<boolean>(true);

	if (!filters) return null;
	return (
		<>
			<Button
				sx={{ mb: 1, mx: 1, textTransform: "capitalize" }}
				endIcon={<FilterList />}
				onClick={() => setIsOpen(!isOpen)}
			>
				Filters
			</Button>
			{Object.keys(filterValues).length > 0 && (
				<Button
					size="small"
					sx={{ mb: 1, textTransform: "capitalize" }}
					endIcon={<RestartAlt />}
					onClick={() => dispatch({ type: FILTER, payload: {} })}
				>
					Reset
				</Button>
			)}

			<Collapse in={isOpen}>
				<Paper elevation={2} sx={{ p: 2, mb: 2, position: "relative" }}>
					<GridContainer spacing={2}>
						{filters.map((filter, index) => (
							<GridItem md={3} key={index}>
								{filter.type === "text" ? (
									<TextFilter
										name={filter.name}
										label={filter.label}
									/>
								) : (
									<SelectFilter
										name={filter.name}
										label={filter.label}
										endpoint={filter.endpoint}
										list={filter.list}
									/>
								)}
							</GridItem>
						))}
						<GridItem md={2} />
					</GridContainer>
				</Paper>
			</Collapse>
		</>
	);
}
