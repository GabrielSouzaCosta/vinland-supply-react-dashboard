import axios from 'axios'

export default async function ({
    id_usuario,
    token,
    id_empresa,
    search,
}) {
    return axios.get(import.meta.env.VITE_API_URL+`/pages/patio?id_empresa=${id_empresa}&id_user=${id_usuario}&search=${search}`, {
        headers: {
            "Authorization": "Bearer "+token,
            'Access-Control-Allow-Origin': '*   '
        }
    })
}