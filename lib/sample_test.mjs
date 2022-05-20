import { strict as assert } from "assert";
import FizzBuzz from "./sample.mjs";

describe("FizzBuzz 数列と変換規則を扱う FizzBuzz クラス", () => {
  let fizzbuzz;
  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });

  describe("convertメソッドは数を文字列に変換する", () => {
    describe("その数が3の倍数のときは、その数の代わり「Fizz」に変換する", () => {
      test("同値類の中の最小の3の倍数である3を渡すと文字列'Fizz'を返す", () => {
        assert.equal(fizzbuzz.convert(3), "Fizz");
      });
      test("上限の境界値の一つ内側の値99は3の倍数なので文字列'Fizz'を返す", () => {
        assert.equal(fizzbuzz.convert(99), "Fizz");
      });
    });

    describe("その数が5の倍数のときは、その数の代わりに「Buzz」に変換する", () => {
      test("同値類の中の最小の3の倍数である5を渡すと文字列'Buzzを返す", () => {
        assert.equal(fizzbuzz.convert(5), "Buzz");
      });
      test("上限の境界値100を渡すと文字列'Buzzを返す", () => {
        assert.equal(fizzbuzz.convert(100), "Buzz");
      });
    });

    describe("その数が3と5両方の倍数のときは、その数の代わりに「FizzBuzz」に変換する", () => {
      test("同値類の中の最小の3と5の公倍である15を渡すと文字列'Buzzを返す", () => {
        assert.equal(fizzbuzz.convert(15), "FizzBuzz");
      });
    });

    describe("その他の数の場合は文字列に変換する", () => {
      test("下限の境界値1を渡すと文字列'1'を返す", () => {
        assert.equal(fizzbuzz.convert(1), "1");
      });
      test("下限の境界値の一つ内側の値2を渡すと文字列'2'を返す", () => {
        assert.equal(fizzbuzz.convert(2), "2");
      });
    });

    describe('仕様の範囲外の値であっても同じ規則が適用される', ()=> {
      test("上限の境界値の一つ外側の値101を渡すと文字列'101'を返す", () => {
        assert.equal(fizzbuzz.convert(101), "101");
      });
      test("下限の境界地の一つ外側の値0は3の倍数でも5の倍数でもあるので文字列'Buzzを返す", () => {
        assert.equal(fizzbuzz.convert(0), "FizzBuzz");
      });
    })
  });
});
