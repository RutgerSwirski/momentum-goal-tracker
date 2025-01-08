import Image from "next/image";

const SocialLoginButtons = () => {
  return (
    <div className="flex space-x-4">
      <button className="flex-1 bg-white text-black border border-gray-300 rounded-md p-2 hover:bg-gray-100">
        {/* <Image
          src="/images/google-icon.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="inline-block mr-2"
        /> */}
        Log in with Google
      </button>
      <button className="flex-1 bg-[#3b5998] text-white rounded-md p-2 hover:bg-[#2d4373]">
        {/* <Image
          src="/images/facebook-icon.svg"
          alt="Facebook Logo"
          width={20}
          height={20}
          className="inline-block mr-2"
        /> */}
        Log in with Facebook
      </button>
    </div>
  );
};

export default SocialLoginButtons;
