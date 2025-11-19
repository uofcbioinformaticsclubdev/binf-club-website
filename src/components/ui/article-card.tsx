import { User, Clock } from "lucide-react";

type ImageProps = {
    src : string
    alt : string
}

interface ArticleProps {
    image : ImageProps;
    author : string;
    title : string;
    header : string;
    date : string;
}

export default function ArticleCard ({ image, author, title, header, date } : ArticleProps) {
    return (
        <div className='flex flex-col m-5 justify-center items-center'>
            <div className='w-85 h-50 overflow-hidden'>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-md"/>
            </div>
            <div className="py-4 px-6 text-[#2B2C2C]">
                <div className="flex flex-row flex-start items-center gap-2 italic">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <p className='text-md my-2'>{date}</p>
                </div>
                <h1 className="text-lg font-bold">{title}</h1>
                <p className="text-md line-clamp-3">{header}</p>
                <div className="flex flex-row flex-start items-center gap-2">
                    <User className="w-5 h-5 text-gray-500" />
                    <p className='text-md my-2'>{author}</p>
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

