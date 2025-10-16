import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaPinterest } from "react-icons/fa";
import logo from "../assets/logo_big.png";
import { Link } from "react-router-dom"; 

// Define icons using imported ones
const UserIcon = FaUser;
const LockIcon = FaLock;
const MailIcon = FaEnvelope;
const Eye = FaEye;
const EyeOff = FaEyeSlash;

// Logo Component (unchanged)
const Logo = () => (
  <Link to="/">
    <div className="flex justify-center items-center mb-8 gap-4 cursor-pointer">
      <img src={logo} alt="Sopper Logo" />  {/* Removed invalid href attribute */}
      <span className="text-4xl font-black text-blue-900 tracking-wider">
        Sopper
      </span>
    </div>
  </Link>
);

// Custom Message Box Component
const MessageBox = ({ message, type, onClose }) => {
  if (!message) return null;

  const colorClasses =
    type === "error"
      ? "bg-red-100 border-red-400 text-red-700"
      : "bg-green-100 border-green-400 text-green-700";

  return (
    <div
      className={`border px-4 py-3 rounded-xl relative mb-6 ${colorClasses}`}
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <button
          onClick={onClose}
          className="text-current hover:text-opacity-80"
        >
          <svg
            className="fill-current h-6 w-6"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.497l-2.651 3.352a1.2 1.2 0 1 1-1.697-1.697l3.351-2.651-3.351-2.651a1.2 1.2 0 0 1 1.697-1.697l2.651 3.352 2.651-3.352a1.2 1.2 0 1 1 1.697 1.697L11.497 10l3.352 2.651a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </button>
      </span>
    </div>
  );
};

// Reusable Input Field Component
const AuthInput = ({
  name,
  type = "text",
  placeholder,
  icon: Icon,
  required = false,
  value,
  onChange,
  showToggle = true,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPasswordField = type === "password";

  const inputType = isPasswordField && isPasswordVisible ? "text" : type;
  const ToggleIcon = isPasswordVisible ? EyeOff : Eye;

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        <Icon className="h-5 w-5" />
      </div>
      <input
        name={name}
        type={inputType}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring_blue focus:ring_blue focus:outline-none transition duration-200 shadow-sm"
      />
      {isPasswordField && showToggle && (
        <button
          type="button"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <ToggleIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

// Login Form Component
const LoginForm = ({ onSwitchMode, onShowMessage }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    onShowMessage({
      type: "success",
      text: "Login successful! Redirecting...",
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Logo />
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
      <p className="text-gray-500 mb-6">Sign in to access your saved items and orders.</p>
      <div className="mb-4">
        <AuthInput
          name="email"
          type="email"
          placeholder="Email Address"
          icon={MailIcon}
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <AuthInput
          name="password"
          type="password"
          placeholder="Password"
          icon={LockIcon}
          required
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center text-gray-600">
          <input
            type="checkbox"
            className="mr-2 rounded text_form border-gray-300 focus:ring_blue"
          />
          Remember me
        </label>
        <a
          href="#"
          className="text_form  font-medium transition duration-200"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full form_btn text-white font-semibold py-3 rounded-xl shadow-lg hover:bg_form transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Login Securely
      </button>
      <SocialSignInDivider text="Or login with" />
      <p className="text-center text-gray-600 mt-6 text-sm">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onSwitchMode("signup");
          }}
          className="text_form font-semibold hover:underline transition duration-200 focus:outline-none"
        >
          Create an account
        </button>
      </p>
    </form>
  );
};

// Signup Form Component
const SignupForm = ({ onSwitchMode, onShowMessage }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      onShowMessage({
        type: "error",
        text: "Error: The password and confirmation password do not match.",
      });
      return;
    }
    if (!formData.agreedToTerms) {
      onShowMessage({
        type: "error",
        text: "Error: You must agree to the Terms & Privacy.",
      });
      return;
    }
    console.log("Signup successful:", formData);
    onShowMessage({
      type: "success",
      text: "Account successfully created! Please log in.",
    });
  };

  const isConfirmPasswordFilled = formData.confirmPassword.length > 0;
  const isPasswordMatch = formData.password === formData.confirmPassword;
  const shouldShowInlineError = isConfirmPasswordFilled && !isPasswordMatch;

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Logo />
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
      <p className="text-gray-500 mb-6">Personal details</p>
      <div className="mb-4">
        <AuthInput
          name="fullName"
          type="text"
          placeholder="Full Name"
          icon={UserIcon}
          required
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <AuthInput
          name="email"
          type="email"
          placeholder="Email Address"
          icon={MailIcon}
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <AuthInput
          name="password"
          type="password"
          placeholder="Create Password"
          icon={LockIcon}
          required
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <AuthInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          icon={LockIcon}
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          showToggle={false}
        />
        {shouldShowInlineError && (
          <p className="text-sm text-red-600 mt-1">Passwords do not match.</p>
        )}
      </div>
      <div className="flex items-start text-sm mb-6">
        <input
          type="checkbox"
          name="agreedToTerms"
          checked={formData.agreedToTerms}
          onChange={handleChange}
          required
          className="mt-1 mr-2 rounded ring_blue border-gray-300 focus:ring_blue"
        />
        <label className="text-gray-600">
          I agree to the{" "}
          <a href="#" className="text_form font-medium hover:underline ml-1">
            Terms & Privacy
          </a>
        </label>
      </div>
      <button
        type="submit"
        className="w-full form_btn text-white font-semibold py-3 rounded-xl shadow-lg hover:bg_form transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Sign Up Now
      </button>
      <SocialSignInDivider text="Or sign up with" />
      <p className="text-center text-gray-600 mt-6 text-sm">
        Already have an account?{" "}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onSwitchMode("login");
          }}
          className="text_form font-semibold hover:underline transition duration-200 focus:outline-none"
        >
          Login here
        </button>
      </p>
    </form>
  );
};

// Social Sign In Buttons
const SocialSignInDivider = ({ text }) => (
  <div className="space-y-3 mt-6">
    <div className="relative flex items-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="flex-shrink mx-4 text-gray-500 text-sm">{text}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
    <div className="flex space-x-4">
      <button
        type="button"
        className="w-full flex items-center justify-center space-x-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 shadow-sm"
      >
        <FaGoogle className="" />
        <span className="font-medium text-gray-700 hidden sm:block">Google</span>
      </button>
      <button
        type="button"
        className="w-full flex items-center justify-center space-x-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 shadow-sm"
      >
        <FaPinterest className="text-red-500" />
        <span className="font-medium text-gray-700 hidden sm:block">Pinterest</span>
      </button>
      <button
        type="button"
        className="w-full flex items-center justify-center space-x-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 shadow-sm"
      >
        <FaFacebook className="text-blue-900" />
        <span className="font-medium text-gray-700 hidden sm:block">Facebook</span>
      </button>
    </div>
  </div>
);

// Main Authentication Container Component
const AuthContainer = () => {
  const [mode, setMode] = useState("signup");
  const [message, setMessage] = useState(null);

  const handleShowMessage = ({ type, text }) => {
    setMessage({ type, text });
  };

  const handleCloseMessage = () => {
    setMessage(null);
  };

  const handleSwitchMode = (newMode) => {
    setMode(newMode);
    handleCloseMessage();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out">
        <MessageBox message={message?.text} type={message?.type} onClose={handleCloseMessage} />
        {mode === "login" ? (
          <LoginForm onSwitchMode={handleSwitchMode} onShowMessage={handleShowMessage} />
        ) : (
          <SignupForm onSwitchMode={handleSwitchMode} onShowMessage={handleShowMessage} />
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
