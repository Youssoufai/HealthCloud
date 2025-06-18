"use client";

import { useState } from "react";
import {
    ShieldCheck,
    Globe,
    Stethoscope,
    User,
    Shield,
    ClipboardList,
    Hospital,
    Beaker,
} from "lucide-react";
import Doctor from "../components/doctor";
import Patient from "../components/patient";
import Admin from "../components/admin";
import Signup from "../components/hospital";
import { FaFirstAid } from "react-icons/fa";
import Laboratory from "../components/Laboratory";
import Pharmacy from "../components/Pharmacy";

export default function RegisterPage() {
    const [selectedRole, setSelectedRole] = useState("doctor");

    const roles = [
        {
            id: "patient",
            name: "Patient",
            description: "Access your health records and appointments",
            icon: <User className="w-6 h-6 mx-auto text-gray-500" />,
        },
        {
            id: "doctor",
            name: "Doctor",
            description: "Manage patients and consultations",
            icon: <Stethoscope className="w-6 h-6 mx-auto text-teal-600" />,
        },
        {
            id: "hospital",
            name: "Hospital/Clinic",
            description: "Manage health facilities & users",
            icon: <Hospital className="w-6 h-6 mx-auto text-gray-500" />,
        },
        {
            id: "admin",
            name: "Admin",
            description: "Manage system and user settings",
            icon: <Shield className="w-6 h-6 mx-auto text-gray-500" />,
        },
        {
            id: "laboratory",
            name: "Laboratory",
            description: "Manage system and user settings",
            icon: <Beaker className="w-6 h-6 mx-auto text-gray-500" />,
        },
        {
            id: "pharmacy",
            name: "Pharmacy",
            description: "Manage system and user settings",
            icon: <FaFirstAid className="w-6 h-6 mx-auto text-gray-500" />,
        },
    ];

    const renderForm = () => {
        switch (selectedRole) {
            case "patient":
                return <Patient />;
            case "doctor":
                return <Doctor />;
            case "admin":
                return <Admin />;
            case "hospital":
                return <Signup />;
            case "laboratory":
                return <Laboratory />;
            case "pharmacy":
                return <Pharmacy />;
            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left Panel */}
            <div className="bg-teal-600 text-white w-[35%] p-10 flex flex-col justify-center">
                <div className="text-center space-y-6">
                    <div className="text-4xl font-bold">Welcome to HealthCloud</div>
                    <p>Your global digital health companion for seamless healthcare management</p>

                    <div className="space-y-4 mt-8">
                        <div className="flex items-center gap-3 bg-teal-700 p-3 rounded">
                            <ShieldCheck className="w-5 h-5 text-white" />
                            <span>Secure & HIPAA Compliant</span>
                        </div>

                        <div className="flex items-center gap-3 bg-teal-700 p-3 rounded">
                            <Globe className="w-5 h-5 text-white" />
                            <span>Global Healthcare Access</span>
                        </div>

                        <div className="flex items-center gap-3 bg-teal-700 p-3 rounded">
                            <ClipboardList className="w-5 h-5 text-white" />
                            <span>Connected Provider Network</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex-1 bg-white p-12 overflow-y-auto">
                <div className="max-w-2xl mx-auto space-y-8">
                    <div className="flex justify-center space-x-8 text-lg font-medium border-b border-gray-200">
                        <div className="pb-2 border-b-2 border-teal-500 text-teal-600 cursor-pointer">Sign Up</div>
                        <div className="pb-2 text-gray-400 cursor-pointer">Login</div>
                    </div>

                    {/* Select Role */}
                    <div>
                        <p className="text-lg font-semibold mb-4">Select your role</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {roles.map((role) => (
                                <div
                                    key={role.id}
                                    className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedRole === role.id
                                        ? "border-teal-600 shadow-md"
                                        : "border-gray-200 hover:border-teal-400"
                                        }`}
                                    onClick={() => setSelectedRole(role.id)}
                                >
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        {role.icon}
                                        <p className="font-medium">{role.name}</p>
                                        <p className="text-sm text-gray-500">{role.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Form */}
                    <form className="space-y-6">{renderForm()}</form>

                    <p className="text-sm text-center mt-2">
                        Already have an account?{" "}
                        <a href="#" className="text-teal-600 hover:underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
