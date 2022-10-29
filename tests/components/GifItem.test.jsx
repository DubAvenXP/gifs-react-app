import { render, screen } from "@testing-library/react";

import { GifItem } from "../../src/components";

describe("Tests in <GifItem />", () => {
    const gif = {
        id: "ABC",
        title: "A title",
        url: "https://localhost/image.jpg",
    };

    test("should be match with the snapshot", () => {
        const { container } = render(<GifItem {...gif} />);
        expect(container).toMatchSnapshot();
    });

    test("should have a paragraph with the title", () => {
        render(<GifItem {...gif} />);
        const p = screen.getByText(gif.title);
        expect(p.innerHTML).toBe(gif.title);
    });

    test("should have an image equal to the url and alt equal to title", () => {
        render(<GifItem {...gif} />);
        const {src, alt} = screen.getByRole("img");
        expect(src).toBe(gif.url);
        expect(alt).toBe(gif.title);
    });

    test("shouldn't have a button with the text 'Delete'", () => {
        render(<GifItem {...gif} />);
        const button = screen.queryByText("Delete");
        expect(button).toBeNull();
    });

    test("should have a button with the text 'Delete' when pass onDeleteCategory prop", () => {
        render(<GifItem {...gif} onDeleteCategory={() => {}} />);

        const button = screen.queryByText("Delete");
        expect(button).toBeTruthy();
    });
});
