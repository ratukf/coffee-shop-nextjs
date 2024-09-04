import { InputHTMLAttributes } from 'react';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    description: string;
    price: string;
}

export default function RadioButton({ label, description, price, ...props }: RadioButtonProps) {
    return (
        <label className="flex items-start space-x-4 cursor-pointer border-2 border-gray-200 p-4 rounded-lg hover:border-calm-brown focus:border-calm-brown transition duration-200">
            <input
                type="radio"
                className="hidden peer"
                {...props}
            />
            <div className="peer-checked:border-calm-brown peer-checked:shadow-lg flex-1 border-2 border-transparent rounded-lg p-4">
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{label}</span>
                    <span className="text-calm-brown font-bold">{price}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
        </label>
    );
}
