import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  
})
export class DialogComponent implements OnInit{
  myProduct : FormGroup | any;
  productDetails : any | number;

  constructor(private https : HttpService, private fb : FormBuilder){}

ngOnInit(): void {
this.myProduct = this.fb.group({
  quantityProd : 1,
  uploadImg : this.fb.control('', Validators.required ),
  productName : this.fb.control('', Validators.required),
  price : this.fb.control('', Validators.required),
 
})
}

onSubmit(){
  console.log(this.myProduct)
  this.https.postData(this.myProduct.value)
  this.myProduct.reset()
}
}
