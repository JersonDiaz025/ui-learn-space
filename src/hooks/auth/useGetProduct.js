import { useState, useEffect } from "react"
import { connection } from "../../services/connection";


export default function useGetProduct() {
    const [dataProduct, setDataProduct] = useState();

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await connection("getProducts", "", "");
        setDataProduct(data)
    }

    return {
        dataProduct
    }
}
