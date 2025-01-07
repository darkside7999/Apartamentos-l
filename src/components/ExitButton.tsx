import React from 'react';
import { X } from 'lucide-react';

interface ExitButtonProps {
  onClick: () => void;
}

export function ExitButton({ onClick }: ExitButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute right-6 top-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
      aria-label="Close"
    >
      <X className="w-6 h-6 text-gray-600" />
    </button>
  );
}