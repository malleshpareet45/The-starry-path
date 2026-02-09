import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="flex space-x-4">
                <div className="w-4 h-4 bg-[#F5A623] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-4 h-4 bg-[#E91E63] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-4 h-4 bg-[#673AB7] rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-[#03A9F4] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-4 h-4 bg-[#8BC34A] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            </div>
        </div>
    );
};

export default Loader;
