import { AboutComponent } from "../components/user/about/about.component";
import { CartComponent } from "../components/user/cart/cart.component";
import { ClothingComponent } from "../components/user/clothing/clothing.component";
import { ContactComponent } from "../components/user/contact/contact.component";
import { HomeComponent } from "../components/user/home/home.component";
import { LoginComponent } from "../components/user/login/login.component";
import { OrderHistoryUserComponent } from "../components/user/order-history-user/order-history-user.component";
import { OrderSuccessComponent } from "../components/user/order-success/order-success.component";
import { ProductDetailComponent } from "../components/user/product-detail/product-detail.component";
import { SignupComponent } from "../components/user/signup/signup.component";

export const childUserRoutes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "signin",
        component: LoginComponent
    },
    {
        path: "clothing",
        component: ClothingComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "product-detail/:id", 
        component: ProductDetailComponent,
        title: "product detail"
    },
    {
        path: "contact", 
        component: ContactComponent,
        title: "product detail"
    },
    {
        path: "about", 
        component: AboutComponent,
        title: "product detail"
    },
    {
        path: "cart", 
        component: CartComponent,
        title: "product detail"
    },
    {
        path: "order-success", 
        component: OrderSuccessComponent,
        title: "product detail"
    },
    {
        path: "order-history", 
        component: OrderHistoryUserComponent,
        title: "product detail"
    },
]