import create from "zustand";
import axios from "axios";

export const useStore = create((set) => ({
  searchTerm: "",
  category: [],

  setCategory(category) {
    set((state) => ({
      ...category,
      category,
    }));
  },

  setFilter(searchTerm) {
    set((state) => ({
      searchTerm,
    }));
  },

  movies: [],
  detail: [],
  person: [],
  vehicles: [],
  species: [],
  locations: [],
  fetchDetail: async (id) => {
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
