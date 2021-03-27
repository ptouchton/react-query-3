
import { Route }  from "react-router";
import { UpdateBook } from "./UpdateBook";
import { useFetchBook } from "./useFetchBook";
import { useUpdateBook } from "./useUpdateBook";

jest.mock("./useFetchBook", () => ({
    useFetchBook: jest.fn()
}));

jest.mock("./useUpdateBook", () => ({
    useUpdateBook: jest.fn()
}));

describe("UpdateBook tests", () => {

    beforeEach(() => {
        useFetchBook.mockImplementation(() => ({}));
        useUpdateBook.mockImplementation(() => ({}));
    });

    it("fetches the book data for the given id", () => {
      global.renderWithRouter(() => (
          <Route path="/:id">
            <UpdateBook />
          </Route>
      ), "/test-book-id");
      expect(useFetchBook).toHaveBeenCalledWith("test-book-id")
    });
})