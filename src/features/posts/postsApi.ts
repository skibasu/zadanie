import axios from "../../axios"
interface IParams {
    params: { [key: string]: string }
}

export async function fetchData(params: IParams = { params: {} }) {
    const data = await axios.get("/1/photos", params)

    return data
}
