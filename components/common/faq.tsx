import { useState } from "react";

const FAQ = () => {
    const faqs = [
        { question: "What is Netflix?", answer: "Netflix is a streaming service..." },
        { question: "How much does Netflix cost?", answer: "Netflix offers several plans..." },
        { question: "Where can I watch?", answer: "You can watch Netflix on..." },
        { question: "How do I cancel?", answer: "You can cancel your subscription..." },
        { question: "What can I watch on Netflix?", answer: "Netflix has a wide variety..." },
        { question: "Is Netflix good for kids?", answer: "Netflix has a dedicated kids section..." },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-black text-white py-10 px-5 w-full">
            <h1 className="text-5xl font-bold text-center mb-8">Frequently Asked Questions</h1>
            <div className="mx-auto space-y-2">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-700 bg-[#303030]">
                        <button
                            className="w-full flex justify-between items-center p-4 rounded-sm text-left text-[26px] font-medium focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            <span className="text-[26px]">{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="text-gray-400 text-sm pb-4">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
