import {useEffect, useRef, useState} from 'react';

//Credit - based on this solution: https://usehooks.com/useDebounce/
export function useDebounceEmailValidation(value, delay) {
    // console.log("useDebounceEmailValidation ? ", value);
    // State and setters for debounced value
    const [valid, setValid] = useState(true);
    const initRun = useRef(true);

    useEffect(
        () => {
            //we don't want to do it on initial running
            if(initRun.current){
                initRun.current = false;
            }
            else{
                // Update debounced value after delay
                const handler = setTimeout(() => {
                    // console.log("validating mail - " ,value);
                    setValid(validateEmail(value));
                    // setDebouncedValue(value);
                }, delay);
                // Cancel the timeout if value changes (also on delay change or unmount)
                // This is how we prevent debounced value from updating if value is changed ...
                // .. within the delay period. Timeout gets cleared and restarted.
                return () => {
                    clearTimeout(handler);
                };
            }

        },
        [value, delay] // Only re-call effect if value or delay changes
    );
    return valid;
}


export function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email) || email==="";//the 2nd condition is for the form reset and we don't want to validate empty email slot.
}