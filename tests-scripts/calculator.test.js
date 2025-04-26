import { cal_obj } from "../src/calculator";

test("test addition", () => {
  expect(cal_obj.add(2, 2)).toBe(4);
});

test("test subtraction", () => {
  expect(cal_obj.subtract(5, 2)).toBe(3);
});

test("test division", () => {
  expect(cal_obj.divide(10, 2)).toBe(5);
});

test("test multiplication", () => {
  expect(cal_obj.multiply(6, 6)).toBe(36);
});
