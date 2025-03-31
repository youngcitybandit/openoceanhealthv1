
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Map data for all US states
const usStates = [
  { name: 'Alabama', abbr: 'AL', position: { top: '70%', left: '70%' } },
  { name: 'Alaska', abbr: 'AK', position: { top: '85%', left: '18%' } },
  { name: 'Arizona', abbr: 'AZ', position: { top: '60%', left: '25%' } },
  { name: 'Arkansas', abbr: 'AR', position: { top: '65%', left: '62%' } },
  { name: 'California', abbr: 'CA', position: { top: '48%', left: '13%' } },
  { name: 'Colorado', abbr: 'CO', position: { top: '48%', left: '35%' } },
  { name: 'Connecticut', abbr: 'CT', position: { top: '38%', left: '87%' } },
  { name: 'Delaware', abbr: 'DE', position: { top: '44%', left: '87%' } },
  { name: 'Florida', abbr: 'FL', position: { top: '80%', left: '80%' } },
  { name: 'Georgia', abbr: 'GA', position: { top: '70%', left: '76%' } },
  { name: 'Hawaii', abbr: 'HI', position: { top: '85%', left: '30%' } },
  { name: 'Idaho', abbr: 'ID', position: { top: '30%', left: '22%' } },
  { name: 'Illinois', abbr: 'IL', position: { top: '45%', left: '65%' } },
  { name: 'Indiana', abbr: 'IN', position: { top: '45%', left: '70%' } },
  { name: 'Iowa', abbr: 'IA', position: { top: '40%', left: '60%' } },
  { name: 'Kansas', abbr: 'KS', position: { top: '50%', left: '50%' } },
  { name: 'Kentucky', abbr: 'KY', position: { top: '52%', left: '72%' } },
  { name: 'Louisiana', abbr: 'LA', position: { top: '75%', left: '60%' } },
  { name: 'Maine', abbr: 'ME', position: { top: '25%', left: '90%' } },
  { name: 'Maryland', abbr: 'MD', position: { top: '45%', left: '83%' } },
  { name: 'Massachusetts', abbr: 'MA', position: { top: '35%', left: '88%' } },
  { name: 'Michigan', abbr: 'MI', position: { top: '35%', left: '70%' } },
  { name: 'Minnesota', abbr: 'MN', position: { top: '28%', left: '58%' } },
  { name: 'Mississippi', abbr: 'MS', position: { top: '72%', left: '65%' } },
  { name: 'Missouri', abbr: 'MO', position: { top: '52%', left: '60%' } },
  { name: 'Montana', abbr: 'MT', position: { top: '25%', left: '30%' } },
  { name: 'Nebraska', abbr: 'NE', position: { top: '42%', left: '50%' } },
  { name: 'Nevada', abbr: 'NV', position: { top: '40%', left: '18%' } },
  { name: 'New Hampshire', abbr: 'NH', position: { top: '30%', left: '88%' } },
  { name: 'New Jersey', abbr: 'NJ', position: { top: '42%', left: '85%' } },
  { name: 'New Mexico', abbr: 'NM', position: { top: '60%', left: '35%' } },
  { name: 'New York', abbr: 'NY', position: { top: '33%', left: '82%' } },
  { name: 'North Carolina', abbr: 'NC', position: { top: '60%', left: '80%' } },
  { name: 'North Dakota', abbr: 'ND', position: { top: '25%', left: '48%' } },
  { name: 'Ohio', abbr: 'OH', position: { top: '45%', left: '75%' } },
  { name: 'Oklahoma', abbr: 'OK', position: { top: '58%', left: '50%' } },
  { name: 'Oregon', abbr: 'OR', position: { top: '28%', left: '15%' } },
  { name: 'Pennsylvania', abbr: 'PA', position: { top: '40%', left: '80%' } },
  { name: 'Rhode Island', abbr: 'RI', position: { top: '37%', left: '89%' } },
  { name: 'South Carolina', abbr: 'SC', position: { top: '65%', left: '78%' } },
  { name: 'South Dakota', abbr: 'SD', position: { top: '35%', left: '48%' } },
  { name: 'Tennessee', abbr: 'TN', position: { top: '60%', left: '70%' } },
  { name: 'Texas', abbr: 'TX', position: { top: '70%', left: '45%' } },
  { name: 'Utah', abbr: 'UT', position: { top: '42%', left: '25%' } },
  { name: 'Vermont', abbr: 'VT', position: { top: '30%', left: '85%' } },
  { name: 'Virginia', abbr: 'VA', position: { top: '50%', left: '80%' } },
  { name: 'Washington', abbr: 'WA', position: { top: '20%', left: '18%' } },
  { name: 'West Virginia', abbr: 'WV', position: { top: '50%', left: '77%' } },
  { name: 'Wisconsin', abbr: 'WI', position: { top: '30%', left: '65%' } },
  { name: 'Wyoming', abbr: 'WY', position: { top: '35%', left: '35%' } },
];

// States where the company operates (for example)
const operatingStates = [
  'CA', 'NY', 'TX', 'FL', 'WA', 'IL', 'MA', 'OR', 'CO', 'GA',
  'NC', 'PA', 'OH', 'MI', 'VA', 'AZ', 'TN', 'MD', 'MN', 'WI'
];

const USMap = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[4/2.5] bg-slate-100 rounded-xl overflow-hidden border border-gray-200">
      {/* US map background */}
      <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/a/a5/Map_of_USA_with_state_names.svg')] bg-contain bg-no-repeat bg-center opacity-15" />

      {/* State pins */}
      {usStates.map((state) => {
        const isOperating = operatingStates.includes(state.abbr);
        return (
          <div
            key={state.abbr}
            className="absolute"
            style={{ 
              top: state.position.top, 
              left: state.position.left 
            }}
          >
            <Link to={`/locations#${state.abbr}`}>
              <div
                className="relative group"
                onMouseEnter={() => setHoveredState(state.abbr)}
                onMouseLeave={() => setHoveredState(null)}
              >
                <MapPin
                  size={24}
                  className={`${
                    isOperating 
                      ? 'text-brand-blue' 
                      : 'text-gray-400'
                  } hover:text-brand-teal transition-colors cursor-pointer`}
                />
                
                {/* State name tooltip */}
                <div 
                  className={`
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 
                    bg-white shadow-md rounded text-xs font-medium z-10
                    transition-opacity duration-200
                    ${hoveredState === state.abbr ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                  `}
                >
                  {state.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-white"></div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={16} className="text-brand-blue" />
          <span className="text-sm font-medium">Active Locations</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-400" />
          <span className="text-sm font-medium">Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default USMap;
