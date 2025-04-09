import { FAQs } from "@/constants/faqs";
import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-black text-white py-10 px-5 w-full">
            <h1 className="text-5xl font-bold text-center mb-8">Frequently Asked Questions</h1>
            <div className="mx-auto space-y-2">
                {FAQs.map((faq, index) => (
                    <div className="w-full space-y-2" key={index}>
                        <div className="border-b border-gray-700 bg-[#303030]">
                            <button
                                className="w-full flex justify-between items-center p-4 rounded-sm text-left text-[26px] font-medium focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="text-[26px]">{openIndex === index ? "−" : "+"}</span>
                            </button>
                        </div>
                        {openIndex === index && (
                            <div className="border-b border-gray-700 bg-[#303030]">
                                <div className="text-gray-400 text-sm p-4">
                                    {faq.answer}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
