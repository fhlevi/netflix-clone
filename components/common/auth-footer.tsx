export default function AuthFooter() {
    return (
        <footer className="bg-gray-100 text-gray-600 text-sm py-6 px-14">
            <p className="mb-4">Questions? Call 000-800-040-1843</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                <span>FAQ</span>
                <span>Help Centre</span>
                <span>Terms of Use</span>
                <span>Privacy</span>
                <span>Cookie Preferences</span>
                <span>Corporate Information</span>
            </div>
            <select className="border border-gray-300 px-3 py-1 rounded">
                <option value="en">English</option>
                <option value="id">Bahasa Indonesia</option>
            </select>
        </footer>
    )
}
