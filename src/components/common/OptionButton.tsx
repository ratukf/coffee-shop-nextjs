import React, { ReactNode } from 'react';
import { InputHTMLAttributes } from 'react';

interface OptionProps extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    name: string;
    value: string;
    id: string;
    onClick: () => void;
    isActive: boolean;
}

export default function OptionButton({ children, name, value, id, ...rest }: OptionProps) {
    return (
        <label
            htmlFor={id}
            className="flex items-start cursor-pointer rounded-lg border-2 border-gray-100"
        >
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                className="hidden peer"
                {...rest}
            />
            <div className="peer-checked:border-calm-brown peer-checked:shadow-lg flex-1 border-2 border-transparent rounded-lg p-4 hover:border-calm-brown focus:border-calm-brown transition duration-200">
                {children}
            </div>
        </label>
    );
}
