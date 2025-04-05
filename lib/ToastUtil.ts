// @ts-ignore
// @ts-ignore
import {
	toast,
	type ToastT,
	type ExternalToast,
	type PromiseData,
} from "sonner";

export enum ToastType {
	SUCCESS = "success",
	ERROR = "error",
	INFO = "info",
	WARNING = "warning",
	LOADING = "loading",
}

// Define the ToastUtil utility
export const ToastUtil = {
	// Generic show method
	show: (
		type: ToastType,
		message: string | React.ReactNode,
		description: string | React.ReactNode = "",
		options: ExternalToast = {}
	): string | number => {
		const base: ExternalToast = { description, ...options };

		switch (type) {
			case ToastType.SUCCESS:
				return toast.success(message, base);
			case ToastType.ERROR:
				return toast.error(message, base);
			case ToastType.WARNING:
				return toast.warning(message, base);
			case ToastType.INFO:
				return toast.info(message, base);
			case ToastType.LOADING:
				return toast.loading(message, base);
			default:
				return toast.message(message, base);
		}
	},

	// Shortcut methods
	success: (
		message: string | React.ReactNode,
		description: string | React.ReactNode = "",
		options: ExternalToast = {}
	): string | number => toast.success(message, { description, ...options }),

	error: (
		message: string | React.ReactNode,
		description: string | React.ReactNode = "",
		options: ExternalToast = {}
	): string | number => toast.error(message, { description, ...options }),

	info: (
		message: string | React.ReactNode,
		description: string | React.ReactNode = "",
		options: ExternalToast = {}
	): string | number => toast.info(message, { description, ...options }),

	warning: (
		message: string | React.ReactNode,
		description: string | React.ReactNode = "",
		options: ExternalToast = {}
	): string | number => toast.warning(message, { description, ...options }),

	loading: (
		message: string | React.ReactNode,
		description: string | React.ReactNode = "",
		options: ExternalToast = {}
	): string | number => toast.loading(message, { description, ...options }),

	// Promise-based toast
	promise: <ToastData>(
		promise: Promise<ToastData>,
		messages: {
			loading: string | React.ReactNode;
			success:
				| string
				| React.ReactNode
				| ((data: ToastData) => string | React.ReactNode);
			error:
				| string
				| React.ReactNode
				| ((error: any) => string | React.ReactNode);
			description?: string | React.ReactNode;
		},
		options: ExternalToast = {}
	):
		| (string & { unwrap: () => Promise<ToastData> })
		| (number & { unwrap: () => Promise<ToastData> })
		| {
				unwrap: () => Promise<ToastData>;
		  } => {
		const promiseData: PromiseData<ToastData> = {
			loading: messages.loading,
			success: messages.success,
			error: messages.error,
			description: messages.description,
			...options,
		};
		return toast.promise(promise, promiseData);
	},

	// Dismiss a toast
	dismiss: (id?: string | number): string | number => {
		return toast.dismiss(id);
	},
};

export default ToastUtil;
