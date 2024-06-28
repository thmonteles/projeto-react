
export default interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}


const PRODUCTS_URI = "http://localhost:8000"

async function getProductsFromURI(uri: string): Promise<Product[]> {
    const rawData = await fetch(uri,
        {
            mode: 'cors',
        }
    )
    const jsonData: { success: boolean, products: any[] } = await rawData.json()

    if (!jsonData.success) {
        throw new Error('Json de produtos invalido')
    }

    const products: Product[] = jsonData.products.map((product: any) => ({
        productName: product.productName,
        descriptionShort: product.descriptionShort,
        photo: product.photo,
        price: product.price
    }))

    console.log(products)
    return products
}


export {
    getProductsFromURI,
    PRODUCTS_URI
}