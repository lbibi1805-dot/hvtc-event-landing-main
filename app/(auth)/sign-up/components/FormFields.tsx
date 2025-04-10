import React, { useState } from "react"; // Added useState import
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, EyeIcon, EyeOffIcon } from "lucide-react"; // Import icons for show/hide
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Major } from "@/enums/major.enums";
import { University } from "@/enums/university.enums";

interface FormFieldsProps {
	form: any;
}

export const FormFields = ({ form }: FormFieldsProps) => {
	const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			<FormField control={form.control} name="name" render={({ field }) => (
				<FormItem>
					<FormLabel className="text-black">Họ và Tên</FormLabel>
					<FormControl>
						<Input className="text-black" placeholder="Nhập họ tên trên CCCD của bạn" {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)} />
			<FormField control={form.control} name="dob" render={({ field }) => {
				const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
				const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

				return (
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
											value={currentYear}
											onChange={(e) => {
												const year = parseInt(e.target.value, 10);
												if (!isNaN(year) && year >= 1900 && year <= new Date().getFullYear()) {
													setCurrentYear(year);
													setCurrentMonth(0); // Reset to January to avoid invalid months
												}
											}}
											className="w-20 px-2 py-1 border border-gray-300 rounded text-black focus:ring-primary-500 focus:border-primary-500"
										/>
									</div>
								</div>

								{/* Calendar */}
								<Calendar
									mode="single"
									selected={field.value}
									onSelect={(date) => {
										field.onChange(date); // Update the form value
									}}
									disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
									initialFocus
									month={new Date(currentYear, currentMonth)} // Tie the calendar to the current year and month
									onMonthChange={(date) => {
										setCurrentYear(date.getFullYear());
										setCurrentMonth(date.getMonth());
									}}
								/>
							</PopoverContent>
						</Popover>
						<FormMessage />
					</FormItem>
				);
			}} />
			<FormField control={form.control} name="email" render={({ field }) => (
				<FormItem>
					<FormLabel className="text-black">Email</FormLabel>
					<FormControl>
						<Input className="text-black" placeholder="Nhập email của bạn" {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)} />
			<FormField control={form.control} name="phone" render={({ field }) => (
				<FormItem>
					<FormLabel className="text-black">Số điện thoại</FormLabel>
					<FormControl>
						<Input className="text-black" placeholder="Số điện thoại của bạn" {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)} />
			<FormField control={form.control} name="cccd" render={({ field }) => (
				<FormItem>
					<FormLabel className="text-black">Số Căn Cước Công Dân</FormLabel>
					<FormControl>
						<Input className="text-black" placeholder="Số CCCD ghi trong CCCD" {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)} />
			<FormField control={form.control} name="university" render={({ field }) => (
				<FormItem>
					<FormLabel className="text-black">Trường đang theo học</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl className="text-black">
							<SelectTrigger>
								<SelectValue  placeholder="Chọn trường đại học" />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{Object.values(University).map((uni, index) => (
								<SelectItem  key={`university-${index}`} value={String(uni)}>{uni}</SelectItem>
							))}
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)} />
			<FormField control={form.control} name="major" render={({ field }) => (
				<FormItem>
					<FormLabel className="text-black">Ngành học</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder="Chọn ngành học" />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{Object.values(Major).map(major => (
								<SelectItem key={major} value={major}>{major}</SelectItem>
							))}
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)} />
			<FormField control={form.control} name="sid" render={({ field }) => (
				<FormItem>
					<FormLabel className="text-black">Mã sinh viên</FormLabel>
					<FormControl>
						<Input className="text-black" placeholder="Mã sinh viên của bạn" {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)} />
			<FormField control={form.control} name="linkFacebook" render={({ field }) => (
				<FormItem>
					<FormLabel className="text-black">Link Facebook</FormLabel>
					<FormControl>
						<Input className="text-black" placeholder="Đường dẫn đến Facebook cá nhân" {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)} />
			<FormField control={form.control} name="terms" render={({ field }) => (
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
			)} />
		</div>
	);
};