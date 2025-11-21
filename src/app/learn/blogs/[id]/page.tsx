"use client";

import React, { useState } from 'react';
import blogs from '@/data/BlogData';
import { User, UserRound, ThumbsUp, MessageCircle } from 'lucide-react';

export default function BlogPage( props : { params: { id: string } }) {
    // Extract the blog id and the corresponding blog
    const blogId = Number(props.params.id);
    const blogPost = blogs.find((b) => b.id === blogId);

    const [comments, setComments] = useState<string[]>([]);

    if (!blogPost) {
        return <h1 className=''>Blog post ${blogId} not found!</h1>
    }

    return (
        <div className='bg-gradient-to-b from-seagreen/5 to-transparent'>
            <div className="min-h-screen pt-16 max-w-[750px] mx-auto">
                <div className="m-8">
                    <h1 className='text-4xl font-bold text-[#2D3142]'>{blogPost.title}</h1>
                    <h2 className='text-lg mt-5 text-[#2D3142]/70'>{blogPost.header}</h2>
                    <div className="flex flex-row flex-start items-center gap-2">
                        <User className="w-5 h-5 text-gray-500" />
                        <p className='text-md my-5'>{blogPost.author}</p>
                    </div>
                    <hr className='border-t-1 rounded-full mb-3 border-[#36C7B5]' />
                    <div className="flex flex-row flex-start justify-start gap-5">
                        <div className="relative group inline-flex items-center cursor-pointer">
                            <MessageCircle size={22} className="text-[#2D3142]/70" />
                            <span
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 
                            group-hover:opacity-100 transition bg-black text-white text-xs 
                            rounded px-2 py-1 whitespace-nowrap"
                            >
                                Comment
                            </span>
                        </div>
                        <div className="relative group inline-flex items-center cursor-pointer">
                            <ThumbsUp className="cursor-pointer text-[#2D3142]/70" size={22} />
                            <span
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 
                            group-hover:opacity-100 transition bg-black text-white text-xs 
                            rounded px-2 py-1 whitespace-nowrap"
                            >
                                Like
                            </span>
                        </div>
                    </div>
                    <hr className='border-t-1 rounded-full mt-3 border-[#36C7B5]' />
                    <div className='my-10 max-w-[90%] h-auto mx-auto overflow-hidden'>
                        <img src={blogPost.image.src} alt={blogPost.image.alt} className="w-full h-full object-cover rounded-md" />
                    </div>
                    <section className='mt-10'>
                        {blogPost.paragraphs.map((p, id) => (
                            <p key={id} className='my-2 text-md text-[#2D3142]'>{p}</p>
                        ))}
                    </section>
                    <div className="my-10 flex flex-row gap-3">
                        {blogPost.tags.map((tag, id) => (
                            <div
                                key={id}
                                className="bg-[#B0ABD8] rounded-full py-2 px-4 border border-gray-200 shadow-sm"
                            >
                                <p className="text-[#2B2C2C] font-semi-bold">{tag.charAt(0).toUpperCase() + tag.slice(1)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row flex-start justify-end gap-5">
                        <div className="relative group inline-flex items-center cursor-pointer">
                            <MessageCircle size={22} className="text-[#2D3142]/70" />
                            <span
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 
                            group-hover:opacity-100 transition bg-black text-white text-xs 
                            rounded px-2 py-1 whitespace-nowrap"
                            >
                                Comment
                            </span>
                        </div>
                        <div className="relative group inline-flex items-center cursor-pointer">
                            <ThumbsUp className="cursor-pointer text-[#2D3142]/70" size={22} />
                            <span
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 
                            group-hover:opacity-100 transition bg-black text-white text-xs 
                            rounded px-2 py-1 whitespace-nowrap"
                            >
                                Like
                            </span>
                        </div>
                    </div>
                    <hr className='border-t-1 rounded-full my-5 border-[#36C7B5]' />
                    <div className='mt-10 mb-20'>
                        {comments.length == 0 ? (
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-xl text-[#2B2C2C] font-bold'>No comments yet</h2>
                                <div className='flex row items-center gap-4 mt-4'>
                                    <UserRound size={28} className="text-[#2B2C2C]" />
                                    <h3 className='text-md text-[#2B2C2C] font-semi-bold'>Write a comment</h3>
                                </div>
                                <div className='w-full p-2 bg-[#2B2C2C]/5 rounded-sm cursor-pointer'>
                                    <p>What are your thoughts?</p>
                                </div>
                            </div>
                        ) : (
                            comments.map((comment, id) => (
                                <div key={id}>{comment}</div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}