import { useNavigate } from "react-router-dom";
import './Dashboard.css'

function Dashboard(){
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
                <p className="welcome-subtitle">Here's your dashboard overview.</p>
                <section className="dashboard-section">
                <div className="card">
                    <h3>Products</h3>
                    <p>Browse the official Hertzworkz product catalog.</p>
                    <button className="products-btn" onClick={handleProducts}>
                    View Products
                    </button>
                </div>
                </section>
            </main>
        </div>
    )
}

export default Dashboard;