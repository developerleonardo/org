import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage: "url(/img/Footer.webp)" }}>
            <div className="redes">
                <a href='https://github.com/developerleonardo'>
                    <img src="/img/github_logo_icon.png" alt="Github" />
                </a>
                <a href='https://www.linkedin.com/in/leonardo-salazar-serna/'>
                    <img src="/img/linkedin_icon.png" alt="Linkedin" />
                </a>
            </div>
            <div className='logo_container'>
                <img src='/img/Logo.png' alt='org' />
            </div>
            <strong>Desarrollado por Leonardo</strong>
        </footer>
    );
};

export { Footer }