import { Component, OnInit } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from './shared/http.service';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  productDetails: any;
  // productDetails: any[]  = [];
  tableBag: any[]  = [];
  qty: number = 0;
  // selectedProduct : any;
  selectedProduct : any[] = [];
  // total : any
  constructor(public dialog: MatDialog , private https : HttpService) {}

  



  addToCard(param: any): void {
    this.tableBag.push(param)
    

     var arr = this.tableBag

     function removeDuplicates(arr: any[]) { 
      return [...new Set(arr)]; 
  } 

  console.log(removeDuplicates(arr))
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
  ngOnInit(): void {
   this.getAllData();
  //  this.https.deleteData();
  this.https._refreshNeed.subscribe(()=>{
    this.getAllData()
  })


  function uniqueElements(tableBag: any[]) {
    var uniqueArr = tableBag.filter((a, i) => {
      return tableBag.indexOf(a) === i;
    });
    console.log(uniqueArr);
  }
  uniqueElements([]);

 
  
  }

  getAllData(){
    this.https.getData().subscribe({
      next : (param : any)=>{
          this.productDetails = param;
          console.log(param)
      }
  })
}

minus(prod : any){

  prod.quantityProd = prod.quantityProd + 1
 
  // this.qty = prod.value
  console.log(prod.quantityProd)
}
onClick(prod : any){
  prod.quantityProd = prod.quantityProd - 1
  // this.qty = prod.value
  }

  removeItem(item : any){
    this.tableBag.splice(item,1)
  }
}