import Link from "next/link";

const NextStepLink = ({ label, href, name }) => (
  <div className="mb-2">
    <h4 className="font-semibold">{label}:</h4>
    <Link href={href} className="text-blue-500 underline">
      {name}
    </Link>
  </div>
);

export default NextStepLink;
