import throttle from 'lodash.throttle';
import { MouseEvent, useMemo } from 'react';

export function useThrottledClick(
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
) {
  const throttledClick = useMemo(
      () => throttle((event: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
          onClick(event);
        }
      }, 800),
      [onClick]
    );
    return throttledClick
}