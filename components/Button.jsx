"use client";
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Button({ type, variant, icon: Icon, children, onClick, href }) {
  const baseClasses = "font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 inline-flex items-center transition-colors duration-200 focus:outline-none focus:ring-4";

  const variantStyles = {
    primary: "text-white bg-black hover:bg-gray-800 focus:ring-gray-700 dark:text-black dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-gray-300",
    secondary: "text-zinc-900 bg-white border border-zinc-300 hover:bg-zinc-100 focus:ring-zinc-100 dark:text-white dark:bg-black dark:border-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-700",
  };
  
  const typeStyles = {
    'icon-text': `${variantStyles[variant]} ${baseClasses}`,
    'icon-only': "text-xl p-2 text-zinc-500 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors duration-200",
    'text-only': `${variantStyles[variant]} ${baseClasses}`,
  };
  
  

  const renderIcon = () => {
    if (Icon) {
      return <Icon className="me-2" />;
    }
    return null;
  };

  const renderButtonContent = () => {
    if (type === 'icon-text') {
      return (
        <>
          {renderIcon()}
          {children}
        </>
      );
    }

    return (
      <>
        {type === 'icon-only' && renderIcon()}
        {children}
      </>
    );
  };

  if (href) {
    return (
      <Link href={href} passHref>
        <button
          type="button"
          className={typeStyles[type]}
          onClick={onClick}
        >
          {renderButtonContent()}
        </button>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={typeStyles[type]}
      onClick={onClick}
    >
      {renderButtonContent()}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['icon-text', 'icon-only', 'text-only']).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  icon: PropTypes.elementType, // React component for icon
  children: PropTypes.node,
  onClick: PropTypes.func,
  href: PropTypes.string, // Optional, for internal links
};

Button.defaultProps = {
  icon: null,
  children: null,
  onClick: null,
  href: null,
};
