import styled from "styled-components";

export const ItemCheckoutContainer = styled.div`
    .wrapperItem{
        display: flex;
        justify-content: space-between;
        font-family: 'Roboto', sans-serif;

        .wrapperInfo {
            display: flex;
            gap: 20px;
        
            img {
                height: 64px;
                width: 64px;
            }

            .info {
                display: flex;
                flex-direction: column;
                gap: 8px;

                span {
                    font-weight: 400;
                    color: ${props => props.theme['base-subtitle']};
                }

                .buttons {
                    display: flex;
                    gap: 8px;

                    .removeButton {
                        display: flex;
                        align-items: center;
                        gap: 4px;
                        padding: 0 8px;
                        border: 0;
                        border-radius: 6px;
                        background: ${props => props.theme['base-button']};
                    }
                }
            }
        }

        span {
            color: ${props => props.theme['base-text']};
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 16px;
        }
    }

    .divider {
        margin: 24px 0;
        border-bottom: 1px solid ${props => props.theme['base-button']};
    }
`

export const InputQuantityContainer = styled.div`
        display: flex;
        gap: 8px;

        .input {
            display: flex;
            position: relative;

            .minus {
                background: transparent;
                color: ${props => props.theme['brand-purple']};
                position: absolute;
                top: 3px;

                &:hover {
                    cursor: pointer;
                }
            }

            .plus {
                background: transparent;
                color: ${props => props.theme['brand-purple']};
                position: absolute;
                right: 1px;
                top: 3px;

                &:hover {
                    cursor: pointer;
                }
            }

            
        }
        

        input {
            max-width: 72px;
            border: 0;
            border-radius: 6px;
            background: ${props => props.theme['base-button']};
            padding: 8.5px;
            text-align: center;
            font-size: 16px;
            font-family: 'Roboto', sans-serif;
        
        }

        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none;
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 0;
            border-radius: 6px;
            background: ${props => props.theme['brand-purple-dark']};
            color: white;
            padding: 8px;
        }
    
`