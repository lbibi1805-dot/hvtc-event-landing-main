// @ts-ignore
// @ts-ignore
import {
	toast,
	type ExternalToast,
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


	// Dismiss a toast
	dismiss: (id?: string | number): string | number => {
		return toast.dismiss(id);
	},
};

export default ToastUtil;
