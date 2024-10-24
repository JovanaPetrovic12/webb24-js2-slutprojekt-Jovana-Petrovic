export function Navbar ({setChangePage, cartItems}) {
//event
    function handleClick(page){
        setChangePage(page);
    }

    return (
        <nav>
            <h1>Pretty Paws</h1>
            <button onClick={() => handleClick ("products")}>Produkter</button>
            <button onClick={() => handleClick ("cart")}>Kundvagn ({cartItems.length})</button>
        </nav>
    )
}