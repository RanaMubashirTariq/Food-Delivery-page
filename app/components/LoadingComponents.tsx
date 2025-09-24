'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = '#bc430d' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-gray-200 border-t-2 rounded-full`}
      style={{ borderTopColor: color }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
};

interface PulseLoaderProps {
  count?: number;
  color?: string;
}

export const PulseLoader: React.FC<PulseLoaderProps> = ({ 
  count = 3, 
  color = '#bc430d' 
}) => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  );
};

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  width = 'w-full', 
  height = 'h-4',
  className = ''
}) => {
  return (
    <motion.div
      className={`${width} ${height} bg-gray-200 rounded ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};
