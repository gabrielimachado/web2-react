import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const Apis = {
    loadSalgadas: () => Api.get('receitasSalgadas'),
    loadDoces: () => Api.get('receitasDoces'),
    saveReceita: (tipoReceita, novaReceita) => Api.post(tipoReceita, novaReceita),
    // selectImage: () => Api.get('')

}

export default Apis;

