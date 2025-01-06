import React from 'react';
import { UserPlus, Eye, EyeOff, Mail, X, ArrowRight } from 'lucide-react';
import useSignUp from './useSignUp';

const SignUp = () => {
    const {
        accountTypes,
        formData,
        fieldErrors,
        showPassword,
        isVerifyOtpOpen,
        otpError,
        otp,
        setOtp,
        handleChange,
        handleSubmit,
        handleVerifyOtp,
        navigateToLogin,
        togglePasswordVisibility,
        inputElements,
        closeVerifyOtpModal,
    } = useSignUp();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white p-4 sm:p-6 lg:p-8">
            {/* Main Signup Form */}
            <div className={`w-full max-w-md transition-all duration-300 ${isVerifyOtpOpen ? 'blur-sm' : ''}`}>
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
                                        {input.type === 'textarea' ? (
                                            <textarea
                                                name={input.name}
                                                value={formData[input.name]}
                                                onChange={handleChange}
                                                placeholder={input.placeholder}
                                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border 
                                                ${fieldErrors[input.name] ? 'border-red-500' : 'border-gray-300'}
                                                focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all 
                                                duration-200 text-sm sm:text-base outline-none min-h-[100px] resize-none`}
                                            />
                                        ) : (
                                            <input
                                                type={input.name === 'password' ? (showPassword ? 'text' : 'password') : input.type}
                                                name={input.name}
                                                value={formData[input.name]}
                                                onChange={handleChange}
                                                placeholder={input.placeholder}
                                                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border 
                                                ${fieldErrors[input.name] ? 'border-red-500' : 'border-gray-300'}
                                                focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all 
                                                duration-200 text-sm sm:text-base outline-none`}
                                            />
                                        )}
                                        {input.name === 'password' && (
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        )}
                                    </div>
                                    {fieldErrors[input.name] && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {fieldErrors[input.name]}
                                        </p>
                                    )}
                                </div>
                            ))}

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

            {/* Verify OTP Modal */}
            {isVerifyOtpOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeVerifyOtpModal} />
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md m-4 relative z-10 transform transition-all">
                        {/* Close Button */}
                        <button
                            onClick={closeVerifyOtpModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Modal Content */}
                        <div className="text-center mb-6">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Verify Your Email</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                We've sent a verification code to<br />
                                <span className="font-medium text-gray-800">{formData.email}</span>
                            </p>
                        </div>

                        {/* OTP Input */}
                        <div className="space-y-4">
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter verification code"
                                className={`w-full px-4 py-3 rounded-lg border ${
                                    otpError ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-orange-500 focus:border-transparent 
                                transition-all duration-200 text-center text-lg font-medium tracking-wider outline-none`}
                                maxLength={4}
                            />
                            
                            {otpError && (
                                <p className="text-sm text-red-500 text-center">
                                    {otpError}
                                </p>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3 mt-6">
                                <button
                                    onClick={handleVerifyOtp}
                                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold 
                                    transition-all duration-200 hover:bg-orange-600 flex items-center justify-center gap-2
                                    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                >
                                    Verify Email <ArrowRight size={18} />
                                </button>
                                <button
                                    onClick={closeVerifyOtpModal}
                                    className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold 
                                    transition-all duration-200 hover:bg-gray-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignUp;