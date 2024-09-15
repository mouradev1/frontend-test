import { ApiURL } from "../constants/ApiExterno";

export const searchData = async (searchTerm: string) => {
    const response = await fetch(`${ApiURL}${searchTerm}`);
    const data = await response.json();
    return data;
}