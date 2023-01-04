import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { ProductProps } from "../../../../components/Card";
import { InputQuantity } from "../../../../components/InputQuantity";
import { CartContext } from "../../../../contexts/CartContext";
import { InputQuantityContainer, ItemCheckoutContainer } from "./styles";

export function ItemCheckout() {
    const { order, setOrder } = useContext(CartContext)

    useEffect(() => {
        //order.map((product: any) => setTeste(product.quantity))
    }, [order])


    function handleDeleteItem(id: string) {
        const newOrder = order.filter((product: any) => product.id !== id)

        setOrder(newOrder)
    }

    function handleAddUnitProduct(id: string) {
        const newOrder = order.map((product: any) => {
            if (product.id === id) {
                return {
                    id: product.id,
                    image: product.image,
                    price: product.price,
                    quantity: product.quantity + 1,
                    subtitle: product.subtitle,
                    tags: product.tags,
                    title: product.title
                }
            } else {
                return product
            }
        })

        setOrder(newOrder)
    }

    function handleRemoveUnitProduct(id: string) {
        const newOrder = order.map((product: any) => {
            if (product.id === id) {
                return {
                    id: product.id,
                    image: product.image,
                    price: product.price,
                    quantity: product.quantity >= 2 ? product.quantity - 1 : product.quantity,
                    subtitle: product.subtitle,
                    tags: product.tags,
                    title: product.title
                }
            } else {
                return product
            }
        })

        setOrder(newOrder)
    }

    return (
        <>
            {
                order.map((product: ProductProps) => {
                    return (
                        <ItemCheckoutContainer key={product.id}>

                            <div className="wrapperItem">
                                <div className="wrapperInfo">
                                    <img src={product.image} alt="chicara de café" />

                                    <div className="info">
                                        <span>{product.title}</span>

                                        <div className="buttons">
                                            {/* <InputQuantity defaultValue={product.quantity} /> */}
                                            <InputQuantityContainer>
                                                <div className="input">
                                                    <button className="minus" onClick={() => handleRemoveUnitProduct(product.id)}><Minus color="#8047F8" size={14} weight='bold' /></button>
                                                    <input type="number" name="productQtd" readOnly id="productQtd" min={1} value={product.quantity} />
                                                    <button className="plus" onClick={() => handleAddUnitProduct(product.id)}><Plus color="#8047F8" size={14} weight='bold' /></button>
                                                </div>
                                            </InputQuantityContainer>
                                            <button className="removeButton" onClick={() => handleDeleteItem(product.id)}> <Trash color="#8047F8" size={16} /> Remover</button>
                                        </div>
                                    </div>
                                </div>


                                <span>R$ {product.price.toFixed(2)}</span>
                            </div>
                            <div className="divider"></div>
                        </ItemCheckoutContainer>
                    )
                })
            }
        </>

    )
}