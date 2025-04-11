const CountdownButton: React.FC = () => {
    return (
        <div className="mt-8 flex justify-center">
        <a
            className="px-6 py-3 bg-gradient-to-r from-[#2F6095] to-[#224366] text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:from-white hover:to-white hover:text-[#2F6095] transition duration-300"
            href="/sign-up"
        >
            THAM GIA NGAY
        </a>
        </div>
    );
};

export default CountdownButton;