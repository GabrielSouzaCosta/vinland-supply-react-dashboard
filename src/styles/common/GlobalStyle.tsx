import { createGlobalStyle, DefaultTheme } from "styled-components";
import { colors } from "./theme";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        font-family: 'Source Sans Pro', sans-serif;
    }
    body {
        margin: 0;
    }

    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    /* clears the ‘X’ from Internet Explorer */
    input[type=search]::-ms-clear { display: none; width : 0; height: 0; }
    input[type=search]::-ms-reveal { display: none; width : 0; height: 0; }
    /* clears the ‘X’ from Chrome */
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }

    input:focus {
        outline: 2px solid ${p => p.theme.colors.primary_medium};
    }

    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    /* Firefox */
    .custom-scrollbar {
        scrollbar-width: auto;
        scrollbar-color: ${colors.primary_medium};
    }
    .scrollbar-dark {
        scrollbar-width: auto;
        scrollbar-color: ${colors.black_extra_light};
    }

    /* Chrome, Edge, and Safari */
    .custom-scrollbar::-webkit-scrollbar, .scrollbar-dark::-webkit-scrollbar {
        width: 12px;
    }
    .custom-scrollbar.thin-scrollbar::-webkit-scrollbar  {
        width: 8px;
    }

    .custom-scrollbar::-webkit-scrollbar-track, .scrollbar-dark::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.4);
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: ${colors.primary_medium};
        border-radius: 10px;
        border: 3px solid rgba(255, 255, 255, 0.4);
    }
    .scrollbar-dark::-webkit-scrollbar-thumb {
        background-color: ${colors.black_extra_light};
        border-radius: 8px;
        border: 2px solid rgba(255, 255, 255, 0.4);
    }
    
    .ReactModal__Overlay {
        opacity: 0;
        transition: opacity 200ms;
    }

    .ReactModal__Overlay--after-open{
        opacity: 1;
    }

    .ReactModal__Overlay--before-close{
        opacity: 0;
    }
`