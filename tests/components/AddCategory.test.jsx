import { fireEvent, render, screen } from "@testing-library/react";

import { AddCategory } from "../../src/components";

describe("Test in <AddCategory/>", () => {
    test("should change text box's value", () => {
        
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole("textbox");

        fireEvent.change(input, { target: { value: "Hello world" } });
        expect(input.value).toBe("Hello world");

    });

    test("should post info on submit if input has a value", () => {
        const inputValue = "Hello world";

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe("");

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test("should not post info on submit if input has no value", () => {
        const inputValue = "";

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });
});
