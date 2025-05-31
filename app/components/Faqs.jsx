"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = {
    "For Hospitals": [
        {
            question: "Can we integrate existing systems?",
            answer:
                "Yes, HealthCloud is designed to integrate with most existing hospital systems including major EHR platforms, scheduling software, and billing systems. Our team provides full support during the integration process.",
        },
        {
            question: "Is onboarding supported?",
            answer:
                "Absolutely. We provide comprehensive onboarding support including staff training, technical setup, and ongoing assistance. Our dedicated support team ensures a smooth transition to the HealthCloud platform.",
        },
        {
            question: "How secure is patient data on your platform?",
            answer:
                "HealthCloud employs bank-level security measures including end-to-end encryption, regular security audits, and is fully HIPAA compliant. We maintain the highest standards of data protection in the healthcare industry.",
        },
    ],
    "For Patients": [
        {
            question: "Is my data safe?",
            answer:
                "Your health data is protected by advanced encryption and security protocols. HealthCloud is fully HIPAA compliant and we never share your information without your explicit consent.",
        },
        {
            question: "Can I consult with any doctor?",
            answer:
                "You can consult with any healthcare provider who is part of the HealthCloud network. This includes primary care as well as specialists from participating hospitals and clinics around the world.",
        },
        {
            question: "How do I access my medical records?",
            answer:
                "After creating your account, you can securely access all your medical records through the patient portal. Your information is automatically updated when you receive care from any provider in the HealthCloud network.",
        },
    ],
};

const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b py-4">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left text-sm font-medium text-gray-800"
            >
                {question}
                <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && <p className="text-sm text-gray-600 mt-2">{answer}</p>}
        </div>
    );
};

export default function FAQSection() {
    return (
        <section className="bg-white py-20 px-6 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-2"
            >
                Frequently Asked Questions
            </motion.h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Find answers to common questions about HealthCloud.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
                {Object.entries(faqs).map(([group, items]) => (
                    <div key={group}>
                        <h3 className="text-lg font-semibold mb-4">{group}</h3>
                        {items.map((faq, i) => (
                            <FAQItem key={i} {...faq} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
