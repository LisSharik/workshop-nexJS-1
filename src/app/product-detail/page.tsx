import ToolBar from "@/app/product-detail/components/ToolBar";
import ProductDetail from "@/app/product-detail/components/product-detail/ProductDetail";
import MoreProductDetail from "@/app/product-detail/components/more-product-detail/MoreProductDetail";

export default function PorductPage(){
    return(
        <>
            <ToolBar/>
            <ProductDetail/>
            <MoreProductDetail/>
        </>
    )
}