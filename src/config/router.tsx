import { RouteObject } from "react-router-dom";
import LazyWrapper from "@/components/lazy-wrapper";

const ROUTER_CONFIG: RouteObject[] = [
  {
    path: "/",
    element: <LazyWrapper path="/layout" />,
  },
  {
    path: "*",
    element: <>404 Not Found!</>,
  },
];
export { ROUTER_CONFIG };
