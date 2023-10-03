
// import {create} from "zustand";
// import { persist } from "zustand/middleware";

// // Define el almacén useCarrito
// export const useCarrito = create(
//   persist(
//     (set,get) => ({
//       // Inicialmente, el carrito está vacío
      


//       // Función para agregar un producto al carrito
  
//       agregarProducto: (producto) =>
//         set(() => {
//       //buscar si en el carrito ya existe este producto
//       // lo haria buscando en el carrito si hay un id igual al que le estoy pasando. 
//           const cartitem = get().carrito.find((item) => item.id_producto === producto.id_producto)
//       // si esto es verdadero entonces sumar 1 a la cantidad 
//           if (cartitem) {
//             return {
//               carrito: get().carrito.map((cartitem) =>
//               cartitem.id_producto === producto.id_producto ? {...cartitem, cantidad: cartitem.cantidad + 1} //<--- significa que ya esta en el carrito por eso se le añade 1
//               :cartitem  //<-------- si no se pasa el producto normal
//             ),
//             totalprecio: get().totalprecio + producto.precio
//             }
//             // carrito: state.carrito.concat(producto), // Concatena el nuevo producto con el carrito existente
//             // totalprecio: state.totalprecio + producto.precio,
            
//           }

//         }),
// // -----------------------------------------------------------------------------------------------------





//       // Función para eliminar un producto del carrito por su índice
//       eliminarProducto: (index) =>
//         set((state) => {
//           const newCarrito = [...state.carrito];
//           const removedProduct = newCarrito.splice(index, 1)[0];
//           return {
//             carrito: newCarrito,
//             totalprecio: state.totalprecio - removedProduct.precio,
//           };
//         }),

//       // Función para vaciar completamente el carrito
//       vaciarCarrito: () => set({ carrito: [], totalprecio: 0 }),
//     }),
//     {
//       name: "carrito",
//     }
//   )
// );
