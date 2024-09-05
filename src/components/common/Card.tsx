import { ReactNode } from 'react';

interface CardProps {
    title: string;
    children: ReactNode;
    className?: string;
}

export default function Card({ title, children }: CardProps) {
    return (
        <div className={"rounded-xl overflow-hidden shadow-calm-brown shadow-xl border-1 border-calm-brown"}>
            <div className="p-8">
                <div className="font-bold text-4xl text-left mb-10">{title}</div>
                <div className="text-gray-700 text-base">
                    {children}
                </div>
            </div>
        </div>
    );
}
