'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import clsx from 'clsx'

interface Plan {
    name: string
    resolution: string
    price: string
    quality: string
    devices: string
    simultaneous: number
    downloads: number
    special?: string
    popular?: boolean
}

const plans: Plan[] = [
    {
        name: 'Mobile',
        resolution: '480p',
        price: 'IDR 54,000',
        quality: 'Fair',
        devices: 'Mobile phone, tablet',
        simultaneous: 1,
        downloads: 1
    },
    {
        name: 'Basic',
        resolution: '720p (HD)',
        price: 'IDR 65,000',
        quality: 'Good',
        devices: 'TV, computer, mobile phone, tablet',
        simultaneous: 1,
        downloads: 1
    },
    {
        name: 'Standard',
        resolution: '1080p (Full HD)',
        price: 'IDR 120,000',
        quality: 'Great',
        devices: 'TV, computer, mobile phone, tablet',
        simultaneous: 2,
        downloads: 2
    },
    {
        name: 'Premium',
        resolution: '4K (Ultra HD) + HDR',
        price: 'IDR 186,000',
        quality: 'Best',
        devices: 'TV, computer, mobile phone, tablet',
        simultaneous: 4,
        downloads: 6,
        special: 'Spatial audio (immersive sound)',
        popular: true
    }
]

export default function PlanSelection({ onNext }: { onNext: () => void }) {
    const [selected, setSelected] = useState('Premium')

    return (
        <section className="px-4 py-8 max-w-6xl mx-auto text-black">
            <p className="text-sm mb-1">STEP 2 OF 3</p>
            <h2 className="text-2xl font-bold mb-6">Choose the plan that’s right for you</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        onClick={() => setSelected(plan.name)}
                        className={clsx(
                            'rounded-xl border cursor-pointer relative p-4 transition-all border-gray-300',
                            selected === plan.name ? 'shadow-lg' : 'border-gray-300'
                        )}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 left-0 w-full text-center bg-red-600 text-white py-1 rounded-t-xl text-sm font-semibold">
                                Most Popular
                            </div>
                        )}
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                            <p className="text-sm text-gray-500">{plan.resolution}</p>
                        </div>
                        <ul className="text-sm mt-4 space-y-2">
                            <li><strong>Monthly price:</strong> {plan.price}</li>
                            <li><strong>Video and sound quality:</strong> {plan.quality}</li>
                            <li><strong>Resolution:</strong> {plan.resolution}</li>
                            {plan.special && (
                                <li><strong>Spatial audio:</strong> {plan.special}</li>
                            )}
                            <li><strong>Supported devices:</strong> {plan.devices}</li>
                            <li><strong>Devices at once:</strong> {plan.simultaneous}</li>
                            <li><strong>Download devices:</strong> {plan.downloads}</li>
                        </ul>
                        {selected === plan.name && (
                            <CheckCircle2 className="absolute top-4 right-4 text-red-600 w-6 h-6" />
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 text-xs text-gray-500 space-y-2">
                <p>
                    HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities.
                    Not all content is available in all resolutions. See our{' '}
                    <a href="#" className="text-blue-600 underline">Terms of Use</a> for more details.
                </p>
                <p>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                <p>Live events are included with any Netflix plan and contain ads.</p>
            </div>

            <button
                onClick={onNext}
                className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 rounded"
            >
                Next
            </button>
        </section>
    )
}
