import Layout from "../../components/layout"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function ClientePorCodigo(){
    const router = useRouter()

    useEffect(()=>{
        console.log(router.query.codigo)
    }, [])

    return (
        <Layout titulo="Navegação Dinamica">
            <span> Código: {router.query.codigo}</span>
        </Layout>
    )
}