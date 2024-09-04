import { ReactNode } from 'react';

interface CardProps {
    title: string;
    children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
    return (
        <div className="rounded-xl overflow-hidden shadow-gray-500 shadow-lg flex-auto">
            <div className="px-6 py-4">
                <div className="font-bold text-4xl text-center mb-2">{title}</div>
                <div className="text-gray-700 text-base">
                    {children}
                </div>
            </div>
        </div>
    );
}
