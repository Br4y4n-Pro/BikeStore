import {create} from "zustand";
import { persist } from "zustand/middleware";

// Define el almacén useCarrito
export const useCarrito = create(
  persist(
    (set) => ({
      // Inicialmente, el carrito está vacío
      carrito: [],
      totalprecio: 0,
      contador:0,
        eliminar: () => set((state) => ({ contador: state.contador - 1 })),
        incrementar: () => set((state) => ({ contador: state.contador + 1 })),


      // Función para agregar un producto al carrito
  
      agregarProducto: (producto) =>
        set((state) => ({
          carrito: state.carrito.concat(producto), // Concatena el nuevo producto con el carrito existente
          totalprecio: state.totalprecio + producto.precio,
        })),
// -----------------------------------------------------------------------------------------------------





      // Función para eliminar un producto del carrito por su índice
      eliminarProducto: (index) =>
        set((state) => {
          const newCarrito = [...state.carrito];
          const removedProduct = newCarrito.splice(index, 1)[0];
          return {
            carrito: newCarrito,
            totalprecio: state.totalprecio - removedProduct.precio,
          };
        }),

      // Función para vaciar completamente el carrito
      vaciarCarrito: () => set({ carrito: [], totalprecio: 0 }),
    }),
    {
      name: "carrito",
    }
  )
);
