import { useNavigate } from "react-router-dom";
import './Dashboard.css'

function Dashboard(){
    const products = [
        {
            name: "Textura",
            category: "Textile Management",
            description:
            "A web and mobile application for textile businesses, offering inventory tracking, order management, and customer engagement tools."
        },
        {
            name: "MediApp",
            category: "Healthcare",
            description:
            "A web and mobile healthcare platform for managing patient records, prescriptions, doctor appointments, virtual consultations, and medical history."
        },
        {
            name: "Vitayolkz App",
            category: "Poultry & Egg Delivery",
            description:
            "An application for ordering and delivering fresh eggs, including white eggs, brown eggs, jumbo eggs, and liquid egg products."
        },
    ];

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    const handleProducts = () => {
        window.open('https://hertzworkz.com/product', '_blank', 'noopener,noreferrer');
    }

    return (
        <div className="dashboard-container">
            <header className="navbar">
                <h2 className="brand">Hertzworkz</h2>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </header>
            <main className="dashboard-content">
                <h1>Welcome back 👋</h1>
                <p className="welcome-subtitle">Here’s a quick snapshot of products.</p>
                <section className="products-section">
                    <div className="products-header">
                        <h2>Our Products</h2>
                        <button className="products-btn" onClick={handleProducts}>
                        View All Products
                        </button>
                    </div>

                    <div className="products-grid">
                        {products.map((product) => (
                        <div className="product-card" key={product.name}>
                            <span className="product-tag">{product.category}</span>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Dashboard;