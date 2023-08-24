import React from "react";

class SearchBar extends React.Component{
    state = {
        search: "",
    }

    handleText = (e) => {
        if (e.key === "Enter"){
            this.props.searchMovie(this.state.search);
        }
    }

    handleTextButton = (e) => {
        this.props.searchMovie(this.state.search);
    }

    render() {
        const {search} = this.state;
        return(
            <section className="search-bar">
                <div className="container">
                    <div className="search-bar-content">
                        <form action="#">
                            <div class="input-group">
                                <input type="text" name="search" 
                                id="search" placeholder="Search Movie..."
                                value={search} 
                                onChange={(e) => {
                                    this.setState({search: e.target.value});
                                }} 
                                onKeyUp={this.handleText} />
                                <label for="search">
                                    <button type="button"
                                    onClick={this.handleTextButton}><i class="fas fa-search"></i></button>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="search-type">
                        <div className="radio-toggles">
                            <input type="radio" id="option-1" name="radio-options" />
                            <label for="option-1">All</label>
                            <input type="radio" id="option-2" name="radio-options" checked />
                            <label for="option-2">Movie</label>
                            <input type="radio" id="option-3" name="radio-options" />
                            <label for="option-3">Serials</label>
                            <div className="slide-item"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SearchBar;