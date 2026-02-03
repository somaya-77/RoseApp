import { getLowStockService } from "@/lib/_services/low-stock.service"


export default async function LowStock(){

    const lowStock = await getLowStockService()
console.log("lowStock",lowStock)
    return(
        <></>
    )
}