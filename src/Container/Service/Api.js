import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const Apis = {
    receitasSalgadas: () => Api.get('receitasSalgadas'),
    receitasDoces: () => Api.get('receitasDoces'),
    // saveLivro: (livro) => Api.post('livros', livro),
    // deleteLivro: (id) => Api.delete("livros/" + id)
}

export default Apis;