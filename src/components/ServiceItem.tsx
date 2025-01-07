import React from 'react';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-gray-800 font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}