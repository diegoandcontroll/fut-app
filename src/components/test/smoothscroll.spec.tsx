import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import SmoothScrollAnchor, { SmoothScrollAnchorProps } from "../smoothAnchor";

describe("SmoothScrollAnchor", () => {
  const targetId = "target";
  const children = "Anchor Text";
  const smoothScrollAnchorProps: SmoothScrollAnchorProps = {
    targetId,
    children,
  };

  it("should scroll to target when clicked", () => {
    const scrollIntoViewMock = jest.fn();
    const getElementByIdMock = jest.spyOn(document, "getElementById").mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    } as unknown as HTMLElement);

    const { getByText } = render(<SmoothScrollAnchor {...smoothScrollAnchorProps} />);
    const anchor = getByText(children);
    fireEvent.click(anchor);

    expect(getElementByIdMock).toHaveBeenCalledWith(targetId);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
    });

    getElementByIdMock.mockRestore();
  });

  it("should render anchor with correct href", () => {
    const { getByText } = render(<SmoothScrollAnchor {...smoothScrollAnchorProps} />);
    const anchor = getByText(children);

    expect(anchor.getAttribute("href")).toBe(`#${targetId}`);
  });
});