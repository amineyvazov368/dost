import AdminRoot from "../pages/Admin/AdminRoot"
import AddProduct from '../pages/Admin/AddProduct'
import EditProduct from '../pages/Admin/EditProduct'
import Products from '../pages/Admin/Products'
import UserRoot from "../pages/User/UserRoot"
import MyProducts from '../pages/User/MyProducts'
import Basket from '../pages/User/Basket'
import ProductDetail from '../pages/User/ProductDetail'
import WishList from "../pages/User/WishList"

export const ROUTES=[

// admin

{

path:"/admin",
element:<AdminRoot/>,
children:[{
   path:"add-product",
   element:<AddProduct/>

},
{
    path:"edit-product",
    element:<EditProduct/>
},
{
    path:"products",
    element:<Products/>
}
]
},
// user
{
    path:"",
    element:<UserRoot/>,
    children:[{
        path:"myproduct",
        element:<MyProducts/>
    },
    {
        path:"basket",
    element:<Basket/>
    },
    {
        path:"productdetail",
        element:<ProductDetail/>
    },
    {
        path:"wishlist",
        element:<WishList/>
    }

]


}
]