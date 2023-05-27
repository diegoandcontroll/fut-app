import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/Appcontext";
import { Navbar } from "../navbar";
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../context/Appcontext", () => ({
  useAppContext: jest.fn(),
}));

describe("Navbar", () => {
  const mockRouter = {
    pathname: "/",
  };

  const mockUseRouter = useRouter as jest.Mock;
  const mockUseAppContext = useAppContext as jest.Mock;

  beforeEach(() => {
    mockUseRouter.mockReturnValue(mockRouter);
    mockUseAppContext.mockReturnValue({
      state: { apiKey: "", isLogged: false },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders Navbar component", () => {
    render(<Navbar />);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();

    const titleElement = screen.getByText("Striker");
    expect(titleElement).toBeInTheDocument();
  });

  test("handles menu toggle", () => {
    render(<Navbar />);
    const menuItems = screen.getByTestId("menu-items");
    expect(menuItems).toBeInTheDocument(); // Verifica se o elemento está presente inicialmente

    const menuIcon = screen.getByTestId("menu-icon");
    fireEvent.click(menuIcon);

    // Verifique se o menu está oculto após o clique
    const updatedMenuItems = screen.queryByTestId("menu-items");
    expect(updatedMenuItems).toBeInTheDocument();
  });
});
