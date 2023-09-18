import { create } from "zustand";
import { persist } from "zustand/middleware";

//set para actualizar el estado
//get para leer el estado

// Define el store
export const useAuthStore = create()(
  persist(
    (set) => {
      return {
        // Inicialmente, el usuario no está logeado
        isLoggedIn: false,

        usuario: null, // Inicialmente nulo, se utilizará para almacenar los datos de la solicitud fetch
        setData: (newData) => set({ usuario: newData }), // Función para actualizar los datos
        login: () => set({ isLoggedIn: true }),

        // Función para cerrar sesión
        logout: () => set({ isLoggedIn: false }),
      };


      
    },
    {
      name: "loginSesion",
    }
  )
);
