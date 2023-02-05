

import React from 'react'

import './Button.css';

export default function Button({label}) {
  return (
    <div data-testid="bid" className="button-style">{label}</div>
  )
}
