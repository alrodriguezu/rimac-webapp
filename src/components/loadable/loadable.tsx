import { ReactNode, Suspense, lazy, useRef } from 'react';
import FallbackView from './fallback-view/fallback-view';

export const FallBackViewSpinner = <FallbackView />;
export const FallbackFullScreen = (
  // <LoadingScreen isLoading bgTrasparent variant="primary" />
  <div>hola</div>
);

/**
 * @param dynamicComponent import dynamic component
 * @param fallback usa a custom component to show a fallback, otherwise you the fallback listed above
 */
export const loadable = (
  dynamicComponent: () => Promise<{ default: React.ComponentType<any> }>,
  fallback?: ReactNode
) => {
  const LocalComponent = () => {
    const LoadableComponent = useRef(lazy(dynamicComponent)).current;

    return (
      <Suspense fallback={fallback || FallBackViewSpinner}>
        <LoadableComponent />
      </Suspense>
    );
  };

  return <LocalComponent />;
};
