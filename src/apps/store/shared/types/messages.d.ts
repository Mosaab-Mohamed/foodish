export interface Message {
	name: string;
	email: string;
	phoneNumber?: string;
	subject: string;
	content: string;
	replied: boolean;
	response?: string;
}
