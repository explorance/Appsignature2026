import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, MapPin, Globe } from 'lucide-react';

interface Option {
  value: string;
  label: string;
  description?: string;
  icon?: 'location' | 'language';
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
}

export default function CustomSelect({ 
  value, 
  onChange, 
  options, 
  placeholder = "Select an option",
  className = ""
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getIcon = (iconType?: string) => {
    switch (iconType) {
      case 'location':
        return <MapPin className="size-4" />;
      case 'language':
        return <Globe className="size-4" />;
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white flex items-center justify-between hover:border-gray-400 transition-colors"
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          className={`size-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full">
          {/* Pointer */}
          <div className="flex justify-start pl-4">
            <div className="w-8 h-2 relative">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 8">
                <path d="M16 0L24 8H8L16 0Z" fill="white" />
              </svg>
            </div>
          </div>

          {/* Menu Container */}
          <div className="bg-white rounded-xl shadow-[0px_4px_4px_0px_rgba(54,74,113,0.04),0px_0px_32px_0px_rgba(54,74,113,0.16)] overflow-hidden">
            {/* Options */}
            <div className="max-h-[300px] overflow-y-auto">
              {options.map((option, index) => (
                <div key={option.value}>
                  {index > 0 && <div className="h-px bg-[#e5e8eb]" />}
                  <button
                    type="button"
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className={`w-full px-6 py-4 flex items-center gap-4 hover:bg-[#f2f6fb] transition-colors ${
                      value === option.value ? 'bg-[#f2f6fb]' : 'bg-white'
                    }`}
                  >
                    {/* Icon */}
                    {option.icon && (
                      <div className={`flex items-center justify-center size-10 rounded-full ${
                        value === option.value ? 'bg-blue-50' : 'bg-[#f2f3f5]'
                      }`}>
                        <div className={value === option.value ? 'text-blue-600' : 'text-[#001C3B]'}>
                          {getIcon(option.icon)}
                        </div>
                      </div>
                    )}

                    {/* Label and Description */}
                    <div className="flex-1 text-left">
                      <div className="font-['Lato',sans-serif] font-bold text-[14px] leading-normal text-[#0f131c]">
                        {option.label}
                      </div>
                      {option.description && (
                        <div className="font-['Lato',sans-serif] font-normal text-[12px] leading-[13px] text-[#0f131c] mt-1">
                          {option.description}
                        </div>
                      )}
                    </div>

                    {/* Checkmark */}
                    {value === option.value && (
                      <div className="flex items-center justify-center size-8 rounded-full bg-blue-500">
                        <Check className="size-4 text-white" />
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
