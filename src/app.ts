const coupon: string = "pizza25 %";

function activateCoupon(coupon: string): string[] {
  return coupon.split(" ");
}

const couponReady: string = `
This coupon give you ${activateCoupon(coupon).join(" ")} discount!
`;
console.log(couponReady);
