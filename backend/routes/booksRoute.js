const router = require('express').Router();
const bookModel = require('../models/booksModel');


//post request
router.post('/upload',async(req,res)=>{
	try {
		const data = req.body;
		const newbook = new bookModel(data);
		await newbook.save().then(()=>{
			var redir = { redirect: "/" };
			return res.json(redir);
		});
		
 	}catch(error){
		var redir = { redirect: '/uploadbook'};
        return res.json(redir);
	}
})



router.get('/display', (req,res) => {
	let books;
	try{
		bookModel.find().then(foundbooks=>res.json(foundbooks));
	
	}
	catch(error){
	console.log(error);
	}
})

router.get('/display/:id',async(req,res) =>{
	let books;
	const id=req.params.id;
	try{
		bookModel.findById(id).then(foundbook=>res.json(foundbook));
	
	}
	catch(error){
	console.log(error);
	}
})

//update books by id

router.put('/update/:id', async(req,res)=>{
	const id = req.params.id;
	const {name,edition} = req.body;
	let book;
	
	//const book = req.body.name;
	try{
		book=await bookModel.findByIdAndUpdate(id,{name,edition});
		res.status(200).json({book});
	//saving to database
	await book.save().then(()=> {res.json({message:"data updated"});
	});
	}
	catch(error){
		console.log(error);
	}
})

//delete book by id
/*
router.delete('/delete/:id', async(req,res)=>{
	const id = req.params.id;
	try{
		await bookModel.findByIdAndDelete(id).then(()=> {
		var redir = { redirect: "/" };
			return res.json(redir);		})
	}catch(error)
	{
		console.log(error);
	}
})
*/

router.get('/search', async (req, res, next) => {
  // We look for a query parameter "search"
  const { search } = req.query;
  let posts;
  if (search) { // If search exists, the user typed in the search bar
    posts = await Post.aggregate(
      [
        {
          '$search': {
            'index': 'title_autocomplete', 
            'autocomplete': {
              'query': search, // noticed we assign a dynamic value to "query"
              'path': 'title',
            }
          }
        }, {
          '$limit': 5
        }, {
          '$project': {
            '_id': 1, 
            'name': 1, 
            'author': 1, 
            'edition': 1,
          }
        }
      ]
    );
  } else { // The search is empty so the value of "search" is undefined
    posts = await Post.find();
  }

  return res.status(200).json({
    statusCode: 200,
    message: 'Fetched posts',
    data: { posts },
  });
});



module.exports = router;