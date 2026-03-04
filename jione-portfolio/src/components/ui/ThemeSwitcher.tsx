'use client';

import React from 'react';
import { useTheme } from '@/styles/provider';

export function ThemeSwitcher() {
  const { option, setOption } = useTheme();

  const options = [
    { value: 'toss', label: '토스', icon: '🏦' },
    { value: 'kakao', label: '카카오', icon: '💛' },
    { value: 'kurly', label: '컬리', icon: '🥬' },
  ];

  return (
    <div className="theme-switcher-container">
      <div className="theme-switcher">
        {options.map((opt) => (
          <button
            key={opt.value}
            className={`theme-btn ${option === opt.value ? 'active' : ''}`}
            onClick={() => setOption(opt.value as any)}
            title={opt.label}
          >
            <span className="theme-icon">{opt.icon}</span>
            <span className="theme-label">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
