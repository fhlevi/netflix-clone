export const HelperLinks = () => {
    return (
        <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
            <label className="flex items-center space-x-2">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="hidden peer"
                    />
                    <div className="w-5 h-5 border-1 border-gray-600 rounded-sm peer-checked:bg-white peer-checked:border-white flex items-center justify-center">
                        <img
                            src="/assets/check.png"
                            alt="check"
                            className="w-3 h-3 peer-checked:block"
                        />
                    </div>
                </div>
                <span className="text-white text-base">Remember me</span>
            </label>
        </div>
    );
};
