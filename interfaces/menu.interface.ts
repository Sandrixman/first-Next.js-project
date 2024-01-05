export interface MenuMap {
	[key: string]: MenuItem[];
}
export interface PageData {
	_id: string;
	alias: string;
	title: string;
	category: string;
}

export interface MenuItem {
	_id: string;
	firstCategory: string;
	isOpened?: boolean;
	pages: PageData[]
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: number;
}
