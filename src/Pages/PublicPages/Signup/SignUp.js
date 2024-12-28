import React from 'react';
import { UserPlus, Eye, EyeOff } from 'lucide-react';
import useSignUp from './useSignUp';

const SignUp = () => {
    const {
        accountTypes,
        formData,
        error,
        showPassword,
        handleChange,
        handleSubmit,
        navigateToLogin,
        togglePasswordVisibility,
        inputElements,
    } = useSignUp();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-md">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
                    
                    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
                        {/* Header */}
                        <div className="text-center mb-6 sm:mb-8">
                            <UserPlus className="w-12 h-12 mx-auto text-orange-500 mb-4" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Create Account</h2>
                            <p className="text-sm sm:text-base text-gray-600 mt-2">Please fill in your details to sign up</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            {/* Account Type Select */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Account Type
                                </label>
                                <select
                                    name="accountType"
                                    value={formData.accountType}
                                    onChange={handleChange}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 
                                    focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all 
                                    duration-200 bg-white text-sm sm:text-base outline-none"
                                >
                                    {accountTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Dynamic Input Fields */}
                            {inputElements.map((input) => (
                                <div key={input.name}>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                        {input.label}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={input.name === 'password' ? (showPassword ? 'text' : 'password') : input.type}
                                            name={input.name}
                                            value={formData[input.name]}
                                            onChange={handleChange}
                                            placeholder={input.placeholder}
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 
                                            focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all 
                                            duration-200 text-sm sm:text-base outline-none"
                                            required
                                        />
                                        {input.name === 'password' && (
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 text-red-500 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Sign Up Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold 
                                text-sm sm:text-base transition-all duration-200 hover:bg-orange-600 
                                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 
                                transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Create Account
                            </button>

                            {/* Login Link */}
                            <p className="text-center text-sm sm:text-base text-gray-600">
                                Already have an account?{' '}
                                <button
                                    type="button"
                                    onClick={navigateToLogin}
                                    className="text-orange-500 font-semibold hover:text-orange-600 
                                    transition-colors duration-200"
                                >
                                    Sign In
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;