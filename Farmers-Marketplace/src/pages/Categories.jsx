import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const Categories = () => {
	const productStore = useContext(ProductContext);

	const categories = [
		{ title: "Livestocks", action: "Livestocks" },
		{ title: "Crops", action: "Crops" },
		{ title: "Farm Inputs", action: "Farm Inputs" },
		{ title: "Processed Products", action: "Processed Products" },
		{ title: "Product", action: "product" },
	];

	const changeCategory = (action) => {
		if (productStore && productStore.changeCategory) {
			productStore.changeCategory(action);
		} else {
			console.warn("ProductContext is not available or missing changeCategory.");
		}
	};

	return (
		<div className="buyers-product-category">
			<ul>
				{categories.map((category, index) => (
					<li key={index} onClick={() => changeCategory(category.action)}>
						{category.title}
					</li>
				))}
			</ul>
		</div>
	);
};
