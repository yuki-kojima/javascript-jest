import { strict as assert } from "assert";
import FizzBuzz from "./sample.mjs";

describe("FizzBuzz 数列と変換規則を扱う FizzBuzz クラス", () => {
  let fizzbuzz;
  beforeEach(() => {
    // 準備
    fizzbuzz = new FizzBuzz();
  });

  describe("convertメソッドは数を文字列に変換する", () => {
    describe("その数が3の倍数のときは、その数の代わり「Fizz」に変換する", () => {
      test("3を渡すと文字列'Fizz'を返す", () => {
        // 実行 & 検証
        assert.equal(fizzbuzz.convert(3), "Fizz");
      });
    });

    describe("その数が5の倍数のときは、その数の代わりに「Buzz」に変換する", () => {
      test("5を渡すと文字列'Buzzを返す", () => {
        // 実行 & 検証
        assert.equal(fizzbuzz.convert(5), "Buzz");
      });
    });

    describe("その他の数の場合は文字列に変換する", () => {
      test("1を渡すと文字列'1'を返す", () => {
        // 実行 & 検証
        assert.equal(fizzbuzz.convert(1), "1");
      });
      test("2を渡すと文字列'2'を返す", () => {
        // 実行 & 検証
        assert.equal(fizzbuzz.convert(2), "2");
      });
    });
  });
});
