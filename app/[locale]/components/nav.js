"use client"


import Link from "next-intl/link";

export default function Navbar() {
    return (
        <div className='flex gap-4 justify-center py-3'>
            <Link className='border border-color-gray50 px-4 py-2 rounded-md shadow-md' href='/' locale='en'>English</Link>
            <Link className='border border-color-gray50 px-4 py-2 rounded-md shadow-md' href='/' locale='ar'>Arabic</Link>
            <Link className='border border-color-gray50 px-4 py-2 rounded-md shadow-md' href='/' locale='de'>Deutsch</Link>
            <Link className='border border-color-gray50 px-4 py-2 rounded-md shadow-md' href='/' locale='es'>Spanish</Link>
        </div>
    )
}