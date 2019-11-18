import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const Apis = {
    loadSalgadas: () => Api.get('receitasSalgadas'),
    loadDoces: () => Api.get('receitasDoces'),
    save: (livro) => Api.post('livros', livro),

}

export default Apis;

