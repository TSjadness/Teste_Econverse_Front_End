import { SVGProps } from 'react';

const base = (props: SVGProps<SVGSVGElement>) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
  ...props,
});

export const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

export const Minus = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M5 12h14" />
  </svg>
);

export const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)}>
    <path d="M5 12h14M12 5v14" />
  </svg>
);
