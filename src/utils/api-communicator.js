import axios from 'axios';

export const getRooms = async () => {
    const res = await axios.get("http://13.127.64.232:5000/rooms");
    
    if(res.status!=200){
        throw new Error("Unable to fetch rooms");
    }

    const data = await res.data;
    return data;
}