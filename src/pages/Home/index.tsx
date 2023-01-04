import { HomeContainer } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import BannerImg from '../../assets/banner-img.png'
import { Card } from "../../components/Card";


const response = [
    {
        id: '1',
        title: 'Expresso Tradicional',
        subtitle: 'Expresso diluído, menos intenso que o tradicional',
        image: 'http://localhost:5173/src/assets/coffee1.png',
        tags: ['tradicional'],
        price: 9.9,
    },
    {
        id: '2',
        title: 'Expresso Americano',
        subtitle: 'Expresso diluído, menos intenso que o tradicional',
        image: 'http://localhost:5173/src/assets/coffee1.png',
        tags: ['tradicional', 'com leite'],
        price: 12.9,
    },
    {
        id: '3',
        title: 'Expresso Cremoso',
        subtitle: 'Expresso diluído, menos intenso que o tradicional',
        image: 'http://localhost:5173/src/assets/coffee1.png',
        tags: ['tradicional'],
        price: 11.9,
    },
    {
        id: '4',
        title: 'Café com Leite',
        subtitle: 'Expresso diluído, menos intenso que o tradicional',
        image: 'http://localhost:5173/src/assets/coffee1.png',
        tags: ['tradicional'],
        price: 8.9,
    },
    {
        id: '5',
        title: 'Latte',
        subtitle: 'Expresso diluído, menos intenso que o tradicional',
        image: 'http://localhost:5173/src/assets/coffee1.png',
        tags: ['tradicional'],
        price: 7.9,
    },
    {
        id: '6',
        title: 'Capuccino',
        subtitle: 'Expresso diluído, menos intenso que o tradicional',
        image: 'http://localhost:5173/src/assets/coffee1.png',
        tags: ['tradicional'],
        price: 6.9,
    },
]

export function Home() {
    return (
        <HomeContainer>
            <div className="bg-banner">
                <div className="wrapper">
                    <section className="banner-text">
                        <div className="title">
                            <h1>Encontre o café perfeito <br />
                                para qualquer hora do dia</h1>
                            <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br />
                                qualquer hora</p>
                        </div>

                        <div className="icons">
                            <div className="item-cart">
                                <span>
                                    <ShoppingCart weight="fill" color="#FAFAFA" />
                                </span>
                                Compra simples e segura
                            </div>

                            <div className="item-package">
                                <span>
                                    <Package weight="fill" color="#FAFAFA" />
                                </span>
                                Embalagem mantém o café intacto
                            </div>

                            <div className="item-timer">
                                <span>
                                    <Timer weight="fill" color="#FAFAFA" />
                                </span>
                                Entrega rápida e rastreada
                            </div>

                            <div className="item-coffee">
                                <span>
                                    <Coffee weight="fill" color="#FAFAFA" />
                                </span>
                                O café chega fresquinho até você
                            </div>
                        </div>
                    </section>

                    <section className="banner-image">
                        <img src={BannerImg} alt="Foto de um copo de café" />
                    </section>
                </div>
            </div>

            <div className="shop">
                <h1>Nossos Cafés</h1>

                <div className="cards">
                    {
                        response.map(data => {
                            return (
                                <Card
                                    key={data.id}
                                    product={data}
                                />
                            )
                        })
                    }

                </div>
            </div>

        </HomeContainer>
    )
}