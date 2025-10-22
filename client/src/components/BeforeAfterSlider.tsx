import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  description?: string;
  caseStudyLink?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  description,
  caseStudyLink
}: BeforeAfterSliderProps) {
  const { t } = useTranslation();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl select-none group"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* After Image (Full) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt="After"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {t('beforeAfter.after', 'After')}
          </div>
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {t('beforeAfter.before', 'Before')}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Draggable Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform group-hover:scale-110">
            <ChevronLeft className="w-4 h-4 text-gray-700 absolute left-1" />
            <ChevronRight className="w-4 h-4 text-gray-700 absolute right-1" />
          </div>
        </div>

        {/* Instruction Overlay (appears briefly on load) */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none"
        >
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-gray-800 font-medium">
            {t('beforeAfter.dragToCompare', 'Drag to compare')}
          </div>
        </motion.div>
      </div>

      {/* Info Section */}
      {(title || description || caseStudyLink) && (
        <div className="space-y-3">
          {title && (
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}
          {caseStudyLink && (
            <Button
              onClick={() => window.open(caseStudyLink, '_blank')}
              className="group"
              variant="outline"
            >
              <FileText className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              {t('beforeAfter.viewCaseStudy', 'View Full Case Study')}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
