PGDMP         ,                {         	   Bikestore    15.4    15.3 ]    [           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            \           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ]           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ^           1262    33127 	   Bikestore    DATABASE     �   CREATE DATABASE "Bikestore" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "Bikestore";
                postgres    false            �            1259    33128    carrito    TABLE     �   CREATE TABLE public.carrito (
    id_carrito integer NOT NULL,
    fecha date NOT NULL,
    id_usuario integer NOT NULL,
    id_producto integer NOT NULL
);
    DROP TABLE public.carrito;
       public         heap    postgres    false            �            1259    33131    carrito_id_carrito_seq    SEQUENCE     �   CREATE SEQUENCE public.carrito_id_carrito_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.carrito_id_carrito_seq;
       public          postgres    false    214            _           0    0    carrito_id_carrito_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.carrito_id_carrito_seq OWNED BY public.carrito.id_carrito;
          public          postgres    false    215            �            1259    33132    carrito_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.carrito_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.carrito_id_producto_seq;
       public          postgres    false    214            `           0    0    carrito_id_producto_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.carrito_id_producto_seq OWNED BY public.carrito.id_producto;
          public          postgres    false    216            �            1259    33133    carrito_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.carrito_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.carrito_id_usuario_seq;
       public          postgres    false    214            a           0    0    carrito_id_usuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.carrito_id_usuario_seq OWNED BY public.carrito.id_usuario;
          public          postgres    false    217            �            1259    33134    clientes    TABLE     �  CREATE TABLE public.clientes (
    id_usuario integer NOT NULL,
    nombre text NOT NULL,
    apellido text NOT NULL,
    correo_electronico text NOT NULL,
    direccion text NOT NULL,
    "hash_contraseña" text NOT NULL,
    numero_telefono text NOT NULL,
    documento_identidad text NOT NULL,
    edad integer NOT NULL,
    id_listafavoritos integer NOT NULL,
    rol integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.clientes;
       public         heap    postgres    false            �            1259    33139    clientes_id_listafavoritos_seq    SEQUENCE     �   CREATE SEQUENCE public.clientes_id_listafavoritos_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.clientes_id_listafavoritos_seq;
       public          postgres    false    218            b           0    0    clientes_id_listafavoritos_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.clientes_id_listafavoritos_seq OWNED BY public.clientes.id_listafavoritos;
          public          postgres    false    219            �            1259    33140    clientes_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.clientes_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.clientes_id_usuario_seq;
       public          postgres    false    218            c           0    0    clientes_id_usuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.clientes_id_usuario_seq OWNED BY public.clientes.id_usuario;
          public          postgres    false    220            �            1259    33141    compras    TABLE     �   CREATE TABLE public.compras (
    id_compra integer NOT NULL,
    id_producto integer NOT NULL,
    id_proveedor integer NOT NULL,
    costo_t money NOT NULL,
    cantidad bigint NOT NULL,
    fecha_c date NOT NULL
);
    DROP TABLE public.compras;
       public         heap    postgres    false            �            1259    33144    compras_id_compra_seq    SEQUENCE     �   CREATE SEQUENCE public.compras_id_compra_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.compras_id_compra_seq;
       public          postgres    false    221            d           0    0    compras_id_compra_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.compras_id_compra_seq OWNED BY public.compras.id_compra;
          public          postgres    false    222            �            1259    33145    compras_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.compras_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.compras_id_producto_seq;
       public          postgres    false    221            e           0    0    compras_id_producto_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.compras_id_producto_seq OWNED BY public.compras.id_producto;
          public          postgres    false    223            �            1259    33146    compras_id_proveedor_seq    SEQUENCE     �   CREATE SEQUENCE public.compras_id_proveedor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.compras_id_proveedor_seq;
       public          postgres    false    221            f           0    0    compras_id_proveedor_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.compras_id_proveedor_seq OWNED BY public.compras.id_proveedor;
          public          postgres    false    224            �            1259    33147    listafavoritos    TABLE     O   CREATE TABLE public.listafavoritos (
    id_listafavoritos integer NOT NULL
);
 "   DROP TABLE public.listafavoritos;
       public         heap    postgres    false            �            1259    33150 $   listafavoritos_id_listafavoritos_seq    SEQUENCE     �   CREATE SEQUENCE public.listafavoritos_id_listafavoritos_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.listafavoritos_id_listafavoritos_seq;
       public          postgres    false    225            g           0    0 $   listafavoritos_id_listafavoritos_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.listafavoritos_id_listafavoritos_seq OWNED BY public.listafavoritos.id_listafavoritos;
          public          postgres    false    226            �            1259    33151 	   productos    TABLE     �  CREATE TABLE public.productos (
    id_producto integer NOT NULL,
    nombre_producto character varying(100) NOT NULL,
    descripcion character varying(900) NOT NULL,
    precio money NOT NULL,
    stock integer NOT NULL,
    categoria character varying(255) NOT NULL,
    tipo character varying(255) NOT NULL,
    marca character varying(255) NOT NULL,
    color character varying(255) NOT NULL,
    img_producto character varying(255)
);
    DROP TABLE public.productos;
       public         heap    postgres    false            �            1259    33156    productos_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.productos_id_producto_seq;
       public          postgres    false    227            h           0    0    productos_id_producto_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.productos_id_producto_seq OWNED BY public.productos.id_producto;
          public          postgres    false    228            �            1259    33157    proveedores    TABLE     �   CREATE TABLE public.proveedores (
    id_proveedor integer NOT NULL,
    nombre_p character varying(255) NOT NULL,
    correo_p character varying(255) NOT NULL
);
    DROP TABLE public.proveedores;
       public         heap    postgres    false            �            1259    33162    proveedores_id_proveedor_seq    SEQUENCE     �   CREATE SEQUENCE public.proveedores_id_proveedor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.proveedores_id_proveedor_seq;
       public          postgres    false    229            i           0    0    proveedores_id_proveedor_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.proveedores_id_proveedor_seq OWNED BY public.proveedores.id_proveedor;
          public          postgres    false    230            �            1259    33163    stock    TABLE     �   CREATE TABLE public.stock (
    id_productos integer NOT NULL,
    fecha_c_i date NOT NULL,
    cantidad_i bigint NOT NULL,
    cantidad_v bigint NOT NULL,
    fecha_u_v date NOT NULL,
    cantidad_c bigint NOT NULL,
    fecha_uc date NOT NULL
);
    DROP TABLE public.stock;
       public         heap    postgres    false            �            1259    33166    stock_id_productos_seq    SEQUENCE     �   CREATE SEQUENCE public.stock_id_productos_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.stock_id_productos_seq;
       public          postgres    false    231            j           0    0    stock_id_productos_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.stock_id_productos_seq OWNED BY public.stock.id_productos;
          public          postgres    false    232            �            1259    33167    ventas    TABLE       CREATE TABLE public.ventas (
    id_venta integer NOT NULL,
    id_producto integer NOT NULL,
    id_cliente integer NOT NULL,
    estado_v character varying(255) NOT NULL,
    fecha_v date NOT NULL,
    cantidad bigint NOT NULL,
    costo money NOT NULL
);
    DROP TABLE public.ventas;
       public         heap    postgres    false            �            1259    33170    ventas_id_cliente_seq    SEQUENCE     �   CREATE SEQUENCE public.ventas_id_cliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.ventas_id_cliente_seq;
       public          postgres    false    233            k           0    0    ventas_id_cliente_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.ventas_id_cliente_seq OWNED BY public.ventas.id_cliente;
          public          postgres    false    234            �            1259    33171    ventas_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.ventas_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.ventas_id_producto_seq;
       public          postgres    false    233            l           0    0    ventas_id_producto_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.ventas_id_producto_seq OWNED BY public.ventas.id_producto;
          public          postgres    false    235            �            1259    33172    ventas_id_venta_seq    SEQUENCE     �   CREATE SEQUENCE public.ventas_id_venta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.ventas_id_venta_seq;
       public          postgres    false    233            m           0    0    ventas_id_venta_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.ventas_id_venta_seq OWNED BY public.ventas.id_venta;
          public          postgres    false    236            �           2604    33173    carrito id_carrito    DEFAULT     x   ALTER TABLE ONLY public.carrito ALTER COLUMN id_carrito SET DEFAULT nextval('public.carrito_id_carrito_seq'::regclass);
 A   ALTER TABLE public.carrito ALTER COLUMN id_carrito DROP DEFAULT;
       public          postgres    false    215    214            �           2604    33174    carrito id_usuario    DEFAULT     x   ALTER TABLE ONLY public.carrito ALTER COLUMN id_usuario SET DEFAULT nextval('public.carrito_id_usuario_seq'::regclass);
 A   ALTER TABLE public.carrito ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    217    214            �           2604    33175    carrito id_producto    DEFAULT     z   ALTER TABLE ONLY public.carrito ALTER COLUMN id_producto SET DEFAULT nextval('public.carrito_id_producto_seq'::regclass);
 B   ALTER TABLE public.carrito ALTER COLUMN id_producto DROP DEFAULT;
       public          postgres    false    216    214            �           2604    33176    clientes id_usuario    DEFAULT     z   ALTER TABLE ONLY public.clientes ALTER COLUMN id_usuario SET DEFAULT nextval('public.clientes_id_usuario_seq'::regclass);
 B   ALTER TABLE public.clientes ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    220    218            �           2604    33177    clientes id_listafavoritos    DEFAULT     �   ALTER TABLE ONLY public.clientes ALTER COLUMN id_listafavoritos SET DEFAULT nextval('public.clientes_id_listafavoritos_seq'::regclass);
 I   ALTER TABLE public.clientes ALTER COLUMN id_listafavoritos DROP DEFAULT;
       public          postgres    false    219    218            �           2604    33178    compras id_compra    DEFAULT     v   ALTER TABLE ONLY public.compras ALTER COLUMN id_compra SET DEFAULT nextval('public.compras_id_compra_seq'::regclass);
 @   ALTER TABLE public.compras ALTER COLUMN id_compra DROP DEFAULT;
       public          postgres    false    222    221            �           2604    33179    compras id_producto    DEFAULT     z   ALTER TABLE ONLY public.compras ALTER COLUMN id_producto SET DEFAULT nextval('public.compras_id_producto_seq'::regclass);
 B   ALTER TABLE public.compras ALTER COLUMN id_producto DROP DEFAULT;
       public          postgres    false    223    221            �           2604    33180    compras id_proveedor    DEFAULT     |   ALTER TABLE ONLY public.compras ALTER COLUMN id_proveedor SET DEFAULT nextval('public.compras_id_proveedor_seq'::regclass);
 C   ALTER TABLE public.compras ALTER COLUMN id_proveedor DROP DEFAULT;
       public          postgres    false    224    221            �           2604    33181     listafavoritos id_listafavoritos    DEFAULT     �   ALTER TABLE ONLY public.listafavoritos ALTER COLUMN id_listafavoritos SET DEFAULT nextval('public.listafavoritos_id_listafavoritos_seq'::regclass);
 O   ALTER TABLE public.listafavoritos ALTER COLUMN id_listafavoritos DROP DEFAULT;
       public          postgres    false    226    225            �           2604    33182    productos id_producto    DEFAULT     ~   ALTER TABLE ONLY public.productos ALTER COLUMN id_producto SET DEFAULT nextval('public.productos_id_producto_seq'::regclass);
 D   ALTER TABLE public.productos ALTER COLUMN id_producto DROP DEFAULT;
       public          postgres    false    228    227            �           2604    33183    proveedores id_proveedor    DEFAULT     �   ALTER TABLE ONLY public.proveedores ALTER COLUMN id_proveedor SET DEFAULT nextval('public.proveedores_id_proveedor_seq'::regclass);
 G   ALTER TABLE public.proveedores ALTER COLUMN id_proveedor DROP DEFAULT;
       public          postgres    false    230    229            �           2604    33184    stock id_productos    DEFAULT     x   ALTER TABLE ONLY public.stock ALTER COLUMN id_productos SET DEFAULT nextval('public.stock_id_productos_seq'::regclass);
 A   ALTER TABLE public.stock ALTER COLUMN id_productos DROP DEFAULT;
       public          postgres    false    232    231            �           2604    33185    ventas id_venta    DEFAULT     r   ALTER TABLE ONLY public.ventas ALTER COLUMN id_venta SET DEFAULT nextval('public.ventas_id_venta_seq'::regclass);
 >   ALTER TABLE public.ventas ALTER COLUMN id_venta DROP DEFAULT;
       public          postgres    false    236    233            �           2604    33186    ventas id_producto    DEFAULT     x   ALTER TABLE ONLY public.ventas ALTER COLUMN id_producto SET DEFAULT nextval('public.ventas_id_producto_seq'::regclass);
 A   ALTER TABLE public.ventas ALTER COLUMN id_producto DROP DEFAULT;
       public          postgres    false    235    233            �           2604    33187    ventas id_cliente    DEFAULT     v   ALTER TABLE ONLY public.ventas ALTER COLUMN id_cliente SET DEFAULT nextval('public.ventas_id_cliente_seq'::regclass);
 @   ALTER TABLE public.ventas ALTER COLUMN id_cliente DROP DEFAULT;
       public          postgres    false    234    233            B          0    33128    carrito 
   TABLE DATA           M   COPY public.carrito (id_carrito, fecha, id_usuario, id_producto) FROM stdin;
    public          postgres    false    214   �m       F          0    33134    clientes 
   TABLE DATA           �   COPY public.clientes (id_usuario, nombre, apellido, correo_electronico, direccion, "hash_contraseña", numero_telefono, documento_identidad, edad, id_listafavoritos, rol) FROM stdin;
    public          postgres    false    218   �m       I          0    33141    compras 
   TABLE DATA           c   COPY public.compras (id_compra, id_producto, id_proveedor, costo_t, cantidad, fecha_c) FROM stdin;
    public          postgres    false    221   1o       M          0    33147    listafavoritos 
   TABLE DATA           ;   COPY public.listafavoritos (id_listafavoritos) FROM stdin;
    public          postgres    false    225   No       O          0    33151 	   productos 
   TABLE DATA           �   COPY public.productos (id_producto, nombre_producto, descripcion, precio, stock, categoria, tipo, marca, color, img_producto) FROM stdin;
    public          postgres    false    227   ko       Q          0    33157    proveedores 
   TABLE DATA           G   COPY public.proveedores (id_proveedor, nombre_p, correo_p) FROM stdin;
    public          postgres    false    229   �{       S          0    33163    stock 
   TABLE DATA           q   COPY public.stock (id_productos, fecha_c_i, cantidad_i, cantidad_v, fecha_u_v, cantidad_c, fecha_uc) FROM stdin;
    public          postgres    false    231   �{       U          0    33167    ventas 
   TABLE DATA           g   COPY public.ventas (id_venta, id_producto, id_cliente, estado_v, fecha_v, cantidad, costo) FROM stdin;
    public          postgres    false    233   |       n           0    0    carrito_id_carrito_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.carrito_id_carrito_seq', 1, false);
          public          postgres    false    215            o           0    0    carrito_id_producto_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.carrito_id_producto_seq', 1, false);
          public          postgres    false    216            p           0    0    carrito_id_usuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.carrito_id_usuario_seq', 1, false);
          public          postgres    false    217            q           0    0    clientes_id_listafavoritos_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.clientes_id_listafavoritos_seq', 7, true);
          public          postgres    false    219            r           0    0    clientes_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.clientes_id_usuario_seq', 12, true);
          public          postgres    false    220            s           0    0    compras_id_compra_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.compras_id_compra_seq', 1, false);
          public          postgres    false    222            t           0    0    compras_id_producto_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.compras_id_producto_seq', 1, false);
          public          postgres    false    223            u           0    0    compras_id_proveedor_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.compras_id_proveedor_seq', 1, false);
          public          postgres    false    224            v           0    0 $   listafavoritos_id_listafavoritos_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.listafavoritos_id_listafavoritos_seq', 1, false);
          public          postgres    false    226            w           0    0    productos_id_producto_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.productos_id_producto_seq', 33, true);
          public          postgres    false    228            x           0    0    proveedores_id_proveedor_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.proveedores_id_proveedor_seq', 1, false);
          public          postgres    false    230            y           0    0    stock_id_productos_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.stock_id_productos_seq', 1, false);
          public          postgres    false    232            z           0    0    ventas_id_cliente_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.ventas_id_cliente_seq', 1, false);
          public          postgres    false    234            {           0    0    ventas_id_producto_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.ventas_id_producto_seq', 1, false);
          public          postgres    false    235            |           0    0    ventas_id_venta_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.ventas_id_venta_seq', 1, false);
          public          postgres    false    236            �           2606    33189    carrito carrito_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.carrito
    ADD CONSTRAINT carrito_pkey PRIMARY KEY (id_carrito);
 >   ALTER TABLE ONLY public.carrito DROP CONSTRAINT carrito_pkey;
       public            postgres    false    214            �           2606    33191    clientes clientes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (id_usuario);
 @   ALTER TABLE ONLY public.clientes DROP CONSTRAINT clientes_pkey;
       public            postgres    false    218            �           2606    33193    compras compras_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.compras
    ADD CONSTRAINT compras_pkey PRIMARY KEY (id_compra);
 >   ALTER TABLE ONLY public.compras DROP CONSTRAINT compras_pkey;
       public            postgres    false    221            �           2606    33195 "   listafavoritos listafavoritos_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.listafavoritos
    ADD CONSTRAINT listafavoritos_pkey PRIMARY KEY (id_listafavoritos);
 L   ALTER TABLE ONLY public.listafavoritos DROP CONSTRAINT listafavoritos_pkey;
       public            postgres    false    225            �           2606    33197    productos productos_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id_producto);
 B   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pkey;
       public            postgres    false    227            �           2606    33199    proveedores proveedores_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.proveedores
    ADD CONSTRAINT proveedores_pkey PRIMARY KEY (id_proveedor);
 F   ALTER TABLE ONLY public.proveedores DROP CONSTRAINT proveedores_pkey;
       public            postgres    false    229            �           2606    33201    stock stock_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.stock
    ADD CONSTRAINT stock_pkey PRIMARY KEY (id_productos);
 :   ALTER TABLE ONLY public.stock DROP CONSTRAINT stock_pkey;
       public            postgres    false    231            �           2606    33203    ventas ventas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT ventas_pkey PRIMARY KEY (id_venta);
 <   ALTER TABLE ONLY public.ventas DROP CONSTRAINT ventas_pkey;
       public            postgres    false    233            �           2606    33204    carrito fk_carrito_producto    FK CONSTRAINT     �   ALTER TABLE ONLY public.carrito
    ADD CONSTRAINT fk_carrito_producto FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);
 E   ALTER TABLE ONLY public.carrito DROP CONSTRAINT fk_carrito_producto;
       public          postgres    false    3240    214    227            �           2606    33209    compras fk_compras_producto    FK CONSTRAINT     �   ALTER TABLE ONLY public.compras
    ADD CONSTRAINT fk_compras_producto FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);
 E   ALTER TABLE ONLY public.compras DROP CONSTRAINT fk_compras_producto;
       public          postgres    false    3240    221    227            �           2606    33214    compras fk_compras_proveedor    FK CONSTRAINT     �   ALTER TABLE ONLY public.compras
    ADD CONSTRAINT fk_compras_proveedor FOREIGN KEY (id_proveedor) REFERENCES public.proveedores(id_proveedor);
 F   ALTER TABLE ONLY public.compras DROP CONSTRAINT fk_compras_proveedor;
       public          postgres    false    229    3242    221            �           2606    33219    ventas fk_ventas_cliente    FK CONSTRAINT     �   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT fk_ventas_cliente FOREIGN KEY (id_cliente) REFERENCES public.clientes(id_usuario);
 B   ALTER TABLE ONLY public.ventas DROP CONSTRAINT fk_ventas_cliente;
       public          postgres    false    233    3234    218            �           2606    33224    ventas fk_ventas_producto    FK CONSTRAINT     �   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT fk_ventas_producto FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);
 C   ALTER TABLE ONLY public.ventas DROP CONSTRAINT fk_ventas_producto;
       public          postgres    false    227    3240    233            B      x������ � �      F   X  x����n�@���)L�:wf�۵�V�P@m�͈S
��M��}�BRc.���s��c��-������l%k(E\�5�֩�&�x�B,�B��8 e\�v	0�:�4�뀄�F{ց"p 
�K��7�J(�t鲋�k�VNE7��U�,�ǃUH�xa?��)��C�3�t-�z��~4��P�Uu�5����V�*�I.��g	^�tn8��x�:�gy"SOh�_HzG�}�&�TY��Q���h����gy6�t��}�ق�D�'��@|�����v��i���6�,�嘆�^R�������#�iE���<�DC�*��dM9h2��lf��̦��E�אA      I      x������ � �      M      x������ � �      O   Z  x��Y�r�F]�_�S�%A�E<f��$&v�dyH:v��i4T�x0@���	Zf�E*�٤*��9��HQ�Le9�T��F?�=��s�^8:SB�Rv�}3[�Y�W�V���۷,�n~9��1����;�6�nyΙ�Yٴl÷?��e���l;.TS�c���}�oǬ���0�䬕ZIZjL���-�v�GZr�y0>�5��\���
��C/Y۳�m����'Q���m�z,i���k��WZ�V�V��e��c�n�n��ך�M�%��ێW����wxQ����xM��:�i0-�����v=-#������`�����5�8k���ߕ̛��J{���� C�<}��-��dAѪjS�	����5�{l%�C��ׄ�|��	�+ީ[��X��J�@+�k���k�����v�R�*^�YK����Zռ���b�$q݉�c�yވ�{��R����lx�>"7+�@:��='�c��Hr'�gq�ҝ�(�ͳ���������jƖ�׫[��-���ly9�1��G�H��*�Y�/����3�T�Z"�z��y`��\� 	�3d,�~����_u0g���0膃���4���b����֬{��oy�kA͎O�?{�"3!G� 0+zb�A�h>���S����P�T���o�v�^��%��7�f-E���)y����N4f7f����*7_˦����ns#�M�C"k�Y��mP�4�(�~.Y�)M.�T��N�= l�#|�nZ:K�t�Ë�AlD�("#��E��[Ȫ���E�Q)\���o���j�hx�#éQV�r���Y憁+b'��	;�>���D�G~:���g�	Qϯ_����쁱o�����k"�9� ����o]����E俈l��>9�y|Bao�ELOBq�<͝$K'�\�	�^���
/f���W,\b�#:Մ͏C v��h���P�)�*Oŉ�^첪�����@�b&s���*.P� ?�ʱ%N.�%���w ��H3l@#���Djz��podΑ�@�THI���Wr$dAz�	����E#>.o�O좩��l64��m'�]i�q���f���D�m������k�Ex`k8�DB��w5�Ȟ�2���6{5���Eԃ�©[��p�ޛ�������ԁ�_]�Y\?�˓�'⼈��$���_8�(|�g|��f��5|���	3��xy�"1{s�zy5[�G��v��Ȕ���F��L��-��@�5{e�do"����A��Ү�S��\��,Tv��l�	ߺ&r���ܲ3�i��n�#�y���N+JIMߓ���Z��ݤ�d�5��)�!���9�3(VM���l4NA;'pz2��Dd�,�-�ƃ!�x2�e��V}�,h�<}c�����|�X�W��l/\|<�4O�X�y�^�;a���;y�����pci�Ԇ�9Ca�^��5v5e��#�w����R Lfh� �@R�H��Usk��/M ��9'u&�h�m��A��J�4ܥ>�,H>���.���څpc�'P<�~��4��z���	 ���E��0�,�Ӄ^�5T�Bv�:#螖�� ������%��!�	��+6�P����Tb�Lp�3UbDUk����(��؅jљ�� ڴ�,#�����Pl7�s����@>�uѴ��S�vP:q�	Y!
Kŵh��JF�~���lI-y���Z�\~ ��`���!rI���E�n����({y���H������r��	é�d�����H\?-d,m��E���̏'Sv!��x��;x���g������"�d�T�	�TB��dܴ�+�������i��q��r�(�t8~�'����X�?munb ��򆣅,��q�\%ꊙ�R�4��(�ң�f������k6�\�Y�YA�-�y8+��l�lY�`[H=85H��|��^������빡I�֠2���=�M�ܦi���Κf�[ַ��m�1�0�J�=�r��!�	C���4�S�y.���Nȧ��z1G��37��4���#�G�����~Y�(s�Azx����UXM���Zm�+��v�}��ú��&1D7!�E�ɪ�ڐ��{��ۗU��[�*�=e0��,��'�tll3M�b5m[
��}��&�� HUO��Л�B��+��|w�D�<+%ݸ"c������H�3Tݜ?@�ei�aL	t'5ॵ�!���'P|m7�V�2�H�W,��}͝N\=���I���!,�,R�	�YL%"pb_Fy���{��{@�w���İ�LΚ:`�����x
j� �����BX�~_�O�
SZ)���+kmPF�R���)����Ȑ�ͺ&5�-$-jo�(��!��-�)�>�e-'�ث�h�0wj�Dc7y�ѭ��k,;�R���:C�}���d[�E�H%�C�'le>ؗ�=��N�6&$5�TVk�ݤQ�a�p6=4g�����N9��~�����9a��`�T&��'"��p��w����?vf�q�v9n���]�Z��sD
�|l�9�.E���G10ָ#�Q������l���urgl+~$N6��{��ѽ̸ٌ����}W�5�^��	,�0����#�7חO��PB��~{_2#v�L�{$�^g��cE�&�C��O����z�0Hw�H
'�����FA���\>����bή�_�f���7o�l��M��|��GGy	�&��3�$~�~W)����܉p{�n��R��:}7�Ik���f:t�-�ڗ�^�X|wI7h���QQ~<z��q�"����>�yή�=�Z����<��:�����8|ꆎ��8�,�` 9��l�.�����)ᦑ���n�d�;)�tҔO#?�� �@|��>�]�<���.F���}�l�*�V״�%e���C�0��x����"��!+����Z���1"��Р��d�^uR���\������8�!�G�II7#�����(��O5A���w!�^B&�c���E��38D���d�$�o^�X"�߭l����C_�⦹-3�_�)�i�jx����G���2<x�Î�j��sUQٰ�:璊: ,Ϳ��C��E���r|cj.?T�	�`?@]�Y�	�����?MbQ��|�D ,d�d�8��M��-�"J��ɳg��s+l      Q      x������ � �      S      x������ � �      U      x������ � �     