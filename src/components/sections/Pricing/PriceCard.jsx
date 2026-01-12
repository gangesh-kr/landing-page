import { motion } from 'framer-motion';

export const PriceCard = ({ label, value, type = 'standard', delay = 0 }) => {
    const isDiscount = type === 'discount';
    const isTotal = type === 'total';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={`
        relative overflow-hidden
        p-6 rounded-[var(--radius-lg)]
        backdrop-blur-md border border-white/20
        shadow-soft
        flex flex-col gap-2 min-w-[200px]
        ${isTotal ? 'bg-[#1A1A1A] text-white' : 'bg-white/80'}
      `}
        >
            {/* Glow effect for Total */}
            {isTotal && (
                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full translate-y-10" />
            )}

            <span className={`text-sm font-medium ${isTotal ? 'text-gray-400' : 'text-[var(--text-secondary)]'}`}>
                {label}
            </span>

            <div className="flex items-baseline gap-1">
                <span className={`text-2xl font-bold tracking-tight ${isDiscount ? 'text-green-600' : ''}`}>
                    {value}
                </span>
                {isDiscount && <span className="text-xs text-green-600 font-medium">8.5% off</span>}
            </div>
        </motion.div>
    );
};
