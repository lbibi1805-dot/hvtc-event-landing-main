import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FormFieldComponent = ({ form, name, label, type = "text", placeholder, options }: any) => {
	return (
		<FormItem>
			<FormLabel className="text-black">{label}</FormLabel>
			<FormControl>
				{type === "select" ? (
					<Select onValueChange={form.setValue(name)} defaultValue={form.getValues(name)}>
						<SelectTrigger>
							<SelectValue placeholder={placeholder || "Chọn một giá trị"} />
						</SelectTrigger>
						<SelectContent>
							{options.map((option: string, index: number) => (
								<SelectItem key={index} value={option}>
									{option}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				) : type === "checkbox" ? (
					<input type="checkbox" {...form.register(name)} />
				) : (
					<Input type={type} placeholder={placeholder} {...form.register(name)} />
				)}
			</FormControl>
			<FormMessage />
		</FormItem>
	);
};

export default FormFieldComponent;