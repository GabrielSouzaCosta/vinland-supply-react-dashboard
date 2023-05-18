import React, { useEffect, useReducer } from "react";

interface Props<T extends object> {
    search?: string;
    data: T[];
}

type StateType = {
    pageIndex: number;
    pageCount: number;
    canPreviousPage: boolean;
    pageOptions: number[];
    canNextPage: boolean;
};

type NextPage = { type: 'next_page'; };
type PreviousPage = { type: 'previous_page'; };
type FilterItems = { type: 'filter_items'; };
type NavigateToPage = { type: 'navigate_to_page'; page: number };

type AppActions = NextPage | PreviousPage | FilterItems | NavigateToPage;

export default function<T extends object>({ data, search }: Props<T>) {

    const arrayRange = (start: number, stop: number, step: number) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => start + index * step
        );

    const initialState: StateType = {
        pageIndex: 0,
        pageCount: data.length / 10,
        canPreviousPage: false,
        pageOptions: arrayRange(0, Math.ceil(data.length / 10) -1, 1),
        canNextPage: data.length / 10 > 1,
    }

    function reducer(state: StateType, action: AppActions) {
        let canPreviousPage: boolean;
        let canNextPage: boolean;

        switch (action.type) {
          case 'next_page':
            canNextPage = state.pageIndex + 1 < state.pageCount - 1;
            return {  
                ...state, 
                pageIndex: state.pageIndex + 1,
                canPreviousPage: true,
                canNextPage,
            };
          case 'previous_page':
            canPreviousPage = state.pageIndex - 1 > 0;
            return { 
                ...state, 
                pageIndex: state.pageIndex - 1,
                canNextPage: true,
                canPreviousPage,
            };
          case 'navigate_to_page':
            const page = action.page;
            canPreviousPage = page > 0;
            canNextPage = page < state.pageCount - 1;
    
            return { 
                ...state, 
                pageIndex: action?.page,
                canPreviousPage,
                canNextPage,
            };
          case 'filter_items':
            return {
                pageIndex: 0,
                pageCount: data.length / 10,
                canPreviousPage: false,
                pageOptions: arrayRange(0, Math.ceil(data.length / 10) -1, 1),
                canNextPage: data.length / 10 > 1,
            }
          default:
            return state;
        }
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