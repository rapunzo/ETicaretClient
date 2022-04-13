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

    this.httpClientService.get({
      controller: 'products'
    }).subscribe(data => console.log(data));
    
    this.httpClientService.post({
        controller: 'products'        
      },
      {
        name: 'kalem',
        stock: 100,
        price: 15
      }
    ).subscribe();

    this.httpClientService.post({
      controller: 'products'        
    },
    {
      name: 'kağıt',
      stock: 1000,
      price: 1
    }
  ).subscribe();

  }

}
