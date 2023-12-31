PGDMP         ;        	    	    {         	   Bikestore    15.4    15.3 ]    \           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ]           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ^           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            _           1262    33127 	   Bikestore    DATABASE     �   CREATE DATABASE "Bikestore" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
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
       public          postgres    false    214            `           0    0    carrito_id_carrito_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.carrito_id_carrito_seq OWNED BY public.carrito.id_carrito;
          public          postgres    false    215            �            1259    33132    carrito_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.carrito_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.carrito_id_producto_seq;
       public          postgres    false    214            a           0    0    carrito_id_producto_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.carrito_id_producto_seq OWNED BY public.carrito.id_producto;
          public          postgres    false    216            �            1259    33133    carrito_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.carrito_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.carrito_id_usuario_seq;
       public          postgres    false    214            b           0    0    carrito_id_usuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.carrito_id_usuario_seq OWNED BY public.carrito.id_usuario;
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
       public          postgres    false    218            c           0    0    clientes_id_listafavoritos_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.clientes_id_listafavoritos_seq OWNED BY public.clientes.id_listafavoritos;
          public          postgres    false    219            �            1259    33140    clientes_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.clientes_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.clientes_id_usuario_seq;
       public          postgres    false    218            d           0    0    clientes_id_usuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.clientes_id_usuario_seq OWNED BY public.clientes.id_usuario;
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
       public          postgres    false    221            e           0    0    compras_id_compra_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.compras_id_compra_seq OWNED BY public.compras.id_compra;
          public          postgres    false    222            �            1259    33145    compras_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.compras_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.compras_id_producto_seq;
       public          postgres    false    221            f           0    0    compras_id_producto_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.compras_id_producto_seq OWNED BY public.compras.id_producto;
          public          postgres    false    223            �            1259    33146    compras_id_proveedor_seq    SEQUENCE     �   CREATE SEQUENCE public.compras_id_proveedor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.compras_id_proveedor_seq;
       public          postgres    false    221            g           0    0    compras_id_proveedor_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.compras_id_proveedor_seq OWNED BY public.compras.id_proveedor;
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
       public          postgres    false    225            h           0    0 $   listafavoritos_id_listafavoritos_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.listafavoritos_id_listafavoritos_seq OWNED BY public.listafavoritos.id_listafavoritos;
          public          postgres    false    226            �            1259    33151 	   productos    TABLE     �  CREATE TABLE public.productos (
    id_producto integer NOT NULL,
    nombre_producto character varying(100) NOT NULL,
    descripcion character varying(900) NOT NULL,
    precio integer NOT NULL,
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
       public          postgres    false    227            i           0    0    productos_id_producto_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.productos_id_producto_seq OWNED BY public.productos.id_producto;
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
       public          postgres    false    229            j           0    0    proveedores_id_proveedor_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.proveedores_id_proveedor_seq OWNED BY public.proveedores.id_proveedor;
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
       public          postgres    false    231            k           0    0    stock_id_productos_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.stock_id_productos_seq OWNED BY public.stock.id_productos;
          public          postgres    false    232            �            1259    33167    ventas    TABLE     G  CREATE TABLE public.ventas (
    id_venta integer NOT NULL,
    id_producto integer NOT NULL,
    id_cliente integer NOT NULL,
    estado_v character varying(255),
    fecha_v date DEFAULT now() NOT NULL,
    cantidad bigint NOT NULL,
    costo integer NOT NULL,
    costo_unitario integer,
    forma_pago character varying
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
       public          postgres    false    233            l           0    0    ventas_id_cliente_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.ventas_id_cliente_seq OWNED BY public.ventas.id_cliente;
          public          postgres    false    234            �            1259    33171    ventas_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.ventas_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.ventas_id_producto_seq;
       public          postgres    false    233            m           0    0    ventas_id_producto_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.ventas_id_producto_seq OWNED BY public.ventas.id_producto;
          public          postgres    false    235            �            1259    33172    ventas_id_venta_seq    SEQUENCE     �   CREATE SEQUENCE public.ventas_id_venta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.ventas_id_venta_seq;
       public          postgres    false    233            n           0    0    ventas_id_venta_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.ventas_id_venta_seq OWNED BY public.ventas.id_venta;
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
       public          postgres    false    234    233            C          0    33128    carrito 
   TABLE DATA           M   COPY public.carrito (id_carrito, fecha, id_usuario, id_producto) FROM stdin;
    public          postgres    false    214   n       G          0    33134    clientes 
   TABLE DATA           �   COPY public.clientes (id_usuario, nombre, apellido, correo_electronico, direccion, "hash_contraseña", numero_telefono, documento_identidad, edad, id_listafavoritos, rol) FROM stdin;
    public          postgres    false    218   +n       J          0    33141    compras 
   TABLE DATA           c   COPY public.compras (id_compra, id_producto, id_proveedor, costo_t, cantidad, fecha_c) FROM stdin;
    public          postgres    false    221   �o       N          0    33147    listafavoritos 
   TABLE DATA           ;   COPY public.listafavoritos (id_listafavoritos) FROM stdin;
    public          postgres    false    225   �o       P          0    33151 	   productos 
   TABLE DATA           �   COPY public.productos (id_producto, nombre_producto, descripcion, precio, stock, categoria, tipo, marca, color, img_producto) FROM stdin;
    public          postgres    false    227   �o       R          0    33157    proveedores 
   TABLE DATA           G   COPY public.proveedores (id_proveedor, nombre_p, correo_p) FROM stdin;
    public          postgres    false    229    |       T          0    33163    stock 
   TABLE DATA           q   COPY public.stock (id_productos, fecha_c_i, cantidad_i, cantidad_v, fecha_u_v, cantidad_c, fecha_uc) FROM stdin;
    public          postgres    false    231   =|       V          0    33167    ventas 
   TABLE DATA           �   COPY public.ventas (id_venta, id_producto, id_cliente, estado_v, fecha_v, cantidad, costo, costo_unitario, forma_pago) FROM stdin;
    public          postgres    false    233   Z|       o           0    0    carrito_id_carrito_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.carrito_id_carrito_seq', 1, false);
          public          postgres    false    215            p           0    0    carrito_id_producto_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.carrito_id_producto_seq', 1, false);
          public          postgres    false    216            q           0    0    carrito_id_usuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.carrito_id_usuario_seq', 1, false);
          public          postgres    false    217            r           0    0    clientes_id_listafavoritos_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.clientes_id_listafavoritos_seq', 7, true);
          public          postgres    false    219            s           0    0    clientes_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.clientes_id_usuario_seq', 12, true);
          public          postgres    false    220            t           0    0    compras_id_compra_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.compras_id_compra_seq', 1, false);
          public          postgres    false    222            u           0    0    compras_id_producto_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.compras_id_producto_seq', 1, false);
          public          postgres    false    223            v           0    0    compras_id_proveedor_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.compras_id_proveedor_seq', 1, false);
          public          postgres    false    224            w           0    0 $   listafavoritos_id_listafavoritos_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.listafavoritos_id_listafavoritos_seq', 1, false);
          public          postgres    false    226            x           0    0    productos_id_producto_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.productos_id_producto_seq', 33, true);
          public          postgres    false    228            y           0    0    proveedores_id_proveedor_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.proveedores_id_proveedor_seq', 1, false);
          public          postgres    false    230            z           0    0    stock_id_productos_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.stock_id_productos_seq', 1, false);
          public          postgres    false    232            {           0    0    ventas_id_cliente_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.ventas_id_cliente_seq', 1, false);
          public          postgres    false    234            |           0    0    ventas_id_producto_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.ventas_id_producto_seq', 1, false);
          public          postgres    false    235            }           0    0    ventas_id_venta_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.ventas_id_venta_seq', 8, true);
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
       public          postgres    false    3241    227    214            �           2606    33209    compras fk_compras_producto    FK CONSTRAINT     �   ALTER TABLE ONLY public.compras
    ADD CONSTRAINT fk_compras_producto FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);
 E   ALTER TABLE ONLY public.compras DROP CONSTRAINT fk_compras_producto;
       public          postgres    false    227    221    3241            �           2606    33214    compras fk_compras_proveedor    FK CONSTRAINT     �   ALTER TABLE ONLY public.compras
    ADD CONSTRAINT fk_compras_proveedor FOREIGN KEY (id_proveedor) REFERENCES public.proveedores(id_proveedor);
 F   ALTER TABLE ONLY public.compras DROP CONSTRAINT fk_compras_proveedor;
       public          postgres    false    221    229    3243            �           2606    33219    ventas fk_ventas_cliente    FK CONSTRAINT     �   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT fk_ventas_cliente FOREIGN KEY (id_cliente) REFERENCES public.clientes(id_usuario);
 B   ALTER TABLE ONLY public.ventas DROP CONSTRAINT fk_ventas_cliente;
       public          postgres    false    233    218    3235            �           2606    33224    ventas fk_ventas_producto    FK CONSTRAINT     �   ALTER TABLE ONLY public.ventas
    ADD CONSTRAINT fk_ventas_producto FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);
 C   ALTER TABLE ONLY public.ventas DROP CONSTRAINT fk_ventas_producto;
       public          postgres    false    233    227    3241            C      x������ � �      G   X  x����n�@���)L�:wf�۵�V�P@m�͈S
��M��}�BRc.���s��c��-������l%k(E\�5�֩�&�x�B,�B��8 e\�v	0�:�4�뀄�F{ց"p 
�K��7�J(�t鲋�k�VNE7��U�,�ǃUH�xa?��)��C�3�t-�z��~4��P�Uu�5����V�*�I.��g	^�tn8��x�:�gy"SOh�_HzG�}�&�TY��Q���h����gy6�t��}�ق�D�'��@|�����v��i���6�,�嘆�^R�������#�iE���<�DC�*��dM9h2��lf��̦��E�אA      J      x������ � �      N      x������ � �      P   C  x��Y�r�F]�_ѳ'h���lR��ĮH���cWʛF�A��� ��O�2�,R��&U�͹� E�r汜��bP��{�/�)�D);ξ��ج�+U����k��[�|7���^���J֝dY�<�L֬lZ���_Z�2��L����T���S��c��ZV[r�J�$-5�����e��#-��<��K�Y.[���W�����Y�6Ljl�(�V�6�=�4\I�5l��V+y+�زn�1W�R�j�[��&�_�mǫLm�;��E�Sjs���g��4�{�Z�M;a˞���Fnmv0�~MCךW�5�f��J�MKG�����K|�!t��f���B���hU�)�]�����=��ӡ�^�kB	[������-gw��F%~���5��ʵ�����F[�H�n�ͬ�ETU|�j�NF^�ҟ�����M��J<�7e���y�Y���n�9a�G�;���8��(���G�m�MGg/�_�_�W3�<�^����l�-[�����["b�#�g��g��B���O�k���/�H�{�se�#����1@�5B[��~�I�+L���ݪ�à�2~�h��	 �r�#:|X���K���eKt';>a���6��1����艎^l����n��
�LC9R�_���	{a���������*7̣��[J;:јݘ�'C�ܐ{-�Jv��a̍7�t�f�J~h�Ai���p��dUOl4Idr��{8� �5�h��i�,=��/
�����|�[�MBhBxl!���#JwMFq�p=�Ӂz��m�PW��l4<�!�(+{9^kywB�,s����xQ℉���A�g��#?�l�������ׯV��r�@շ׋�v��51�[�m{@ݷ�.sv�o�b�_�]���?$�	w��y0u<	��4w�,M��s��&�{7�MO����Z^_�4p����T6?�1N���P0k����MA�Pd*N\�b�U}@e�4��03��LUq����<U�-cr�-cP�4��ר<�a3@A��x$6ӓ���y#s�l0���%m�^m�|��� |�WT�����i>����
$�iР����vUtGB�B~]6����E����-oၭ��) [��D {nJ��v�ڴ���Mpf
�n%vܣ��xoR}�ع{՛��x��~L�'EN�y	!I�S�pRQ����'��ҩk��i3evq��|E���r��j������R��_�׍HB���?~_l�7��+�����(��Q #�X��V�ę��Y���%Y��uM>dN���eg��N']G&���V����'_���\+��I�%XxkB�?S&Cb��{lgP&���a�h��v2��d >KY�[���Bh�d���g���=X��;u�4�w|t>[,��b��.>���'^,�<s\/˝��r���<�
�M�H���j�ޜ��]/V�s�����[�$��Bf�RJț\:��A]�ʑ,;ث��@�_���8'!&�h��l�3Ѩ�J���%>��~H7���.���� 4���|�'���ԝ��R/t�%�4���&��oz�����@��Vg���ʹdk>�Q�:�/��+���T�v%�/���ʨa�q�7<S�;DI��귌X��]��!j��Mm2�:~\�1�9�/p i
dP_Mk�9�^�ǟ�ݡxT\�f��dV�ǌ@FȖ���XK�����1r͠�"'���W��|���"�W�oގ��O�^�a��&�H�0��N&�H����B��v#^tdL��x2eی'K����x~�^�\o�{,�LFK�="��@�L��1��ޛ�.�x-����I��Gm/jZ��V�v`�m)S8:�B�Y��2�v��"����K�Y��,=*]V�la[��ο�f��՛�Ԩ����B[�J#͖������^���ɕ�_H���~4p_�@�Q�x��t��f�����|g�e}+�޳�gg�B>���5l�%'�xZ � OE��};!��N��� ��H&�<�r$��^fz�H�e	����I�a^"�VL5�m�z%��[�������t=����\C�n��n_:�lnIT�h����ǲ|_��α1�4q�մm���e��G�U=m�kRe�9l�[�����U�mcy�C��#M�PYs� ���U�1���`CD }8���p@����\?iK-#Ω���:5l�z̆�����/B8kY��N���A�ľ����s��,%|��/�d��)aG�45�ow����8j� ��P�BK��}_�O�S?��\����6�"+)n�9�F��c��"f=��(����wJ��P��ꈀ�f�Ͳ���UW��`�[1I:�����
۞5��t�E�]���>��̯-�
k$��!��2�K͞jw'D�@*�5F�h��ݰ�.��;���!?ި�n�'^^L��ƾpx �Le�y"�8rx���?~�s�`FGj�ֆ;;����u�<G��M���uS�R�y`���x;B�	��*9�F�]['wU���GzdSi�7��ˌ����]!�w9�P�%�����Z�j�d=��9ys��������%3������G���u����(�lY�O��'J�z�0Hw�H
'�����FA����\>���bή�_�f۟f��7�K6Ǧ�a�����LX��`�[:z��u�` ��u2��ށ��T��f�ڹ#��V�^K7��)>�]�z;agTyOGlzgL{�P}����9�z� �j1���7�y%h]����Wq��qY���n�t��]8�@/�����F��r��a� �IS>��ܓ^<��_@����|v���-�$�ݖ�>S��{kݒ���!X�Gj�M�j{p�w�����[Z����!e��������tR���̠�K��J8�zG�FIw�]��j��� ���.��K�����4t��q� � ������ Dd���M��nh�tCl47\��J7�4}������66Tc�x�Q!�u�*��Q\R�r���`��jjѫ�~_o�H�O@�n��&��ˣ�-��ȏȧO �4mE�~Kz�������^�L#7qC�H�h���'Ϟ=��_��      R      x������ � �      T      x������ � �      V   4   x���44�44���4202�54�5��4�4�0 8횖�\�Y������ �
�     