import { forwardRef } from 'react';
import style from './Input.module.css';

export const Input = forwardRef(({ className, ...props }, ref) => {
    return (
        <input 
            ref={ref} 
            {...props} 
            className={`${style.input_elem} ${className}`} 
        />
    );
});