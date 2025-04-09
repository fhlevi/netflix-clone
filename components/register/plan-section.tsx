'use client'

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';
import { plans } from '@/constants/plan';

export default function PlanSelection({ onNext }: { onNext: () => void }) {
    const [selected, setSelected] = useState('Premium')

    return (
        <section className="px-4 py-8 max-w-6xl mx-auto text-black">
            <p className="text-sm mb-1">STEP 2 OF 3</p>
            <h2 className="text-2xl font-bold mb-6">Choose the plan that’s right for you</h2>

            <div className="flex flex-col items-center w-full">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            onClick={() => setSelected(plan.name)}
                            className={clsx(
                                'rounded-xl border cursor-pointer relative p-2 transition-all border-gray-300',
                                selected === plan.name ? 'shadow-lg' : 'border-gray-300',
                                plan.popular && 'rounded-t-none'
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-7 left-0 w-full text-center bg-red-600 text-white py-1 rounded-t-xl text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}
                            <div className="gradient-label rounded-xl py-2.5 px-4 text-white min-h-20">
                                <h3 className="text-lg font-semibold">{plan.name}</h3>
                                <p className="text-sm">{plan.resolution}</p>
                            </div>
                            <ul className="my-4 px-4">
                                <li className="py-3 border-b border-[rgba(128,_128,_128,_0.4)]">
                                    <div className="text-sm font-bold">Monthly price</div>
                                    <div className="text-base">{plan.price}</div>
                                </li>
                                <li className="py-3 border-b border-[rgba(128,_128,_128,_0.4)]">
                                    <div className="text-sm font-bold">Video and sound quality</div>
                                    <div className="text-sm">{plan.quality}</div>
                                </li>
                                <li className="py-3 border-b border-[rgba(128,_128,_128,_0.4)]">
                                    <div className="text-sm font-bold">Resolution</div>
                                    <div className="text-sm">{plan.resolution}</div>
                                </li>
                                {plan.special && (
                                    <li className="py-3 border-b border-[rgba(128,_128,_128,_0.4)]">
                                        <div className="text-sm font-bold">Spatial audio</div>
                                        <div className="text-sm">{plan.special}</div>
                                    </li>
                                )}
                                <li className="py-3 border-b border-[rgba(128,_128,_128,_0.4)]">
                                    <div className="text-sm font-bold">Supported devices</div>
                                    <div className="text-sm">{plan.devices}</div>
                                </li>
                                <li className="py-3 border-b border-[rgba(128,_128,_128,_0.4)]">
                                    <div className="text-sm font-bold">Devices at once</div>
                                    <div className="text-sm">{plan.simultaneous}</div>
                                </li>
                                <li className="py-3">
                                    <div className="text-sm font-bold">Download devices</div>
                                    <div className="text-sm">{plan.downloads}</div>
                                </li>
                            </ul>
                            {selected === plan.name && (
                                <CheckCircle2 className="absolute top-14 right-4 text-white w-6 h-6" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-6 max-w-5xl text-xs text-gray-500 space-y-2">
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
                    className="mt-6 w-full max-w-xs bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 rounded cursor-pointer"
                >
                    Next
                </button>
            </div>
        </section>
    )
}
