import { render } from "@testing-library/react";
import GoogleAnalytics from "./GoogleAnalytics";

describe("GoogleAnalytics", () => {
  it("renders without crashing", () => {
    render(<GoogleAnalytics />);
  });
});
