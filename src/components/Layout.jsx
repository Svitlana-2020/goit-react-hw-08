import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <div >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

    </div>
  );
};
