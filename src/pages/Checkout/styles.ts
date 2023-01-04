import styled from "styled-components";

export const ContainerCheckout = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    justify-content: space-between;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    margin-top: 40px;

    .checkout {
        h1 {
            font-family: 'Baloo 2', sans-serif;
            font-size: 18px;
            font-weight: 700;
            line-height: 23.4px;
            color: ${props => props.theme['base-subtitle']};
        }
    
        .wrapper {
            background: ${props => props.theme['base-card']};
            border-radius: 6px;
            max-width: 640px;
            max-height: 372px;
            margin-top: 16px;
            padding: 40px;

            .address {
                header {
                    display: flex;
                    gap: 8px;

                    span {
                        font-family: 'Roboto', sans-serif;
                        font-size: 16px;
                        line-height: 20.8px;
                        color: ${props => props.theme['base-subtitle']};
                    }

                    p {
                        font-family: 'Roboto', sans-serif;
                        font-size: 14px;
                        line-height: 18.2px;
                        color: ${props => props.theme['base-text']};
                    }
                }

                .form {
                    display: flex;                    
                    margin-top: 32px;
                    flex-wrap: wrap;

                    input {
                        background: ${props => props.theme['base-input']};
                        border: 1px solid ${props => props.theme['base-button']};
                        padding: 12px;
                        border-radius: 4px; 
                        margin-right: 12px;
                        margin-bottom: 16px;

                        &:focus {
                            outline: 1px solid ${props => props.theme['brand-purple']};
                        }

                        &:first-child {
                            width: 200px;
                        }

                        &:nth-child(2) {
                            width: 100%;
                        }
                        
                        &:nth-child(3) {
                            width: 200px;
                        }

                        &:nth-child(4) {
                            flex: 1;
                        }

                        &:nth-child(5) {
                            width: 200px;
                        }
                        &:nth-child(6) {
                            flex: 1;
                        }

                        &:last-child {
                            width: 60px;
                        }

                    }
                }
            }
        }
    }

    .checkout .wrapper .payment {

        header {
            display: flex;
            gap: 8px;

            span {
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
                line-height: 20.8px;
                color: ${props => props.theme['base-subtitle']};
            }

            p {
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                line-height: 18.2px;
                color: ${props => props.theme['base-text']};
            }
        }

        .form {
            display: flex;
            gap: 12px;
            margin-top: 32px;


            div {
                input {
                    display: none;
                }

                label {
                    display: flex;
                    align-items: center;
                    font-family: 'Roboto', sans-serif;
                    font-size: 12px;
                    width: 178px;
                    gap: 12px;
                    background: ${props => props.theme['base-button']};
                    color: ${props => props.theme['base-text']};
                    padding: 16px 12px;
                    border-radius: 6px;

                    cursor: pointer;

                    transition: filter .2s;

                    &:hover {
                        filter: brightness(.95);
                    }
                }

                .checked {
                    background: ${props => props.theme['brand-purple-light']};
                    outline: 1px solid ${props => props.theme['brand-purple']};
                }
            }
        }
    }

    .order {
        h1 {
            font-family: 'Baloo 2', sans-serif;
            font-size: 18px;
            font-weight: 700;
            line-height: 23.4px;
            color: ${props => props.theme['base-subtitle']};
        }

        .wrapper {
            background: ${props => props.theme['base-card']};
            width: 448px;
            margin-top: 16px;
            padding: 40px;
            border-radius: 6px 44px;

            .wrapperSubtotal {
                display: flex;
                flex-direction: column;
                gap: 12px;

                span, strong {
                    display: flex;
                    justify-content: space-between;
                }

                strong {
                    margin-bottom: 24px;
                    font-size: 20px;
                    font-weight: 700;
                }

                span {
                    font-size: 16px;

                    p{
                        font-size: 14px;
                    }
                }
            }

            footer {

                    display: flex;


                    button {
                        width: 100%;
                        background: ${props => props.theme['brand-yellow']};
                        color: white;
                        height: 46px;
                        border: 0;
                        border-radius: 6px;
                        padding: 8px 12px;
                        line-height: 22.4px;
                        font-family: 'Roboto', sans-serif;
                        font-weight: 700;

                        cursor: pointer;
                    }
                }
                
            }
        }


`

export const Empty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    margin-top: 40px;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme['brand-yellow-dark']};
    }

    a {
        display: flex;
        text-decoration: none;
        max-width: 200px;
        width: 100%;
        margin-top: 32px;

        button {
            width: 100%;
            background: ${props => props.theme['brand-yellow']};
            color: white;
            height: 46px;
            border: 0;
            border-radius: 6px;
            padding: 8px 12px;
            line-height: 22.4px;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            text-transform: uppercase;

            cursor: pointer;

            transition: filter .2s;

            &:hover {
                filter: brightness(.9);
            }
        }
    }
`