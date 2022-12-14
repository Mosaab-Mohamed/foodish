class Cache {
	set(key: string, obj: any) {
		localStorage.setItem(key, JSON.stringify(obj));
	}

	get(key: string) {
		const item = localStorage.getItem(key);
		return typeof item === "string" ? JSON.parse(item) : undefined;
	}

	remove(key: string) {
		localStorage.removeItem(key);
	}
}

export default new Cache();
