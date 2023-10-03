import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useGlobalStore = create()(
  persist(
    (set, get) => {
      return {
        // Define aquí las propiedades de tu estado global
        data: null, // Puedes inicializarlo como null u otro valor por defecto
        loading: false, // Para rastrear el estado de la solicitud fetch
        error: null, // Para rastrear errores en la solicitud fetch
        carrito: [],
        totalprecio: 0,
        contador: 0,
        eliminar: () => set((state) => ({ contador: state.contador - 1 })),
        incrementar: () => set((state) => ({ contador: state.contador + 1 })),

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

        agregarProducto: (productoId) => {
          const product = get().data.find(
            (item) => item.id_producto === productoId
          );

          if (product) {
            const cartitem = get().carrito.find(
              (cartitem) => cartitem.id_producto === productoId
            );

            if (cartitem) {
              set((state) => ({
                carrito: state.carrito.map((item) =>
                  item.id_producto === productoId
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
                ),
                totalprecio: get().totalprecio + parseInt(product.precio),
              }));
            } else {
              set((state) => ({
                carrito: [...state.carrito, { ...product, cantidad: 1 }],
                totalprecio: get().totalprecio + parseInt(product.precio),
              }));
            }
          }
        },

        eliminarProducto: (productoId) =>
          set((state) => {
            const itemIndex = state.carrito.findIndex(
              (product) => product.id_producto === productoId
            );

            if (itemIndex !== -1) {
              const updateCartProducts = [...state.carrito];
              const itemToRemove = updateCartProducts[itemIndex];

              if (itemToRemove.cantidad > 1) {
                updateCartProducts[itemIndex] = {
                  ...itemToRemove,
                  cantidad: itemToRemove.cantidad - 1,
                };
                return {
                  carrito: updateCartProducts,
                  totalprecio: state.totalprecio - itemToRemove.precio,
                };
              } else {
                // Si la cantidad es igual a 1, elimina el producto del carrito
                updateCartProducts.splice(itemIndex, 1);
                
              }

              return {
                carrito: updateCartProducts,
                totalprecio: state.totalprecio - itemToRemove.precio,
                
              };
            }

            // Si el producto no se encontró en el carrito, simplemente devuelve el estado sin cambios
            return state;
          }),
      };
    },
    {
      name: "globalState", // Nombre para la persistencia en almacenamiento local
    }
  )
);
