from flask import Flask, jsonify;
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

@app.route('/productos', methods = ['POST'])
def addProducto():
    return 'resibido'

if __name__ == '__main__':
    app.run(debug=True, port=8000)

# guardar datos dentro de API
#postman
#insomnia
