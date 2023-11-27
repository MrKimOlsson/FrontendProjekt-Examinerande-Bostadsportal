import React from "react";
import '../../utils/styles/filterUnits.scss';
import { BsBuildings, BsDoorOpen } from 'react-icons/bs';
import { PiUsersThreeLight } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";


interface FilterButtonsProps {
  onFilterButtonClick: (unitType: string) => void;
  onFilterModalButtonClick: () => void;
  activeUnitType: string;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  onFilterButtonClick,
  onFilterModalButtonClick,
  activeUnitType,
}) => {
  return (
    <div className="filterUnitsComponent">
      <button
        onClick={() => onFilterButtonClick('house')}
        className={`filterButton ${activeUnitType === 'house' ? 'active' : ''}`}
        style={{ color: activeUnitType === 'house' ? '#E78121' : '#000' }}
        >
        <AiOutlineHome
          className={`house`}
        />
        Hus
      </button>
      <button
        onClick={() => onFilterButtonClick('apartment')}
        className={`filterButton ${activeUnitType === 'apartment' ? 'active' : ''}`}
        style={{ color: activeUnitType === 'apartment' ? '#E78121' : '#000' }}
      >
      <BsBuildings
      
          className={`filterIcons`}
        />
        Lägenhet
      </button>
      <button
        onClick={() => onFilterButtonClick('room')}
        className={`filterButton ${activeUnitType === 'room' ? 'active' : ''}`}
        style={{ color: activeUnitType === 'room' ? '#E78121' : '#000' }}
      >
        <BsDoorOpen
          className={`filterIcons`}
        />
        Rum
      </button>
         <button
        onClick={() => onFilterButtonClick('collective')}
        className={`filterButton ${activeUnitType === 'collective' ? 'active' : ''}`}
        style={{ color: activeUnitType === 'collective' ? '#E78121' : '#000' }}
      >
        <PiUsersThreeLight
          className={`collective`}
        />
        Kollektiv
      </button>
      <button onClick={onFilterModalButtonClick} className=""
      style={{color: '#000'}}>

        <HiAdjustmentsHorizontal
          className={`filter`}
          />Filter
      </button>
    </div>
  );
};

export default FilterButtons;
