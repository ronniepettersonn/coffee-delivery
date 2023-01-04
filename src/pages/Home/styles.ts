import styled from "styled-components";
import bannerBG from '../../assets/banner-background.png'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    
    .bg-banner {
        background: url(${bannerBG}) no-repeat;
        background-size: cover;
        width: 100vw;
    }
    
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1120px;
        width: 100%;
        margin: 0 auto;
        height: 544px;
        
        .banner-text {
            display: flex;
            flex-direction: column;
            gap: 65px;

            .title {
                display: flex;
                flex-direction: column;
                gap: 16px;

                h1 {
                    font-family: 'Baloo 2', sans-serif;
                    color: ${props => props.theme['base-title']};
                    font-size: 48px;
                    line-height: 62.4px;
                }

                p {
                    font-family: 'Roboto', sans-serif;
                    color: ${props => props.theme['base-subtitle']};
                    font-size: 20px;
                    line-height: 26px;
                }

            }

            .icons {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;

                .item-cart {
                    display: flex;
                    gap: 12px;
                    align-items: center;

                    span {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 32px;
                        width: 32px;
                        background-color: ${props => props.theme['brand-yellow-dark']};
                        color: ${props => props.theme['base-text']};
                        border-radius: 50%;
                    }

                }

                .item-package {
                    display: flex;
                    gap: 12px;
                    align-items: center;

                    span {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 32px;
                        width: 32px;
                        background-color: ${props => props.theme['base-text']};
                        color: ${props => props.theme['base-text']};
                        border-radius: 50%;
                    }

                }

                .item-timer {
                    display: flex;
                    gap: 12px;
                    align-items: center;

                    span {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 32px;
                        width: 32px;
                        background-color: ${props => props.theme['brand-yellow']};
                        color: ${props => props.theme['base-text']};
                        border-radius: 50%;
                    }

                }

                .item-coffee {
                    display: flex;
                    gap: 12px;
                    align-items: center;

                    span {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 32px;
                        width: 32px;
                        background-color: ${props => props.theme['brand-purple']};
                        color: ${props => props.theme['base-text']};
                        border-radius: 50%;
                    }

                }
            }
        }
    }

    .shop {
        max-width: 1120px;
        width: 100%;
        margin: 0 auto;

        display: flex;
        flex-direction: column;

        h1 {
            font-family: 'Baloo 2', sans-serif;
            font-size: 32px;
            font-weight: 800;
            line-height: 41.6px;
            color: ${props => props.theme['base-subtitle']};
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            gap: 32px;
            margin-top: 54px;
        }

    }

`
