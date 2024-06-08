const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen fixed inset-0 z-50">
            <div className="bg-gray-200 p-8 rounded-lg opacity-50">
                {/* Your loader component or animation goes here */}
                <div className="animate-spin text-gray-700">Loading...</div>
            </div>
        </div>
    );
}

export default Loading;