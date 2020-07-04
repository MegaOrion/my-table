import { Component } from "@angular/core"



@Component({
    selector: 'table-host',
    templateUrl: './table-host.component.html',
    styleUrls: ['./table-host.component.css']
})
export class TableHost {
    public log(event: number) {
        console.log(event)
    }

    public PRODUCTS: any[] = [
        {id: 1, product: 'product 1', price: 100, category: 1},
        {id: 2, product: 'product 2', price: 200, category: 1},
        {id: 3, product: 'product 3', price: 300, category: 1},
        {id: 4, product: 'product 4', price: 400, category: 2},
        {id: 5, product: 'product 5', price: 500, category: 2},
        {id: 6, product: 'product 6', price: 600, category: 2},
        {id: 7, product: 'product 7', price: 700, category: 2},
        {id: 8, product: 'product 8', price: 800, category: 3},
        {id: 9, product: 'product 9', price: 900, category: 3},
        {id: 10, product: 'product 10', price: 999, category: 3},
    ]
}