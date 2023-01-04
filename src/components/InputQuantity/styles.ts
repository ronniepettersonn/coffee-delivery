import styled from "styled-components";

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