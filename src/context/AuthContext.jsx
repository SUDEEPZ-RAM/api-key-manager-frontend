import {createContext,useContext,useState} from 'react';import api from '../services/api';
const AuthContext=createContext(null);
export function AuthProvider({children}){const [user,setUser]=useState(()=>JSON.parse(sessionStorage.getItem('user')||'null'));const [token,setToken]=useState(()=>sessionStorage.getItem('token'));
const login=async(email,password)=>{const {data}=await api.post('/auth/login',{email,password});sessionStorage.setItem('token',data.token);sessionStorage.setItem('user',JSON.stringify(data.user));setToken(data.token);setUser(data.user);};
const register=async(payload)=>{const {data}=await api.post('/auth/register',payload);sessionStorage.setItem('token',data.token);sessionStorage.setItem('user',JSON.stringify(data.user));setToken(data.token);setUser(data.user);};
const logout=()=>{sessionStorage.clear();setToken(null);setUser(null);};return <AuthContext.Provider value={{user,token,login,register,logout}}>{children}</AuthContext.Provider>}
export const useAuth=()=>useContext(AuthContext);
