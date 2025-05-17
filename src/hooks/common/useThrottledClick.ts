import throttle from 'lodash.throttle';
import { MouseEvent, useCallback } from 'react';

export function useThrottledClick(
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
) {
  const throttledClick = useCallback(
      throttle((event: MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
          onClick(event);
        }
      }, 800),
      [onClick]
    );
    return throttledClick
}