import Link from "next/link"
import CreateNote from "./CreateNote"

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30',
        {cache: 'no-store'}
    );
    const data = await res.json();
    return data?.items as any[];
};

export default async function NotesPage() {
    const notes = await getNotes();
    return(
        <div className="space-y-8">
            <div className="flex flex-col justify-between">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                    Notes
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>
            <CreateNote />
        </div>
    );
};

function Note({ note }: any) {
    const {id, title, content, created} = note || {};
    const date = new Date(created).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return(
        <Link href={`/notes/${id}`}>
            <div className="group p-6 rounded-lg border border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-200 hover:border-gray-700 space-y-3">
                <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {title}
                </h2>
                <h5 className="text-gray-400 line-clamp-2">
                    {content}
                </h5>
                <p className="text-sm text-gray-500">
                    {date}
                </p>
            </div>
        </Link>
    )
}