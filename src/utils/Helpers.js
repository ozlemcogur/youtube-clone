import axios from "axios";

const options = {
    params: {geo: 'TR', lang: "tr"},
    headers: {
      'X-RapidAPI-Key': '664ccf6e18msh54bd607bc872cc2p10e69ajsn6be2508c5987',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };
axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com'

export const getData = async (url) => {
  try {
    const response = await axios.get(url,options)
    return response

  } catch(err) {
    console.log("verileri çekerken hata oluştu")


  }
}