import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { SuccessContainer } from "./styles"
import banner from '../../assets/banner-success.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"

export function Success() {
    const { orderFinaly } = useContext(CartContext)

    return (
        <SuccessContainer>
            <header>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </header>

            <main>
                <div className="info">
                    <div className="map">
                        <span> <MapPin weight="fill" color="white" size={16} /> </span>
                        <p>Entrega em <strong> {orderFinaly.address.name}, {orderFinaly.address.number}  </strong>  <br />
                            {orderFinaly.address.neighborhood} - {orderFinaly.address.city}, {orderFinaly.address.uf}</p>
                    </div>

                    <div className="timer">
                        <span> <Timer weight="fill" color="white" size={16} /> </span>
                        <p>Previsão de entrega  <br /> <strong>20 min - 30 min</strong>  </p>
                    </div>

                    <div className="currency">
                        <span> <CurrencyDollar color="white" size={16} /> </span>
                        <p>Pagamento na entrega <br /> <strong> {orderFinaly.payment === 'debitCard' && 'Cartão de Débito' || orderFinaly.payment === 'creditCard' && 'Cartão de Crédito' || orderFinaly.payment === 'cash' && 'Dinheiro'} </strong> </p>
                    </div>
                </div>

                <div className="banner">
                    <img src={banner} alt="imagem de um homem numa moto fazendo entrega" />
                </div>
            </main>
        </SuccessContainer>
    )
}