import React from "react";
import Link from "next/link";

interface InfoCardProps {
  title: string;
  description: string;
  link: string;
}

const AboutUsInfo: React.FC<InfoCardProps> = ({ title, description, link }) => {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
      <Link href={link}>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default AboutUsInfo;
