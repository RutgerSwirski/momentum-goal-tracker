import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = ({
  customLabels = {},
}: {
  customLabels?: Record<string, string>;
}) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const formatSegment = (segment: string) => {
    return segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <nav
      className="flex items-center text-sm text-gray-600"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {/* Home link */}
        <li>
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
          >
            Home
          </Link>
        </li>

        {/* Loop through path segments */}
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isActive = index === pathSegments.length - 1;
          const label = customLabels[segment] || formatSegment(segment);

          return (
            <li key={href} className="flex items-center space-x-2">
              {/* Separator */}
              <span className="text-gray-400">/</span>

              {/* Breadcrumb item */}
              <Link
                href={href}
                className={clsx(
                  "transition-colors",
                  isActive
                    ? "text-gray-900 font-semibold cursor-default"
                    : "text-blue-500 hover:text-blue-700"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
