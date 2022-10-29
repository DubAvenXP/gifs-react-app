const { render, screen, fireEvent } = require("@testing-library/react");

const { GifExpertApp } = require("../src/GifExpertApp");

describe('Test in <GifExperApp/>', () => {
    test('should add new category', () => {
        render(<GifExpertApp/>);
        
        const inputValue = 'Naruto';

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        
        const category = screen.getByRole("heading", { name: inputValue, level: 3 });
        expect(category).toBeTruthy();
    });

    test('should not add new category if input is empty', () => {
        render(<GifExpertApp/>);
        
        const inputValue = '';

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        
        const category = screen.queryByRole("heading", { name: inputValue, level: 3 });
        expect(category).toBeNull();
    });
    test('should not add new category if category already exists', () => {
        render(<GifExpertApp/>);
        
        const inputValue = 'Naruto';

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        
        const category = screen.getAllByRole("heading", { name: inputValue, level: 3 });
        expect(category.length).toBe(1);
    });
    
});