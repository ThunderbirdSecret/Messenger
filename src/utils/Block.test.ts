import { expect } from 'chai';
import sinon from 'sinon';
import BlockType from './Block';
import proxyquire from 'proxyquire';

const eventBusMock = {
    on: sinon.fake(),
    emit: sinon.fake(),
  }
  
  const { default: Block } = proxyquire('./Block', {
    './EventBus': {
      EventBus: class {
        emit = eventBusMock.emit;
        on = eventBusMock.on;
      }
    }
  }) as { default: typeof BlockType };
  
  describe('Block', () => {
    const tmp = () => '<div>TEST</div>';
    class ComponentMock extends Block {
        constructor(props: any){
            super(props)
        }

        render(){
            return this.compile(tmp, {})
        }
    }

    const block = new ComponentMock("div")
    
    it("getContent() return HTMLElement", () => {
      expect(block.getContent()).to.eq(block.element);
    });
    
    it("setProps() install props value", () => {
        block.setProps({ test: 'test' });
        //@ts-expect-error
        const props = block.props.test;
        expect(props).to.eq('test');
    });

    describe('setProps() update props with new property', () => {
        before(() => {
          //@ts-expect-error
          block.props = { test: 'test' };
        });
        it('Where added props  "flow:component-did-update"', () => {
          block.setProps({ test: 'testNew' });
          //@ts-expect-error
          const props = block.props.test;
          expect(props).to.eq('testNew');
        });
      });

    it('should fire init event on initialization',  () => {
      new ComponentMock({});
  
      expect(eventBusMock.emit.calledWith('init')).to.eq(true);
    });

    it("componentdidmount ", () => {
        let isCalled = true
        class ComponentMock extends Block{
            componentDidMount(): void {
                isCalled = true
            }
        }
        const component = new ComponentMock({})

        component.dispatchComponentDidMount()

        expect(isCalled).to.eq(true)
    })
  });
