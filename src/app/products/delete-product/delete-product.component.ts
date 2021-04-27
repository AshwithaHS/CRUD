import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productId = 0;
  constructor(private activatedRoute:ActivatedRoute,
    private prodSer:ProductsService) { }

  ngOnInit(): void {
    debugger;
    this.activatedRoute.params.subscribe(data=>{
      console.log(data);
    this.productId = data.id;
    this.prodSer.DeleteProduct(this.productId).subscribe(delproddata =>{
alert('deleted '+delproddata);
    })
    })
  }

}
