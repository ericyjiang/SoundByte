// const process = require('process');
const axios = require('axios');
const qs = require('qs');

const handler = async function (event) {
  const API_PARAMS = qs.stringify(event.queryStringParameters);

  const API_SECRET = import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY;
  const URL = `https://shazam-core.p.rapidapi.com/${API_SECRET}`;

  try {
    const { data } = await axios.get(URL);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { data, headers, status, statusText } = error.response;
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
