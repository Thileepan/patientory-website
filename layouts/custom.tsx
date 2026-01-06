// custom.d.ts
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'df-messenger': any;
      'df-messenger-chat-bubble': any;
    }
  }
}