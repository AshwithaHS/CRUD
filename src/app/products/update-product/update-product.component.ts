import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId=0;
  prodDetails:any;
  ProductName='';
  constructor(private activatedRoure:ActivatedRoute,
    private prodSer:ProductsService) { }

  ngOnInit(): void {
    debugger;
  
    this.activatedRoure.params.subscribe(data=>{
    console.log(data);
    this.productId=data.id;

    this.prodSer.ViewProduct(this.productId).subscribe(productData => {
      console.log(productData);
      this.prodDetails = productData;
    })

  })
  }
  UpdateExistingProd(frm:any){
    console.log(frm);
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
this.prodSer.UpdateProduct(this.productId, frm.value).subscribe(data =>{

})
  }
}
