const date = new Date();
console.log(date.getUTCHours());

//static, no new instance
const dateNowStatic = Date.now();
console.log(dateNowStatic);

class Coupon {
  static couponName: string = "Super Coupon";
  static createCoupon(percentage: number) {
    return `PIZZA_RESTAURANTS_${this.couponName}_${percentage}%`;
  }
}

console.log(Coupon.createCoupon(5))
