import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';




@Component({
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './buildings.component.html',
	styleUrls: ['./buildings.component.scss'],
	providers: []
})
export class BuildingsComponent {
	buildingsList: buildInterface[] = [
		{
			name: 'Crude_Workstation',
			title: 'Crude Workstation',
			worlplaces: 2,
			cost: [
				{
					name: 'Wood',
					count: 5
				}
			],
			specialization: null,
			comfort: null,
			products: [
				{
					name: 'Planks',
					title: 'Доски',
					stars: 0,
				},
				{
					name: 'Fabric',
					title: 'Ткань',
					stars: 0,
				},
				{
					name: 'Bricks',
					title: 'Кирпичи',
					stars: 0,
				},
				{
					name: 'Pipes',
					title: 'Трубы',
					stars: 0,
				}
			]
		},
		{
			name: 'Makeshift_Post',
			title: 'Makeshift Post',
			worlplaces: 2,
			cost: [{
				name: 'wood',
				count: 5
			}],
			specialization: null,
			comfort: null,
			products: [
				{
					title: 'Pack of Crops',
					stars: 0
				},
				{
					title: 'Pack of Provisions',
					stars: 0
				},
				{
					title: 'Pack of Building Materials',
					stars: 0
				},
			]
		},
		{
			name: 'Geyser_Pump',
			title: 'Geyser Pump',
			worlplaces: 0,
			cost: [],
			specialization: [],
			comfort: [],
			products: []
		},
		{
			name: '',
			title: '',
			worlplaces: 0,
			cost: [],
			specialization: [],
			comfort: [],
			products: []
		}
	]
}

