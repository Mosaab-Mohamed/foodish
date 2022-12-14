import { Swiper as SwiperInterface } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "store/shared/types/categories";
import CategoryCard from "./CategoryCard";
import { useAppDispatch, useAppSelector } from "shared/redux/hook";
import { updateFilters } from "shared/redux/features/items/itemsSlice";
import "swiper/css";

interface SwiperCategoriesProps {
	list: Category[];
	setSwiperInstance: React.Dispatch<
		React.SetStateAction<SwiperInterface | undefined>
	>;
}

export default function SwiperCategories({
	list,
	setSwiperInstance,
}: SwiperCategoriesProps) {
	const dispatch = useAppDispatch();
	const { category: filteredCategory } = useAppSelector(
		(state) => state.items.filters
	);

	const handleClick = (value: any) => {
		dispatch(updateFilters({ name: "category", value }));
	};

	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={7}
			onInit={(swiper) => setSwiperInstance(swiper)}
		>
			{list.map((category: Category, index: number) => (
				<SwiperSlide
					key={index}
					onClick={() => handleClick(category.value)}
				>
					<CategoryCard
						image={category.image}
						name={category.name}
						active={category.value === filteredCategory}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
