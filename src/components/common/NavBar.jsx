"use client"
import 'font-awesome/css/font-awesome.min.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


function NavBar() {
    const pathname = usePathname()
    console.log(pathname)

    return (
        <div className={`${pathname === '/' && 'hidden'}`}>
            <nav className="bg-zinc-900 p-1 fixed bottom-3 left-0 right-0 z-10 lg:w-1/3 md:w-2/4 sm:w-1/6 w-full mx-auto rounded-full">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="flex items-center space-x-4">
                        <Link href="/myBarbers" className={`${pathname === '/myBarbers' ? 'text-orange-500 scale-[1.2] bg-zinc-900 rounded-t-full p-2 -translate-y-3' : 'text-white'} hover:scale-[1.2] hover:-translate-y-3 transition-all px-6`}>
                            <i className={`fa fa-scissors md:fa-3x fa-2x `}></i>
                        </Link>
                        <Link href="/inicio" className={`${pathname === '/inicio' ? 'text-orange-500 scale-[1.2] bg-zinc-900 rounded-t-full p-2 -translate-y-3' : 'text-white'} hover:scale-[1.2] hover:-translate-y-3 transition-all px-6`}>
                            <i className={`fa fa-home md:fa-3x fa-2x `}></i>
                        </Link>
                        <Link href="/profile" className={`${pathname === '/profile' ? 'text-orange-500 scale-[1.2] bg-zinc-900 rounded-t-full p-2 -translate-y-3' : 'text-white'} hover:scale-[1.2] hover:-translate-y-3 transition-all px-6`}>
                            <i className={`fa fa-user md:fa-3x fa-2x  `}></i>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;
