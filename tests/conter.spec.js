import Counter from '../src/components/Counter.vue';
import {mount} from 'vue-test-utils';
import expect from 'expect';

describe ('Counter',() => {
	let wrapper ;
	
	beforeEach(()=>{
		wrapper = mount(Counter);
	});

	it('defaults to a counter of 0',() => {
		expect(wrapper.vm.count).toBe(0);
	});

	it('increase the count when the button is clicked',() => {
		expect(wrapper.vm.count).toBe(0);
			
		wrapper.find('.increament').trigger('click');

		expect(wrapper.vm.count).toBe(1);
	});	

	it('decrease the count when the button is clicked',() => {
		expect(wrapper.vm.count).toBe(0);
			
		wrapper.find('.increament').trigger('click');
		wrapper.find('.increament').trigger('click');

		wrapper.find('.decreament').trigger('click');

		expect(wrapper.vm.count).toBe(1);
	});

	it('it present the current count',() => {
		expect(wrapper.find('.count').html()).toContain(0);

		wrapper.find('button').trigger('click');

		expect(wrapper.find('.count').html()).toContain(1);

	});

	it('never goes below 0 ',() => {
		
		expect(wrapper.vm.count).toBe(0);
		wrapper.find('.increament').trigger('click');
		wrapper.setData({count:1});
		expect(wrapper.find('.decreament').hasStyle('display','none')).toBe(false);
	});
})
