import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface VehicleData {
  id: string;
  speed: number;
  lat: number;
  lng: number;
  status: 'Moving' | 'Idle' | 'Stopped' | 'Offline';
  battery: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}