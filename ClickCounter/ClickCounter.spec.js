describe('App.ClickCounter', ()=> {
  let counter;

  beforeEach(() => {
    counter = App.ClickCounter()
  })

  describe('getValue()', ()=> {
    it('초기값이 0인 카운터 값을 반환한다', ()=> {
      // const counter = App.ClickCounter()
      expect(counter.getValue()).toBe(0)
    })
  })

  describe('increase()', ()=> {
    it('카운터를 1 올린다', ()=> {
      // 준비, beforeEach를 통해 중복코드 제어
      // const counter = App.ClickCounter()

      // 초기값 저장
      const initialValue = counter.getValue()
      // 실행
      counter.increase()

      // 단언
      expect(counter.getValue()).toBe(initialValue + 1)
    })
  })
})