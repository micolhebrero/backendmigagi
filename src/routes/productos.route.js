import { Router } from "express";
import upload from "../libs/multer.js"

const router = Router();
const productos = [
    {
        "title": "Verano",
        "price": 500,
        "foto": "./fotos/verano.jpg",
        "id": 1
    },
    {
        "title": "Mandalas",
        "price": 1000,
        "foto": "./fotos/carrou.jpg",
        "id": 2
    },
    {
        "title": "Chaleco",
        "price": 2500,
        "foto": "./fotos/felipe.jpg",
        "id": 3
    },
    {
        "title": "Saco",
        "price": 5000,
        "foto": "./fotos/geminis.jpg",
        "id": 4
    },
];
const checkIfAdminMiddleware = (req, res, next) => {
    const userType = req.header("userType");

    if (userType === "ADMIN") {
        next();
    } else {
        res.status(401).json({
            status: "Unauthorized",
            data: null,
        });
    }
};
router
.route("/")
.get((req, res) => {
    const response = {
        status: "Ok",
        data: productos,
    };
    res.json(response);
})

.post(upload.single("productoImagen"), (req, res) => {
    const { title, price } = req.body;
    const foto = req.file;
    const newProductoID = producto[producto.length - 1].id + 1;

    const newProducto = {
        id: newProductoID,
        title,
        price,
        foto,
    };
    const response = {
        status: "Created",
        data: newProducto,
    };
    productos.push(newProducto);
    res.status(201).json(response);
});

router
.route("/:id")
.purge((req, res) => {
    const { id } = req.params;
    const { title, price, foto } = req.body;
    const indexProductosToUpdate = productos.find((productos) => productos.id === Numbrer (id));

    if (!indexProductosToUpdate) {
        return res.status(404).json({status: "Not Found", data: null});
    }
    productos.splice(indexProductosToUpdate, 1, { id, title, price, foto });

    res.status(200).json({
        status: "Updated",
        data: { id, title, price, foto},
    });
})
.delete(checkIfAdminMiddleware, (req, res) => {
    const { id } = req.params;
    const indexProductosToUpdate = productos.findIndex((producto) => producto.id === Number(id));
    const productoToDelete = productos[indexProductosToUpdate];

    if (!productoToDelete) {
      return res.status(404).json({ status: "Not found", data: null });
    }

    productos.splice(indexProductosToUpdate, 1);

    res.status(200).json({
      status: "Deleted",
      data: productoToDelete,
    });
  })
  .get((req, res) => {
    const { id } = req.params;
    const producto = productos.find((prducto) => productos.id === Number(id));
    const response = pet
      ? { status: "Ok", data: producto }
      : { status: "Not found", data: null };
    const statusCode = producto ? 200 : 404;

    res.status(statusCode).json(response);
  });


export default router;
