import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const renderWithRouter = (ui: React.ReactElement) =>
  render(<BrowserRouter>{ui}</BrowserRouter>);

describe("Logo consistency – 36px (h-9) across header and footer", () => {
  it("Navbar logo has h-9 class", () => {
    const { container } = renderWithRouter(<Navbar />);
    const logo = container.querySelector('img[alt="MARL Accelerator"]');
    expect(logo).not.toBeNull();
    expect(logo!.className).toContain("h-9");
  });

  it("Footer logo has h-9 class", () => {
    const { container } = renderWithRouter(<Footer />);
    const logo = container.querySelector('img[alt="MARL Accelerator"]');
    expect(logo).not.toBeNull();
    expect(logo!.className).toContain("h-9");
  });

  it("Both logos use identical height class", () => {
    const { container: navContainer, unmount } = renderWithRouter(<Navbar />);
    const navLogo = navContainer.querySelector('img[alt="MARL Accelerator"]');
    const navHeight = navLogo!.className.split(" ").filter((c) => /^h-/.test(c));
    unmount();

    const { container: footerContainer } = renderWithRouter(<Footer />);
    const footerLogo = footerContainer.querySelector('img[alt="MARL Accelerator"]');
    const footerHeight = footerLogo!.className.split(" ").filter((c) => /^h-/.test(c));

    expect(navHeight).toEqual(footerHeight);
  });
});
