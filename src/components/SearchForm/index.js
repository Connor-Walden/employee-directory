function SearchForm(props) {
  
  return (
    <form>
      <div className="form-group">
        <label htmlFor="input">
          Refine Search
        </label>
        
        <input 
          autoComplete="off" 
          type="text" 
          className="form-control" 
          id="input" 
          aria-describedby="userInput" 
          placeholder="Enter Search Term" 
          value={props.userInput} 
          onChange={props.handleInputChange} 
        />
      </div>
    </form>
  );
}

export default SearchForm;