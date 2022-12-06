const productos = await productosContenedor.getAll();
res.render("desafio05", {
  layout: "index",
  pageTitle: "Desafio 05 - Handlebars",
  productos: productos,
});
} catch (error) {
console.log(error);
}
});
//POST
app.post("/productos", async (req, res) => {
try {
const producto = req.body;
await productosContenedor.save(producto);
res.redirect("/productos");
} catch (error) {
console.log(error);
}
});


let PORT = 8080;
const server = app.listen(PORT, () => console.log("Escuchando en " + PORT));