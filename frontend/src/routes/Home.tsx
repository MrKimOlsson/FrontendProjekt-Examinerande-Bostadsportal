import { useEffect, useState } from "react";
import { getUnits } from "../api/getUnits";
import ResidentialGrid from "../components/home/ResidentialGrid";
import HeroHome from "../components/home/HeroHome";
import FilterModal from "../components/home/FilterModal";
import FilterButtons from "../components/home/FilterButtons";

const Home = () => {
  const [residentials, setResidentials] = useState<TResidentialUnit[]>([]);
  const [allResidentialUnits, setAllResidentialUnits] = useState<TResidentialUnit[]>([]);
  const [unitType, setUnitType] = useState('apartment'); // Default to "apartment"
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [fetchAllUnits, setFetchAllUnits] = useState(true);
  const [activeUnitType, setActiveUnitType] = useState('all');
  const [previousUnitType, setPreviousUnitType] = useState('');
  const [displayedUnits, setDisplayedUnits] = useState(12);

    // Function to increase the number of displayed units
  const showMoreUnits = () => {
    setDisplayedUnits(prevCount => prevCount + 12);
  };
  
  // Helper function to check if all necessary variables exist in a residential unit
  const isResidentialUnitValid = (unit: TResidentialUnit): boolean => {
    // Customize the conditions based on the variables you want to check
    return (
      unit &&
      unit.title &&
      unit.rent &&
      unit.description &&
      unit.period &&
      unit.avalible &&
      unit.imageURL &&
      unit._id &&
      unit.size &&
      unit.rooms &&
      unit.area &&
      unit.city &&
      unit.street &&
      unit.zipcode &&
      unit.apply &&
      unit.includes &&
      unit.status &&
      unit.landlord
    );
  };

  // Callback function to update residentials with filtered units
  const updateResidentials = (filteredUnits: TResidentialUnit[]) => {
    setResidentials(filteredUnits);
  };

  
    // // Fetch all residential units or specific collection
    useEffect(() => {
      async function fetchData() {
        try {
          let newResidentials: TResidentialUnit[] = [];
  
          if (fetchAllUnits) {
            const apartments = await getUnits("apartment");
            const houses = await getUnits("house");
            const rooms = await getUnits("room");
            const collectives = await getUnits("collective");
  
            // Combine the data from apartments, houses, rooms, and collectives
            const combinedResidentials = [...apartments, ...houses, ...rooms, ...collectives];
  
            // Filter out invalid units using the type guard
            newResidentials = combinedResidentials.filter(isResidentialUnitValid);
  
            setResidentials(newResidentials);
            setAllResidentialUnits(combinedResidentials);
          } else {
            newResidentials = await getUnits(unitType);
            setDisplayedUnits(12)
  
            // Filter out invalid units using the type guard
            newResidentials = newResidentials.filter(isResidentialUnitValid);
  
            setResidentials(newResidentials);
          }
        } catch (error) {
          console.error("Error fetching residential units:", error);
        }
      }
  
      fetchData();
    }, [fetchAllUnits, unitType]);


  // Handle filter modal
  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleFilterButtonClick = (newUnitType: string) => {

    if (fetchAllUnits) {
      setActiveUnitType(newUnitType);
      setFetchAllUnits(false);
      setUnitType(newUnitType);
      setPreviousUnitType(newUnitType);
      console.log('fetch ' + newUnitType)

    } else if (newUnitType !== previousUnitType) {
      setFetchAllUnits(false);  
      setUnitType(newUnitType);    
      setPreviousUnitType(newUnitType);
      setActiveUnitType(newUnitType);
      console.log("not the same type")
      console.log("fetch " + newUnitType)
    }
    
    else if (newUnitType == previousUnitType) {

      if (fetchAllUnits) {
        setFetchAllUnits(false);  
        console.log("toggle " + newUnitType)
      } else {
        setFetchAllUnits(true);  
        setActiveUnitType('');
        console.log("toggle all")

      }
    }
  };

  console.log(activeUnitType)
  return (
    <div className="container">
      <HeroHome />
      {/* Unit type filter buttons */}
      <FilterButtons
        onFilterButtonClick={handleFilterButtonClick}
        onFilterModalButtonClick={toggleFilterModal}
        activeUnitType={activeUnitType}
      />

      {/* Filtering modal */}
      <FilterModal isOpen={isFilterModalOpen} onClose={toggleFilterModal} onFilterSubmit={updateResidentials} allResidentialUnits={allResidentialUnits} />

      {/* Display residentials */}
      {residentials.length > 0 ? (
        <ResidentialGrid residentials={residentials.slice(0, displayedUnits)} />
      ) : (
        <h4>Tyvärr matchar inga bostäder din sökning</h4>
      )}

      {/* Show more button */}
      {residentials.length > displayedUnits && (
        <button className="mainButton showMoreButton" onClick={showMoreUnits}>Show more</button>
      )}
    </div>
  );
}

