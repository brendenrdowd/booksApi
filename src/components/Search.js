import React from 'react'

export default function Search(props) {
  return (
    <form onSubmit={e=>props.searchHandler(e)}>
      <div className="input-group">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search"
          value={props.search.q}
          onChange={e => props.updateSearch('q',e.target.value)} 
        />
      </div>
      <div className="input-group">
        <label htmlFor="search">Print Type: </label>
        <select name="print" onChange={e=>props.updateSearch('print',e.target.value)}>
          <option value="all">all</option>
          <option value="books">Book</option>
          <option value="magazines">Magazine</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="search">Book Type: </label>
        <select name="type" defaultValue={props.search.type} onChange={e=>props.updateSearch('type',e.target.value)}>
            <option value="ebooks">ebooks</option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="full">full</option>
            <option value="paid-ebooks">paid-ebooks</option>
            <option value="partial">partial</option>
        </select>
      </div >
      <input type="submit" value="Search" />
    </form >
  )
}
