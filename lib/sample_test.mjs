import { strict as assert } from "assert";
import FizzBuzz from "./sample.mjs";

describe("FizzBuzz 数列と変換規則を扱う FizzBuzz クラス", () => {
  let fizzbuzz;
  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });

  describe("convertメソッドは数を文字列に変換する", () => {
    describe("その数が3の倍数のときは、その数の代わり「Fizz」に変換する", () => {
      test.each([
        {input: 3, reason: '同値類の中の最小の3の倍数'},
        {input: 99, reason: '上限の境界値の一つ内側の値'},
      ])('$reason である $inputを渡すと文字列Fizzを返す', ({input, reason}) => {
        assert.equal(fizzbuzz.convert(input), "Fizz", reason);
      })
    });

    describe("その数が5の倍数のときは、その数の代わりに「Buzz」に変換する", () => {
      test.each([
        {input: 5, reason: '同値類の中の最小の5の倍数'},
        {input: 100, reason: '上限の境界値'},
      ])('$reason である $inputを渡すと文字列Buzzを返す', ({input, reason}) => {
        assert.equal(fizzbuzz.convert(input), "Buzz", reason);
      })
    });

    describe("その数が3と5両方の倍数のときは、その数の代わりに「FizzBuzz」に変換する", () => {
      test.each([
        {input: 15, reason: '同値類の中の最小の3と5の公倍である'},
      ])('$reason である $inputを渡すと文字列FizzBuzzを返す', ({input, reason}) => {
        assert.equal(fizzbuzz.convert(input), "FizzBuzz", reason);
      });
    });

    describe("その他の数の場合は文字列に変換する", () => {
      test.each([
        {input: 1, expected:'1', reason: '下限の境界値'},
        {input: 2, expected:'2', reason: '下限の境界値の一つ内側'},
      ])('$reason である $inputを渡すと文字列 $expectedを返す', ({input, reason, expected}) => {
        assert.equal(fizzbuzz.convert(input), expected, reason);
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
