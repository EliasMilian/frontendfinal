import axios from 'axios';

const baseUrl = "https://api-guerrerosz.ironcity.network/";

function joinUrl(base, path) {
  console.log('Base URL:', base);
  console.log('Path:', path);

  const url = new URL(path, base);
  return url.href;
}
// Configurar la URL base utilizando la variable de entorno
console.log('API URL:', import.meta.env.VITE_API_URL);

export const Register = async (body) => await axios.post(joinUrl(baseUrl, 'api/post/register'), body);
export const LoginUser = async (body) => await axios.post(joinUrl(baseUrl, 'api/post/login'), body);
export const ListByCategorie = async (categorie) => await axios.get(joinUrl(baseUrl, `api/get/${categorie}`));
export const Create = async (body) => await axios.post(joinUrl(baseUrl, 'api/post/create'), body);
export const obtenerAleatorio = async () => await axios.get(joinUrl(baseUrl, 'api/get/obtenerAleatorio'));