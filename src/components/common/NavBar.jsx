import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import Link from 'next/link';

function NavBar() {
    return (
        <div>
            <nav className="bg-zinc-900 p-3 fixed bottom-3 left-0 right-0 z-10 lg:w-1/3 md:w-2/4 sm:w-1/6 w-full mx-auto rounded-full">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="flex items-center space-x-4">
                        <Link href="/myBarbers" className="text-white px-6">
                            <i className="fa fa-scissors fa-3x md:fa-3x sm:fa-2x xs:fa-1x"></i>
                        </Link>
                        <Link href="/inicio" className="text-white px-6">
                            <i className="fa fa-home fa-3x md:fa-3x sm:fa-2x xs:fa-1x"></i>
                        </Link>
                        <Link href="/profile" className="text-white px-6">
                            <i className="fa fa-user fa-3x md:fa-3x sm:fa-2x xs:fa-1x"></i>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;
