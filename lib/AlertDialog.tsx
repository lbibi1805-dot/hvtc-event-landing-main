// src/utils/AlertDialogUtils.tsx
import { createRoot } from 'react-dom/client';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { AlertCircleIcon, Info, MessageCircleWarningIcon } from "lucide-react"; // Sử dụng lucide-react thay vì Info giả định
import { ReactNode } from "react";
import { InfoCircleIcon } from "primereact/icons/infocircle";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { IoInformation } from "react-icons/io5";

// Định nghĩa type cho options
interface AlertDialogOptions {
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost"; // Các variant từ buttonVariants
    icon?: ReactNode;
}

// Hàm hiển thị AlertDialog và trả về Promise với lựa chọn của người dùng
export const showAlertDialog = ({
                                    title = "Are you sure?",
                                    description = "This action cannot be undone.",
                                    confirmText = "Continue",
                                    cancelText = "Cancel",
                                    variant = "destructive",
                                    icon = <TrashIcon className="size-6 text-red-600 dark:text-red-200" />,
                                }: AlertDialogOptions = {}): Promise<boolean> => {
    return new Promise((resolve) => {
        // Tạo một div tạm để render dialog
        const dialogContainer = document.createElement("div");
        document.body.appendChild(dialogContainer);
        const root = createRoot(dialogContainer);

        // Hàm xử lý khi người dùng nhấn nút
        const handleConfirm = () => {
            resolve(true); // Trả về true khi nhấn Confirm
            cleanup();
        };

        const handleCancel = () => {
            resolve(false); // Trả về false khi nhấn Cancel
            cleanup();
        };

        // Dọn dẹp sau khi dialog đóng
        const cleanup = () => {
            root.unmount();
            document.body.removeChild(dialogContainer);
        };

        // Render AlertDialog
        root.render(
            <AlertDialog defaultOpen={true}>
                <AlertDialogContent>
                    <AlertDialogHeader className="mb-4 items-center gap-2 text-black">
                        <div
                            aria-hidden="true"
                            className="shrink-0 rounded-full bg-red-50 p-3 dark:bg-red-900"
                        >
                            {icon}
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <AlertDialogTitle>{title}</AlertDialogTitle>
                            <AlertDialogDescription className="text-balance">
                                {description}
                            </AlertDialogDescription>
                        </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex items-center gap-2">
                        <AlertDialogCancel className={"text-black"} onClick={handleCancel}>
                            {cancelText}
                        </AlertDialogCancel>
                        <AlertDialogAction
                            // className="text-white"
                            onClick={handleConfirm}
                            className={buttonVariants({ variant })}
                        >
                            {confirmText}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        );
    });
};

// Export các cấu hình mẫu
export const AlertDialogUtils = {
    warning: (options: Partial<AlertDialogOptions> = {}) =>
        showAlertDialog({
            title: "Are you sure?",
            description: "This action cannot be undone.",
            confirmText: "Continue",
            cancelText: "Cancel",
            variant: "destructive",
            icon: <IoInformation className="size-6 text-red-600 dark:text-red-200" />,
            // icon: <FontAwesomeIcon icon="fa-solid fa-circle-question" />
            ...options,
        }),
    info: (options: Partial<AlertDialogOptions> = {}) =>
        showAlertDialog({
            title: "Information",
            description: "Here is some information for you.",
            confirmText: "OK",
            cancelText: "Close",
            variant: "default",
            icon: <Info className="size-6 text-blue-600 dark:text-blue-200" />,
            ...options,
        }),
};