import React from 'react';

export interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}