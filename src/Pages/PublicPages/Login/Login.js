import React from 'react';
import useLogin from './useLogin';
import { UserPlus, Eye, EyeOff,UserCircle } from 'lucide-react';

const Login = () => {
    const {
        accountTypes,
        formData,
        error,
        showPassword,
        togglePasswordVisibility,
        handleChange,
        handleSubmit,
        navigateToSignup,
        inputElements,
    } = useLogin();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white p-4 sm:p-6 lg:p-8">
            {/* Container with max-width for larger screens */}
            <div className="w-full max-w-md">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
                    
                    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
                        {/* Header */}
                        <div className="text-center mb-6 sm:mb-8">
                            <UserCircle className="w-12 h-12 mx-auto text-orange-500 mb-4" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Welcome Back</h2>
                            <p className="text-sm sm:text-base text-gray-600 mt-2">Please enter your details to sign in</p>
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

                            {/* Input Fields */}
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

                            {/* Forgot Password Link */}
                            {/* <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                                >
                                    Forgot Password?
                                </button>
                            </div> */}

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 text-red-500 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold 
                                text-sm sm:text-base transition-all duration-200 hover:bg-orange-600 
                                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 
                                transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Sign In
                            </button>

                            {/* Signup Link */}
                            <p className="text-center text-sm sm:text-base text-gray-600">
                                Don't have an account?{' '}
                                <button
                                    onClick={navigateToSignup}
                                    className="text-orange-500 font-semibold hover:text-orange-600 
                                    transition-colors duration-200"
                                >
                                    Create Account
                                </button>
                            </p>
                        </form>

                        {/* Social Login Section */}
                        {/* <div className="mt-6 sm:mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                                <button className="flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 
                                border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 
                                text-sm sm:text-base">
                                    <img src="/api/placeholder/20/20" alt="Google" className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                                    Google
                                </button>
                                <button className="flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 
                                border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 
                                text-sm sm:text-base">
                                    <img src="/api/placeholder/20/20" alt="Microsoft" className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                                    Microsoft
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;