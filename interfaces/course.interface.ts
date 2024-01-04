export interface AdvantageData {
	_id: string;
	title: string;
	description: string;
}

export interface SalaryData {
	_id: string;
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
}

export interface BlogData {
	_id: string;
	h1: string;
	metaTitle: string;
	metaDescription: string;
	views: number;
}

export interface FaqData {
	question: string;
	answer: string;
}

export interface CourseModel {
	tags: string[];
	_id: string;
	firstCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText?: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	advantages?: AdvantageData[];
	createdAt: Date;
	updatedAt: Date;
	salary?: SalaryData;
	faq?: FaqData[];
}
