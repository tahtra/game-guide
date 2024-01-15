declare interface buildInterface {
	name: string,
	title: string,
	worlplaces: number,
	cost: materialInterface[],
	specialization: Array<any> | null,
	comfort: Array<any> | null,
	products: materialInterface[]
}
