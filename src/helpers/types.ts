export interface userType {
	name: string;
	email: string;
	id: string;
}

export interface testCasesType {
	test_input: string[];
	test_expected: string;
	code_output: string | null;
	passed_test: boolean;
}

export interface sessionType {
	
}
