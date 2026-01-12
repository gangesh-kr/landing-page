import { useState, useEffect } from 'react';

export const useImagePreloader = (frameCount) => {
    const [images, setImages] = useState([]);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];

        const loadImages = async () => {
            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                // Adjust filename format: ezgif-frame-001.jpg
                const filename = `ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
                img.src = `/Image-Sequence/${filename}`;

                img.onload = () => {
                    loadedCount++;
                    setProgress(Math.round((loadedCount / frameCount) * 100));
                    if (loadedCount === frameCount) {
                        setLoading(false);
                    }
                };
                img.onerror = () => {
                    console.error(`Failed to load frame ${i}`);
                    loadedCount++;
                    if (loadedCount === frameCount) {
                        setLoading(false);
                    }
                };
                img.onerror = () => {
                    console.error(`Failed to load frame ${i}`);
                    loadedCount++;
                    if (loadedCount === frameCount) {
                        setLoading(false);
                    }
                };
                imgArray.push(img);
            }
            setImages(imgArray);
        };

        loadImages();
    }, [frameCount]);

    return { images, progress, loading };
};
