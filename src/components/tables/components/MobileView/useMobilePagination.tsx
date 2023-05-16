import { useEffect, useReducer } from "react";

export default function({ data, search }) {

    const arrayRange = (start: number, stop: number, step: number) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => start + index * step
        );

    const initialState = {
        pageIndex: 0,
        pageCount: data.length / 10,
        canPreviousPage: false,
        pageOptions: arrayRange(0, Math.ceil(data.length / 10) -1, 1),
        canNextPage: data.length / 10 > 1,
    }

    function reducer(state, action) {
        let newState;
        let canPreviousPage: boolean;
        let canNextPage: boolean;

        switch (action.type) {
          case 'next_page':
            canNextPage = state.pageIndex + 1 < state.pageCount - 1;
            newState = {  
                ...state, 
                pageIndex: state.pageIndex + 1,
                canPreviousPage: true,
                canNextPage,
            };
            break;
          case 'previous_page':
            canPreviousPage = state.pageIndex - 1 > 0;
            newState = { 
                ...state, 
                pageIndex: state.pageIndex - 1,
                canNextPage: true,
                canPreviousPage,
            };
            break;
          case 'navigate_to_page':
            canPreviousPage = action.page > 0;
            canNextPage = action.page < state.pageCount;

            newState = { 
                ...state, 
                pageIndex: action.page,
                canPreviousPage,
                canNextPage,
            };
            break;
          case 'filter_items':
            newState = {
                pageIndex: 0,
                pageCount: data.length / 10,
                canPreviousPage: false,
                pageOptions: arrayRange(0, Math.ceil(data.length / 10) -1, 1),
                canNextPage: data.length / 10 > 1,
            }
            break;
        }
        return newState;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function previousPage () {
        dispatch({
            type: 'previous_page'
        })
    }

    function nextPage () {
        dispatch({
            type: 'next_page'
        })
    }

    function handleNavigateToPage (page: number)  {
        console.log(page)
        dispatch({
            type: 'navigate_to_page',
            page
        })
    }

    useEffect(() => {
        if (search) {
            dispatch({
                type: 'filter_items',
            })
        }
    }, [search])

    return {
        ...state,
        previousPage,
        nextPage,
        handleNavigateToPage,
    }
}