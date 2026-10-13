import axios from 'axios';
const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'https://api-key-manager-backend-2.onrender.com/api'});
api.interceptors.request.use(c=>{const t=sessionStorage.getItem('token');if(t)c.headers.Authorization=`Bearer ${t}`;return c;});
export default api;
