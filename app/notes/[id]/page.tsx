import Link from "next/link";

async function getNote(noteId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
            next: { revalidate: 10 },
        }
    );
    return res.json();
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);
    const date = new Date(note.created).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
                <Link className="hover:text-white transition duration-200 ease-in-out" href={'/'}>notes</Link>
                <span>/</span>
                <span className="text-gray-300">{note.id}</span>
            </div>

            {/* Note Card */}
            <div className="bg-linear-to-b from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-8 backdrop-blur-xs">
                <div className="space-y-6">
                    {/* Header */}
                    <div className="border-b border-gray-800 pb-6">
                        <h1 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
                            {note.title}
                        </h1>
                        <p className="text-sm text-gray-400">
                            Created on {date}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none">
                        <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                            {note.content}
                        </div>
                    </div>

                    {/* Metadata */}
                    <div className="pt-6 mt-6 border-t border-gray-800">
                        <div className="flex items-center justify-between text-sm text-gray-400">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Last updated: {date}</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>ID: {note.id}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};