import React from 'react';
import Header from './header';

function App() {
    const [products, setProducts] = React.useState([]);



    fetch('http://coderbank.com/api/transfer', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ to: '123433434433', amount: 10000 }),
    })



    React.useEffect(() => {
        fetch('http://localhost:4000/api/products', {
            headers: {
                Authorization: 'Bearer token',
            },
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    function handleSubmit() {
        fetch('http://localhost:4000/api/products', {
            method: 'POST',
            body: JSON.stringify({ name: 'Iphone' }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    function handleUpdate() {
        fetch(`http://localhost:4000/api/products/{123}`, {
            method: 'PUT',
            body: JSON.stringify({ name: 'Iphone' }),
        });
    }

    return (
        <>
            <div className="min-h-screen bg-orange-50">
                <Header />
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <button
                        onClick={handleSubmit}
                        className="block mb-6 ml-auto px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                        Create Product
                    </button>
                    <button
                        onClick={handleUpdate}
                        className="block mb-6 ml-auto px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                        Update Product
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg border border-orange-200 hover:shadow-md transition-shadow duration-300 flex flex-col h-[500px]">
                                <div className="relative h-64 p-4">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-contain rounded-t-lg"
                                    />
                                    <div className="absolute bottom-2 left-4 right-4 flex justify-between items-center">
                                        <span className="bg-white px-3 py-1 rounded-full text-sm text-orange-600 border border-orange-200 shadow-sm">
                                            {product.category}
                                        </span>
                                        <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1 border border-orange-200 shadow-sm">
                                            <span className="text-sm text-orange-600">
                                                ★ {product.rating.rate}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 flex-grow">
                                    <h3 className="text-lg font-medium text-orange-900 mb-2 line-clamp-2">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-orange-600 mb-2 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <p className="text-lg font-semibold text-orange-900">
                                        ${product.price}
                                    </p>
                                </div>
                                <div className="p-4 border-t border-orange-100 mt-auto">
                                    <button className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
