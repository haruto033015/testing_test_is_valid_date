import {isValidDate} from "@/is_valid_date";

describe("isValidDate", () => {
  test("matching_success", () => {
    expect(isValidDate(2001, 3, 30)).toBe(true);
  });
  test("matching_failed", () => {
    expect(isValidDate(2028, 6, 31)).toBe(false);
  });
});
