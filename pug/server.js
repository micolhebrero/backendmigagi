app.get("/productos", async (req, res) => {
    try {
      const productos = await productosContenedor.getAll();
      res.render("index", {
        productos: productos, pageTitle: "Desafio 05 - Pug"
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