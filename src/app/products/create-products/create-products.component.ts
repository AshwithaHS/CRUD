import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {
  ProductName='';
  CategoryId='';
  Description='';
  Rating='';
  ProductColor='';
  IsAvailable='';
  ProductPrice='';
  Reviews='';

  constructor(private prodSer:ProductsService) { }

  ngOnInit(): void {
  }

  addNewProd(frm:any){
    debugger
    console.log(frm.value);
    let newProduct = {
      productId:16,
      CategoryId:frm.value.CategoryId,
      ProductName:frm.value.ProductName ,
      description: frm.value.Description,
      rating: frm.value.Rating,
      price: frm.value.ProductPrice,
      product_img: '',
      is_available: frm.value.IsAvailable,
      color: frm.value.ProductColor,
      reviews: frm.value.Reviews,
    }

    console.log('newprod'+ newProduct);
    this.prodSer.createProduct(newProduct).subscribe(data =>{
      console.log(data);
    })
  }

}
