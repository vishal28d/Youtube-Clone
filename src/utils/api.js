import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";
const REACT_APP_YOUTUBE_API_KEY = '81c2feae04mshbfdf61f72bc9686p11269ajsn0ae1d582415d' ;


const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY ,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

 