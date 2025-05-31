"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
    {
        title: "Free",
        description: "For individual patients",
        price: "$0",
        per: "/month",
        features: [
            "Basic appointment booking",
            "Personal health records",
            "Limited chat with providers",
        ],
        buttonText: "Create Patient Account",
        buttonVariant: "outline",
        highlight: false,
    },
    {
        title: "Pro",
        description: "For small to mid-size hospitals",
        price: "$499",
        per: "/month",
        features: [
            "Full appointment system",
            "Complete EHR integration",
            "Video consultations",
            "Up to 50 staff accounts",
            "Basic analytics",
        ],
        buttonText: "Register Your Hospital",
        buttonVariant: "solid",
        highlight: true,
        badge: "Most Popular",
    },
    {
        title: "Enterprise",
        description: "For large hospital networks",
        price: "Custom",
        per: "",
        features: [
            "All Pro features",
            "Unlimited staff accounts",
            "Advanced analytics & reporting",
            "Dedicated account manager",
            "Custom integrations",
        ],
        buttonText: "Contact Sales",
        buttonVariant: "outline",
        highlight: false,
    },
];

const PricingCard = ({ plan }) => (
    <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`rounded-xl border p-6 text-left shadow-sm w-full max-w-sm bg-white relative ${plan.highlight ? "border-green-600 shadow-lg" : ""
            }`}
    >
        {plan.badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                {plan.badge}
            </div>
        )}
        <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
        <div className="text-3xl font-bold mb-2">{plan.price}</div>
        <p className="text-sm text-gray-600 mb-6">{plan.per}</p>
        <ul className="space-y-2 mb-6">
            {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    {feature}
                </li>
            ))}
        </ul>
        <button
            className={`w-full px-4 py-2 rounded-md text-sm font-medium transition ${plan.buttonVariant === "solid"
                ? "bg-green-600 text-white hover:bg-green-700"
                : "border border-green-600 text-green-600 hover:bg-green-50"
                }`}
        >
            {plan.buttonText}
        </button>
    </motion.div>
);

export default function PricingSection() {
    return (
        <section className="bg-gray-50 py-20 px-6 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-2"
            >
                Simple Pricing for Everyone
            </motion.h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Transparent pricing options designed to fit the needs of individuals and healthcare institutions of all sizes.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 items-start">
                {pricingPlans.map((plan, i) => (
                    <PricingCard key={i} plan={plan} />
                ))}
            </div>
        </section>
    );
}
