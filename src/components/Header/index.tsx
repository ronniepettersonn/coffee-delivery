import { HeaderContainer } from "./styles";

import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";


export function Header() {
    const { order } = useContext(CartContext)

    return (
        <HeaderContainer>
            <Link to='/'>
                <img src={Logo} alt="Logo" />
            </Link>

            <div>
                <span><MapPin size={24} weight="fill" color="#8047F8" /> Belo Horizonte, MG</span>
                <Link to={order.length !== 0 ? '/checkout' : '/'}>
                    <button>
                        <ShoppingCart size={24} weight="fill" color="#C47F17" />
                        {order?.length > 0 && <span className="notifyCart">{order.length && order.length}</span>}
                    </button>
                </Link>
            </div>
        </HeaderContainer>
    )
}