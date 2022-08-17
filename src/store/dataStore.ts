import create from "zustand";
import axios from "axios";

type Props = {
  fetchPerson: any;
  fetchDetail: any;
  fetchMovie: any;
  category: Object | any;
  searchTerm: string,
  // setCategory: (category: string) => void
  movies: Array<string>,
  detail: Array<string>,
  person: Array<string>,
  vehicles: Array<string>,
  species: Array<string>,
  locations: Array<string>
}


export const useStore = create<Props>((set) => ({
  searchTerm: "",
  category: [],

  setCategory(category: string) {
    set((state) => ({
      ...category,
      category,
    }));
  },

  setFilter(searchTerm: string) {
    set((state) => ({
      searchTerm,
    }));
  },

  movies: [],
  detail: [],
  person: [], // change later: people
  vehicles: [],
  species: [],
  locations: [],
  fetchDetail: async (id: number) => {
    const response = await axios.get(
      `https://ghibliapi.herokuapp.com/films/${id}`
    );
    set({ detail: response.data });
  },
  fetchMovie: async () => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    set({ movies: response.data });
  },
  fetchPerson: async () => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/people");
    set({ person: response.data });
  },
  fetchVehicle: async () => {
    const response = await axios.get(
      "https://ghibliapi.herokuapp.com/vehicles"
    );
    set({ vehicles: response.data });
  },
  fetchSpecies: async () => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/species");
    set({ species: response.data });
  },
  fetchLocations: async () => {
    const response = await axios.get(
      "https://ghibliapi.herokuapp.com/locations"
    );
    set({ locations: response.data });
  },
}));
