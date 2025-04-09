'use client'

import { RegisterLayout } from "@/components/layouts/register-layout";
import { RegisterForm } from "@/components/register/register-form";
import { useRouter } from "next/navigation";

export default function SignupRegformPage() {
    const router = useRouter();

    const handleSubmit = async (data: any) => {
        router.push('/signup');
    }

    return (
        <RegisterLayout>
            <RegisterForm onSubmit={handleSubmit} />
        </RegisterLayout>
    )
}
