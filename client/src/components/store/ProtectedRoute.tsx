import React from "react";
import { Routes, Navigate } from "react-router-dom";

type Props = {
  protectCondition: boolean;
  redirectTo: string;
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({
  protectCondition,
  redirectTo,
  children,
}) => {
  if (!protectCondition) {
    return <Navigate to={redirectTo} replace />;
  }
  return <Routes>{children}</Routes>;
};

export default ProtectedRoute;
