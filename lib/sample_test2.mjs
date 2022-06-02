import ClosedRange from "./sample2.mjs";

describe("ClosedRange 閉区間を扱う ClosedRange クラス", () => {
  let closedRange;

  beforeEach(() => {
    closedRange = new ClosedRange(3, 7);
  })
  describe("数字を2つ受け取り、それぞれ下端点、上端点として保持する", () => {
    test("下端点 3を渡すと、lowerEndPoint 3を保持する", () => {
      expect(closedRange.getLowerEndpoint()).toBe(3);
    });
    test("上端点 7を渡すと、upperEndPoint 7を保持する", () => {
      expect(closedRange.getUpperEndpoint()).toBe(7);
    });
  });

  describe("getRangeString関数: 下端点と上端点を '[下端点, 上端点]' の配列として返す", () => {
    test("下端点 3, 上端点 7 の場合、 '[3,7]'を返す", () => {
      expect(closedRange.getRangeString()).toEqual("[3,7]");
    })
  });

  describe("isContain 関数: 渡した値が閉区間に含まれているかをチェックする", () => {
    test("下限の境界値の3を渡すと true を返す", () => {
      expect(closedRange.isContain(3)).toBe(true);
    });
    test("上限の境界値の7を渡すと true を返す", () => {
      expect(closedRange.isContain(7)).toBe(true);
    });
    test("下限の境界値の外側の2を渡すと false を返す", () => {
      expect(closedRange.isContain(2)).toBe(false);
    });
    test("下限の境界値の外側の8を渡すと false を返す", () => {
      expect(closedRange.isContain(8)).toBe(false);
    });
  });

  describe('例外処理', () => {
    test.todo("引数が1つしかない場合");
    test.todo("第一引数が第二引数よりも大きい場合");
  });
});
