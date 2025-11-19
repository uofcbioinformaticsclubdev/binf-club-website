import { User, Clock } from "lucide-react";

type ImageProps = {
    src: string
    alt: string
}

interface ArticleProps {
    image: ImageProps;
    author: string;
    title: string;
    header: string;
    date: string;
    tags: string[];
}

export default function ArticleCard({ image, author, title, header, date, tags }: ArticleProps) {
    return (
        <div className='flex flex-col my-3 mx-5 gap-3 justify-center items-center'>
            <div className='w-85 h-50 overflow-hidden'>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="py-4 px-6 text-[#2B2C2C]">
                <div className="flex flex-row flex-start items-center gap-2 italic">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <p className='text-md my-2'>{date}</p>
                </div>
                <h1 className="text-lg font-bold line-clamp-2 h-[3.5rem]">{title}</h1>
                <p className="text-md line-clamp-3">{header}</p>
                <div className="flex flex-row flex-start items-center gap-2">
                    <User className="w-5 h-5 text-gray-500" />
                    <p className='text-md my-3'>{author}</p>
                </div>
                <div className="flex flex-row gap-3">
                    {tags.map((tag, i) => (
                        <div
                            key={i}
                            className="bg-[#f2f2f2] rounded-full py-2 px-4 border border-gray-200 shadow-sm"
                        >
                            <p className="text-[#2B2C2C] font-semi-bold">{tag.charAt(0).toUpperCase() + tag.slice(1)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

