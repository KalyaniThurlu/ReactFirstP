

export function Search(){
    return(
        <div>
            <form method="get">
                <h2>Search</h2>
                <div className="input-group w-25">
                <input type="text" placeholder="Search Fakestore"  name="search" className="form-control"/>
                <button formAction="/results" type="submit" className="btn btn-warning bi bi-search"></button>
                <button formAction="/lucky" type="submit" className="btn btn-danger bi bi-search-heart"></button>
                </div>
            </form>
        </div>
    )
}
