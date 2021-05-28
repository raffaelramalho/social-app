import { useState } from  'react';

export default function useToken() {
    const getToken = () => {
        //da FETCH no token e setta o status inicial para o valor dos mesmos 
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        /*Usar o operador ?. por que quando você faz o primeiro acesso no app,
        o value de session.Storage.getItem('token') será undefined */
        return userToken?.token
      };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        // Da set na Storage do browser com os valores de Token em JSON via stringify
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
      };
    
    return {
        setToken: saveToken,
        token
    }
}