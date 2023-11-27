interface TResidentialUnit {
    title: string;
    rent: number;
    description: string;
    period: string;
    avalible: string;10
    imageURL: Array;
    unitType: string;
    _id: string;
    size: string;
    rooms: number;
    area: string;
    floor: number;
    city: string;
    street: string;
    zipcode: string;
    apply: string;
    includes: array;
    status: string;
    landlord: TLandlord;
  };

interface TLandlord {
  name: string;
  id: string;
}

interface TLandlordRating {
  name: string;
  ratings: array;

}


 