export interface MainInfo {
	[key: string]: MenuItem[];
}
export interface PageData {
	_id: string;
	alias: string;
	title: string;
	category: string;
	isOpened?: boolean;
}

export interface MenuItem {
	_id: string;
	firstCategory: string;
	pages: PageData[]
}

export interface MainMenu {
	route: string;
	name: string;
	icon: JSX.Element;
	id: number;
}
