function Header ({ title }) {
    return (
        <div className="bg-gray-200 p-16">
            <h1 className="text-4xl">
                {title}
            </h1>
        </div>
    );
}

export default Header;