// import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

interface Itens {
    id: number
    title: string,
    price: number,
    description: string,
    categoryId: number,
    category: { name: string },
    images: string[]
}


const ProdutosPage = () => {

    const [lista, setLista] = useState<Itens[]>([])
    const [id, setId] = useState<string>('')
    const [page, setPage] = useState<number>(0)
    const [titulo, setTitulo] = useState<string>('')
    const [categoria, setCategoria] = useState<string>('')
    const [isClear, setIsClear] = useState<boolean>(false)
    const [isMore, setIsMore] = useState<boolean>(false)

    const buscar = async () => {
        try {
            const response = await axios(`https://api.escuelajs.co/api/v1/products${id ? `/${id}` : `?offset=${page}&limit=${5}&title=${titulo}&categorySlug=${categoria.toLowerCase()}`}`
            )

            if (response.data.length < 5) {
                setIsMore(false)
            }
            else {
                setIsMore(true)
            }

            if (id) {
                setLista([response.data])
            }
            else {
                if(lista.length==0){
                 setLista(response.data)

                }
                else{
                    setLista((prevLista) => [...prevLista, ...response.data])
                }
            }

        } catch (error: any) {
            console.error("❌ Erro no processo:");
            console.error(error.response?.data || error.message);
        }
    }

    const handleClear = () => {
        setId('')
        setTitulo('')
        setCategoria('')
        setLista([])
        setPage(0)
        setIsClear(true)
    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setLista([])
        setPage(0)

        buscar()

        // setTimeout(() => {
        //     setLista([])
        //     console.log('limpou lista',lista)

        // }, 111)

        // setTimeout(() => {
        //     console.log('buscar',lista)
        //     // buscar()
        // }, 2111)
    }


    useEffect(() => {
        if (isClear) {
            setIsClear(false)
        }
        buscar()
    }, [isClear, page])

    useEffect(() => {
        console.log(lista)
    }, [lista])



    return (
        <div className="p-4 ">
            <div className="d-flex justify-content-between">
                <h2 className="fs-4 fw-semibold opacity-75">Produtos</h2>
                <Button className="" variant="success">Cadastrar Produto</Button>
            </div>
            <hr className="border-top border-dark border-1 opacity-50 my-2" />
            <h3 className="fs-5 fw-semibold opacity-75 my-4">Filtros de Pesquisa</h3>

            <form
                onSubmit={(e) => {
                    handleSubmit(e)
                }}

                className="" action="">
                <div className="d-flex flex-column gap-lg-4">

                    <Row className=" ">
                        <Col className="col-12 col-lg-6 mb-4 mb-lg-0" >
                            <label className="form-label" htmlFor="">ID</label>
                            <input className="form-control input-size" onChange={(e) => { setId((e.target.value)) }} placeholder="Pesquise pelo id" value={id} type="number" />
                        </Col>

                        <Col className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <label className="form-label" htmlFor="">Titulo</label>
                            <input className="form-control input-size" value={titulo} onChange={(e) => { setTitulo((e.target.value)) }} placeholder="Pesquise pelo titulo" type="text" />
                        </Col>
                    </Row>
                    <Row className=" ">
                        <Col className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <label className="form-label" htmlFor="">Preço </label>
                            <input className="form-control input-size" disabled placeholder="Pesquise pelo preço" type="text" />
                        </Col>

                        <Col className="col-12 col-lg-6 mb-4 mb-lg-0" >
                            <label className="form-label" htmlFor="">Categoria</label>
                            <input className="form-control" value={categoria} onChange={(e) => { setCategoria((e.target.value)) }} placeholder="Pesquise pela categoria" type="text" />
                        </Col>

                    </Row>

                </div>

                <div className="flex justify-content-end justify-content-end d-flex w-100 mt-4 py-4 pr-2 gap-2  align-items-end" >
                    <Button className="px-5" variant="danger" onClick={() => { handleClear() }} >Limpar</Button>
                    <Button className="px-5" variant="primary" type="submit" >Pesquisar</Button>
                </div>



            </form>

            <div className="rounded-3 p-2 overflow-auto ">
                <table className="table rounded-3  border table-responsive     ">
                    <thead className="text-black-50 bg-black">
                        <tr className="text-secundady bg-black">
                            <th className="p-4  text-secundady " scope="col">
                                Id
                            </th>
                            <th className="p-4 " scope="col">
                                Imagem
                            </th>
                            <th className="p-4 " scope="col">
                                Titulo
                            </th>
                            <th className="p-4 " scope="col">
                                Categoria
                            </th>
                            <th className="p-4 " scope="col">
                                Descrição
                            </th>
                            <th className="p-4 " scope="col">
                                Preço
                            </th>
                            <th className="p-4  text-center" scope="col">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {lista?.map((item) => (
                            <tr className="p-5">
                                <th className="p-4 " scope="row">{item.id}</th>
                                <td className="p-4"><img className="w-100 h-50 rounded-1" src={item.images[0]} alt="" /></td>
                                <td className="p-4 ">{item.title}</td>
                                <td className="p-4">{item.category.name}</td>
                                <td className="p-4 max-h-25
                text-truncate
                  " style={{ maxWidth: '35vw' }}>{item.description == 'lorem' ? "..." : item.description}</td>
                                <td className="p-4 text-truncate ">R$ {Number(item.price).toFixed(2)}</td>
                                <td className="p-4 ">
                                    <div className="mb-5 d-flex gap-2">

                                        <Button className="" variant="success">Editar</Button>
                                        <Button className="px-2 " variant="danger"
                                        // onClick={() => { onDelete() }}
                                        >Deletar</Button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-center my-4">
                {isMore &&
                    <Button onClick={() => { setPage(page + 5) }} variant="primary" className="px-4 mx-auto" >Ver mais</Button>
                }
            </div>
        </div>
    );
};

export default ProdutosPage;
