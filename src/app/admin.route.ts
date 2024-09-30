import { DashboardComponent } from "../components/admin/dashboard/dashboard.component";
import { ManageProductComponent } from "../components/admin/manage-product/manage-product.component";

export const childAdminRoutes = [
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "manage-product",
        component: ManageProductComponent
    }
]