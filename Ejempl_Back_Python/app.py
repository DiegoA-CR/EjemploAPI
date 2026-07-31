from flask import Flask, jsonify, request;
from productos import productos;

app = Flask(__name__);


@app.route('/ping')
def ping():
    return jsonify({"message": "sucessfull"})

@app.route('/productos')
def getProductos():
    return jsonify(productos)

@app.route('/uno')
def getUno():
    return jsonify({"Products": productos, "message": "Lista de Productos"})

@app.route('/productos/<string:productos_name>')
def getproducto(productos_name):
    print(productos_name)
    return('resivido')

@app.route('/dos/<string:producto_nombre>')
def getDos(producto_nombre):
    productoEncontrado = [producto for producto in productos if producto['Nombre'] == producto_nombre]
    if(len(productoEncontrado)> 0):
        return jsonify({"Producto": productoEncontrado[0]})
    return jsonify({"message": "The product no exist"})
#actualizar lista de productos
@app.route('/productos', methods = ['POST'])
def agregaProducto():
 #print(request.json) verificar que si esta recibiendo datos json
 #return 'recibido'
    new_product = {
        "Nombre": request.json["Nombre"],
        "Precio": request.json["Precio"],
        "Cantidad": request.json["Cantidad"],
    }
    productos.append(new_product)
    return jsonify({"message": "El producto fue agragado exitosamente", "productos": productos})
# editar valores de objeto 
@app.route('/productos/<string:producto_nombre>', methods = ['PUT'])
def editarProducto(producto_nombre):
    buscaProducto = [producto for producto in productos if producto['Nombre'] == producto_nombre]
    if (len(buscaProducto) > 0):
        buscaProducto[0]["Nombre"] = request.json["Nombre"],
        buscaProducto[0]["Precio"] = request.json["Precio"],
        buscaProducto[0]["Cantidad"] = request.json["Cantidad"]
        return jsonify({
        "message": "Producto Actualizado",
        "producto": buscaProducto[0]
        })
    return jsonify({"message":"No se encuentra el producto"})

#----------------------------------------------
if __name__ == '__main__':
    app.run(debug=True, port=8000)

# guardar datos dentro de API
#postman
#insomnia
