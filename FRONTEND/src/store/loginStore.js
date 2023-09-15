import { create } from "zustand";
import { persist } from "zustand/middleware";

//set para actualizar el estado
//get para leer el estado

// Define el store
export const useAuthStore = create()(persist((set) => {
return {
    // Inicialmente, el usuario no está logeado
    isLoggedIn: false,

  // fetchUser: async ()=>{
  // //   const URL = "http://localhost:3050/usuario/" + ""
  // //   const res = fetch(URL)
  // // }

    // Función para iniciar sesión
    login: () => set((state) => ({ isLoggedIn: true })),
  
    // Función para cerrar sesión
    logout: () => set((state) => ({ isLoggedIn: false })),
}},{
  name:"loginSesion"
}))