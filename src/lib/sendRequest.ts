import axios from 'axios';

async function sendFile(url: string, data: any) {
    //// const options = { headers: '', maxContentLength: Infinity }
    return axios.post(url, data)
}

export default sendFile;