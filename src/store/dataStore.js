import create from "zustand";
import axios from "axios";

export const useStore = create((set) => ({
  movies: [],
  person: [],
  vehicles: [],
  species: [],
  locations: [],
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
    const response = await axios.get("https://ghibliapi.herokuapp.com/locations");
    set({ locations: response.data });
  },
}));
