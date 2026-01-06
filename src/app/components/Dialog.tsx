import svgPaths from "../../imports/svg-5wfqvijomx";
import { useEffect } from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  maxWidth?: 'sm' | 'md' | 'lg';
}

export default function Dialog({ 
  isOpen, 
  onClose, 
  onConfirm,
  title, 
  description, 
  confirmText = "Apply",
  cancelText = "Cancel",
  maxWidth = 'md' 
}: DialogProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-[320px]',
    md: 'max-w-[360px]',
    lg: 'max-w-[480px]'
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Dialog - Exact Figma Design */}
      <div 
        className={`relative bg-white rounded-[12px] shadow-[0px_4px_4px_0px_rgba(54,74,113,0.04),0px_0px_32px_0px_rgba(54,74,113,0.16)] ${maxWidthClasses[maxWidth]} w-full mx-4 animate-slideUp overflow-clip`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-[63px] w-full">
          <div className="flex gap-[8px] items-start p-[16px] size-full">
            {/* Title */}
            <div className="basis-0 flex gap-[16px] grow h-full items-center min-h-px min-w-px">
              <div className="flex flex-col font-['Lato',sans-serif] font-bold justify-center leading-[1.32] not-italic text-[#081734] text-[16px] text-nowrap">
                {title}
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="bg-[#f2f3f5] flex gap-[8px] items-center justify-center p-[9px] rounded-[36px] shrink-0 hover:bg-[#e5e8eb] transition-colors"
            >
              <div className="relative shrink-0 size-[13px]">
                <div className="absolute inset-[0_-78.64%_-84.65%_-0.04%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2283 24.005">
                    <path clipRule="evenodd" d={svgPaths.p4f33b00} fill="#001C3B" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="bg-[#e5e8eb] h-px w-full" />

        {/* Content */}
        {description && (
          <>
            <div className="bg-white w-full">
              <div className="flex flex-col gap-[12px] items-start px-[24px] py-[12px] w-full">
                <div className="flex gap-[16px] h-[49px] items-start">
                  <div className="flex flex-col h-full items-start justify-center">
                    <div className="flex flex-col font-['Lato',sans-serif] font-normal justify-center leading-normal not-italic text-[#0f131c] text-[14px]">
                      {description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#e5e8eb] h-px w-full" />
          </>
        )}

        {/* Footer with Actions */}
        <div className="bg-white w-full">
          <div className="flex items-end justify-end px-[24px] py-[16px] w-full">
            <div className="flex gap-[16px] h-[41px] items-center grow">
              {/* Cancel Button */}
              <button
                onClick={onClose}
                className="basis-0 bg-white grow h-full min-h-px min-w-px rounded-[36px] border border-[#e5e8eb] hover:bg-[#f2f3f5] transition-colors"
              >
                <div className="flex items-center justify-center size-full px-[16px] py-[12px]">
                  <p className="font-['Lato',sans-serif] font-bold leading-normal not-italic text-[#0f131c] text-[14px] text-center text-nowrap">
                    {cancelText}
                  </p>
                </div>
              </button>
              
              {/* Confirm Button */}
              <button
                onClick={handleConfirm}
                className="basis-0 bg-[#0050c1] grow h-full min-h-px min-w-px rounded-[36px] hover:bg-[#003d99] transition-colors"
              >
                <div className="flex items-center justify-center size-full px-[16px] py-[12px]">
                  <p className="font-['Lato',sans-serif] font-bold leading-normal not-italic text-[14px] text-center text-nowrap text-white">
                    {confirmText}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}