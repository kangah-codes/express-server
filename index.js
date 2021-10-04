const express = require("express");
const app = express();

// create an array of objects with the following properties:
// id, name, category, price, image, stars, review
const products = [
	{
		id: 1,
		name: "Product 1",
		category: "Category 1",
		price: 100,
		image: "https://picsum.photos/200/300/?random",
		stars: 4.5,
		review: 10,
	},
	{
		id: 2,
		name: "Product 2",
		category: "Category 2",
		price: 200,
		image: "https://picsum.photos/200/300/?random",
		stars: 4.5,
		review: 10,
	},
	{
		id: 3,
		name: "Product 3",
		category: "Category 3",
		price: 300,
		image: "https://picsum.photos/200/300/?random",
		stars: 4.5,
		review: 10,
	},
	{
		id: 4,
		name: "Product 4",
		category: "Category 4",
		price: 400,
		image: "https://picsum.photos/200/300/?random",
		stars: 4.5,
		review: 10,
	},
	{
		id: 5,
		name: "Product 5",
		category: "Category 5",
		price: 500,
		image: "https://picsum.photos/200/300/?random",
		stars: 4.5,
		review: 10,
	},
	{
		id: 6,
		name: "Product 6",
		category: "Category 6",
		price: 600,
		image: "https://picsum.photos/200/300/?random",
		stars: 4.5,
		review: 10,
	},
	{
		id: 7,
		name: "Product 7",
		category: "Category 7",
		price: 700,
		image: "https://picsum.photos/200/300/?random",
		stars: 4.5,
		review: 10,
	},
	{
		id: 8,
		name: "Product 8",
		category: "Category 8",
		price: 800,
		image: "https://picsum.photos/200/300/?random",
		stars: 4.5,
		review: 10,
	},
];

app.get("/", (req, res) => {
	res.json({
		name: "John Doe",
		age: 30,
	});
});

app.get("/products", (req, res) => {
	res.json({
		products: products,
	});
});

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});
