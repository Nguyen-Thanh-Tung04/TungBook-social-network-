import { Link, usePage } from "@inertiajs/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main({ children }) {
    const { flash } = usePage().props;

    return (
        <div>
            {/* Header */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" href="/">My App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/users">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Flash Message */}
            {flash.msg && (
                <div className="alert alert-success text-center my-3">{flash.msg}</div>
            )}

            {/* Main Content */}
            <div className="container my-4">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h5 className="card-title">Menu</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <Link href="/" className="text-decoration-none">Home</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/about" className="text-decoration-none">About</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/users" className="text-decoration-none">Users</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/contact" className="text-decoration-none">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Page Content */}
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                <p className="mb-0">© 2025 My App.</p>
            </footer>
        </div>
    );
}