// Geyser Pump Geyser Pump
// 5	Wood Wood
// Drizzle Water Drizzle Water (★★★)
// Clearance Water Clearance Water (★★★)
// Storm Water Storm Water (★★★)
// 2	Rainwater Specialization Rainwater
// 6	Planks Planks
// 4	Pipes Pipes
// Rain Collector Rain Collector
// Drizzle Water Drizzle Water (★★)
// Clearance Water Clearance Water (★★)
// Storm Water Storm Water (★★)
// 2	Rainwater Specialization Rainwater
// 2	Planks Planks
// 3	Parts Parts
// Advanced Rain Collector Advanced Rain Collector
// Drizzle Water Drizzle Water (★★)
// Clearance Water Clearance Water (★★)
// Storm Water Storm Water (★★)
// 3	Rainwater Specialization Rainwater
// 5	Planks Planks
// 5	Pipes Pipes
// 3	Parts Parts
// Mine Mine
// Coal Coal (★★)
// Copper Ore Copper Ore (★★)
// 4	Engineering Specialization Engineering
// 2	Planks Planks
// 4	Bricks Bricks
// 2	Parts Parts
// Alchemist's Hut Alchemist's Hut
// Crystalized Dew Crystalized Dew (★★)
// Tea Tea (★★)
// Wine Wine (★★)
// 2	Alchemy Specialization Alchemy
// Brewing Specialization Brewing
// Rainwater Specialization Rainwater
// 5	Planks Planks
// 2	Bricks Bricks
// Apothecary Apothecary
// Tea Tea (★★)
// Incense Incense (★★)
// Biscuits Biscuits (★★)
// 2	Alchemy Specialization Alchemy
// Rainwater Specialization Rainwater
// 5	Planks Planks
// 2	Bricks Bricks
// Artisan Artisan
// Coats Coats (★★)
// Barrels Barrels (★★)
// Pack of Luxury Goods Pack of Luxury Goods (★★)
// 3	Cloth Specialization Cloth
// 8	Planks Planks
// 4	Fabric Fabric
// Brewery Brewery
// Ale Ale (★★★)
// Pickled Goods Pickled Goods (★)
// Pack of Crops Pack of Crops (★)
// 2	Brewing Specialization Brewing
// 2	Planks Planks
// 2	Bricks Bricks
// 2	Fabric Fabric
// Flawless Brewery Flawless Brewery
// Ale Ale (★★★)
// Pickled Goods Pickled Goods (★★★)
// Pack of Crops Pack of Crops (★★★)
// 2	Brewing Specialization Brewing	Found in Forbidden Glades
// Brickyard Brickyard
// Bricks Bricks (★★★)
// Pottery Pottery (★★)
// Crystalized Dew Crystalized Dew (★)
// 2	Rainwater Specialization Rainwater
// 8	Planks Planks
// Carpenter Carpenter
// Planks Planks (★★)
// Tools Tools (★★)
// Pack of Luxury Goods Pack of Luxury Goods (★★)
// 3	Wood Specialization Wood
// 5	Planks Planks
// 2	Fabric Fabric
// Clothier Clothier
// Coats Coats (★★★)
// Waterskins Waterskins (★)
// Scrolls Scrolls (★)
// 2	Cloth Specialization Cloth
// 5	Planks Planks
// 2	Bricks Bricks
// Cooperage Cooperage
// Barrels Barrels (★★★)
// Coats Coats (★★)
// Tea Tea (★)
// 2	Wood Specialization Wood
// Rainwater Specialization Rainwater
// 5	Planks Planks
// 2	Bricks Bricks
// Flawless Cooperage Flawless Cooperage
// Barrels Barrels (★★★)
// Coats Coats (★★★)
// Tea Tea (★★★)
// 2	Wood Specialization Wood
// Rainwater Specialization Rainwater	Found in Forbidden Glades
// Distillery Distillery
// Wine Wine (★★)
// Porridge Porridge (★★)
// Barrels Barrels (★★)
// 2	Brewing Specialization Brewing
// Rainwater Specialization Rainwater
// 2	Planks Planks
// 2	Bricks Bricks
// 2	Fabric Fabric
// Druid's Hut Druid's Hut
// Oil Oil (★★★)
// Incense Incense (★)
// Coats Coats (★)
// 3	Alchemy Specialization Alchemy
// 5	Planks Planks
// 2	Fabric Fabric
// Flawless Druid's Hut Flawless Druid's Hut
// Oil Oil (★★★)
// Incense Incense (★★★)
// Coats Coats (★★★)
// 3	Alchemy Specialization Alchemy	Found in Forbidden Glades
// Finesmith Finesmith
// Amber Amber (★★★)
// Tools Tools (★★★)
// 3	Alchemy Specialization Alchemy
// Rainwater Specialization Rainwater	Found in Forbidden Glades
// Furnace Furnace
// Copper Bars Copper Bars (★★)
// Bricks Bricks (★★)
// Pie Pie (★★)
// 3	Warmth Specialization Warmth
// 5	Planks Planks
// 2	Bricks Bricks
// Kiln Kiln
// Coal Coal (★★★)
// Bricks Bricks (★)
// Jerky Jerky (★)
// 3	Warmth Specialization Warmth
// 4	Bricks Bricks
// Leatherworker Leatherworker
// Waterskins Waterskins (★★★)
// Fabric Fabric (★★)
// Pigment Pigment (★★)
// 2	Cloth Specialization Cloth
// Meat production Specialization Meat production
// 2	Bricks Bricks
// 2	Fabric Fabric
// Flawless Leatherworker Flawless Leatherworker
// Waterskins Waterskins (★★★)
// Fabric Fabric (★★★)
// Pigment Pigment (★★★)
// 2	Cloth Specialization Cloth
// Meat production Specialization Meat production	Found in Forbidden Glades
// Lumber Mill Lumber Mill
// Planks Planks (★★★)
// Scrolls Scrolls (★)
// Pack of Trade Goods Pack of Trade Goods (★)
// 2	Wood Specialization Wood
// 2	Bricks Bricks
// 2	Fabric Fabric
// Manufactory Manufactory
// Training Gear Training Gear (★★)
// Pigment Pigment (★★)
// Pack of Provisions Pack of Provisions (★★)
// 3	Cloth Specialization Cloth
// 5	Planks Planks
// 2	Fabric Fabric
// Press Press
// Oil Oil (★★★)
// Flour Flour (★)
// Pack of Luxury Goods Pack of Luxury Goods (★)
// 3	Engineering Specialization Engineering
// 5	Planks Planks
// 2	Bricks Bricks
// Provisioner Provisioner
// Flour Flour (★★)
// Barrels Barrels (★★)
// Pack of Provisions Pack of Provisions (★★)
// 2	none
// 8	Planks Planks
// 4	Fabric Fabric
// Rain Mill Rain Mill
// Flour Flour (★★★)
// Scrolls Scrolls (★)
// Pack of Building Materials Pack of Building Materials (★)
// 3	Engineering Specialization Engineering
// Farming Specialization Farming
// 5	Planks Planks
// 2	Fabric Fabric
// Flawless Rain Mill Flawless Rain Mill
// Flour Flour (★★★)
// Scrolls Scrolls (★★★)
// Pack of Building Materials Pack of Building Materials (★★★)
// 3	Engineering Specialization Engineering
// Farming Specialization Farming	Found in Forbidden Glades
// Rainpunk Foundry Rainpunk Foundry
// Parts Parts (★★★)
// Wildfire Essence Wildfire Essence (★★★)
// 3	Engineering Specialization Engineering
// Warmth Specialization Warmth
// Rainwater Specialization Rainwater	Found in Forbidden Glades
// Scribe Scribe
// Scrolls Scrolls (★★★)
// Ale Ale (★★)
// Tools Tools (★)
// 3	Brewing Specialization Brewing
// 5	Planks Planks
// 2	Fabric Fabric
// Smelter Smelter
// Copper Bars Copper Bars (★★★)
// Training Gear Training Gear (★★)
// Biscuits Biscuits (★)
// 3	Warmth Specialization Warmth
// 4	Bricks Bricks
// Flawless Smelter Flawless Smelter
// Copper Bars Copper Bars (★★★)
// Training Gear Training Gear (★★★)
// Biscuits Biscuits (★★★)
// 3	Warmth Specialization Warmth	Found in Forbidden Glades
// Smithy Smithy
// Tools Tools (★★)
// Pipes Pipes (★★)
// Pack of Trade Goods Pack of Trade Goods (★★)
// 2	Engineering Specialization Engineering
// Warmth Specialization Warmth
// 5	Planks Planks
// 2	Bricks Bricks
// Stamping Mill Stamping Mill
// Pottery Pottery (★★★)
// Flour Flour (★★)
// Copper Bars Copper Bars (★)
// 2	Engineering Specialization Engineering
// 5	Planks Planks
// 2	Bricks Bricks
// Supplier Supplier
// Flour Flour (★★)
// Planks Planks (★★)
// Waterskins Waterskins (★★)
// 2	Cloth Specialization Cloth
// 5	Planks Planks
// 2	Bricks Bricks
// Teahouse Teahouse
// Tea Tea (★★★)
// Porridge Porridge (★★)
// Waterskins Waterskins (★)
// 2	Alchemy Specialization Alchemy
// Rainwater Specialization Rainwater
// 5	Planks Planks
// 2	Bricks Bricks
// Tinctury Tinctury
// Ale Ale (★★)
// Wine Wine (★★)
// Pigment Pigment (★★)
// 2	Alchemy Specialization Alchemy
// Brewing Specialization Brewing
// 5	Planks Planks
// 2	Fabric Fabric
// Tinkerer Tinkerer
// Tools Tools (★★)
// Training Gear Training Gear (★★)
// Pack of Building Materials Pack of Building Materials (★★)
// 3	Engineering Specialization Engineering
// 5	Planks Planks
// 2	Bricks Bricks
// Toolshop Toolshop
// Tools Tools (★★★)
// Pipes Pipes (★★)
// Barrels Barrels (★)
// 2	Engineering Specialization Engineering
// 5	Planks Planks
// 2	Fabric Fabric
// Weaver Weaver
// Fabric Fabric (★★★)
// Training Gear Training Gear (★)
// Pack of Trade Goods Pack of Trade Goods (★)
// 2	Cloth Specialization Cloth
// 8	Planks Planks
// Workshop Workshop
// Planks Planks (★★)
// Fabric Fabric (★★)
// Bricks Bricks (★★)
// Pipes Pipes (0 Stars)
// 2	none
// 4	Planks Planks
// 4	Bricks Bricks
// 4	Fabric Fabric
