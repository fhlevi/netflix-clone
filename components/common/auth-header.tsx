import Link from 'next/link'
import Image from 'next/image'

export function AuthHeader() {
    return (
        <header className="flex items-center justify-between px-14 py-4 border-b border-gray-200">
            <Image src="/assets/netflix-logo.svg" alt="Netflix Logo" width={170} height={40} />
            <Link href="/login" className="text-lg font-semibold">
                Sign In
            </Link>
        </header>
    )
}