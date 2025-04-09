'use client'

import { RegisterLayout } from "@/components/layouts/register-layout";
import PlanSelection from "@/components/register/plan-section";
import { PlanStepInfo } from "@/components/register/plan-step-info";
import { useRouter } from "next/navigation";

export default function SignupPlanformPage() {
    const router = useRouter()

    const handleNext = () => {
        router.push('/login');
    }

    return (
        <RegisterLayout>
            <PlanSelection onNext={handleNext} />
        </RegisterLayout>
    )
}
