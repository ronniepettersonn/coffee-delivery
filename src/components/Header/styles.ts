import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 104px;
    max-width: 1120px;
    margin: 0 auto;

    div {
        display: flex;
        gap: 12px;

        span {
            display: flex;
            gap: 4px;
            align-items: center;
            background: ${props => props.theme['brand-purple-light']};
            color: ${props => props.theme['brand-purple-dark']};
            padding: 8px;
            border-radius: 6px;
        }

        button {
            background: ${props => props.theme['brand-yellow-light']};
            border: none;
            padding: 8px;
            border-radius: 6px;
            position: relative;

            cursor: pointer;
            transition: filter .2s;

            &:hover {
                filter: brightness(.95);
            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background: ${props => props.theme['brand-yellow-dark']};
                color: white;
                font-weight: 700;
                line-height: 0;
                position: absolute;
                top: -10px;
                right: -10px;
            }
        }
    }
`