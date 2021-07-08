class Counter {
	constructor() {
		this.count = 0;
		this.messages = [
			{ start: 0, end: 9, message: 'Go on with it!' },
			{ start: 10, end: 15, message: '頑張って!' },
			{ start: 16, end: 25, message: 'Sauba' },
			{ start: 26, end: 50, message: 'Good Job' },
		];

		this.cacheDOM();
		this.bindEvents();
		this.render();
	}

	cacheDOM() {
		this.counterEl = document.getElementById('counter');
		this.incrementCounterEl = document.getElementById('increment-counter');
		this.decrementCounterEl = document.getElementById('decrement-counter');
		this.inspirationalMessageEl = document.getElementById('inspirational-message');
	}

	bindEvents() {
		this.incrementCounterEl.addEventListener('click', () => this.countUp(1));
		this.decrementCounterEl.addEventListener('click', () => this.countUp(-1));
	}

	render() {
		this.counterEl.innerText = this.count;

		const { message } = this.messages.find(({ start, end }) => this.count >= start && this.count <= end);
		this.inspirationalMessageEl.innerText = message;
	}

	countUp(value) {
		const newCount = this.count + value;
		if (newCount < 0 || newCount > 50) return;
		this.count = newCount;
		this.render();
	}
}
new Counter();
