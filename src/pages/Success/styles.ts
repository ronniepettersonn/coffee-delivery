import styled from "styled-components";

export const SuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;

    header {
        h1 {
            font-family: 'Baloo 2', sans-serif;
            color: ${props => props.theme['brand-yellow-dark']};
            font-size: 32px;
            font-weight: 800;
        }

        p {
            font-size: 20px;
            color: ${props => props.theme['base-subtitle']};
        }


    }

    main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;

        .info {
            display: flex;
            justify-content: center;
            flex-direction: column;
            height: 270px;
            max-width: 526px;
            width: 100%;
            gap: 32px;
            padding: 40px;
            border: 1px solid #DBAC2C;
            border-radius: 6px 36px;

            .map {
                display: flex;
                gap: 12px;

                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 32px;
                    width: 32px;
                    background-color: ${props => props.theme['brand-purple']};
                    border-radius: 50%;
                }
            }

            .timer {
                display: flex;
                gap: 12px;
                
                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 32px;
                    width: 32px;
                    background-color: ${props => props.theme['brand-yellow']};
                    border-radius: 50%;
                }
            }

            .currency {
                display: flex;
                gap: 12px;
                
                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 32px;
                    width: 32px;
                    background-color: ${props => props.theme['brand-yellow-dark']};
                    border-radius: 50%;
                }
            }
        }
    }
`