import cache from "./cache";

class User {
	/**
	 * Setup a new user object
	 * @param {Object} userInfo { name, email, password }
	 * @returns {Object} Complete user Object with all properties
	 */
	init(userInfo: any) {
		return {
			...userInfo,
			accountType: "customer",
		};
	}
	/**
	 *
	 * cache user object in localStorage
	 */

	login(user: any) {
		cache.set(`${process.env.REACT_APP_NAME}_user`, user);
	}

	/**
	 * remove user object from localStorage
	 */

	logout() {
		cache.remove(`${process.env.REACT_APP_NAME}_user`);
	}

	/**
	 * check if user is logged in
	 * @returns {boolean}
	 */

	isLoggedUser() {
		return (
			Boolean(cache.get(`${process.env.REACT_APP_NAME}_user`)) &&
			cache.get(`${process.env.REACT_APP_NAME}_user`).accountType ===
				"customer"
		);
	}

	isLoggedAdmin() {
		return (
			Boolean(cache.get(`${process.env.REACT_APP_NAME}_user`)) &&
			cache.get(`${process.env.REACT_APP_NAME}_user`).accountType === "admin"
		);
	}

	info() {
		return cache.get(`${process.env.REACT_APP_NAME}_user`);
	}
}

export default new User();
