'use client';

import { LoginForm } from '@/components/login/login-form';
import { FormInformation } from '@/components/login/form-information';
import { LoginLayout } from '@/components/layouts/login-layout';
import { loginWithEmail } from '@/lib/auth';
import { useState } from 'react';

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (email: string, password: string) => {
        try {
            await loginWithEmail(email, password);
            window.location.href = '/browse';
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <LoginLayout>
            <LoginForm onLogin={handleLogin} error={error} />
            <FormInformation />
        </LoginLayout>
    );
}
