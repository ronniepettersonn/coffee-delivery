import { CardContainer } from "./styles";
import { ShoppingCart, Plus, Minus } from 'phosphor-react'


import { useContext, useState } from "react";
import { InputQuantity } from "../InputQuantity";
import { CartContext } from "../../contexts/CartContext";


export interface ProductProps {
    id: string
    title: string
    image: string
    tags: string[]
    subtitle: string
    price: number
    quantity?: number
}

interface CardProps {
    product: ProductProps
}

export function Card({ product }: CardProps) {
    const [quantityProduct, setQuantityProduct] = useState(1)

    const { setOrder } = useContext(CartContext)

    function handleAddProductCart(product: ProductProps) {

        let newProduct = product

        newProduct = {
            id: product.id,
            image: product.image,
            price: product.price,
            subtitle: product.subtitle,
            tags: product.tags,
            title: product.title,
            quantity: quantityProduct
        }



        setOrder((state: any) => {
            const newState = [...state, newProduct]

            const setNewState = new Set()

            const teste = newState.filter((item) => {
                const duplicateItem = setNewState.has(item.id)
                setNewState.add(item.id)
                return !duplicateItem
            })

            return teste
        })

        setQuantityProduct(1)
        alert('Produto adicionado com sucesso!')

        return
    }

    return (
        <CardContainer>
            <header>
                <img src={product.image} alt="Imagem de xicara de café" />
                <div className="tags">
                    {
                        product.tags.map(tag => {
                            return (
                                <span key={tag}>{tag}</span>
                            )
                        })
                    }

                </div>
            </header>

            <main>
                <h2>{product.title}</h2>
                <p>{product.subtitle}</p>
            </main>

            <footer>
                <div className="price">
                    <span>R$</span> {product.price.toFixed(2)}
                </div>

                <div className="card-shop">
                    {/* <div className="input">
                        <button className="minus" onClick={() => handleRemoveUnitProduct()}><Minus color="#8047F8" size={14} weight='bold' /></button>
                        <input type="number" name="productQtd" readOnly id="productQtd" min={1} value={quantityProduct} onChange={(e) => setQuantityProduct(Number(e.target.value))} />
                        <button className="plus" onClick={() => handleAddUnitProduct()}><Plus color="#8047F8" size={14} weight='bold' /></button>
                    </div> */}
                    <InputQuantity setQuantityProduct={setQuantityProduct} quantityProduct={quantityProduct} />

                    <button type="button" onClick={() => { handleAddProductCart(product) }}> <ShoppingCart weight="fill" size={22} /> </button>
                </div>
            </footer>

        </CardContainer>
    )
}