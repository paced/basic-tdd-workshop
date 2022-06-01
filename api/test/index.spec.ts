/**
 * This backend is sufficiently simple in that the entire operation can be tested in a single file.
 *
 * Often you may see "index.ts" as only handling very basic operations and delegating to another module, e.g.,
 * "routines". There's no strict and universally-accepted way to do it, but as long as there's some form of
 * structure, that's usually fine.
 *
 * If this were are more complex backend, I may create `src/routines/read.ts` and `src/routines/write.ts` which
 * would be 1-to-1 file to test file. That's just one example; again, it's not an exact science.
 */

import {expect} from "chai";

describe("api", () => {
  describe(".read", () => {
    it("should return set message if there is a message", () => {
      // TODO: Implement a test.

      expect("test").to.eql("test");
    });
  });
});
