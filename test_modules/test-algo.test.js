const { addOneAndTwo, undefinedFunction} = require("./test-algo")

test("Should add 1 and 2 and return 3", ()=> {
  expect(addOneAndTwo(1,2)).toBe(3)
})


test("should return defined", ()=> {
  expect(undefinedFunction(4)).toBeDefined()
})