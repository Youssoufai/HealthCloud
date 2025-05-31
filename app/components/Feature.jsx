import { motion } from "framer-motion";
import {
    Calendar,
    Clipboard,
    Video,
    BarChart2,
    MessageCircle,
    FlaskConical,
} from "lucide-react";

// Features data with icon components
const features = {
    providers: [
        {
            icon: Calendar,
            title: "Manage Appointments & Staff",
            description:
                "Streamline scheduling and staff management with our intuitive dashboard.",
        },
        {
            icon: Clipboard,
            title: "Electronic Health Records",
            description:
                "Secure, accessible patient records with comprehensive history and analytics.",
        },
        {
            icon: Video,
            title: "Video Consultations",
            description:
                "High-quality, secure video meetings between doctors and patients.",
        },
        {
            icon: BarChart2,
            title: "Analytics & Insights",
            description:
                "Data-driven insights to improve patient care and operational efficiency.",
        },
    ],
    patients: [
        {
            icon: Calendar,
            title: "Book Appointments Easily",
            description:
                "Find and book appointments with specialists in just a few clicks.",
        },
        {
            icon: Clipboard,
            title: "View Health Records",
            description:
                "Access your medical history, test results, and doctor’s notes securely.",
        },
        {
            icon: MessageCircle,
            title: "Secure Chats & Prescriptions",
            description:
                "Communicate with your healthcare providers and receive prescriptions online.",
        },
        {
            icon: FlaskConical,
            title: "Lab & Pharmacy Integration",
            description:
                "Order lab tests and medications with integrated delivery options.",
        },
    ],
};

// Feature card component
const FeatureCard = ({ icon: Icon, title, description }) => (
    <div
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm"
    >
        <div className="mb-4">
            <Icon className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

// Main features section
export default function Features() {
    return (
        <section className="bg-gray-50 py-16 px-6 text-center">
            <h2 className="text-3xl font-bold mb-2">
                Powerful Features for Everyone
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Designed to serve both healthcare providers and patients with a
                seamless, secure experience.
            </p>

            <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6">
                    For Hospitals & Healthcare Providers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {features.providers.map((f, i) => (
                        <FeatureCard key={i} {...f} />
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-6">For Patients</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {features.patients.map((f, i) => (
                        <FeatureCard key={i} {...f} />
                    ))}
                </div>
            </div>
        </section>
    );
}
