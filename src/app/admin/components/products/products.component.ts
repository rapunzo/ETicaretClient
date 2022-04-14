import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    
  //   this.httpClientService.post({
  //       controller: 'products'        
  //     },
  //     {
  //       name: 'kalem',
  //       stock: 100,
  //       price: 15
  //     }
  //   ).subscribe();

  //   this.httpClientService.post({
  //     controller: 'products'        
  //   },
  //   {
  //     name: 'kağıt',
  //     stock: 1000,
  //     price: 1
  //   }
  // ).subscribe();

  // this.httpClientService.put({
  //   controller: "products", 
  // },{
  //   id:"f2acc661-f844-45dd-9f63-7fe318f42dc4", 
  //   name: "Mavi kağıt", 
  //   stock: 500, 
  //   price: 12
  // }).subscribe();


 this.httpClientService.delete({controller: "products" },"7b1d91cc-485f-489b-9eb3-de7c68257ec8").subscribe();
 
  this.httpClientService.get({
    controller: 'products'
  }).subscribe(data => console.log(data));
 
  }
 
}
