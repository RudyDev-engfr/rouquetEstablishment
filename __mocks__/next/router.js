import { useEffect } from "react";

const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  route: "/",
  pathname: "/",
  query: {},
  asPath: "/",
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
};

export const useRouter = () => mockRouter;
