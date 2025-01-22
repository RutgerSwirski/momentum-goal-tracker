import Text from "@/components/common/Text";
import React from "react";

type PageHeaderProps = {
  title: string; // Main title
  subtitle?: string; // Optional subtitle
  rightContent?: React.ReactNode; // Flexible content for the right side};
};

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  rightContent,
}) => {
  return (
    <div className="flex justify-between items-center space-y-1">
      {/* Title and Subtitle */}
      <div className="flex flex-col space-y-1">
        <Text
          type="heading"
          className="text-4xl md:text-4xl font-semibold text-neutral_charcoal"
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            type="subheading"
            className="text-md md:text-lg font-normal text-neutral_dark_grey"
          >
            {subtitle}
          </Text>
        )}
      </div>

      {/* Right Content */}
      {rightContent && <div>{rightContent}</div>}
    </div>
  );
};

export default PageHeader;
