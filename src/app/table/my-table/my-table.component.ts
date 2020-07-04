import { Component, EventEmitter, Output, Input } from "@angular/core"

@Component({
    selector: 'my-table',
    templateUrl: './my-table.component.html',
    styleUrls: ['./my-table.component.css']
})

export class MyTable {
    public red_500: boolean = false;    
    private productList: any[];
    private productListShow: any[];
    @Input() public PRODUCTS: any[];
    @Input() public rows: number;
    @Output() public message: EventEmitter<number> = new EventEmitter<number>();

    ngOnChanges() {
        this.productList = [...this.PRODUCTS];
        this.getFilteredProducts()
    }
    
    public getFilteredProducts(): void {
        this.productListShow = this.productList.slice(0, +this.rows)
    }

    public showProducts(): any[] {        
        return this.productListShow
    }
    
    public showPage(num): void {
        let beginPage = num * this.rows - this.rows;
        this.productListShow = this.productList.slice(beginPage, beginPage + +this.rows)
    }

    public removeProduct(id: number) {
        this.message.emit(id);
        this.PRODUCTS = this.PRODUCTS.filter((i) => i.id !== id)
    }

    public showProductList(): void {
        this.rows = this.PRODUCTS.length
    }

    public dischargePrice(): void {
        !this.red_500 ? this.red_500 = true : this.red_500 = false;    
    }

    public filterCategory(value): void {
        value === '0' ? this.productList = this.PRODUCTS : this.productList = this.PRODUCTS.filter((item) => item.category === +value)
        this.productListShow = this.productList;
    }

    public addProduct(product, price, category) {
        if (product && !isNaN(price) && category) {
            this.PRODUCTS.push({
                id: Date.now(),
                product: product,
                price: +price,
                category: +category
            })
            this.productList = this.PRODUCTS;
        } else {
            alert('Wrong inputs')
        }        
    }

    public getCountRows(count) {
        this.rows = count;
        this.productListShow = this.productList.slice(0, this.rows)
    }

    public getBtnPag() {
        let arrBtnPag: number[] = [];        
        for (let i = 1; i <= Math.ceil(this.productList.length / this.rows); i++) {
            arrBtnPag.push(i);
        }                  
        return arrBtnPag;
    }
}