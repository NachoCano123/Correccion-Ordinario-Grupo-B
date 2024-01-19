import {Contact} from "../types.ts"

export const obtainTimeFromCity = async(Ciudad:String): Promise<Date> => {
    //const CIUDAD = `https://api.api-ninjas.com/v1/country?name=/${Pais}/capital`
    const API_URL_CAPITAL = 'https://api.api-ninjas.com/v1/worldtime?city=' + Ciudad + '/datetime'

    const response = await fetch(API_URL_CAPITAL)

    if(response.status !== 200)
    {
        throw new Error ("Invalid city")
    }

    const data = await response.json()

    return data
}