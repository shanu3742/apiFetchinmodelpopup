

  
import {useCallback,  useState } from 'react';


function useModelState(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, open, close };
}

export default useModelState;

//import useModelState from '../misc/custom-hooks';
//const { isOpen, open, close } = useModelState();