interface CountdownBoxProps {
    value: string;
    label: string;
}

const CountdownBox: React.FC<CountdownBoxProps> = ({ value, label }) => {
    return (
        <div className="flex flex-col items-center">
        <div className="h-20 w-20 sm:h-24 sm:w-24 flex justify-center items-center text-2xl sm:text-3xl font-bold text-white bg-gradient-to-r from-[#2F6095] to-[#224366] rounded-lg shadow-md">
            {value}
        </div>
        <span className="mt-2 text-sm sm:text-base text-gray-300">{label}</span>
        </div>
    );
};

export default CountdownBox;