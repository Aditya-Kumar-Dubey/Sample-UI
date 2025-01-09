import { Routes } from '@angular/router';
import { RegisterComponent } from './core/auth/register/register.component';
import { LoginComponent } from './core/auth/login/login.component';
import { AuthComponent } from './core/auth/auth.component';
import { ViewComponent } from './views/view/view.component';
import { PageNotFoundComponent } from './views/view/page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './views/view/internal-server-error/internal-server-error.component';
import { ForgetPasswordComponent } from './core/auth/forget-password/forget-password.component';
import { CardsComponent } from './features/cards/cards.component';
import { ServiceCardComponent } from './features/cards/service-card/service-card.component';
import { ProfileCardComponent } from './features/cards/profile-card/profile-card.component';
import { PriceCardComponent } from './features/cards/price-card/price-card.component';
import { TablesComponent } from './features/tables/tables.component';
import { FilterTableComponent } from './features/tables/filter-table/filter-table.component';
import { SimpleTableComponent } from './features/tables/simple-table/simple-table.component';
import { EcommercePagesComponent } from './features/ecommerce-pages/ecommerce-pages.component';
import { CheckoutComponent } from './features/ecommerce-pages/checkout/checkout.component';
import { CardCarouselComponent } from './features/ecommerce-pages/card-carousel/card-carousel.component';
import { AddToCartComponent } from './features/ecommerce-pages/add-to-cart/add-to-cart.component';
import { CreditCardCkoutComponent } from './features/ecommerce-pages/credit-card-ckout/credit-card-ckout.component';
import { ProductDetailComponent } from './features/ecommerce-pages/product-detail/product-detail.component';
import { ProductListComponent } from './features/ecommerce-pages/CheckoutFlow/product-list/product-list.component';
import { EditableTableComponent } from './features/tables/editable-table/editable-table.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'forget-password',
                component: ForgetPasswordComponent
            }
        ]
    },
    {
        path: 'view',
        component: ViewComponent,
        children: [
            {
                path: 'page-not-found',
                component: PageNotFoundComponent
            },
            {
                path: 'server-error',
                component: InternalServerErrorComponent
            }
        ]
    },
    {
        path: 'cards',
        component: CardsComponent,
        children: [
            {
                path: 'p-card',
                component: ProfileCardComponent
            },
            {
                path: 'service-card',
                component: ServiceCardComponent
            },
            {
                path: 'price-card',
                component: PriceCardComponent
            }
        ]
    },
    {
        path: 'tables',
        component: TablesComponent,
        children: [
            {
                path: 'filter-table',
                component: FilterTableComponent
            },
            {
                path: 's-table',
                component: SimpleTableComponent
            },
            {
                path: 'editable-table',
                component: EditableTableComponent
            },
        ]
    },
    {
        path: 'e-comm',
        component: EcommercePagesComponent,
        children: [
            {
                path: 'checkout',
                component: CheckoutComponent
            },
            {
                path: 'product-carousel',
                component: CardCarouselComponent
            },
            {
                path: 'add-to-cart',
                component: AddToCartComponent
            },
            {
                path: 'crdt-crd-ckout',
                component: CreditCardCkoutComponent
            },
            {
                path: 'product-detail',
                component: ProductDetailComponent
            },
            {
                path: 'product-list',
                component: ProductListComponent
            },
        ]
    }
];
