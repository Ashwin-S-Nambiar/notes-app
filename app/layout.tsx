import './globals.css'
import Link from "next/link"

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full">
            <head>
                <title>Notes App</title> 
            </head>
            <body className="bg-black min-h-full">
                <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
                    {/* Navigation bar with blur effect */}
                    <nav className="sticky top-0 z-50 backdrop-blur-sm border-b border-gray-800 bg-black/50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                {/* Logo and primary navigation */}
                                <div className="flex items-center space-x-8">
                                    <Link 
                                        href="/" 
                                        className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
                                    >
                                        Notes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Main content area with gradient background */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}