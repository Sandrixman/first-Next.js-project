export interface CharacteristicData {
	value: string;
	name: string;
}

export interface ReviewData {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
}

export interface ProductModel {
	_id: string;
	categories: string[];
	tags: string[];
	title: string;
	link: string;
	price: number;
	credit: number;
	oldPrice: number;
	description: string;
	characteristics: CharacteristicData[];
	createdAt: Date;
	updatedAt: Date;
	image: string;
	initialRating: number;
	reviews: ReviewData[];
	reviewCount: number;
	reviewAvg?: number;
	clicks?: number;
	advantages?: string;
	html?: string;
}
