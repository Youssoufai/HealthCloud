export default function Input({ label, ...props }) {
    return (
        <div>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <input
                {...props}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        </div>
    )
}
