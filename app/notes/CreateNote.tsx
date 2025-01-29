'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
 
export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();

    const create = async(e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content,
                }),
            });

            setContent('');
            setTitle('');
            router.refresh();
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="max-w-md w-full">
            <form onSubmit={create} className="space-y-4">
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-200">
                        Create a new Note
                    </h3>
                    <p className="text-sm text-gray-400">
                        Add a new note to your collection
                    </p>
                </div>

                <div className="space-y-4">
                    <div>
                        <input 
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg 
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                     placeholder-gray-500 text-white transition-all duration-200"
                        />
                    </div>

                    <div>
                        <textarea
                            placeholder="Content"
                            value={content}
                            rows={4}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg 
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                     placeholder-gray-500 text-white transition-all duration-200 resize-none"
                        />
                    </div>
                </div>

                <button 
                    type="submit"
                    disabled={isSubmitting || !title || !content}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium
                             hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                             disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                             bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                >
                    {isSubmitting ? 'Creating...' : 'Create note'}
                </button>
            </form>
        </div>
    );
}