'use client';
import React, { ChangeEvent, FC, useState } from 'react';
import TextAreaComponent from '../../Components/TextBox/TextAreaComponent';





const TextBox: FC = () => {
    const [value, setValue] = useState('');
    const placeholder = "Enter data";

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
   
    return (
        <>
             <TextAreaComponent value={value} placeholder={placeholder} onChange={handleChange} rows={4} />
           

        </>
    );
};

export default TextBox;
