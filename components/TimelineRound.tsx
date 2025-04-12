interface TimelineRoundProps {
    title: string;
    name: string;
    date: string;
    description: string;
    details: string[];
}

const TimelineRound: React.FC<TimelineRoundProps> = ({ title, name, date, description, details }) => {
    return (
        <div className="relative pl-8 sm:pl-32 py-6 group">
        {/* Title */}
        <div className="font-caveat font-bold text-2xl text-blue-300 mb-1 sm:mb-0">
            {title} {name && `– ${name}`}
        </div>

        {/* Timeline Line and Dot */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            {/* Date */}
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-24 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            {title}
            </time>

            {/* Date and Description */}
            <div className="flex flex-col">
            <div className="text-xl font-bold text-blue-200">{date}</div>
            <div className="italic text-blue-300 mt-2">
                <strong>{description}</strong>
            </div>
            </div>
        </div>

        {/* Details */}
        <div className="text-gray-100 text-xl ml-5">
            <ul className="list-disc space-y-2">
            {details.map((detail, index) => (
                <li key={index}>
                <strong>{detail}</strong>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
};

export default TimelineRound;