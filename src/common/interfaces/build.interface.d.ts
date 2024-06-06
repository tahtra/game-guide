declare interface buildInterface {
	name: string,
	title: string,
	workplaces: number,
	cost: Array<materialInterface>,
	specialization: Array<any> | null,
	comfort: Array<any> | null,
	products: Array<materialInterface>
}
