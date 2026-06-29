from flask import Flask, jsonify;
from productos import productos;

app = Flask(__name__);


@app.route('/ping')
def ping():
    return jsonify({"message": "sucessfull"})

@app.route('/productos')
def getProductos():
    return jsonify(productos)

if __name__ == '__main__':
    app.run(debug=True, port=8000)

