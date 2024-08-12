import prismadb from "@/lib/db"

export const getProduct = async () => {
    try {
      const products = await prismadb.product.findMany({})
      return products
    } catch (err) {
      console.log(err)
      return []
    }
  }

export const getDataById = async(id: string) => {
    try {
        await prismadb.product.findUnique({
            where: {
                id
            }
        })
    }
    catch(err) {
        console.log(err)
    }
}
