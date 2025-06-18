export default function Button({ children, className = '', ...props }) {
    return (
        <button
            {...props}
            className={`bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition ${className}`}
        >
            {children}
        </button>
    )
}
