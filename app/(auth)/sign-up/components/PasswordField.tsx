import React, { useState } from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {EyeIcon, EyeOffIcon} from "lucide-react";

const PasswordField = ({ form, name, label }: any) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<FormItem>
			<FormLabel className="text-black">{label}</FormLabel>
			<FormControl>
				<div className="relative">
					<Input
						type={showPassword ? "text" : "password"}
						placeholder="Nhập mật khẩu"
						{...form.register(name)}
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
					>
						{showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
					</button>
				</div>
			</FormControl>
			<FormMessage />
		</FormItem>
	);
};

export default PasswordField;