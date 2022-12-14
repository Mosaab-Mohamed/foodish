import {
	PeopleAlt,
	Category,
	Apps,
	LibraryBooks,
	Email,
	Paid,
} from "@mui/icons-material";
import useRequest from "shared/hooks/useRequest";
import { LoadOrError, GridContainer, GridItem } from "admin/components";
import Card from "./Card";
import { Order } from "store/shared/types/orders";
import { Message } from "store/shared/types/messages";

export default function Home() {
	const { response, error, isLoading } = useRequest({ url: "db" });

	if (error || isLoading)
		return <LoadOrError error={error} isLoading={isLoading} />;

	const db = response?.data;
	const users = db?.users;
	const categories = db?.categories;
	const items = db?.items;
	const orders = db?.orders;
	const messages = db?.messages;
	return (
		<GridContainer columnSpacing={4} rowSpacing={3}>
			<GridItem md={3}>
				<Card
					Icon={Email}
					number={
						messages?.filter((mes: Message) => !mes.replied).length || 0
					}
					title="New Messages"
					link="messages"
					RGBcolor="53 179 123"
				/>
			</GridItem>
			<GridItem md={3}>
				<Card
					Icon={LibraryBooks}
					number={
						orders?.filter((ord: Order) => ord.status === "received")
							.length || 0
					}
					title="New Orders"
					link="orders"
					RGBcolor="166 51 189"
				/>
			</GridItem>
			<GridItem md={3}>
				<Card
					Icon={LibraryBooks}
					number={
						orders?.filter((ord: Order) => ord.status === "delivered")
							.length || 0
					}
					title="Deleivered Orders"
					link="orders"
					RGBcolor="51 187 189"
				/>
			</GridItem>

			<GridItem md={3}>
				<Card
					Icon={PeopleAlt}
					number={users?.length || 0}
					title="Users"
					link="users"
					RGBcolor="196 67 67"
				/>
			</GridItem>
			<GridItem md={3}>
				<Card
					Icon={Category}
					number={categories?.length || 0}
					title="Categories"
					link="categories"
					RGBcolor="51 94 189"
				/>
			</GridItem>
			<GridItem md={3}>
				<Card
					Icon={Apps}
					number={items?.length || 0}
					title="Items"
					link="items"
					RGBcolor="51 189 68"
				/>
			</GridItem>
		</GridContainer>
	);
}
