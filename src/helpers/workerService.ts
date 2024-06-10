class ServiceWorker {
	worker: Worker = new Worker(new URL("./worker.js", import.meta.url), {
		type: "module",
	});

	constructor() {
		this.worker.onmessage = (event: Event) => this.onWorkerResponse(event);
	}

	public executeWorker(payload: object) {
		this.worker.postMessage(payload);
	}

	public evento() {}

	public onWorkerResponse(event: {
		data: { type: string; content: Array<unknown>; passedAllTests: boolean; testCases: object };
	}) {
		if (event.data?.type === "log" || event.data?.type === "warn" || event.data?.type === "error") {
			if (event.data.content[0] instanceof RangeError) {
				this.evento({
					type: "error",
					content: [`RangeError: ${event.data.content[0].message}`],
				});
			} else if (event.data.content[0] instanceof ReferenceError) {
				this.evento({
					type: "error",
					content: [`ReferenceError: ${event.data.content[0].message}`],
				});
			} else if (event.data.content[0] instanceof TypeError) {
				this.evento({
					type: "error",
					content: [`TypeError: ${event.data.content[0].message}`],
				});
			} else if (event.data.content[0] instanceof SyntaxError) {
				this.evento({
					type: "error",
					content: [`SyntaxError: ${event.data.content[0].message}`],
				});
			} else if (event.data.content[0] instanceof URIError) {
				this.evento({
					type: "error",
					content: [`URIError: ${event.data.content[0].message}`],
				});
			} else {
				this.evento({
					type: event.data?.type,
					content: [`${event.data.content[0]}`],
				});
			}
		} else {
			if (event.data?.passedAllTests) {
				this.evento({
					type: "test",
					passesAllTests: true,
					testCases: event.data?.testCases,
					logs: event.data?.logs,
				});
			} else {
				this.evento({
					type: "test",
					passesAllTests: false,
					testCases: event.data?.testCases,
					logs: event.data?.logs,
				});
			}
		}
	}

	removeWorker() {
		this.worker.terminate();
	}
}

export const serviceWorker = new ServiceWorker();
