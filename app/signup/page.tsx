'use client'

import { RegisterLayout } from "@/components/layouts/register-layout";
import { PlanStepInfo } from "@/components/register/plan-step-info";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter()

    const handleNext = () => {
        router.push('/signup/planform');
    }

    return (
        <RegisterLayout>
            <PlanStepInfo onNext={handleNext} />
        </RegisterLayout>
    )
}
