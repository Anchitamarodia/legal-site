
import React from 'react';

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  id: string;
}

export interface FeatureCard {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  id: string;
  description: string;
}

export type UserRole = 'Lawyer' | 'Client' | 'Admin';

export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
  timestamp: number;
}

export interface LegalUpdate {
  type: string;
  color: string;
  icon: React.ReactNode;
  fire: boolean;
  title: string;
  time: number;
}

export interface Course {
  icon: React.ReactNode;
  title: string;
  rating: string;
  tag: string | React.ReactNode;
}

export interface Lawyer {
  initials: string;
  name: string;
  specialty: string;
  exp: string;
  rating: number;
  cases: number;
  location: string;
  status: 'Available' | 'Busy';
}
