import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReportsModule } from './reports/reports.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    ProductsModule,
    OrdersModule,
    CustomersModule,
    ReportsModule
  ]
})
export class ComponentsModule { }
