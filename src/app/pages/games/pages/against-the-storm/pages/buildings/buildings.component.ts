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
			name: 'crude_workstation',
			title: 'Crude Workstation',
			workplaces: 2,
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
					stars: 0
				},
				{
					name: 'Fabric',
					stars: 0
				},
				{
					name: 'Bricks',
					stars: 0
				},
				{
					name: 'Pipes',
					stars: 0
				}
			]
		},
		{
			name: 'makeshift_post',
			title: 'Makeshift Post',
			workplaces: 2,
			cost: [{
				name: 'wood',
				count: 5
			}],
			specialization: null,
			comfort: null,
			products: [
				{
					name: 'Pack of Crops',
					stars: 0
				},
				{
					name: 'Pack of Provisions',
					stars: 0
				},
				{
					name: 'Pack of Building Materials',
					stars: 0
				}
			]
		},
		{
			name: 'geyser_pump',
			title: 'Geyser Pump',
			workplaces: 2,
			cost: [
				{
					name: 'Planks',
					count: 5
				},
				{
					name: 'Pipes',
					count: 4
				}
			],
			specialization: [],
			comfort: ['Rainwater'],
			products: [
				{
					name: 'Drizzle Water',
					stars: 3
				},
				{
					name: 'Clearance Water',
					stars: 3
				},
				{
					name: 'Storm Water',
					stars: 3
				}
			]
		},
		{
			name: 'rain_collector',
			title: 'Rain Collector',
			workplaces: 2,
			cost: [
				{
					name: 'Planks',
					count: 2
				},
				{
					name: 'Parts',
					count: 3
				}
			],
			specialization: [],
			comfort: ['Rainwater'],
			products: [
				{
					name: 'Drizzle Water',
					stars: 2
				},
				{
					name: 'Clearance Water',
					stars: 2
				},
				{
					name: 'Storm Water',
					stars: 2
				}
			]
		},
		{
			name: 'advanced_rain_collector',
			title: 'Advanced Rain Collector',
			workplaces: 3,
			cost: [
				{
					name: 'Planks',
					count: 5
				},
				{
					name: 'Pipes',
					count: 5
				},
				{
					name: 'Parts',
					count: 3
				}
			],
			specialization: [],
			comfort: ['Rainwater'],
			products: [
				{
					name: 'Drizzle Water',
					stars: 2
				},
				{
					name: 'Clearance Water',
					stars: 2
				},
				{
					name: 'Storm Water',
					stars: 2
				}
			]
		},
		{
			name: 'mine',
			title: 'Mine',
			workplaces: 4,
			cost: [
				{
					name: 'planks',
					count: 2
				},
				{
					name: 'bricks',
					count: 4
				},
				{
					name: 'parts',
					count: 2
				}
			],
			specialization: ['Engineering'],
			comfort: [],
			products: [
				{
					name: 'coal',
					stars: 2
				},
				{
					name: 'Copper Ore',
					stars: 2
				}
			]
		},
		{
			name: 'alchemist`s_hut',
			title: 'Alchemist`s Hut',
			workplaces: 2,
			cost: [
				{
					name: 'planks',
					count: 5
				},
				{
					name: 'bricks',
					count: 2
				}
			],
			specialization: ['Alchemy', 'Brewing', 'Rainwater'],
			comfort: [],
			products: [
				{
					name: 'Crystalized Dew',
					stars: 2
				},
				{
					name: 'tea',
					stars: 2
				},
				{
					name: 'wine',
					stars: 2
				}
			]
		},
		{
			name: 'apothecary',
			title: 'Apothecary',
			workplaces: 2,
			cost: [
				{
					name: 'planks',
					count: 5
				},
				{
					name: 'Bricks',
					count: 5
				}
			],
			specialization: ['Alchemy'],
			comfort: ['Rainwater'],
			products: [
				{
					name: 'Tea Tea',
					stars: 2
				},
				{
					name: 'Incense Incense',
					stars: 2
				},
				{
					name: 'Biscuits Biscuits',
					stars: 2
				}
			]
		},
		{
			name: 'artisan',
			title: 'Artisan',
			workplaces: 3,
			cost: [
				{
					name: 'Planks',
					count: 2
				},
				{
					name: 'Fabric',
					count: 4
				}
			],
			specialization: [],
			comfort: ['Cloth'],
			products: [
				{
					name: 'Ale',
					stars: 3
				},
				{
					name: 'Pickled Goods',
					stars: 1
				},
				{
					name: 'Pack of Crops',
					stars: 1
				}
			]
		},
		{
			name: 'brewery',
			title: 'Brewery',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 2
				},
				{
					name: 'Bricks Bricks',
					count: 2
				},
				{
					name: 'Fabric Fabric',
					count: 2
				}
			],
			specialization: [],
			comfort: ['Brewing'],
			products: [
				{
					name: 'Ale Ale',
					stars: 3
				},
				{
					name: 'Pickled Goods Pickled Goods',
					stars: 1
				},
				{
					name: 'Pack of Crops Pack of Crops',
					stars: 1
				}
			]
		},
		{
			name: 'flawless_brewery',
			title: 'Flawless Brewery',
			workplaces: 0,
			cost: [],
			specialization: [],
			comfort: ['Brewing'],
			products: [
				{
					name: 'Ale Ale',
					stars: 3
				},
				{
					name: 'Pickled Goods Pickled Goods',
					stars: 3
				},
				{
					name: 'Pack of Crops Pack of Crops',
					stars: 3
				}
			]
		},
		{
			name: 'brickyard',
			title: 'Brickyard',
			workplaces: 2,
			cost: [
				{
					name: 'planks',
					count: 8
				}
			],
			specialization: [],
			comfort: ['Rainwater'],
			products: [
				{
					name: 'Bricks',
					stars: 3
				},
				{
					name: 'Pottery',
					stars: 2
				},
				{
					name: 'Crystalized Dew',
					stars: 1
				}
			]
		},
		{
			name: 'carpenter',
			title: 'Carpenter',
			workplaces: 3,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Fabric Fabric',
					count: 2
				}
			],
			specialization: [],
			comfort: [
				'Wood'
			],
			products: [
				{
					name: 'Planks',
					stars: 2
				},
				{
					name: 'Tools',
					stars: 2
				},
				{
					name: 'Pack of Luxury Goods',
					stars: 2
				}
			]
		},
		{
			name: 'clothier',
			title: 'Clothier',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Bricks Bricks',
					count: 2
				}
			],
			specialization: [],
			comfort: [
				'Cloth'
			],
			products: [
				{
					name: 'Coats',
					stars: 3
				},
				{
					name: 'Waterskins',
					stars: 1
				},
				{
					name: 'Scrolls',
					stars: 1
				}
			]
		},
		{
			name: 'cooperage',
			title: 'Cooperage',
			workplaces: 2,
			cost: [

				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Bricks Bricks',
					count: 2
				}
			],
			specialization: [],
			comfort: [
				'Wood',
				'Rainwater'
			],
			products: [
				{
					name: 'Barrels',
					stars: 3
				},
				{
					name: 'Coats',
					stars: 2
				},
				{
					name: 'Tea',
					stars: 1
				}
			]
		},
		{
			name: 'flawless_cooperage',
			title: 'Flawless Cooperage',
			workplaces: 2,
			cost: [],
			specialization: [],
			comfort: [
				'Wood',
				'Rainwater'
			],
			products: [
				{
					name: 'Barrels',
					stars: 3
				},
				{
					name: 'Coats',
					stars: 3
				},
				{
					name: 'Tea',
					stars: 3
				}
			]
		},
		{
			name: 'distillery',
			title: 'Distillery',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 2
				},
				{
					name: 'Bricks Bricks',
					count: 2
				},
				{
					name: 'Fabric Fabric',
					count: 2
				}
			],
			specialization: [],
			comfort: [
				'Brewing',
				'Rainwater'
			],
			products: [
				{
					name: 'Wine',
					stars: 2
				},
				{
					name: 'Porridge',
					stars: 2
				},
				{
					name: 'Barrels',
					stars: 2
				}
			]
		},
		{
			name: 'druid`s_hut',
			title: 'Druid`s Hut',
			workplaces: 3,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Fabric Fabric',
					count: 2
				}
			],
			specialization: [],
			comfort: [
				'Alchemy'
			],
			products: [
				{
					name: 'Oil',
					stars: 3
				},
				{
					name: 'Incense',
					stars: 1
				},
				{
					name: 'Coats',
					stars: 1
				}
			]
		},
		{
			name: 'flawless_druid`s_hut',
			title: 'Flawless Druid`s Hut',
			workplaces: 3,
			cost: [],
			specialization: [],
			comfort: [
				'Alchemy'
			],
			products: [
				{
					name: 'Oil',
					stars: 3
				},
				{
					name: 'Incense',
					stars: 3
				},
				{
					name: 'Coats',
					stars: 3
				}
			]
		},
		{
			name: 'finesmith',
			title: 'Finesmith',
			workplaces: 3,
			cost: [],
			specialization: [],
			comfort: [
				'Alchemy',
				'Rainwater'
			],
			products: [
				{
					name: 'Amber',
					stars: 3
				},
				{
					name: 'Tools',
					stars: 3
				}
			]
		},
		{
			name: 'furnace',
			title: 'Furnace',
			workplaces: 3,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Bricks Bricks',
					count: 2
				}
			],
			specialization: [],
			comfort: ['Warmth'],
			products: [
				{
					name: 'Copper Bars',
					stars: 2
				},
				{
					name: 'Bricks',
					stars: 2
				},
				{
					name: 'Pie',
					stars: 2
				}
			]
		},
		{
			name: 'kiln',
			title: 'Kiln',
			workplaces: 3,
			cost: [
				{
					name: 'Bricks Bricks',
					count: 4
				}
			],
			specialization: [],
			comfort: [
				'Warmth'
			],
			products: [
				{
					name: 'Coal',
					stars: 3
				},
				{
					name: 'Bricks',
					stars: 1
				},
				{
					name: 'Jerky',
					stars: 1
				}
			]
		},
		{
			name: 'leatherworker',
			title: 'Leatherworker',
			workplaces: 2,
			cost: [
				{
					name: 'Bricks Bricks',
					count: 2
				},
				{
					name: 'Fabric Fabric',
					count: 2
				}
			],
			specialization: ['Meat'],
			comfort: [
				'Cloth'
			],
			products: [
				{
					name: 'Waterskins',
					stars: 3
				},
				{
					name: 'Fabric',
					stars: 2
				},
				{
					name: 'Pigment',
					stars: 2
				}
			]
		},
		{
			name: 'flawless_leatherworker',
			title: 'Flawless Leatherworker',
			workplaces: 2,
			cost: [],
			specialization: ['Meat'],
			comfort: ['Cloth'],
			products: [
				{
					name: 'Waterskins',
					stars: 3
				},
				{
					name: 'Fabric',
					stars: 3
				},
				{
					name: 'Pigment',
					stars: 3
				}
			]
		},
		{
			name: 'lumber_mill',
			title: 'Lumber Mill',
			workplaces: 2,
			cost: [
				{
					name: 'Bricks Bricks',
					count: 2
				},
				{
					name: 'Fabric Fabric',
					count: 2
				}
			],
			specialization: [],
			comfort: [
				'Wood'
			],
			products: [
				{
					name: 'Planks',
					stars: 3
				},
				{
					name: 'Scrolls',
					stars: 1
				},
				{
					name: 'Pack of Trade Goods',
					stars: 1
				}
			]
		},
		{
			name: 'manufactory',
			title: 'Manufactory',
			workplaces: 3,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Fabric Fabric',
					count: 2
				}
			],
			specialization: [],
			comfort: [
				'Cloth'
			],
			products: [
				{
					name: 'Training Gear',
					stars: 2
				},
				{
					name: 'Pigment',
					stars: 2
				},
				{
					name: 'Pack of Provisions',
					stars: 2
				}
			]
		},
		{
			name: 'press',
			title: 'Press',
			workplaces: 3,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Bricks Bricks',
					count: 2
				}
			],
			specialization: [],
			comfort: [
				'Engineering'
			],
			products: [
				{
					name: 'Oil',
					stars: 3
				},
				{
					name: 'Flour',
					stars: 1
				},
				{
					name: 'Pack of Luxury Goods',
					stars: 1
				}
			]
		},
		{
			name: 'provisioner',
			title: 'Provisioner',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 8
				},
				{
					name: 'Fabric Fabric',
					count: 4
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Flour',
					stars: 2
				},
				{
					name: 'Barrels',
					stars: 2
				},
				{
					name: 'Pack of Provisions',
					stars: 2
				}
			]
		},
		{
			name: 'rain_mill',
			title: 'Rain Mill',
			workplaces: 3,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Fabric Fabric',
					count: 2
				}
			],
			specialization: [],
			comfort: [
				'Engineering',
				'Farming'
			],
			products: [
				{
					name: 'Flour',
					stars: 3
				},
				{
					name: 'Scrolls',
					stars: 1
				},
				{
					name: 'Pack of Building Materials',
					stars: 1
				}
			]
		},
		{
			name: 'flawless_rain_mill',
			title: 'Flawless Rain Mill',
			workplaces: 3,
			cost: [],
			specialization: [],
			comfort: [
				'Engineering',
				'Farming'
			],
			products: [
				{
					name: 'Flour',
					stars: 3
				},
				{
					name: 'Scrolls',
					stars: 3
				},
				{
					name: 'Pack of Building Materials',
					stars: 3
				}
			]
		},
		{
			name: 'rainpunk_foundry',
			title: 'Rainpunk Foundry',
			workplaces: 3,
			cost: [],
			specialization: [],
			comfort: [
				'Engineering',
				'Warmth',
				'Rainwater'
			],
			products: [
				{
					name: 'Parts',
					stars: 3
				},
				{
					name: 'Wildfire Essence',
					stars: 3
				}
			]
		},
		{
			name: 'scribe',
			title: 'Scribe',
			workplaces: 3,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Fabric Fabric',
					count: 2
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Scrolls',
					stars: 3
				},
				{
					name: 'Ale',
					stars: 2
				},
				{
					name: 'Tools',
					stars: 1
				}
			]
		},
		{
			name: 'smelter',
			title: 'Smelter',
			workplaces: 3,
			cost: [
				{
					name: 'Bricks Bricks',
					count: 4
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Copper Bars',
					stars: 3
				},
				{
					name: 'Training Gear',
					stars: 2
				},
				{
					name: 'Biscuits',
					stars: 1
				}
			]
		},
		{
			name: 'flawless_smelterr',
			title: 'Flawless Smelte',
			workplaces: 3,
			cost: [],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Copper Bars',
					stars: 3
				},
				{
					name: 'Training Gear',
					stars: 3
				},
				{
					name: 'Biscuits',
					stars: 3
				}
			]
		},
		{
			name: 'smithy',
			title: 'Smithy',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Bricks Bricks',
					count: 2
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Tools',
					stars: 2
				},
				{
					name: 'Pipes',
					stars: 2
				},
				{
					name: 'Pack of Trade Goods',
					stars: 2
				}
			]
		},
		{
			name: 'stamping_mill',
			title: 'Stamping Mill',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Bricks Bricks',
					count: 2
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Pottery',
					stars: 3
				},
				{
					name: 'Flour',
					stars: 2
				},
				{
					name: 'Copper Bars',
					stars: 1
				}
			]
		},
		{
			name: 'supplier',
			title: 'Supplier',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Bricks Bricks',
					count: 2
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Flour',
					stars: 2
				},
				{
					name: 'Planks',
					stars: 2
				},
				{
					name: 'Waterskins',
					stars: 2
				}
			]
		},
		{
			name: 'teahouse',
			title: 'Teahouse',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Bricks Bricks',
					count: 2
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Tea',
					stars: 3
				},
				{
					name: 'Porridge',
					stars: 2
				},
				{
					name: 'Waterskins',
					stars: 1
				}
			]
		},
		{
			name: 'tinctury',
			title: 'Tinctury',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Fabric Fabric',
					count: 2
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Ale',
					stars: 2
				},
				{
					name: 'Wine',
					stars: 2
				},
				{
					name: 'Pigment',
					stars: 2
				}
			]
		},
		{
			name: 'tinkerer',
			title: 'Tinkerer',
			workplaces: 3,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Bricks Bricks',
					count: 2
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Tools',
					stars: 2
				},
				{
					name: 'Training Gear',
					stars: 2
				},
				{
					name: 'Pack of Building Materials',
					stars: 2
				}
			]
		},
		{
			name: 'toolshop',
			title: 'Toolshop',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 5
				},
				{
					name: 'Fabric Fabric',
					count: 2
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Tools',
					stars: 3
				},
				{
					name: 'Pipes',
					stars: 2
				},
				{
					name: 'Barrels',
					stars: 1
				}
			]
		},
		{
			name: 'weaver',
			title: 'Weaver',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 8
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Fabric',
					stars: 3
				},
				{
					name: 'Training Gear',
					stars: 1
				},
				{
					name: 'Pack of Trade Goods',
					stars: 1
				}
			]
		},
		{
			name: 'workshop',
			title: 'Workshop',
			workplaces: 2,
			cost: [
				{
					name: 'Planks Planks',
					count: 4
				},
				{
					name: 'Bricks Bricks',
					count: 4
				},
				{
					name: 'Fabric Fabric',
					count: 4
				}
			],
			specialization: [],
			comfort: [],
			products: [
				{
					name: 'Planks',
					stars: 2
				},
				{
					name: 'Fabric',
					stars: 2
				},
				{
					name: 'Bricks',
					stars: 2
				},
				{
					name: 'Pipes',
					stars: 0
				}
			]
		}
	];
}
