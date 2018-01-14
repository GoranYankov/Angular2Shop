import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServicesModule } from './core/service/services.module';
import { SheredComponentModule } from './component/shered/shered.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HomeComponentModule } from './component/home/home.module';
import { RouterModule } from '@angular/router';

import {routes} from './app.routing';
import { ProductComponentModule } from './component/product/product.module';
import { ArticleComponent } from './component/article/article.component';
import { ContactComponent } from './component/contact/contact.component';
import { FaqComponent } from './component/faq/faq.component';
import { PolesnoComponent } from './component/polesno/polesno.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import { UserModule } from './component/user/user.module';
import {GardsModule} from './gards/gards.module';
import {AdminComponentModule} from './component/admin/admin.module';
import { LastStepOrderComponent } from './component/last-step-order/last-step-order.component';
import { CartComponent } from './component/cart/cart.component'
import { CartComponentModule } from './component/cart/cart.module';
import { ArticlesComponentModule } from './component/article/article.module';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { UsloviqComponent } from './component/usloviq/usloviq.component';
import { DelivaryComponent } from './component/delivary/delivary.component';
import { PlastaneComponent } from './component/plastane/plastane.component';
import { NgHttpLoaderComponentsModule } from 'ng-http-loader/components/ng-http-loader-components.module';
import { NgHttpLoaderServicesModule } from 'ng-http-loader/services/ng-http-loader-services.module';
 

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FaqComponent,
    PolesnoComponent,
    LastStepOrderComponent,
    UsloviqComponent,
    DelivaryComponent,
    PlastaneComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-site' }),
    BrowserTransferStateModule,
    HttpClientModule,
    ServicesModule,
    SheredComponentModule,
    HomeComponentModule,
    RouterModule.forRoot(routes),
    ProductComponentModule,
    FlashMessagesModule.forRoot(),
    UserModule,
    GardsModule,
    AdminComponentModule,
    CartComponentModule,
    ArticlesComponentModule,
    NgHttpLoaderModule,
    NgHttpLoaderServicesModule,
    NgHttpLoaderComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


