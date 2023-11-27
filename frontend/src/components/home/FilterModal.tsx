import React, { useState } from "react";
import "../../utils/styles/filterModal.scss";
import { FaSearch } from "react-icons/fa";


interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterSubmit: (filteredUnits: TResidentialUnit[]) => void;
  allResidentialUnits: TResidentialUnit[];
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onFilterSubmit, allResidentialUnits }) => {

  const [unitType, setUnitType] = useState<string>("");
  const [lowestCost, setLowestCost] = useState<string>("");
  const [highestCost, setHighestCost] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedRooms, setSelectedRooms] = useState<number>(0);
  const [selectedBathrooms, setSelectedBathrooms] = useState<string>("");
  const [amenities, setAmenities] = useState<string[]>([]);
 
  const handleUnitTypeClick = (value: string) => {
    setUnitType(value);
  };
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "lowestCost") {
      setLowestCost(value);
    } else if (name === "highestCost") {
      setHighestCost(value);
    } else if (name === "selectedRooms") {
      setSelectedRooms(parseInt(value, 10)); // Convert value to a number
    } else if (name === "selectedBathrooms") {
      setSelectedBathrooms(value);
    } else if (name === "searchInput") {
      setSearchInput(value);
    }
  };
  
  const handleRoomButtonClick = (value: number) => {
    setSelectedRooms(value); // Parse the value to an integer
  };
  
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (checked) {
      setAmenities((prevAmenities) => [...prevAmenities, name]);
    } else {
      setAmenities((prevAmenities) => prevAmenities.filter((amenity) => amenity !== name));
    }
  };

  const handleClearAll = () => {
    setUnitType("");
    setLowestCost("");
    setHighestCost("");
    setSearchInput("");
    setSelectedRooms(0);
    setSelectedBathrooms("");
    setAmenities([]);
  };
   
  const handleSubmit = () => {
    const selectedFilters = {
      selectedRooms,
      selectedBathrooms,
      amenities,
      lowestCost,
      highestCost,
      searchInput,
    };
  
    try {
      let filteredUnits: TResidentialUnit[] = allResidentialUnits;
  
      // Apply filters based on the selected filters
      if (unitType) {
        filteredUnits = filteredUnits.filter((unit) => unit.unitType === unitType);
      }
  
      if (selectedFilters.selectedRooms > 0) {
        filteredUnits = filteredUnits.filter((unit) => unit.rooms === selectedFilters.selectedRooms);
      }
  
      if (selectedFilters.lowestCost) {
        filteredUnits = filteredUnits.filter((unit) => unit.rent >= parseFloat(selectedFilters.lowestCost));
      }
  
      if (selectedFilters.highestCost) {
        filteredUnits = filteredUnits.filter((unit) => unit.rent <= parseFloat(selectedFilters.highestCost));
      }
  
      if (selectedFilters.amenities.length > 0) {
        filteredUnits = filteredUnits.filter((unit) =>
          selectedFilters.amenities.every((amenity) => unit.includes.includes(amenity))
        );
      }
        if (selectedFilters.searchInput.length > 0) {
        filteredUnits = filteredUnits.filter((unit) => unit.area === selectedFilters.searchInput || unit.street === selectedFilters.searchInput || unit.city === selectedFilters.searchInput);
      }
  
      // Call the callback function to pass the filtered units to the parent component
      onFilterSubmit(filteredUnits);
  
      onClose();
    } catch (error) {
      console.error("Error filtering units:", error);
    }
  };
  
  return (
    <div className={`filter-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-wrapper">
        <div className="modal-closeButton-wrapper">
          <button className="closeButton" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-header">
          

          <h3>Filter</h3>
        </div>
        <div className="modal-content">
          <div className="modal-text">
            <h4>Typ av boende</h4>
            <p>Sök efter rum, hela lägenhenheter eller andra typer av boenden.</p>
          </div>

          <div className="center">
          <button
              className={`unitTypeButton modalButton unitTypeButtonStart ${unitType === "apartment" ? "selected" : ""}`}
              onClick={() => handleUnitTypeClick("apartment")}
            >
              Lägenhet
            </button>
            <button
              className={`unitTypeButton modalButton ${unitType === "house" ? "selected" : ""}`}
              onClick={() => handleUnitTypeClick("house")}
            >
              Hus
            </button>
            <button
              className={`unitTypeButton modalButton ${unitType === "collective" ? "selected" : ""}`}
              onClick={() => handleUnitTypeClick("collective")}
            >
              Korridor
            </button>
            <button
              className={`unitTypeButton modalButton unitTypeButtonEnd ${unitType === "room" ? "selected" : ""}`}
              onClick={() => handleUnitTypeClick("room")}
            >
              Rum
            </button>
          </div>
        </div>

        <div className="modal-content">
          <div className="modal-text">
            <h4>Prisintervall</h4>
            <p>Månadshyra</p>
          </div>

          <div className="filterModalInput">
              <input
                type="number"
                className="lowestCostInput numberInput"
                name="lowestCost"
                placeholder="Lägsta hyran"
                value={lowestCost}
                onChange={handleInputChange}
              />
              <div className="horisontalDivider"></div>
              <input
                type="number"
                className="highestCostInput numberInput"
                name="highestCost"
                placeholder="Högsta hyran"
                value={highestCost}
                onChange={handleInputChange}
              />
          </div>
        </div>

        <div className="modal-content">
          <div className="filterModalInput">
            <div className="searchInput-container">
              <input
                type="string"
                className="searchInput"
                name="searchInput"
                placeholder="Skriv ett område eller adress..."
                value={searchInput}
                onChange={handleInputChange}
              />    
              <FaSearch className="searchIcon"/>       
            </div>
          </div>
        </div>

        <div className="modal-content">
          <div className="modal-text">
            <h4>Antal rum</h4>
          </div>
          <div className="filterModalButtons selectRoomsButton">
          <button
                key={0}
                className={`roomAmountButton amountButton modalButton ${selectedRooms === 0 ? "selected" : ""}`}
                data-value={0}
                onClick={() => handleRoomButtonClick(0)}
              >
                All
              </button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <button
                key={value}
                className={`roomAmountButton amountButton modalButton ${selectedRooms === value ? "selected" : ""}`}
                data-value={value}
                onClick={() => handleRoomButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>
     
          
        </div>

        <div className="modal-content">
          <div className="modal-text">
            <h4>Bekvämligheter</h4>
            <p>Välj alternativ</p>
          </div>

          <div className="filterCheckbox-wrapper">
            <div className="column">
              <label className="form-control">
                <input
                  type="checkbox"
                  name="Wifi"
                  checked={amenities.includes("Wifi")}
                  onChange={handleCheckboxChange}
                />
                Wifi
              </label>

              <label className="form-control">
                <input
                  type="checkbox"
                  name="Washingmachine"
                  checked={amenities.includes("Washingmachine")}
                  onChange={handleCheckboxChange}
                />
                Tvättmaskin
              </label>

              <label className="form-control">
                <input
                  type="checkbox"
                  name="Desk"
                  checked={amenities.includes("Desk")}
                  onChange={handleCheckboxChange}
                />
                Dedikerad arbetsyta
              </label>

              <label className="form-control">
                <input
                  type="checkbox"
                  name="Balcony"
                  checked={amenities.includes("Balcony")}
                  onChange={handleCheckboxChange}
                />
                Balkong
              </label>

            </div>

            <div className="column">

            <label className="form-control">
                <input
                  type="checkbox"
                  name="Kitchen"
                  checked={amenities.includes("Kitchen")}
                  onChange={handleCheckboxChange}
                />
                Kök
              </label>

              <label className="form-control">
                <input
                  type="checkbox"
                  name="Tv"
                  checked={amenities.includes("Tv")}
                  onChange={handleCheckboxChange}
                />
                Tv
              </label>

            <label className="form-control">
                <input
                  type="checkbox"
                  name="Parking"
                  checked={amenities.includes("Parking")}
                  onChange={handleCheckboxChange}
                />
                Parkering
              </label>

              <label className="form-control">
                <input
                  type="checkbox"
                  name="Elevator"
                  checked={amenities.includes("Elevator")}
                  onChange={handleCheckboxChange}
                />
                Hiss
              </label>

         

            </div>
              
            <div className="column">
              
           
            <label className="form-control">
                <input
                  type="checkbox"
                  name="Yard"
                  checked={amenities.includes("Yard")}
                  onChange={handleCheckboxChange}
                />
                Uteplats
              </label>

              <label className="form-control">
                <input
                
                  type="checkbox"
                  name="Grill"
                  checked={amenities.includes("Grill")}
                  onChange={handleCheckboxChange}
                />
                Grill
              </label>
              

              <label className="form-control">
                <input
                  type="checkbox"
                  name="Ac"
                  checked={amenities.includes("Ac")}
                  onChange={handleCheckboxChange}
                />
                Luftkonditionering
              </label>

              <label className="form-control">
                <input
                  type="checkbox"
                  name="Gym"
                  checked={amenities.includes("Gym")}
                  onChange={handleCheckboxChange}
                />
                Gym
              </label>

            </div>
          </div>
        </div>

        <div className="buttons">
        <p className="textButton" onClick={handleClearAll}>
            Rensa alla
          </p>
          <button type="submit" className="searchButton mainButton" onClick={handleSubmit}>
            Sök
          </button>
        </div>
      </div>
    </div>

  );
};

export default FilterModal;