export default Home;




// RE-BUILD not done yet

// import { useEffect, useState } from "react";
// import { getUnits } from "../api/getUnits";
// import ResidentialGrid from "../components/home/ResidentialGrid";
// import HeroHome from "../components/home/HeroHome";
// import FilterModal from "../components/home/FilterModal";
// import FilterButtons from "../components/home/FilterButtons";

// const Home = () => {
//   // let doneFetching = false;
//   const [doneFetching, setDoneFetching] = useState(false);

//   const [residentials, setResidentials] = useState<TResidentialUnit[]>([]);
//   const [allResidentialUnits, setAllResidentialUnits] = useState<TResidentialUnit[]>([]);
//   const [unitType, setUnitType] = useState('apartment'); // Default to "apartment"
//   const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
//   const [fetchAllUnits, setFetchAllUnits] = useState(true);
//   const [activeUnitType, setActiveUnitType] = useState('all');
//   const [previousUnitType, setPreviousUnitType] = useState('');
//   const [displayedUnits, setDisplayedUnits] = useState(6);

//   const [apartments, setApartments] = useState<TResidentialUnit[]>([]);
//   const [houses, setHouses] = useState<TResidentialUnit[]>([]);
//   const [rooms, setRooms] = useState<TResidentialUnit[]>([]);
//   const [collectives, setCollectives] = useState<TResidentialUnit[]>([]);

//     // Function to increase the number of displayed units
//   const showMoreUnits = () => {
//     setDisplayedUnits(prevCount => prevCount + 6);
//   };
  
//   // Helper function to check if all necessary variables exist in a residential unit
//   const isResidentialUnitValid = (unit: TResidentialUnit): boolean => {
//     // Customize the conditions based on the variables you want to check
//     return (
//       unit &&
//       unit.title &&
//       unit.rent &&
//       unit.description &&
//       unit.period &&
//       unit.avalible &&
//       unit.imageURL &&
//       unit._id &&
//       unit.size &&
//       unit.rooms &&
//       unit.area &&
//       unit.city &&
//       unit.street &&
//       unit.zipcode &&
//       unit.apply &&
//       unit.includes &&
//       unit.status &&
//       unit.landlord
//     );
//   };

//   // Callback function to update residentials with filtered units
//   const updateResidentials = (filteredUnits: TResidentialUnit[]) => {
//     setResidentials(filteredUnits);
//   };


//   // let apartments = null;
//   // let houses = null;
//   // let rooms = null;
//   // let collectives = null;
  
//   useEffect(() => {
//   if(!doneFetching) {

    

//     // FETCH ALL UNITS IF DONEFETCHING = TRUE
//     // FIRST THEN DO THE TRY CATCH BELOW IF THEY ARE NOT FETCHED


//     async function fetchData() {
      
//       try {
//         let newResidentials: TResidentialUnit[] = [];
        
//         if (fetchAllUnits) {
//           const apartmentsData = await getUnits("apartment");
//           const housesData = await getUnits("house");
//             const roomsData = await getUnits("room");
//             const collectivesData = await getUnits("collective");
            
//             setApartments(apartmentsData);
//             setHouses(housesData);
//             setRooms(roomsData);
//             setCollectives(collectivesData);
            
//             // Combine the data from apartments, houses, rooms, and collectives
//             const combinedResidentials = [...apartments, ...houses, ...rooms, ...collectives];
            
//             // Filter out invalid units using the type guard
//             newResidentials = combinedResidentials.filter(isResidentialUnitValid);
            
//             setResidentials(newResidentials);
//             setAllResidentialUnits(combinedResidentials);
//           } else {
//             newResidentials = await getUnits(unitType);
//             setDisplayedUnits(6)
            
