console.log('this is experess js');

let blog = {
	id: '',
	title: '',
	author: '',
	userId: '',
	created_at: '',
	updated_at: ''
}


blog = [
{
	id: '1',
	title: 'hello',
	author: 'ram',
	userId: '1',
	created_at: '2020-11-11',
	updated_at: ''
}
{
	id: '2',
	title: 'hy',
	author: 'shyam',
	userId: '2',
	created_at: '2020-11-12',
	updated_at: ''
}
{
	id: '3',
	title: 'hey',
	author: 'hari',
	userId: '3',
	created_at: '2020-11-13',
	updated_at: ''
}
]
REST API
Routes	|	Request Method		|		Description  

/blog 			 GET 				(query get all blogs)
/blog    		 POST				(store a blog)
/blog/:id       PUT/PATCH           (update a blog)
/blog/:id        DELETE				(del a blog with id)
/blog/:id        GET      			(get a blog by id)
