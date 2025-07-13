
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <Link style={styles.link} to="/">🛍️ Shop</Link>
            <Link style={styles.link} to="/cart">🛒 Cart</Link>
            <Link style={styles.link} to="/orders">📦 Orders</Link>
            <Link style={styles.link} to="/login">🔐 Login</Link>
            <Link style={styles.link} to="/register">📝 Register</Link>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '1rem',
        backgroundColor: '#f4f4f4',
        borderBottom: '1px solid #ddd',
    },
    link: {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: '#333',
    },
};

export default Navbar;
