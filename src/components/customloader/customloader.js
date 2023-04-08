import { getShoppingCart } from "../../utility/fakedb"

const customloader=async()=>{
    const loaderproducts=await fetch("products.json")
    const products=await loaderproducts.json()
     
    const savedCart=[]
    const stored=getShoppingCart()
    if(stored){
        for(const id in stored){
            const existing=products.find(product=>product.id===id)
            if(existing){
                const quan=stored[id]
                existing.quantity=quan
            }
            savedCart.push(existing)
        }
    }
    return savedCart 
}

export {customloader}