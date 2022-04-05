export const getApi = async (url) =>{
    let listarApi = await axios.get(url)
    let {data} = listarApi
    console.log(data)
    return data
}