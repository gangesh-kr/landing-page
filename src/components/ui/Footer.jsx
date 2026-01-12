export default function Footer() {
    return (
        <footer className="w-full py-8 mt-20 border-t border-[var(--surface-border)] bg-[var(--surface-glass)] backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-secondary)]">
                <p>&copy; {new Date().getFullYear()} Barg Ai. All rights reserved.</p>
                <div className="flex gap-6 font-medium">
                    <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Support</a>
                </div>
            </div>
        </footer>
    );
}
