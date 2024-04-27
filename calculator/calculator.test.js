describe("calculateMonthlyPayment", function () {
  it("should calculate the monthly rate correctly", function () {
    const values = { amount: 10000, years: 8, rate: 5.8 };
    expect(calculateMonthlyPayment(values)).toEqual("130.44");
  });
});
