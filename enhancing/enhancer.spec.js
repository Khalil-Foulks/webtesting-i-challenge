const enhancer = require('./enhancer.js');
// test away!

describe("enhancer", () => {
    describe("repair", () => {
        it("should set durabilty to 100", () => {
            expect(enhancer.success({ item:"sword", durability: 77, enhancement: 0 })).toEqual({ item:"sword", durability: 100, enhancement: 0 })
            expect(enhancer.success({ item:"sword", durability: 0, enhancement: 0 })).toEqual({ item:"sword", durability: 100, enhancement: 0 })
        })
    })
    describe("success", () => {
        it("should increase enhance by 1 and do nothing at enhancement 20", () => {
            expect(enhancer.success({ item:"sword", durability: 77, enhancement: 0 })).toEqual({ item:"sword", durability: 77, enhancement: 1 })
            expect(enhancer.success({ item:"sword", durability: 0, enhancement: 10 })).toEqual({ item:"sword", durability: 0, enhancement: 11 })
            expect(enhancer.success({ item:"sword", durability: 2, enhancement: 20 })).toEqual({ item:"sword", durability: 2, enhancement: 20 })
        })
    })
})