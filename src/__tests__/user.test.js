import { getUsername, getCity, getImage } from "../data/user";

test("username, city, and image are all exported", () => {
  expect(getUsername()).toEqual("Liza");
  expect(getCity()).toEqual("New York");
  expect(getImage()).toEqual("https://i.imgur.com/mV8PQxj.gif");
});
