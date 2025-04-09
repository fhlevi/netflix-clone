import { LoginLayoutFooter } from "../login/footer";
import { LoginLayoutHeader } from "../login/header";

interface Props {
    children: React.ReactNode;
}

export const LoginLayout = ({ children }: Props) => {
    return (
        <main className="relative h-auto bg-black bg-opacity-60 flex flex-col">
            <LoginLayoutHeader />
            <div className="absolute inset-0 bg-[url('/assets/netflix-bg.jpg')] bg-cover bg-center opacity-40" />
            <div className="relative z-10 flex justify-center items-center h-[47.32rem] pb-12">
                <div className="bg-[rgba(0,_0,_0,_0.7)] bg-opacity-50 py-12 px-16 rounded-md w-full h-full max-w-md text-white">
                    {children}
                </div>
            </div>
            <LoginLayoutFooter />
        </main>
    );
};