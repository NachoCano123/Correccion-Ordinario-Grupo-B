export const validartelefono = async(Telefono:string): Promise<string> =>
{
    const API_KEY = Deno.env.get("API_KEY")

    const url = ``

    const response = await fetch(url, {headers:
    {
        'x-api-key': ''
    }})

    const data = await response.json()

    return data.Pais
}