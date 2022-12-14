import { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";
import { Swiper as SwiperInterface } from "swiper";
import useMutationObserver from "shared/hooks/useMutationObserver";
import { useAppDispatch, useAppSelector } from "shared/redux/hook";
import { fetchCategories } from "shared/redux/features/categories/categoriesSlice";
import SwiperCategories from "./SwiperCategories";
import classes from "./style.module.scss";

const observerTarget = document.querySelector("html");
const observerOptions = { attributes: true, childList: false, subtree: false };

// TODO: Fix Margine of Slide onChangeLangugae
export default function CategoriesList() {
	const dispatch = useAppDispatch();
	const [swiperInstance, setSwiperInstance] = useState<SwiperInterface>();

	const { list } = useAppSelector((state) => state.categories);

	useEffect(() => {
		dispatch(fetchCategories());

		// eslint-disable-next-line
	}, []);

	const observerCallback = useCallback(() => {
		if (!swiperInstance?.destroyed) {
			swiperInstance?.changeLanguageDirection(document.dir as "ltr" | "rtl");
		}
	}, [swiperInstance]);

	useMutationObserver(
		observerTarget as HTMLHtmlElement,
		observerOptions,
		observerCallback
	);

	return (
		<Box className={classes.categories}>
			<SwiperCategories list={list} setSwiperInstance={setSwiperInstance} />
		</Box>
	);
}
