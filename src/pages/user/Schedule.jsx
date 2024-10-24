import React from 'react'

const LetterBox = ({ letter, color, delay }) => {
    return (
        <div
            className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center text-white font-bold text-xl animate-ping`}
            style={{
                animationDelay: `${delay}s`,
            }}
        >
            {letter}
        </div>
    )
}

export default function Component() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white to-blue-50">

            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 md:scale-125 scale-75">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-700 mb-12 text-center">Sắp ra mắt</h1>
                <div className="flex items-center space-x-2">
                    <LetterBox letter="E" color="bg-blue-500" delay={0} />
                    <LetterBox letter="D" color="bg-teal-400" delay={0.1} />
                    <LetterBox letter="U" color="bg-purple-500" delay={0.2} />
                    <LetterBox letter="M" color="bg-blue-400" delay={0.3} />
                    <LetterBox letter="A" color="bg-blue-600" delay={0.4} />
                    <LetterBox letter="R" color="bg-pink-400" delay={0.5} />
                    <LetterBox letter="K" color="bg-teal-600" delay={0.6} />
                    <LetterBox letter="E" color="bg-blue-500" delay={0.7} />
                    <LetterBox letter="T" color="bg-blue-500" delay={0.7} />
                </div>
            </div>
        </div>
    )
}