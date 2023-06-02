import { getLetterCount } from "./letter_count";
import { expect } from "chai";

describe("getLetterCount - basic funtionality", () => {
    it("returns an empty object when pass an empty string", () => {
        const expected = {};
        const actual = getLetterCount("");
        expect(actual).to.deep.equal(expected);
    })
})