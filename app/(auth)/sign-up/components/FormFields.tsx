import React, { useState } from "react";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface FormFieldsProps {
	form: any;
}

// Separate component for Date of Birth field to isolate hooks
const DateOfBirthField = ({ control }: { control: any }) => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
	const [yearInput, setYearInput] = useState(currentYear.toString());
	const [yearError, setYearError] = useState("");

	const validateYear = (value: string) => {
		const year = parseInt(value, 10);
		if (!value) {
			setYearError("Vui lòng nhập năm sinh");
			return false;
		}
		if (isNaN(year) || year < 1900 || year > 2007) {
			setYearError(`Năm sinh phải từ 1900 đến 2007`);
			return false;
		}
		setYearError("");
		return true;
	};

	// Chuẩn bị options cho Combobox


	const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setYearInput(e.target.value);
	};

	const handleYearBlur = () => {
		if (validateYear(yearInput)) {
			const year = parseInt(yearInput, 10);
			setCurrentYear(year);
			setCurrentMonth(0);
		} else {
			setYearInput(currentYear.toString());
		}
	};

	return (
		<FormField
			control={control}
			name="dob"
			render={({ field }) => (
				<FormItem className="flex flex-col mt-2">
					<FormLabel className="text-black">Ngày sinh</FormLabel>
					<Popover>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant="outline"
									className={cn(
										"text-black",
										"w-full pl-3 text-left font-normal",
										!field.value && "text-muted-foreground"
									)}
								>
									{field.value ? format(field.value, "PPP") : <span>Chọn ngày sinh</span>}
									<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="start">
							<div className="flex flex-col px-4 py-2">
								{/* Year Input */}
								<div className="flex items-center gap-2 mb-2">
									<label htmlFor="year-input" className="text-sm font-medium text-gray-700">
										Năm:
									</label>
									<input
										id="year-input"
										type="number"
										value={yearInput}
										onChange={handleYearChange}
										onBlur={handleYearBlur}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												handleYearBlur();
											}
										}}
										className={cn(
											"w-20 px-2 py-1 border rounded text-black focus:ring-primary-500 focus:border-primary-500",
											yearError && "border-red-500"
										)}
									/>
								</div>
								{yearError && <p className="text-red-500 text-xs">{yearError}</p>}
							</div>

							{/* Calendar */}
							<Calendar
								mode="single"
								selected={field.value}
								onSelect={(date) => {
									if (date) {
										setCurrentYear(date.getFullYear());
										setCurrentMonth(date.getMonth());
										setYearInput(date.getFullYear().toString());
										setYearError("");
									}
									field.onChange(date);
								}}
								disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
								initialFocus
								month={new Date(currentYear, currentMonth)}
								onMonthChange={(date) => {
									setCurrentYear(date.getFullYear());
									setCurrentMonth(date.getMonth());
									setYearInput(date.getFullYear().toString());
									setYearError("");
								}}
							/>
						</PopoverContent>
					</Popover>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export const FormFields = ({ form }: FormFieldsProps) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			<FormField
				control={form.control}
				name="name"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-black">Họ và Tên</FormLabel>
						<FormControl>
							<Input className="text-black" placeholder="Nhập họ tên trên CCCD của bạn" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<DateOfBirthField control={form.control} />
			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-black">Email</FormLabel>
						<FormControl>
							<Input className="text-black" placeholder="Nhập email của bạn" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="phone"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-black">Số điện thoại</FormLabel>
						<FormControl>
							<Input className="text-black" placeholder="Số điện thoại của bạn" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="cccd"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-black">Số Căn Cước Công Dân</FormLabel>
						<FormControl>
							<Input className="text-black" placeholder="Số CCCD ghi trong CCCD" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="university"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-black">Trường đang theo học</FormLabel>
						<FormControl>
							<Input className="text-black" placeholder="Nhập tên trường đang theo học" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="major"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-black">Ngành đang theo học</FormLabel>
						<FormControl>
							<Input className="text-black" placeholder="Nhập tên nghành học" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="sid"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-black">Mã sinh viên</FormLabel>
						<FormControl>
							<Input className="text-black" placeholder="Mã sinh viên của bạn" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="linkFacebook"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-black">Link Facebook</FormLabel>
						<FormControl>
							<Input className="text-black" placeholder="Đường dẫn đến Facebook cá nhân" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="terms"
				render={({ field }) => (
					<FormItem className="flex items-center mt-5">
						<FormControl>
							<input
								type="checkbox"
								className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
								checked={field.value}
								onChange={field.onChange}
							/>
						</FormControl>
						<div className="ml-3 text-sm">
							<FormLabel className="font-light text-gray-500">
								Tôi đồng ý với{" "}
								<a href="#" className="text-[#27548A] font-medium hover:underline">
									Các quy định của ban tổ chức và cuộc thi
								</a>
							</FormLabel>
						</div>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};