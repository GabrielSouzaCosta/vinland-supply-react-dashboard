import React from 'react';
import { useQuery } from "react-query";
import { getVeiculosPatio } from '../../services';
import { useStateContext } from '../../context/ContextProvider';

export default function (search='') {
    const { currentFilial } = useStateContext();
    const { data: veiculos, isLoading, refetch } = useQuery(['veiculos', [ currentFilial, search]], () => getVeiculosPatio({
        id_usuario: 427,
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL3NraW50cmFkZVwvIiwiZXhwIjoxNjgxMjQ0ODAwLCJzdWIiOnsiaWQiOjQ1LCJpZF9lbXByZXNhIjoxLCJub21lIjoiQVx1MDBlZGxzb24gTW90YSIsInVzdWFyaW8iOiJqdW5pb3IiLCJzZW5oYSI6bnVsbCwiZW1haWwiOiJhaWxzb24ubW90YUBnbWFpbC5jb20iLCJ0ZWxlZm9uZSI6IjMxOTk2MTg1MDEwIiwidGlwbyI6IjB8MSIsImZpbGlhbCI6IjEyfDE0fDE1fDE2IiwiZGVsZXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6IjIwMjMtMDQtMDUiLCJjcmVhdGVkX2F0IjpudWxsLCJtZWNhbmljbyI6MCwiY29uc3VsdGEiOjAsImFzc2luYXR1cmEiOiJodHRwczpcL1wvcGF0aW9tb2JpbGUuczMuYW1hem9uYXdzLmNvbVwvemFycF9hc3NpbmF0dXJhMzMwNTZiYjM1NmNkZjgyYzVhY2MwYmU4NDZkYzU5MjQ1NTc0NS5qcGcifX0.eGHdzOgpedaMBoNpXRS2veI4cQzOwcNmhFY5xXrf-UyX07zsESmzieTzemZpxvGd-yICNo5zwbR8I6k4XIY8LA',
        id_empresa: 12, 
        search
    }));

    console.log(veiculos);

    return { veiculos: veiculos?.data?.data.veiculos, isLoading, refetch };
}