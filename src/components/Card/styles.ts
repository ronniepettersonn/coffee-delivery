import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 256px;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px 6px 36px;
    padding-bottom: 20px;

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -20px;
        gap: 12px;

        .tags {
            display: flex;
            gap: 8px;

            span {
            background: ${props => props.theme['brand-yellow-light']};
            color: ${props => props.theme['brand-yellow-dark']};
            border-radius: 100px;
            padding: 4px 8px;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 10px;
            text-transform: uppercase;
        }
        }
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        text-align: center;
        padding: 0 20px;
        margin-top: 16px;

        h2 {
            font-family: 'Ballo 2', sans-serif;
            color: ${props => props.theme['base-subtitle']};
            font-size: 20px;
            line-height: 26px;
            font-weight: 700;
        }

        p {
            font-family: 'Roboto', sans-serif;
            color: ${props => props.theme['base-label']};
            font-size: 14px;
            line-height: 18.2px;

        }
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 33px;
        width: 208px;

        .price {
            display: flex;
            align-items: flex-end;
            line-height: 0;
            
            gap: 4px;
            font-family: 'Baloo 2', sans-serif;
            color: ${props => props.theme['base-text']};
            font-weight: 800;
            font-size: 24px;

            span {
                font-size: 14px;
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
            }
        }

        .card-shop {
            display: flex;
            gap: 8px;

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                border: 0;
                border-radius: 6px;
                background: ${props => props.theme['brand-purple-dark']};
                color: white;
                padding: 8px;

                cursor: pointer;

                transition: filter .2s;

                &:hover {
                    filter: brightness(1.2);
                }
            }
        }
    }
`