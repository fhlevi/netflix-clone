import { Check } from 'lucide-react';

interface PlanStepInfoProps {
    onNext: () => void
}

export function PlanStepInfo({ onNext }: PlanStepInfoProps) {
    const infoList = [
        'No commitments, cancel anytime.',
        'Everything on Netflix for one low price.',
        'No ads and no extra fees. Ever.'
    ]

    return (
        <section className="flex flex-col items-center text-center px-4">
            <div className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center mb-6">
                <Check className="text-red-600 w-6 h-6" />
            </div>
            <p className="text-sm">Step 2 of 3</p>
            <h2 className="text-3xl font-semibold my-2">Choose your plan.</h2>

            <ul className="mt-4 mb-6 space-y-3 text-sm">
                {infoList.map((info, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-800">
                        <Check className="text-red-600 w-6 h-6" />
                        <span className="text-lg">{info}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={onNext}
                className="bg-red-600 hover:bg-red-700 text-white text-lg font-medium px-6 py-3 rounded w-full max-w-xs"
            >
                Next
            </button>
        </section>
    )
}
