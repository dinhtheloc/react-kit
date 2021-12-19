import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    toggleTheme as toggleThemeAction
} from '../action';
export function useThemeManager() {
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.user.isDark)

    const toggleTheme = useCallback(() => {
        dispatch(toggleThemeAction())
    }, [dispatch])

    return [isDark, toggleTheme]
}