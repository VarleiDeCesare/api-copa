import axios from "axios"


export const getCamp = () => {

    return new Promise(async (resolve, reject) => {
        try {
            let resposta = await axios.get("https://api.api-futebol.com.br/v1/campeonatos",  {headers: {'Authorization': `Bearer live_d3c8b684bd40e7a11a0de200c9af2f`}})
            resolve(resposta.data)
        } catch (error) {
            reject(error)
        }
    })
}