import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useGlobalStore = create()(
  persist(
    (set) => {
      return {
        // Define aquí las propiedades de tu estado global
        data: null, // Puedes inicializarlo como null u otro valor por defecto
        loading: false, // Para rastrear el estado de la solicitud fetch
        error: null, // Para rastrear errores en la solicitud fetch

        // Función para realizar la solicitud fetch
        fetchData: async () => {
          set({ loading: true, error: null }); // Actualiza el estado mientras se carga la solicitud
          try {
            const response = await fetch("http://localhost:3050/productos");
            if (!response.ok) {
              throw new Error("La solicitud no fue exitosa.");
            }
            const data = await response.json();
            set({ data, loading: false }); // Actualiza el estado con los datos recibidos
          } catch (error) {
            set({ error, loading: false }); // Manejo de errores
          }
        },
        
      };
    },
    {
      name: "globalState", // Nombre para la persistencia en almacenamiento local
    }
  )
);
