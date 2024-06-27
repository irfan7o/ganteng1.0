import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const Routes = () => {
  return (
    <div className="p-4">
      <RouterRoutes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </RouterRoutes>
    </div>
  );
}

