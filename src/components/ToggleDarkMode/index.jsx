import React from 'react';
import './style.css';

export default function ToggleDarkMode() {
    return (
        <div className="flex items-center justify-center w-full">
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input type="checkbox" id="toggle" className={`sr-only`} />
                    <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                    <div className="absolute left-1 top-1">🌜</div>
                    <div className="absolute right-1 top-1"><span>🌞</span></div>
                    <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                </div>
            </label>
        </div>
    )
}
