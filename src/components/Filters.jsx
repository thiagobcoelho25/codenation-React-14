import React from 'react';

class Filters extends React.Component {


	render() {
		const sortBy = this.props.sortBy;
		const orderBy = this.props.orderBy;

		return (<div className="container" data-testid="filters">
			<section className="filters">
				<div className="filters__search">
					<input type="text" className="filters__search__input" placeholder="Pesquisar"
						onChange={(e) => this.props.onFilterTextChange(e.target.value) } />
					<button className="filters__search__icon">
						<i className="fa fa-search" />
					</button>
				</div>

				<button
					className={`filters__item ${sortBy === "name" ? "is-selected" : ""}`}
					name="name"
					onClick={(e) => this.props.onSortByChange(e.target.name)}
				>
					Nome <i className={`fas fa-sort-${sortBy === "name" ? orderBy : "down"}`} 
					onClick={(e) => {
						e.stopPropagation()}} />
				</button>

				<button
					className={`filters__item ${sortBy === "country" ? "is-selected" : ""}`}
					name="country"
					onClick={(e) => this.props.onSortByChange(e.target.name)}
				>
					País <i className={`fas fa-sort-${sortBy === "country" ? orderBy : "down"}`}
					onClick={(e) => {e.stopPropagation()}} />
				</button>

				<button
					className={`filters__item ${sortBy === "company" ? "is-selected" : ""}`}
					name="company"
					onClick={(e) => this.props.onSortByChange(e.target.name)}
				>
					Empresa <i className={`fas fa-sort-${sortBy === "company" ? orderBy : "down"}`} 
					onClick={(e) => {e.stopPropagation()}} />
				</button>

				<button
					className={`filters__item ${sortBy === "department" ? "is-selected" : ""}`}
					name="department"
					onClick={(e) => this.props.onSortByChange(e.target.name)}
				>
					Departamento <i className={`fas fa-sort-${sortBy === "department" ? orderBy : "down"}`}
					onClick={(e) => {e.stopPropagation()}} />
				</button>

				<button
					className={`filters__item ${sortBy === "admissionDate" ? "is-selected" : ""}`}
					name="admissionDate"
					onClick={(e) => this.props.onSortByChange(e.target.name)}
				>
					Data de admissão <i className={`fas fa-sort-${sortBy === "admissionDate" ? orderBy : "down"}`}
					onClick={(e) => {e.stopPropagation()}} />
				</button>
				
			</section>
		</div>);
	}
}

export default Filters;