//             // Filter out invalid units using the type guard
//             newResidentials = newResidentials.filter(isResidentialUnitValid);
//             setResidentials(newResidentials);
//           }
//         } catch (error) {
//           console.error("Error fetching residential units:", error);
//         }
//       }
//     // }
    
    
    
//     console.log("FETCHING FROM DATABASE")
//     setDoneFetching(true);
//     console.log("done fetching")
//     console.log(doneFetching)
    
//     fetchData();
//     // setFetchAllUnits(true)
//     return
//     // }, [fetchAllUnits, unitType]);
    
//   // }, [fetchAllUnits, unitType]);
    
    
//   } else if (doneFetching == true){
    
    
    
//     // useEffect(() => {
//       console.log("Use the fetched data without fetching")
//       // async function fetchData() {
        
//           try {
//             let newResidentials: TResidentialUnit[] = [];
    
//             if (fetchAllUnits) {
    
//               // Combine the data from apartments, houses, rooms, and collectives
//               const combinedResidentials = [...apartments, ...houses, ...rooms, ...collectives];
    
//               // Filter out invalid units using the type guard
//               newResidentials = combinedResidentials.filter(isResidentialUnitValid);
    
//               setResidentials(newResidentials);
//               setAllResidentialUnits(combinedResidentials);

//             } else {
  
//               if (unitType == "apartment") {
//                 newResidentials = apartments
//               } else if (unitType == "house") {
//                 newResidentials = houses
//               } else if (unitType == "room") {
//                 newResidentials = rooms
//               } else if (unitType == "collective") {
//                 newResidentials = collectives
//               }
//               // newResidentials = await getUnits(unitType);
//               setDisplayedUnits(6)
    
//               // Filter out invalid units using the type guard
//               newResidentials = newResidentials.filter(isResidentialUnitValid);
//               setResidentials(newResidentials);
//             }
//           } catch (error) {
//             console.error("Error fetching residential units:", error);
//           }
        
//         }

//       }, [fetchAllUnits, unitType]);
//   // }

//   // Handle filter modal
//   const toggleFilterModal = () => {
//     setIsFilterModalOpen(!isFilterModalOpen);
//   };

//   const handleFilterButtonClick = (newUnitType: string) => {

//     if (fetchAllUnits) {
//       setActiveUnitType(newUnitType);
//       setFetchAllUnits(false);
//       setUnitType(newUnitType);
//       setPreviousUnitType(newUnitType);
//       console.log('fetch ' + newUnitType)

//     } else if (newUnitType !== previousUnitType) {
//       setFetchAllUnits(false);  
//       setUnitType(newUnitType);    
//       setPreviousUnitType(newUnitType);
//       setActiveUnitType(newUnitType);
//       console.log("not the same type")
//       console.log("fetch " + newUnitType)
//     }
    
//     else if (newUnitType == previousUnitType) {

//       if (fetchAllUnits) {
//         setFetchAllUnits(false);  
//         console.log("toggle " + newUnitType)
//       } else {
//         setFetchAllUnits(true);  
//         setActiveUnitType('');
//         console.log("toggle all")

//       }
//     }
//   }
  


//   console.log(activeUnitType)
//   return (
//     <div className="container">
//       <HeroHome />
//       {/* Unit type filter buttons */}
//       <FilterButtons
//         onFilterButtonClick={handleFilterButtonClick}
//         onFilterModalButtonClick={toggleFilterModal}
//         activeUnitType={activeUnitType}
//       />

//       {/* Filtering modal */}
//       <FilterModal isOpen={isFilterModalOpen} onClose={toggleFilterModal} onFilterSubmit={updateResidentials} allResidentialUnits={allResidentialUnits} />

//       {/* Display residentials */}
//       {residentials.length > 0 ? (
//         <ResidentialGrid residentials={residentials.slice(0, displayedUnits)} />
//       ) : (
//         <h4>Tyvärr matchar inga bostäder din sökning</h4>
//       )}

//       {/* Show more button */}
//       {residentials.length > displayedUnits && (
//         <button className="mainButton showMoreButton" onClick={showMoreUnits}>Show more</button>
//       )}
//     </div>
//   );
// }
// // }
// export default Home;

