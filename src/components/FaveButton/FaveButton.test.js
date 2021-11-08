import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FaveButton } from ".";

describe('FaveButton', () => {
    beforeEach(() => {
        render(<FaveButton />)
    })

    test('renders a span with a hollow star (☆) in it', () => {
        // find something with a star in it
        const faveStar = screen.queryByRole('switch');
        // is it in the document
        expect(faveStar.textContent).toContain('☆');
        expect(faveStar.style.color).toBe("black");
    })

    test('toggles a filled-in gold star (★) when clicked', () => {
        // find the star
        const faveStar = screen.queryByRole('switch');
        // see what colour the star is
        const startingColour = faveStar.style.color;
        // simulate clicking the star
        userEvent.click(faveStar);
        // check if colour and star is different
        const newStar = faveStar.textContent;
        expect(newStar).toBe("★");
        const newColour = faveStar.style.color;
        expect(newColour).not.toBe(startingColour);
        // check it returns to starting colour
        userEvent.click(faveStar);
        const nextStar = faveStar.textContent;
        expect(nextStar).toBe("☆");
        const nextColour = faveStar.style.color;
        expect(nextColour).toBe(startingColour);
    })
})