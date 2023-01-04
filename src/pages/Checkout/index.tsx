import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ItemCheckout } from "./components/ItemCheckout";
import { ContainerCheckout, Empty } from "./styles";

export function Checkout() {
    const { order, setOrderFinaly, orderFinaly, setOrder } = useContext(CartContext)

    const [select, setSelect] = useState('')
    const [total, setTotal] = useState(0)
    const [subtotal, setSubtotal] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        const arrayPrice = order?.map((e: any) => { return e.price * e.quantity })
        const price = arrayPrice.length !== 0 && arrayPrice?.reduce((soma: number, i: number) => soma + i)


        setSubtotal(price)
        setTotal(price + 3.5)

    }, [order])


    function handleSelectChange(event: any) {
        const value = event
        setSelect(value)
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const newForm = {
            address: {
                cep: e.target[0].value,
                name: e.target[1].value,
                number: e.target[2].value,
                complement: e.target[3].value,
                neighborhood: e.target[4].value,
                city: e.target[5].value,
                uf: e.target[6].value
            },
            payment: select
        }

        if (orderFinaly && select) {
            setOrderFinaly(newForm)
            setOrder([])
            navigate('/success')

        } else {
            alert('preencha a forma de pagamento!')
        }
    }


    if (order.length === 0) {
        return (
            <Empty>
                <h1>Ops, seu carrinho está vazio!</h1>
                <Link to={'/'}>
                    <button>Comprar café!</button>
                </Link>
            </Empty>
        )
    } else {
        return (
            <ContainerCheckout >
                <div className="checkout">
                    <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)} id="order">
                        <h1>Complete seu pedido</h1>
                        <div className="wrapper">
                            <div className="address">
                                <header>
                                    <MapPinLine size={22} color="#C47F17" />
                                    <div>
                                        <span>Endereço de entrega</span>
                                        <p>Informe o endereço onde deseja receber seu pedido</p>
                                    </div>
                                </header>

                                <div className="form">
                                    <input type="text" placeholder="CEP" maxLength={8} minLength={8} required />
                                    <input type="text" placeholder="Rua" required />
                                    <input type="text" placeholder="Número" required />
                                    <input type="text" placeholder="Complemento" />
                                    <input type="text" placeholder="Bairro" required />
                                    <input type="text" placeholder="Cidade" required />
                                    <input type="text" placeholder="UF" maxLength={2} minLength={2} required />
                                </div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="payment">
                                <header>
                                    <CurrencyDollar size={22} color="#8047F8" />
                                    <div>
                                        <span>Pagamento</span>
                                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                    </div>
                                </header>


                                <div className="form">
                                    <div>
                                        <input
                                            type='radio'
                                            id="cartaoCredito"
                                            name="payment"
                                            value='creditCard'
                                            checked={select === 'creditCard'}
                                            onChange={event => handleSelectChange(event.target.value)}

                                        />
                                        <label htmlFor="cartaoCredito" className={select === 'creditCard' ? 'checked' : ''}>
                                            <CreditCard size={16} color="#8047F8" />
                                            Cartão de Crédito
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            type='radio'
                                            id="cartaoDebito"
                                            name="payment"
                                            value='debitCard'
                                            checked={select === 'debitCard'}
                                            onChange={event => handleSelectChange(event.target.value)}
                                        />
                                        <label htmlFor="cartaoDebito" className={select === 'debitCard' ? 'checked' : ''} >
                                            <Bank size={16} color="#8047F8" />
                                            Cartão de Débito
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            type='radio'
                                            id="dinheiro"
                                            name="payment"
                                            value='cash'
                                            checked={select === 'cash'}
                                            onChange={event => handleSelectChange(event.target.value)}
                                        />
                                        <label htmlFor="dinheiro" className={select === 'cash' ? 'checked' : ''} >
                                            <Money size={16} color="#8047F8" />
                                            Dinheiro
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </form>
                </div>

                <div className="order">
                    <h1>Cafés selecionados</h1>
                    <div className="wrapper">
                        <ItemCheckout />

                        <div className="wrapperSubtotal">
                            <span>
                                <p>Total de itens</p>
                                R$ {subtotal > 0 ? subtotal.toFixed(2) : '0.00'}
                            </span>

                            <span>
                                <p>Entrega</p>
                                R$ 3.50
                            </span>

                            <strong>
                                <p>Total</p>
                                R$ {total > 0 ? total.toFixed(2) : '0.00'}
                            </strong>
                        </div>

                        <footer>
                            <button type="submit" form="order">CONFIRMAR PEDIDO</button>
                        </footer>
                    </div>
                </div>
            </ContainerCheckout>
        )

    }
}