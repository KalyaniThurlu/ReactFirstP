





export function FakestoreSearch(){
    return(
        <div>
            <form method="get" action="/results">
                <h2>Search</h2>
                <div className="input-group w-25">
                <input type="text" placeholder="Search Fakestore"  name="search" className="form-control"/>
                <button type="submit" className="btn btn-warning bi bi-search"></button>
                </div>
            </form>
        </div>
    )
}