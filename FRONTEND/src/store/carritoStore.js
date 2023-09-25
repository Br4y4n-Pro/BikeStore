import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useGlobalStore } from "./productoFetchStore";

const {data}= useGlobalStore
//set para actualizar el estado
//get para leer el estado

// Define el store
export const useCarrito = create()(
  persist(
    (set) => {
      return {
        // Inicialmente, el contador es 0
        contador: 0,
        carrito:[],
        totalprecio: 0,
        dataCarrito:data,
        
        eliminar: () => set((state) => ({ contador: state.contador - 1 })),
        incrementar: () => set((state) => ({ contador: state.contador + 1 })),

        agregarCarrito: (data) => set({ carrito: data.filter((objeto) => (objeto.id === idBuscado))}),
        setData: (newData) => set({ usuario: newData }), // Función para actualizar los datos

      };


    },
    {
      name: "carrito",
    }
  )
);
