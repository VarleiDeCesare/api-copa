import axios from "axios"


export const getFases = () => {

    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.get("https://api.api-futebol.com.br/v1/campeonatos/2/fases",  {headers: {'Authorization': `Bearer live_d3c8b684bd40e7a11a0de200c9af2f`}})
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}