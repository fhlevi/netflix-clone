import AuthFooter from "../common/auth-footer";
import { AuthHeader } from "../common/auth-header";

interface Props {
    children: React.ReactNode;
}

export const RegisterLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen justify-between bg-white text-black">
            <AuthHeader />
            <main className="flex justify-center px-4 py-10">
                {children}
            </main>
            <AuthFooter />
        </div>
    );
};