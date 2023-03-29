import proxyquire from "proxyquire";
import { expect } from "chai";
import sinon from "sinon";
import type BlockType from "./Block";

const eventBusMock = {
  on: sinon.stub(),
  emit: sinon.stub(),
  off: sinon.stub(),
  listeners: {},
};

const { default: Block } = proxyquire("./Block", {
    "./EventBus": {
      default: class {
        emit = eventBusMock.emit;
        on = eventBusMock.on;
        off = eventBusMock.off
      }
    }
  }) as { default: typeof BlockType };
  
  describe("Block", () => {

    beforeEach(() => {
        eventBusMock.on.reset()
        eventBusMock.emit.reset()
        eventBusMock.off.reset()
    })

    class ComponentMock extends Block {}
  
    it("should fire init event on initialization",  () => {
      new ComponentMock({});
  
      expect(eventBusMock.emit.calledWith("init")).to.eq(true);
    });

    it("should fire protected componentDidMount on didMountDispatch", () => {
        let isCalled = false

        class ComponentMock extends Block {

            componentDidMount(): void {
                isCalled = true
            }
        }
    
        const component = new ComponentMock({})

        component.dispatchComponentDidMount()

        expect(isCalled).to.eq(true)
    })

    it("test render", () => {})
  });
