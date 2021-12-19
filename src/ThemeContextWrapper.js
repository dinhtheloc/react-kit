import React, { useState, useEffect } from 'react';
import { useThemeManager } from './stage/user/hooks/';

// import { ThemeContext, themes } from './contexts/ThemeContext';

export default function ThemeContextWrapper(props) {
    const [isDark] = useThemeManager();

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')

        } else {
            document.documentElement.classList.remove('dark')

        }
        console.log('isDark', isDark);
    }, [isDark]);


    return (
        <>
            {props.children}
        </>
    );
}