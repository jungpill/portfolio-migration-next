"use client"

import React,{ useEffect } from "react";
import useProjectTypeStore from "../store/UseProjectTypeStore";

interface useOutsideClickProps <T extends HTMLElement> {
    readonly callBack?: () => void;
    readonly ref: React.RefObject<T | null>; 
}

const useOutsideClick = <T extends HTMLElement>({callBack, ref}: useOutsideClickProps<T>) => {

    const {setProjectType} = useProjectTypeStore();

    useEffect(() => {
        
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;

            if(ref.current && !ref.current.contains(target)){
                setProjectType(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[ref])
}

export default useOutsideClick;