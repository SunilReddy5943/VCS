'use client';

import { useState, useId, type ChangeEvent } from 'react';
import { cn } from '@/lib/utils';

interface InputProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  label,
  type = 'text',
  name,
  placeholder,
  error,
  required = false,
  className,
  value,
  onChange,
}: InputProps) {
  const id = useId();
  const [focused, setFocused] = useState(false);

  const hasError = Boolean(error);

  return (
    <div className={cn('relative', className)}>
      <label
        htmlFor={id}
        className={cn(
          'block text-sm font-medium mb-1.5 transition-colors duration-200',
          focused ? 'text-primary-500' : 'text-text-secondary',
          hasError && 'text-error'
        )}
      >
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn(
          'w-full px-4 py-3 text-base rounded-lg border bg-white transition-all duration-200 outline-none',
          hasError
            ? 'border-error text-error focus:ring-2 focus:ring-error/20'
            : 'border-border-light text-text-primary focus:border-primary-500 focus:ring-2 focus:ring-primary-100',
          'placeholder:text-text-disabled'
        )}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
      />

      {hasError && (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-sm text-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
