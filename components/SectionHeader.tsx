import React from 'react';

interface SectionHeaderProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, children }) => {
  return (
    <div className="flex items-center mb-4 gap-2">
      {icon && React.cloneElement(icon as React.ReactElement, { className: 'text-[#007FFF] lg:h-5 lg:w-5 h-4 w-4' })}
      <h2 className="lg:text-lg text-[#007FFF] font-semibold">
        {children}
      </h2>
    </div>
  );
};

export default SectionHeader;