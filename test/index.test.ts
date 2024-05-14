import { describe, it, expect } from "vitest";
import { useShit } from "../src";


describe('useShit', () => {
  it("is function", async () => {
    expect(useShit).toBeTypeOf('function');
  });
  it("returns array with one index", () => {
    const shit = useShit('shit');
    expect(shit).toBeInstanceOf(Array);
    expect(shit.length).toBe(1);
  });
  it("returns same object as input", () => {
    const realShit = [1, 2, 3, 4];
    const [shit] = useShit(realShit);
    expect(shit).toBe(realShit);
  });
});
