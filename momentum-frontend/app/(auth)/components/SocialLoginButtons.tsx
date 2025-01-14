"use client";

const SocialLoginButtons = () => {
  const handleGoogleLogin = async () => {
    window.location.href = `http://localhost:5000/auth/google`;
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleGoogleLogin}
        className="flex-1 bg-white text-black border border-gray-300 rounded-md p-2 hover:bg-gray-100"
      >
        {/* <Image
          src="/images/google-icon.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="inline-block mr-2"
        /> */}
        Log in with Google
      </button>
    </div>
  );
};

export default SocialLoginButtons;
