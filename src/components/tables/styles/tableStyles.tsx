import styled from 'styled-components'

interface InputContainerProps extends React.HTMLAttributes<HTMLDivElement> {
   darkMode: boolean,
}

export const TableWrapper = styled.div<InputContainerProps>`
    position: relative;
    overflow: auto;
    max-width: 100%;
    max-height: 600px;
    box-shadow: 1px 1px 10px rgba(30, 30, 30, 0.1);

    @media screen and (max-width: 1400px) {
        max-height: 400px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    thead {
        background-color: ${p => p.darkMode ? p.theme.colors.white_light : p.theme.colors.black_extra_light};
        color: ${p => p.darkMode ? p.theme.colors.black : p.theme.colors.white_medium_light};
        position: sticky;
        z-index: 1;
        top: -1px;
        border: 1px solid ${p => p.darkMode ? p.theme.colors.gray_light : p.theme.colors.black_extra_light};
        tr {
            border: 1px solid ${p => p.darkMode ? p.theme.colors.gray_light : p.theme.colors.black_extra_light};
        }
    }
    

    th {
        svg {
            display: inline-block;
            vertical-align: middle;
            margin-bottom: 2px;
        }
        background-color: ${p => p.darkMode ? p.theme.colors.white_medium_light : p.theme.colors.black_extra_light};
        border: 1px solid ${p => p.darkMode ? p.theme.colors.gray_light : p.theme.colors.black_extra_light};
        border-right: 1px solid ${p => p.darkMode ? p.theme.colors.gray_light : p.theme.colors.gray_light};
        z-index: 1;
        padding: 8px;
        white-space: nowrap;
        @media screen and (max-width: 1400px) {
            font-size: 12px;
        }
    }

    td {
        background-color: ${p => p.theme.colors.white_extra_light};
        color: ${p => p.theme.colors.black};
        border: 1px solid ${p => p.theme.colors.black_extra_light+'66'};
        padding: 8px;
        white-space: nowrap;
        text-align: center;
        @media screen and (max-width: 1400px) {
            font-size: 12px;
        }
    }

    tfoot {
        background-color: ${p => p.theme.colors.gray_light_3};
    }
`

export const TableRoundedImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`

