import React from "react";
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
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Major } from "@/enums/major.enums";
import { University } from "@/enums/university.enums";

interface FormFieldsProps {
	form: any;
}

export const FormFields = ({ form }: FormFieldsProps) => (
	<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
		<FormField control={form.control} name="name" render={({ field }) => (
			<FormItem>
				<FormLabel className="text-black">Họ và Tên</FormLabel>
				<FormControl>
					<Input className="text-black" placeholder="Nhập họ tên trên CCCD của bạn" {...field} />
				</FormControl>
				<FormMessage />
			</FormItem>
		)} />
		<FormField control={form.control} name="dob" render={({ field }) => (
			<FormItem className="flex flex-col mb-2">
				<FormLabel className="text-black">Ngày sinh</FormLabel>
				<Popover>
					<PopoverTrigger asChild>
						<FormControl>
							<Button variant="outline" className={cn("text-black", "w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
								{field.value ? format(field.value, "PPP") : <span>Chọn ngày sinh</span>}
								<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
							</Button>
						</FormControl>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0" align="start">
						<Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={date => date > new Date() || date < new Date("1900-01-01")} initialFocus />
					</PopoverContent>
				</Popover>
				<FormMessage />
			</FormItem>
		)} />
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
					<FormControl>
						<SelectTrigger>
							<SelectValue placeholder="Chọn trường đại học" />
						</SelectTrigger>
					</FormControl>
					<SelectContent>
						{Object.values(University).map((uni, index) => (
							<SelectItem key={`university-${index}`} value={String(uni)}>{uni}</SelectItem>
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
		<FormField control={form.control} name="password" render={({ field }) => (
			<FormItem>
				<FormLabel className="text-black">Mật khẩu</FormLabel>
				<FormControl>
					<Input className="text-black" type="password" placeholder="Nhập mật khẩu" {...field} />
				</FormControl>
				<FormMessage />
			</FormItem>
		)} />
		<FormField control={form.control} name="confirmPassword" render={({ field }) => (
			<FormItem>
				<FormLabel className="text-black">Xác nhận mật khẩu</FormLabel>
				<FormControl>
					<Input className="text-black" type="password" placeholder="Xác nhận mật khẩu" {...field} />
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
			<FormItem className="flex items-start">
				<FormControl>
					<input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" checked={field.value} onChange={field.onChange} />
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