import { useEffect, useRef } from "react";

export const useInterval = (callback, delay) => {
  const savedCallBack = useRef();

  //Lembrar do último retorno da chamada
  useEffect(() => {
    savedCallBack.current = callback;
  }, [callback]);

  //configurar o intervalo
  useEffect(() => {

    const tick = () => {
      savedCallBack.current();
    }

    if(delay !== null){
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      }
    }

  }, [delay]);

}