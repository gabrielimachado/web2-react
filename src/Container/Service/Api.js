import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const Apis = {
    saveReceita: (Receita) => Api.post('receitas', Receita),
    loadReceitaById: (idReceita) => Api.get('receitas', {
        params: {
            id: idReceita
        }
    }),
    loadReceita: (tipoReceita) => Api.get('receitas', {
        params: {
            tipo: tipoReceita
        }
    })
}

export default Apis;

