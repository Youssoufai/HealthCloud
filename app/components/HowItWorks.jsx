export default function HowItWorks() {
    return (
        <section className="bg-white py-16 px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Whether you're a hospital or a patient, our platform helps you connect, manage, and deliver healthcare better. Here's how:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    {
                        step: "1",
                        title: "Create an Account",
                        description: "Sign up as a hospital or a patient — it's quick and secure.",
                    },
                    {
                        step: "2",
                        title: "Set Up or Book",
                        description: "Hospitals set up services, patients book appointments or consults.",
                    },
                    {
                        step: "3",
                        title: "Meet & Manage",
                        description: "Engage in video consultations, chat, or in-person care as scheduled.",
                    },
                    {
                        step: "4",
                        title: "Track Everything",
                        description: "Access records, reports, and insights anytime, from anywhere.",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                        <div className="text-green-600 text-4xl font-bold mb-4">
                            {item.step}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}