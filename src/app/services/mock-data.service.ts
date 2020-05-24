import { Injectable } from '@angular/core';
import { ModelData } from '../models/model-data';
import { TipeItem } from '../models/tipe-item';
import { ItemCategory } from '../models/item-category';

declare const require: any;

@Injectable({providedIn: 'root'})
export class MockDataService {
    private _modelData: ModelData = new ModelData();
    private _allYears: Array<number> = new Array<number>();

    constructor() {
        const tempData = require('../../assets/data/data.json');
        this._modelData.tipes = new Array<TipeItem>();

        tempData.Tipe.map(type => {
            const tempTipeItem = new TipeItem();
            tempTipeItem.listItems = new Array<ItemCategory>();
            tempTipeItem.nameCategory = type.tipes;
 
            for(let [year, value] of Object.entries(type.count)) {
                const tempItemCategory = new ItemCategory();
                tempItemCategory.year = year;
                tempItemCategory.value = value as number;
                tempTipeItem.listItems.push(tempItemCategory);
            }

            this._modelData.tipes.push(tempTipeItem);
        });
        console.log(this._modelData);

        this.SetAllYears();
    }

    public GetModelData(): ModelData {
        return this._modelData;
    }

    //#region Methods for table
    public GetTableList(): any {
        return this._allYears.map(a => this.BuildRowByYear(a.toString()));
    }

    public GetTotalRow(): any {
        const objSum: any = {};

        objSum['Рiк'] = "Всього";
        this._modelData.tipes.forEach(tipe => {
            objSum[tipe.nameCategory] = this.GetSumValueCatrgory(tipe.listItems);
        });

        return objSum;
    }

    private BuildRowByYear(year: string): any {
        const tableRow: any = {};
        this._modelData.tipes.forEach(tipe => {
            tableRow['Рiк'] = year;
            if(tipe.listItems.map(a => a.year).indexOf(year) + 1) {
                tableRow[tipe.nameCategory] = tipe.listItems
                                                .find(x => x.year === year)
                                                .value;
            }
            else {
                tableRow[tipe.nameCategory] = "-";
            }
        });

        return tableRow
    }
    //#endregion
    //#region Methods Auxiliary
    private Sorted = (a, b) => a - b;

    private Unique(arr: Array<number>) {
        const result = new Array<number>();
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }

        return result;
    }
    //#endregion

    //#region Methods for Years
    private SetAllYears() {
        this._modelData.tipes.map(type => {
            this._allYears = this._allYears.concat(type.listItems.map(a => parseInt(a.year)));
        });

        this._allYears = this.Unique(this._allYears);
        this._allYears.sort(this.Sorted);
    }

    public GetAllYears(): Array<number> {
        return this._allYears;
    }

    public GetMaxYear(): number {
        return this._allYears[this._allYears.length - 1];
    }

    public GetMinYear(): number {
        return this._allYears[0];
    }
    //#endregion

    //#region Methods for Catrgorys
    public GetSumValueCatrgory(listItem: Array<ItemCategory>): number {
        return listItem.reduce((a, b) => {
            return a + b.value;
        }, 0);
    }

    public GetSumValueCatrgorys(): number {
        let tempArrays = new Array<any>();
        this._modelData.tipes.map(type => {
            tempArrays = tempArrays.concat(type.listItems.map(a => a.value));
         });

        return tempArrays.reduce((a, b) => {
            return a + b;
        });
    }
    //#endregion
} 