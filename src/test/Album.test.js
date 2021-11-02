import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { Album } from "../components/Album";

describe('Album', () => {
    let testAlbum;
    beforeEach(() => {
        testAlbum = {
            size: "medium",
            title: "Test Album",
            year: 2021,
            songs: ["Test Song 1", "Test Song 2", "Test Song 3"]
        };
        render(<Album size={testAlbum.size} title={testAlbum.title} year={testAlbum.year} songs={testAlbum.songs}/>);
    })

    test('it renders a medium-sized album card', () => {
        const album = screen.queryByRole("menuitem");
        const startingClass = album.className;
        expect(startingClass).toBe('album medium');
    })

    // test('songlist should be hidden', () => {
    //     // Not working correctly because display is changed in css file which is not loaded/mocked here
    //     const songlist = screen.queryByRole("group");
    //     expect(songlistComputed).toHaveStyle("display: none");
    // })

    test('on click it toggles large size', () => {
        // Check it renders successfully
        const album = screen.queryByRole("menuitem");
        const startingClass = album.className;
        expect(startingClass).toBe('album medium');
        // Simulate a user click
        userEvent.click(album);
        // Check it's now large
        const newClass = album.className;
        expect(newClass).toBe('album large');
        // Check it returns to original size when clicked again
        userEvent.click(album);
        const nextClass = album.className;
        expect(nextClass).toBe(startingClass);
    })

    // test('large size should show song list', () => {
    //     // Technically passing though only because default style is display: block, css isn't loaded/mocked here
    //     const album = screen.queryByRole("menuitem");
    //     userEvent.click(album);
    //     const songlist = screen.queryByRole("group");
    //     expect(songlist).toHaveStyle("display: block");
    // })
})