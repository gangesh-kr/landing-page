import { useRef, useEffect } from 'react';
import { useScrollFrames } from '../../hooks/useScrollFrames';
import { useTheme } from '../../context/ThemeContext';

export default function ScanScroll() {
    const canvasRef = useRef(null);
    const { currentFrame, loading, progress } = useScrollFrames();
    const { theme } = useTheme();

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current && currentFrame) {
                const canvas = canvasRef.current;
                const container = canvas.parentElement;
                if (!container) return; // Ensure container exists
                const img = currentFrame;

                // Using container dimensions
                const width = container.clientWidth;
                const height = container.clientHeight;

                const scale = Math.max(width / img.width, height / img.height);
                const x = (width / 2) - (img.width / 2) * scale;
                const y = (height / 2) - (img.height / 2) * scale;

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, width, height);

                // Draw image
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
        };

        // ResizeObserver for container changes
        const resizeObserver = new ResizeObserver(handleResize);
        if (canvasRef.current?.parentElement) {
            resizeObserver.observe(canvasRef.current.parentElement);
        }

        window.addEventListener('resize', handleResize);
        // Initial call
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            resizeObserver.disconnect();
        };
    }, [currentFrame]);

    return (
        <div className="fixed inset-0 z-0">
            {loading && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-[var(--bg-primary)]">
                    <div className="text-center">
                        <div className="mb-4 text-2xl font-bold text-[var(--text-primary)]">Loading Experience...</div>
                        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[var(--accent-purple)] transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="mt-2 text-sm text-[var(--text-secondary)]">{progress}%</div>
                    </div>
                </div>
            )}
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover"
                style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-out' }}
            />
        </div>
    );
}
