import controlShows from "./controlShows";

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

test("Test to see controlShows.addItem() sets localStorage to the param value", () => {
  let param = "Hello";
  controlShows.addShow(param);
  expect(localStorage.getItem("Test")).toBeDefined();
});

// More tests are coming
