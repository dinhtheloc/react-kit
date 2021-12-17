import React from 'react';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as Search } from '../svg/search.svg';
import { ReactComponent as Navigation } from '../svg/navigation.svg';
import { ReactComponent as Github } from '../svg/github.svg';
import ToggleDarkMode from '../ToggleDarkMode';

const Menu = (props) => {
    return (
        <div className='relative pt-6 lg:pt-8 flex items-center justify-between text-gray-700 font-semibold text-sm leading-6'>
            <Logo></Logo>

            <div className="flex items-center">
                <button type="button" className="text-gray-500 w-8 h-8 -my-1 flex items-center justify-center md:hidden">
                    <span className="sr-only">Search</span>
                    <Search></Search>
                </button>
                <div className="-my-1 ml-2 -mr-1 md:hidden">
                    <button type="button" className="text-gray-500 w-8 h-8 flex items-center justify-center hover:text-gray-600">
                        <span className="sr-only">Navigation</span>
                        <Navigation></Navigation>

                    </button>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-8">
                        <li><a className="hover:text-sky-500" href="/blog">Blog</a></li>
                        <li><ToggleDarkMode/></li>
                        <li>
                            <a href="https://github.com/tailwindlabs/tailwindcss" className="block w-6 h-6 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Tailwind CSS on GitHub</span>
                                <Github></Github>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu