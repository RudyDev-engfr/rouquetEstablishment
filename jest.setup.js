import "@testing-library/jest-dom/extend-expect";

// Mock pour next/router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(),
      isFallback: false,
    };
  },
}));
