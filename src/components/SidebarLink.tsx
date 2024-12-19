import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface SidebarLinkProps {
  icon: LucideIcon;
  label: string;
  path: string;
  isActive: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon: Icon, label, path, isActive }) => {
  return (
    <Link
      to={path}
      className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
        isActive ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 dark:border-blue-400' : ''
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default SidebarLink;