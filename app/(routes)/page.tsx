import getBillboard from "@/actions/GetBillboard"
import getProducts from "@/actions/GetProducts"
import Billboard from "@/components/Billboard"
import ProductList from "@/components/ProductList"
import Container from "@/components/ui/Container"

export const revalidate = 0

const HomePage = async () => {

const products = await getProducts({ isFeatured: true })
const billboard = await getBillboard('612aa5c6-3c7c-4194-92b5-a1f0d8c1ece3')

  return (
    <Container>
      <div className="space-y-10 pb-10">
         {/* @ts-ignore */}
        <Billboard data={billboard}/>
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
         <ProductList title='Featured Products' items={products}/>
      </div>
    </Container>
  )
}

export default HomePage