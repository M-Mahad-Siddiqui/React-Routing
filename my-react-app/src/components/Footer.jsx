const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className= "footer">
            <p>&copy; {year} Your Website's Name</p>
        </footer>
    );
}

export default Footer;
