import { Heart, ShoppingCart } from 'lucide-react';

const Header = () => {
    return (
        <div>
            {' '}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-orange-600">Cors Store</h1>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-orange-50 rounded-full">
                            <Heart className="w-6 h-6 text-orange-500" />
                        </button>
                        <button className="p-2 hover:bg-orange-50 rounded-full">
                            <ShoppingCart className="w-6 h-6 text-orange-500" />
                        </button>
                    </div>
                </div>
            </nav>
            <div className="bg-gradient-to-r from-red-100 to-orange-50 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-orange-700 mb-4">New Arrivals</h2>
                    <p className="text-orange-600 mb-8">Discover our latest collection</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
