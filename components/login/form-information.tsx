import Link from "next/link";

export const FormInformation = () => {
    return (
        <div className="mt-4 text-base text-gray-400">
            <p>
                New to Netflix?{' '}
                <Link href="/" className="text-white hover:underline">Sign up now</Link>.
            </p>
            <p className="mt-4 text-[13px]">
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </p>
            <a href="#" className="text-blue-500 underline text-[13px]">Learn more.</a>
        </div>
    );
};