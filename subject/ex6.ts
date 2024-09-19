import { error } from "console";

export const randTime = <T>(val: T): Promise<T> =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

export async function promiseAllSettled<T>(promises: Promise<T>[]) {
	const statusResult : Object[] = [];

	for (const p of promises) {
		try {
			const val = await p;
			statusResult.push({ status: 'fulfilled', value: val });
		} catch(err) {
			statusResult.push({ status: 'rejected', reason: error });
		}
	}

	return statusResult;
}
