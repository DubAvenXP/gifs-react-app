import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Test in <GifGrid />", () => {
    const category = "One Punch";

    test("should show loading element", () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        const loading = screen.getByText("Loading...");
        expect(loading).toBeTruthy();
    });

    test("should show category title", () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        const title = screen.getByText(category);
        expect(title).toBeTruthy();
    });

    test("should show items when images are loaded", () => {
        const gifs = [
            { id: "ABC", title: "ABC", url: "https://localhost/abc.jpg" },
            { id: "123", title: "123", url: "https://localhost/123.jpg" },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);
        expect( screen.getAllByRole("img").length ).toBe( gifs.length );
    });
});
