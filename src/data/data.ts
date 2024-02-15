const storagePath = "https://shm-product-images.s3.amazonaws.com";
const product1 = storagePath + "/images/products/1.png";
const product2 = storagePath + "/images/products/2.png";
const product3 = storagePath + "/images/products/3.png";
const product4 = storagePath + "/images/products/4.png";
const product5 = storagePath + "/images/products/5.png";
const product6 = storagePath + "/images/products/6.png";
const product7 = storagePath + "/images/products/7.png";
const product8 = storagePath + "/images/products/8.png";
const product9 = storagePath + "/images/products/9.png";
const product10 = storagePath + "/images/products/10.png";
const product11 = storagePath + "/images/products/11.png";
const product12 = storagePath + "/images/products/12.png";
const product13 = storagePath + "/images/products/13.png";
const product14 = storagePath + "/images/products/14.png";
const product15 = storagePath + "/images/products/15.png";
const product16 = storagePath + "/images/products/16.png";
const product17 = storagePath + "/images/products/17.png";
const product18 = storagePath + "/images/products/18.png";
const product19 = storagePath + "/images/products/19.png";
const product20 = storagePath + "/images/products/20.png";
const product21 = storagePath + "/images/products/21.png";
const product22 = storagePath + "/images/products/22.png";
const product23 = storagePath + "/images/products/23.png";
const product24 = storagePath + "/images/products/24.png";
const productVariantImg2 = storagePath + "/images/products/v2.jpg";
const productVariantImg3 = storagePath + "/images/products/v3.jpg";
const productVariantImg4 = storagePath + "/images/products/v4.jpg";
const productVariantImg5 = storagePath + "/images/products/v5.jpg";
const productVariantImg6 = storagePath + "/images/products/v6.jpg";
const productSport1 = storagePath + "/images/products/sport-1.png";
const productSport2 = storagePath + "/images/products/sport-2.png";
const productSport3 = storagePath + "/images/products/sport-3.png";
const productSport4 = storagePath + "/images/products/sport-4.png";
const productSport5 = storagePath + "/images/products/sport-5.png";
const productSport6 = storagePath + "/images/products/sport-6.png";
const productSport7 = storagePath + "/images/products/sport-7.png";
const productSport8 = storagePath + "/images/products/sport-8.png";
export const productImgs = [
	product1,
	product2,
	product3,
	product4,
	product5,
	product6,
	product7,
	product8,
	product9,
	product10,
	product11,
	product12,
	product13,
	product14,
	product15,
	product16,
	product17,
	product18,
	product19,
	product20,
	product21,
	product22,
	product23,
	product24,
];

export interface ProductVariant {
	id: number;
	name: string;
	thumbnail?: string;
	color?: string;
	featuredImage: string;
}
export interface Product {
	id: number;
	name: string;
	price: number;
	image: string;
	description: string;
	category: string;
	tags: string[];
	link: "/product/1";
	variants?: ProductVariant[];
	variantType?: "color" | "image";
	sizes?: string[];
	sizesOnCard?: boolean;
	buttonsOnCard?: boolean;
	allOfSizes?: string[];
	status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
}

const DEMO_VARIANTS: ProductVariant[] = [
	{
		id: 1,
		name: "Black",
		thumbnail: productVariantImg6,
		featuredImage: "images/products/1.png",
	},
	{
		id: 2,
		name: "White",
		thumbnail: productVariantImg2,
		featuredImage: "images/products/2.png",
	},
	{
		id: 3,
		name: "Orange",
		thumbnail: productVariantImg3,
		featuredImage: "images/products/3.png",
	},
	{
		id: 4,
		name: "Sky Blue",
		thumbnail: productVariantImg4,
		featuredImage: "images/products/4.png",
	},
	{
		id: 5,
		name: "Natural",
		thumbnail: productVariantImg5,
		featuredImage: "images/products/5.png",
	},
];
const DEMO_VARIANT_COLORS: ProductVariant[] = [
	{
		id: 1,
		name: "Violet",
		color: "bg-violet-400",
		featuredImage: product1,
	},
	{
		id: 2,
		name: "Yellow",
		color: "bg-yellow-400",
		featuredImage: product2,
	},
	{
		id: 3,
		name: "Orange",
		color: "bg-orange-400",
		featuredImage: product3,
	},
	{
		id: 4,
		name: "Sky Blue",
		color: "bg-sky-400",
		featuredImage: product4,
	},
	{
		id: 5,
		name: "Green",
		color: "bg-green-400",
		featuredImage: product5,
	},
];
export const PRODUCTS: Product[] = [
	{
		id: 1,
		name: "Rey Nylon Backpack",
		description: "Brown cockroach wings",
		price: 74,
		image: product6,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		link: "/product/",
		variants: DEMO_VARIANTS,
		variantType: "image",
		sizes: ["XS", "S", "M", "L", "XL"],
		allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
		status: "New in",
	},
	{
		id: 2,
		name: 'Round Buckle 1" Belt',
		description: "Classic green",
		price: 68,
		image: product7,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		link: "/product/",
		variants: DEMO_VARIANT_COLORS,
		variantType: "color",
		status: "50% Discount",
	},
	{
		id: 3,
		name: "Waffle Knit Beanie",
		description: "New blue aqua",
		price: 132,
		image: product8,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		link: "/product/",
		variants: DEMO_VARIANTS,
		variantType: "image",
		sizes: ["S", "M", "L", "XL"],
		allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
	},
	{
		id: 4,
		name: "Travel Pet Carrier",
		description: "Dark pink 2023",
		price: 28,
		image: product9,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		variants: DEMO_VARIANT_COLORS,
		variantType: "color",
		link: "/product/",
		status: "Sold Out",
	},
	{
		id: 5,
		name: "Leather Gloves",
		description: "Perfect mint green",
		price: 42,
		image: product10,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		variants: DEMO_VARIANTS,
		variantType: "image",
		sizes: ["XS", "S", "M", "L", "XL"],
		allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
		link: "/product/",
	},
	{
		id: 6,
		name: "Hoodie Sweatshirt",
		description: "New design 2023",
		price: 30,
		image: product11,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		variantType: "color",
		variants: DEMO_VARIANT_COLORS,
		link: "/product/",
	},
	{
		id: 7,
		name: "Wool Cashmere Jacket",
		description: "Matte black",
		price: 12,
		image: product12,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		variants: DEMO_VARIANTS,
		variantType: "image",
		link: "/product/",
		status: "New in",
	},
	{
		id: 8,
		name: "Ella Leather Tote",
		description: "Cream pink",
		price: 145,
		image: product13,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		variants: DEMO_VARIANTS,
		variantType: "image",
		sizes: ["XS", "S", "M", "L", "XL"],
		allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
		link: "/product/",
		status: "limited edition",
	},
];
export const SPORT_PRODUCTS: Product[] = [
	{
		id: 1,
		name: "Mastermind Toys",
		description: "Brown cockroach wings",
		price: 74,
		image: productSport1,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		link: "/product/",
		variants: DEMO_VARIANT_COLORS,
		variantType: "color",
		sizes: ["XS", "S", "M", "L", "XL"],
		allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
		status: "New in",
	},
	{
		id: 2,
		name: "Jump Rope Kids",
		description: "Classic green",
		price: 68,
		image: productSport2,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		link: "/product/",
		variants: DEMO_VARIANT_COLORS,
		variantType: "color",
		status: "50% Discount",
	},
	{
		id: 3,
		name: "Tee Ball Beanie",
		description: "New blue aqua",
		price: 132,
		image: productSport3,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		link: "/product/",
		variants: DEMO_VARIANTS,
		variantType: "image",
		sizes: ["S", "M", "L", "XL"],
		allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
	},
	{
		id: 4,
		name: "Rubber Table Tennis",
		description: "Dark pink 2023",
		price: 28,
		image: productSport4,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		variants: DEMO_VARIANT_COLORS,
		variantType: "color",
		link: "/product/",
		status: "Sold Out",
	},
	{
		id: 5,
		name: "Classic Blue Rugby",
		description: "Perfect mint green",
		price: 42,
		image: productSport5,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		variants: DEMO_VARIANTS,
		variantType: "image",
		sizes: ["XS", "S", "M", "L", "XL"],
		allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
		link: "/product/",
	},
	{
		id: 6,
		name: "Manhattan Toy WRT",
		description: "New design 2023",
		price: 30,
		image: productSport6,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		variantType: "color",
		variants: DEMO_VARIANT_COLORS,
		link: "/product/",
	},
	{
		id: 7,
		name: "Tabletop Football ",
		description: "Matte black",
		price: 12,
		image: productSport7,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		variants: DEMO_VARIANTS,
		variantType: "image",
		link: "/product/",
		status: "New in",
	},
	{
		id: 8,
		name: "Pvc Catching Toy",
		description: "Cream pink",
		price: 145,
		image: productSport8,
		category: "Category 1",
		tags: ["tag1", "tag2"],
		variants: DEMO_VARIANT_COLORS,
		variantType: "color",
		sizes: ["XS", "S", "M", "L", "XL"],
		allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
		link: "/product/",
		status: "limited edition",
	},
];
